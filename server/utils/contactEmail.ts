import type { ContactFields } from '../../shared/contact.ts'
export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]!))
}
export function contactEmail(values: ContactFields) {
  const entries = [['Name', values.name], ['Email', values.email], ['Phone', values.phone || 'Not provided'], ['Subject', values.subject || 'Portfolio inquiry'], ['Message', values.message]]
  return {
    subject: 'Portfolio Contact — ' + (values.subject || values.name),
    text: 'New Portfolio Message\n\n' + entries.map(([label, value]) => label + '\n' + value).join('\n\n'),
    html: '<!doctype html><html><body style="font-family:Arial,sans-serif;background:#f2efe6;color:#171a18;padding:32px"><h1 style="font-size:24px">New Portfolio Message</h1>' + entries.map(([label, value]) => '<h2 style="font-size:14px;margin-top:24px">' + label + '</h2><p style="white-space:pre-wrap;line-height:1.6">' + escapeHtml(value!) + '</p>').join('') + '</body></html>',
  }
}
