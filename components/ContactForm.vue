<script setup lang="ts">
import {
  validateContact,
  contactWhatsApp,
  type ContactFields,
  type ContactErrors,
} from "#shared/contact";
const blank = (): ContactFields => ({
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
  website: "",
});
const form = reactive(blank());
const errors = ref<ContactErrors>({});
const sending = ref(false);
const status = ref<"idle" | "success" | "error">("idle");
const feedback = ref("");
const formElement = ref<HTMLFormElement | null>(null);
const fields = [
  {
    key: "name",
    label: "Name",
    type: "text",
    autocomplete: "name",
    max: 100,
    required: true,
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    autocomplete: "email",
    max: 254,
    required: true,
  },
  {
    key: "subject",
    label: "Subject",
    type: "text",
    autocomplete: "off",
    max: 150,
    required: false,
  },
  {
    key: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    autocomplete: "tel",
    max: 40,
    required: false,
  },
] as const;
function validated() {
  const result = validateContact(form);
  errors.value = result.errors;
  if (Object.keys(result.errors).length) {
    feedback.value = "Please check the highlighted fields.";
    status.value = "error";
    nextTick(() =>
      formElement.value
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus(),
    );
    return;
  }
  return result.values;
}
let submissionController: AbortController | undefined;
onUnmounted(() => submissionController?.abort());
async function send() {
  if (sending.value) return;
  const values = validated();
  if (!values) return;
  sending.value = true;
  status.value = "idle";
  feedback.value = "";
  submissionController = new AbortController();
  const timeout = window.setTimeout(() => submissionController?.abort(), 20000);
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: values,
      signal: submissionController.signal,
      retry: 0,
    });
    status.value = "success";
    feedback.value =
      "Transmission complete. Message sent successfully — I'll get back to you soon.";
    Object.assign(form, blank());
    errors.value = {};
  } catch (error: unknown) {
    const failure = error as {
      statusCode?: number;
      data?: { data?: { errors?: ContactErrors } };
    };
    if (failure.data?.data?.errors) errors.value = failure.data.data.errors;
    status.value = "error";
    feedback.value =
      failure.statusCode === 429
        ? "Please wait a minute before trying again, or contact me through WhatsApp."
        : "Transmission failed. Please try again or contact me through WhatsApp.";
  } finally {
    window.clearTimeout(timeout);
    sending.value = false;
  }
}
function whatsapp() {
  if (sending.value) return;
  const values = validated();
  if (values)
    window.open(contactWhatsApp(values), "_blank", "noopener,noreferrer");
}
</script>
<template>
  <form
    ref="formElement"
    novalidate
    :aria-busy="sending"
    @submit.prevent="send"
  >
    <p class="form-note">Name, email, and message are required.</p>
    <div class="form-grid">
      <div v-for="field in fields" :key="field.key" class="field">
        <label :for="'contact-' + field.key"
          >{{ field.label }}
          <span v-if="!field.required">(optional)</span></label
        ><input
          :id="'contact-' + field.key"
          v-model="form[field.key]"
          :type="field.type"
          :autocomplete="field.autocomplete"
          :maxlength="field.max"
          :required="field.required"
          :readonly="sending"
          :aria-invalid="!!errors[field.key]"
          :aria-describedby="
            errors[field.key] ? field.key + '-error' : undefined
          "
          @input="delete errors[field.key]"
        />
        <p
          v-if="errors[field.key]"
          :id="field.key + '-error'"
          class="field-error"
        >
          {{ errors[field.key] }}
        </p>
      </div>
    </div>
    <div class="field message-field">
      <label for="contact-message">Message</label
      ><textarea
        id="contact-message"
        v-model="form.message"
        rows="6"
        maxlength="5000"
        required
        :readonly="sending"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
        @input="delete errors.message"
      ></textarea>
      <p v-if="errors.message" id="message-error" class="field-error">
        {{ errors.message }}
      </p>
    </div>
    <div class="honeypot" aria-hidden="true">
      <label for="contact-website">Website</label
      ><input
        id="contact-website"
        v-model="form.website"
        type="text"
        tabindex="-1"
        autocomplete="off"
      />
    </div>
    <div class="form-actions">
      <button type="submit" class="button button-dark" :disabled="sending">
        {{ sending ? "Transmitting..." : "Transmit Message" }}
        <ArrowIcon /></button
      ><button
        type="button"
        class="button"
        :disabled="sending"
        @click="whatsapp"
      >
        Open WhatsApp <ArrowIcon />
      </button>
    </div>
    <p
      class="form-result"
      :class="status"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {{ feedback }}
    </p>
  </form>
</template>
