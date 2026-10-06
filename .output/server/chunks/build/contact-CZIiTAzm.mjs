import { _ as _export_sfc, u as useHead, c as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, mergeProps, reactive, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const blank = () => ({ name: "", email: "", subject: "", phone: "", message: "", website: "" });
    const form = reactive(blank());
    const errors = ref({});
    const sending = ref(false);
    const status = ref("idle");
    const feedback = ref("");
    const formElement = ref(null);
    const fields = [{ key: "name", label: "Name", type: "text", autocomplete: "name", max: 100, required: true }, { key: "email", label: "Email", type: "email", autocomplete: "email", max: 254, required: true }, { key: "subject", label: "Subject", type: "text", autocomplete: "off", max: 150, required: false }, { key: "phone", label: "Phone / WhatsApp", type: "tel", autocomplete: "tel", max: 40, required: false }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArrowIcon = __nuxt_component_1$1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        ref_key: "formElement",
        ref: formElement,
        novalidate: "",
        "aria-busy": unref(sending)
      }, _attrs))} data-v-030a47f7><p class="form-note" data-v-030a47f7>Name, email, and message are required.</p><div class="form-grid" data-v-030a47f7><!--[-->`);
      ssrRenderList(fields, (field) => {
        _push(`<div class="field" data-v-030a47f7><label${ssrRenderAttr("for", "contact-" + field.key)} data-v-030a47f7>${ssrInterpolate(field.label)} `);
        if (!field.required) {
          _push(`<span data-v-030a47f7>(optional)</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</label><input${ssrRenderAttr("id", "contact-" + field.key)}${ssrRenderDynamicModel(field.type, unref(form)[field.key], null)}${ssrRenderAttr("type", field.type)}${ssrRenderAttr("autocomplete", field.autocomplete)}${ssrRenderAttr("maxlength", field.max)}${ssrIncludeBooleanAttr(field.required) ? " required" : ""}${ssrIncludeBooleanAttr(unref(sending)) ? " readonly" : ""}${ssrRenderAttr("aria-invalid", !!unref(errors)[field.key])}${ssrRenderAttr("aria-describedby", unref(errors)[field.key] ? field.key + "-error" : void 0)} data-v-030a47f7>`);
        if (unref(errors)[field.key]) {
          _push(`<p${ssrRenderAttr("id", field.key + "-error")} class="field-error" data-v-030a47f7>${ssrInterpolate(unref(errors)[field.key])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="field message-field" data-v-030a47f7><label for="contact-message" data-v-030a47f7>Message</label><textarea id="contact-message" rows="6" maxlength="5000" required${ssrIncludeBooleanAttr(unref(sending)) ? " readonly" : ""}${ssrRenderAttr("aria-invalid", !!unref(errors).message)}${ssrRenderAttr("aria-describedby", unref(errors).message ? "message-error" : void 0)} data-v-030a47f7>${ssrInterpolate(unref(form).message)}</textarea>`);
      if (unref(errors).message) {
        _push(`<p id="message-error" class="field-error" data-v-030a47f7>${ssrInterpolate(unref(errors).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="honeypot" aria-hidden="true" data-v-030a47f7><label for="contact-website" data-v-030a47f7>Website</label><input id="contact-website"${ssrRenderAttr("value", unref(form).website)} type="text" tabindex="-1" autocomplete="off" data-v-030a47f7></div><div class="form-actions" data-v-030a47f7><button type="submit" class="button button-dark"${ssrIncludeBooleanAttr(unref(sending)) ? " disabled" : ""} data-v-030a47f7>${ssrInterpolate(unref(sending) ? "Sending..." : "Send Message")} `);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</button><button type="button" class="button"${ssrIncludeBooleanAttr(unref(sending)) ? " disabled" : ""} data-v-030a47f7>Send via WhatsApp `);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</button></div><p class="${ssrRenderClass([unref(status), "form-result"])}" role="status" aria-live="polite" aria-atomic="true" data-v-030a47f7>${ssrInterpolate(unref(feedback))}</p></form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-030a47f7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Contact Me" });
    const methods = [
      { label: "Email", value: "mohabmohamedd772@gmail.com", href: "mailto:mohabmohamedd772@gmail.com", external: false },
      { label: "WhatsApp", value: "+20 100 759 9123", href: "https://wa.me/201007599123", external: true },
      { label: "LinkedIn", value: "View Profile", href: "https://linkedin.com/in/mohab-mohamed-a5121024b", external: true },
      { label: "GitHub", value: "View Profile", href: "https://github.com/MohabMohamed72", external: true }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_ContactForm = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "contact-page paper" }, _attrs))} data-v-bae67eb3><header class="contact-opening" data-v-bae67eb3><div class="container" data-v-bae67eb3><p class="contact-label" data-v-bae67eb3>Contact</p><h1 class="display" data-v-bae67eb3>Contact Me</h1><p class="body-lg contact-description" data-v-bae67eb3>Have a project, opportunity, or question?<br data-v-bae67eb3>Feel free to get in touch.</p><a class="contact-email display" href="mailto:mohabmohamedd772@gmail.com" data-v-bae67eb3><span data-v-bae67eb3>mohabmohamedd772@gmail.com</span>`);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</a><div class="contact-quick" data-v-bae67eb3><span data-v-bae67eb3>Mansoura, Egypt</span><a href="https://wa.me/201007599123" target="_blank" rel="noopener noreferrer" data-v-bae67eb3>WhatsApp</a><a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer" data-v-bae67eb3>GitHub</a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer" data-v-bae67eb3>LinkedIn</a></div></div></header><section class="contact-lower" data-v-bae67eb3><div class="container contact-layout" data-v-bae67eb3><aside class="contact-details" data-v-bae67eb3><h2 class="display" data-v-bae67eb3>Contact Details</h2><p data-v-bae67eb3>Choose the channel that works for you.</p><dl data-v-bae67eb3><!--[-->`);
      ssrRenderList(methods, (method) => {
        _push(`<div data-v-bae67eb3><dt data-v-bae67eb3>${ssrInterpolate(method.label)}</dt><dd data-v-bae67eb3><a${ssrRenderAttr("href", method.href)}${ssrRenderAttr("target", method.external ? "_blank" : void 0)}${ssrRenderAttr("rel", method.external ? "noopener noreferrer" : void 0)} data-v-bae67eb3><span data-v-bae67eb3>${ssrInterpolate(method.value)}</span>`);
        _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
        _push(`</a></dd></div>`);
      });
      _push(`<!--]--><div data-v-bae67eb3><dt data-v-bae67eb3>Location</dt><dd data-v-bae67eb3>Mansoura, Egypt</dd></div></dl></aside><div class="message-column" data-v-bae67eb3><h2 class="display" data-v-bae67eb3>Send a Message</h2>`);
      _push(ssrRenderComponent(_component_ContactForm, null, null, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bae67eb3"]]);

export { contact as default };
//# sourceMappingURL=contact-CZIiTAzm.mjs.map
