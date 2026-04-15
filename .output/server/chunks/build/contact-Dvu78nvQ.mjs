import { reactive, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Contact" });
    const form = reactive({ name: "", email: "", subject: "", message: "" });
    const submitted = ref(false);
    const contactItems = [
      {
        label: "Email",
        value: "mohabmohamedd772@gmail.com",
        href: "mailto:mohabmohamedd772@gmail.com",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
      },
      {
        label: "Phone",
        value: "+20 100 759 9123",
        href: "tel:+201007599123",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
      },
      {
        label: "Location",
        value: "Mansoura, Egypt",
        href: "#",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
      },
      {
        label: "Portfolio",
        value: "portfolio772.vercel.app",
        href: "https://portfolio772.vercel.app/",
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-contact" }, _attrs))} data-v-5ded056c><section class="section" data-v-5ded056c><div class="container" data-v-5ded056c><span class="section-label" data-v-5ded056c>// Get In Touch</span><h1 class="section-title" data-v-5ded056c>Let&#39;s <span class="gradient-text" data-v-5ded056c>Work Together</span></h1><p class="section-subtitle" data-v-5ded056c>Have a project in mind? Looking for a frontend developer? Let&#39;s connect!</p><div class="contact-grid" data-v-5ded056c><div class="contact-info" data-v-5ded056c><!--[-->`);
      ssrRenderList(contactItems, (item) => {
        var _a;
        _push(`<div class="info-card" data-v-5ded056c><div class="info-icon" data-v-5ded056c>${(_a = item.icon) != null ? _a : ""}</div><div data-v-5ded056c><span class="info-label" data-v-5ded056c>${ssrInterpolate(item.label)}</span><a${ssrRenderAttr("href", item.href)} class="info-value" target="_blank" data-v-5ded056c>${ssrInterpolate(item.value)}</a></div></div>`);
      });
      _push(`<!--]--><div class="social-links" data-v-5ded056c><a href="https://github.com/MohabMohamed72" target="_blank" class="social-link" aria-label="GitHub" data-v-5ded056c><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-v-5ded056c><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-5ded056c></path></svg></a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" class="social-link" aria-label="LinkedIn" data-v-5ded056c><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" data-v-5ded056c><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-5ded056c></path></svg></a><a href="mailto:mohabmohamedd772@gmail.com" class="social-link" aria-label="Email" data-v-5ded056c><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5ded056c><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-5ded056c></path><polyline points="22,6 12,13 2,6" data-v-5ded056c></polyline></svg></a></div><div class="availability-card" data-v-5ded056c><span class="avail-dot" data-v-5ded056c></span><div data-v-5ded056c><strong data-v-5ded056c>Currently Available</strong><p data-v-5ded056c>Open to full-time positions, freelance projects, and collaborations.</p></div></div></div><div class="contact-form-wrapper" data-v-5ded056c><form class="contact-form" data-v-5ded056c><div class="form-group" data-v-5ded056c><label data-v-5ded056c>Your Name</label><input type="text"${ssrRenderAttr("value", unref(form).name)} placeholder="John Doe" required data-v-5ded056c></div><div class="form-group" data-v-5ded056c><label data-v-5ded056c>Email Address</label><input type="email"${ssrRenderAttr("value", unref(form).email)} placeholder="john@example.com" required data-v-5ded056c></div><div class="form-group" data-v-5ded056c><label data-v-5ded056c>Subject</label><input type="text"${ssrRenderAttr("value", unref(form).subject)} placeholder="Project Inquiry" data-v-5ded056c></div><div class="form-group" data-v-5ded056c><label data-v-5ded056c>Message</label><textarea rows="5" placeholder="Tell me about your project..." required data-v-5ded056c>${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="${ssrRenderClass([{ sent: unref(submitted) }, "btn-primary submit-btn"])}" data-v-5ded056c>`);
      if (!unref(submitted)) {
        _push(`<!--[--><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-5ded056c><line x1="22" y1="2" x2="11" y2="13" data-v-5ded056c></line><polygon points="22 2 15 22 11 13 2 9 22 2" data-v-5ded056c></polygon></svg> Send Message <!--]-->`);
      } else {
        _push(`<!--[--><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-5ded056c><polyline points="20 6 9 17 4 12" data-v-5ded056c></polyline></svg> Message Sent! <!--]-->`);
      }
      _push(`</button></form></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ded056c"]]);

export { contact as default };
//# sourceMappingURL=contact-Dvu78nvQ.mjs.map
