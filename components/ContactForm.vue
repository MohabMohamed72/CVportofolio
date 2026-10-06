<script setup lang="ts">
import { validateContact, contactWhatsApp, type ContactFields, type ContactErrors } from '#shared/contact'
const blank = (): ContactFields => ({ name:'', email:'', subject:'', phone:'', message:'', website:'' })
const form = reactive(blank())
const errors = ref<ContactErrors>({})
const sending = ref(false)
const status = ref<'idle'|'success'|'error'>('idle')
const feedback = ref('')
const formElement = ref<HTMLFormElement | null>(null)
const fields = [{key:'name', label:'Name', type:'text', autocomplete:'name', max:100, required:true}, {key:'email', label:'Email', type:'email', autocomplete:'email', max:254, required:true}, {key:'subject', label:'Subject', type:'text', autocomplete:'off', max:150, required:false}, {key:'phone', label:'Phone / WhatsApp', type:'tel', autocomplete:'tel', max:40, required:false}] as const
function validated() {
  const result = validateContact(form)
  errors.value = result.errors
  if (Object.keys(result.errors).length) { feedback.value = 'Please check the highlighted fields.'; status.value = 'error'; nextTick(() => formElement.value?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()); return }
  return result.values
}
let submissionController: AbortController | undefined
onUnmounted(() => submissionController?.abort())
async function send() {
  if (sending.value) return
  const values = validated()
  if (!values) return
  sending.value = true; status.value = 'idle'; feedback.value = ''
  submissionController = new AbortController()
  const timeout = window.setTimeout(() => submissionController?.abort(), 20000)
  try {
    await $fetch('/api/contact', { method:'POST', body:values, signal:submissionController.signal, retry:0 })
    status.value = 'success'; feedback.value = "Message sent successfully. Thanks — I'll get back to you soon."
    Object.assign(form, blank()); errors.value = {}
  } catch (error: unknown) {
    const failure = error as { statusCode?:number; data?:{data?:{errors?:ContactErrors}} }
    if (failure.data?.data?.errors) errors.value = failure.data.data.errors
    status.value = 'error'; feedback.value = failure.statusCode === 429 ? 'Please wait a minute before trying again, or contact me through WhatsApp.' : 'Something went wrong. Please try again or contact me through WhatsApp.'
  } finally { window.clearTimeout(timeout); sending.value = false }
}
function whatsapp() {
  if (sending.value) return
  const values = validated()
  if (values) window.open(contactWhatsApp(values), '_blank', 'noopener,noreferrer')
}
</script>
<template>
  <form ref="formElement" novalidate :aria-busy="sending" @submit.prevent="send">
    <p class="form-note">Name, email, and message are required.</p>
    <div class="form-grid"><div v-for="field in fields" :key="field.key" class="field"><label :for="'contact-' + field.key">{{ field.label }} <span v-if="!field.required">(optional)</span></label><input :id="'contact-' + field.key" v-model="form[field.key]" :type="field.type" :autocomplete="field.autocomplete" :maxlength="field.max" :required="field.required" :readonly="sending" :aria-invalid="!!errors[field.key]" :aria-describedby="errors[field.key] ? field.key + '-error' : undefined" @input="delete errors[field.key]"><p v-if="errors[field.key]" :id="field.key + '-error'" class="field-error">{{ errors[field.key] }}</p></div></div>
    <div class="field message-field"><label for="contact-message">Message</label><textarea id="contact-message" v-model="form.message" rows="6" maxlength="5000" required :readonly="sending" :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'message-error' : undefined" @input="delete errors.message"></textarea><p v-if="errors.message" id="message-error" class="field-error">{{ errors.message }}</p></div>
    <div class="honeypot" aria-hidden="true"><label for="contact-website">Website</label><input id="contact-website" v-model="form.website" type="text" tabindex="-1" autocomplete="off"></div>
    <div class="form-actions"><button type="submit" class="button button-dark" :disabled="sending">{{ sending ? 'Sending...' : 'Send Message' }} <ArrowIcon /></button><button type="button" class="button" :disabled="sending" @click="whatsapp">Send via WhatsApp <ArrowIcon /></button></div>
    <p class="form-result" :class="status" role="status" aria-live="polite" aria-atomic="true">{{ feedback }}</p>
  </form>
</template>
<style scoped>
.form-note { color:var(--text-on-paper); font-size:.9rem; margin-bottom:1.5rem; }.form-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }.field label { display:block; font-weight:700; margin-bottom:.5rem; }.field label span { font-weight:400; color:var(--text-on-paper); font-size:.85rem; }.field input,.field textarea { width:100%; padding:.85rem .25rem; border:0; border-bottom:1px solid var(--ink); border-radius:0; color:var(--ink); background:transparent; font-size:1rem; caret-color:var(--oxide-on-paper); transition:border-color 200ms var(--ease); }.field textarea { border:1px solid var(--line-light); padding:1rem; resize:vertical; min-height:150px; }.field input:focus,.field textarea:focus { outline:2px solid var(--oxide-on-paper); outline-offset:3px; border-color:var(--oxide-on-paper); }.field [aria-invalid="true"] { border-color:var(--oxide-on-paper); }.message-field { margin-top:1.5rem; }.field-error { font-size:.9rem; color:var(--oxide-on-paper); margin-top:.5rem; }.form-actions { display:flex; flex-wrap:wrap; gap:1rem; margin-top:1.5rem; }.form-actions .button { gap:1rem; }.button :deep(svg) { transition:transform 200ms var(--ease); }.button:hover :deep(svg) { transform:translate(2px,-2px); }.button:disabled { opacity:.65; cursor:wait; transform:none; }.form-result { margin-top:1rem; min-height:1.6em; max-width:60ch; }.form-result.error { color:var(--oxide-on-paper); }.form-result.success { font-weight:700; }.honeypot { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); }@media(max-width:600px) { .form-grid { grid-template-columns:1fr; gap:1.25rem; }.form-actions .button { width:100%; } }
</style>
