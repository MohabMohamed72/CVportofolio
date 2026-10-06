export type ContactFields = { name: string; email: string; subject: string; phone: string; message: string; website: string }
export type ContactErrors = Partial<Record<keyof ContactFields, string>>
export function validateContact(input: unknown) {
  const source = input && typeof input === 'object' && !Array.isArray(input) ? input as Record<string, unknown> : {}
  const values = Object.fromEntries(['name', 'email', 'subject', 'phone', 'message', 'website'].map(key => [key, typeof source[key] === 'string' ? source[key].trim() : ''])) as ContactFields
  const errors: ContactErrors = {}
  if (!values.name) errors.name = 'Please enter your name.'
  else if (values.name.length > 100 || /[\r\n\x00-\x1f]/.test(values.name)) errors.name = 'Use a name of up to 100 characters.'
  if (!values.email || values.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.message) errors.message = 'Please enter a message.'
  else if (values.message.length > 5000) errors.message = 'Keep your message within 5,000 characters.'
  if (values.subject.length > 150 || /[\r\n\x00-\x1f]/.test(values.subject)) errors.subject = 'Use a subject of up to 150 characters on one line.'
  if (values.phone.length > 40 || (values.phone && !/^[+\d\s().-]+$/.test(values.phone))) errors.phone = 'Please enter a valid phone number.'
  return { values, errors }
}
export function contactWhatsApp(values: ContactFields) {
  const message = `Hello Mohab,\n\nMy name is ${values.name}.\n\nSubject:\n${values.subject || 'Portfolio inquiry'}\n\nMessage:\n${values.message}\n\nEmail:\n${values.email}\n\nPhone:\n${values.phone || 'Not provided'}`
  return 'https://wa.me/201007599123?text=' + encodeURIComponent(message)
}
