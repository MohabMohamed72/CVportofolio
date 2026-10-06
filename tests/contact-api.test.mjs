import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createServer } from 'node:http'
import * as h3 from 'h3'
Object.assign(globalThis, h3)
const config = { resendApiKey:'re_local_test_only', contactFrom:'onboarding@resend.dev', contactEmail:'mohabmohamedd772@gmail.com' }
globalThis.useRuntimeConfig = () => config
const { default: handler } = await import('../server/api/contact.post.ts')
const app = h3.createApp()
app.use('/api/contact',handler)
const server = createServer(h3.toNodeListener(app))
await new Promise(resolve => server.listen(0,'127.0.0.1',resolve))
const base = 'http://127.0.0.1:'+server.address().port
const nativeFetch = globalThis.fetch
let emails = [], providerFails = false
globalThis.fetch = async (url,options) => {
  if (String(url).startsWith('https://api.resend.com/')) {
    emails.push(JSON.parse(options.body))
    return new Response(JSON.stringify(providerFails ? {message:'provider failure',name:'validation_error'} : {id:'mock-delivery-id'}),{status:providerFails ? 400 : 200,headers:{'content-type':'application/json'}})
  }
  return nativeFetch(url,options)
}
const valid = {name:'Test Visitor',email:'visitor@example.com',subject:'API Test',phone:'',message:'<script>bad</script> & hello',website:''}
const post = (body,headers={}) => nativeFetch(base+'/api/contact',{method:'POST',headers:{'content-type':'application/json',...headers},body:JSON.stringify(body)})
test('server validation, honeypot, provider success/failure, missing config and rate limit',async () => {
  try {
    let response = await post({}); assert.equal(response.status,400); assert.ok((await response.json()).data.errors.email)
    response = await post({...valid,website:'bot'}); assert.equal(response.status,200); assert.equal(emails.length,0)
    response = await post(valid,{origin:'https://untrusted.example'}); assert.equal(response.status,403)
    response = await post(valid); assert.equal(response.status,200); assert.equal(emails.length,1)
    assert.equal(emails[0].reply_to,'visitor@example.com'); assert.equal(emails[0].to,'mohabmohamedd772@gmail.com'); assert.ok(!emails[0].html.includes('<script>'))
    providerFails = true; response = await post(valid); assert.equal(response.status,502)
    assert.ok(!(await response.text()).includes('re_local_test_only'))
    config.resendApiKey=''; response=await post(valid); assert.equal(response.status,503)
    response=await post({}); assert.equal(response.status,400)
    response=await post(valid); assert.equal(response.status,429); assert.equal(response.headers.get('retry-after'),'60')
  } finally { globalThis.fetch=nativeFetch; await new Promise(resolve=>server.close(resolve)) }
})
