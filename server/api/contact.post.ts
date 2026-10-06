import { Resend } from 'resend'
import { validateContact } from '../../shared/contact.ts'
import { contactEmail } from '../utils/contactEmail.ts'

// Best-effort per-instance limiter; use platform WAF/rate limits in production too.
const attempts = new Map<string, { count: number; expires: number }>()
export default defineEventHandler(async event => {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  const origin = getHeader(event, 'origin')
  if (origin && origin !== getRequestURL(event).origin) throw createError({ statusCode: 403, statusMessage: 'Request not allowed' })
  if (!(getHeader(event, 'content-type') || '').startsWith('application/json')) throw createError({ statusCode: 415, statusMessage: 'JSON required' })
  if (Number(getHeader(event, 'content-length') || 0) > 32768) throw createError({ statusCode: 413, statusMessage: 'Message too large' })
  const raw = await readRawBody(event)
  if (!raw || Buffer.byteLength(raw) > 32768) throw createError({ statusCode: 413, statusMessage: 'Message too large' })
  let input: unknown
  try { input = JSON.parse(raw) } catch { throw createError({ statusCode: 400, statusMessage: 'Invalid payload' }) }
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw createError({ statusCode: 400, statusMessage: 'Invalid payload' })
  const { values, errors } = validateContact(input)
  if (values.website) return { ok: true } // No email is sent for honeypot submissions.
  const now = Date.now()
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key)
  const ip = getRequestIP(event) || 'unknown'
  const current = attempts.get(ip) || { count: 0, expires: now + 60000 }
  if (current.count >= 5) { setResponseHeader(event, 'Retry-After', 60); throw createError({ statusCode: 429, statusMessage: 'Please wait a minute before trying again' }) }
  current.count++; attempts.set(ip, current)
  if (Object.keys(errors).length) throw createError({ statusCode: 400, statusMessage: 'Check the highlighted fields', data: { errors } })
  const config = useRuntimeConfig()
  const apiKey = process.env.RESEND_API_KEY || config.resendApiKey
  const from = process.env.CONTACT_FROM || config.contactFrom
  const to = process.env.CONTACT_EMAIL || config.contactEmail
  if (!apiKey || !from) throw createError({ statusCode: 503, statusMessage: 'Email service is unavailable. Please use WhatsApp.' })
  try {
    const { error, data } = await new Resend(apiKey).emails.send({ from, to, replyTo: values.email, ...contactEmail(values) })
    if (error || !data?.id) throw new Error('Provider rejected the message')
  } catch {
    // Never return provider errors, credentials, or visitor data to the browser.
    throw createError({ statusCode: 502, statusMessage: 'Unable to send your message. Please try again or use WhatsApp.' })
  }
  return { ok: true }
})
