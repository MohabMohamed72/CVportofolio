import assert from 'node:assert/strict'
import { test } from 'node:test'
import { validateContact, contactWhatsApp, type ContactErrors } from '../shared/contact.ts'
import { contactEmail } from '../server/utils/contactEmail.ts'

const valid = { name:' Mohab <test> ', email:' visitor@example.com ', message:'Hello & <script>alert(1)</script>\nمرحبا', subject:'Product & UI', phone:'+20 100 759 9123', website:'' }
test('required fields, formats and length limits', () => {
  assert.deepEqual(Object.keys(validateContact({}).errors), ['name','email','message'])
  assert.equal(Object.keys(validateContact(valid).errors).length, 0)
  assert.equal(validateContact(valid).values.name, 'Mohab <test>')
  for (const [key, value] of [['name','x'.repeat(101)], ['email','bad@address'], ['message','x'.repeat(5001)], ['subject','Injected\r\nHeader'], ['phone','not a number']]) assert.ok(validateContact({...valid,[key!]:value}).errors[key as keyof ContactErrors])
})
test('email HTML is escaped and text preserves user content', () => {
  const mail = contactEmail(validateContact(valid).values)
  assert.ok(!mail.html.includes('<script>'))
  assert.ok(mail.html.includes('&lt;script&gt;'))
  assert.ok(mail.html.includes('Hello &amp;'))
  assert.ok(mail.text.includes('مرحبا'))
  assert.equal(mail.subject,'Portfolio Contact — Product & UI')
})
test('WhatsApp target and Unicode/punctuation round trip', () => {
  const url = new URL(contactWhatsApp(validateContact(valid).values))
  assert.equal(url.origin+url.pathname,'https://wa.me/201007599123')
  assert.ok(url.searchParams.get('text')?.includes('Subject:\nProduct & UI'))
  assert.ok(url.searchParams.get('text')?.includes('مرحبا'))
  assert.ok(url.searchParams.get('text')?.includes('Phone:\n+20 100 759 9123'))
})
