import { _ as __nuxt_component_0 } from './PageHeader-By1A9Wqt.mjs';
import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useProfessionalProfile } from './useProfessionalProfile-BvD7gs9m.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Technical Skills" });
    const { skills: skills2 } = useProfessionalProfile();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-52aef590>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        label: "Skills",
        title: "Technical Skills",
        description: "Technologies and tools I use in production projects."
      }, null, _parent));
      _push(`<section class="paper chapter-tight" aria-label="Technical skill categories" data-v-52aef590><div class="container skill-groups" data-v-52aef590><!--[-->`);
      ssrRenderList(unref(skills2), (group) => {
        _push(`<section class="skill-group" data-v-52aef590><h2 data-v-52aef590>${ssrInterpolate(group.name)}</h2><ul data-v-52aef590><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(`<li data-v-52aef590>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></section>`);
      });
      _push(`<!--]--></div></section><section class="chapter-tight" data-v-52aef590><div class="container" data-v-52aef590><h2 class="display display-md" data-v-52aef590>Skills in Practice</h2><div class="skill-proof" data-v-52aef590>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/orbit-system" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-52aef590${_scopeId}>Real-Time Dashboards</h3><p data-v-52aef590${_scopeId}>Vue 3, Pinia, REST APIs, and WebSockets in Orbit.</p>`);
          } else {
            return [
              createVNode("h3", null, "Real-Time Dashboards"),
              createVNode("p", null, "Vue 3, Pinia, REST APIs, and WebSockets in Orbit.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/education-system" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-52aef590${_scopeId}>Multi-Tenant Applications</h3><p data-v-52aef590${_scopeId}>Nuxt 3, SSR, and dynamic SEO in Education System.</p>`);
          } else {
            return [
              createVNode("h3", null, "Multi-Tenant Applications"),
              createVNode("p", null, "Nuxt 3, SSR, and dynamic SEO in Education System.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects/hse-management-system" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 data-v-52aef590${_scopeId}>Bilingual Workflows</h3><p data-v-52aef590${_scopeId}>Vue I18n and Arabic / English RTL / LTR in HSE.</p>`);
          } else {
            return [
              createVNode("h3", null, "Bilingual Workflows"),
              createVNode("p", null, "Vue I18n and Arabic / English RTL / LTR in HSE.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52aef590"]]);

export { skills as default };
//# sourceMappingURL=skills-BZvSuqwR.mjs.map
