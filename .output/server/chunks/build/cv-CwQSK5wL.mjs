import { _ as _export_sfc, u as useHead, b as useCvDocument, c as __nuxt_component_1$1, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useProfessionalProfile } from './useProfessionalProfile-BvD7gs9m.mjs';
import { u as useCaseStudies } from './useCaseStudies-DSBT46o8.mjs';
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
  __name: "cv",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "CV" });
    const { available: pdfAvailable, path: pdfPath } = useCvDocument();
    const { experienceEntries: roles } = useProfessionalProfile();
    const studies = useCaseStudies();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "cv-page paper" }, _attrs))} data-v-6ae9786a><div class="container cv-shell" data-v-6ae9786a><div class="index-meta" data-v-6ae9786a><span data-v-6ae9786a>Curriculum Vitae / Mohab Mohamed</span><span data-v-6ae9786a>Web edition</span></div><header class="cv-header" data-v-6ae9786a><div data-v-6ae9786a><h1 class="display display-lg" data-v-6ae9786a>Mohab Mohamed</h1><p class="body-lg" data-v-6ae9786a>Frontend Developer \xB7 Production web applications</p></div><div class="cv-actions" data-v-6ae9786a>`);
      if (unref(pdfAvailable)) {
        _push(`<a${ssrRenderAttr("href", unref(pdfPath))} download class="button button-dark" data-v-6ae9786a>Download CV `);
        _push(ssrRenderComponent(_component_ArrowIcon, { direction: "down" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pdfAvailable)) {
        _push(`<a${ssrRenderAttr("href", unref(pdfPath))} target="_blank" rel="noopener noreferrer" class="line-link" data-v-6ae9786a>Open PDF `);
        _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<p class="pdf-note" data-v-6ae9786a>Original PDF will be available here after the file is supplied.</p>`);
      }
      _push(`</div></header><div class="cv-contact" data-v-6ae9786a><span data-v-6ae9786a>Mansoura, Egypt</span><a href="mailto:mohabmohamedd772@gmail.com" data-v-6ae9786a>mohabmohamedd772@gmail.com</a><a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer" data-v-6ae9786a>GitHub `);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer" data-v-6ae9786a>LinkedIn `);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</a></div><section class="cv-section" data-v-6ae9786a><h2 data-v-6ae9786a>Summary</h2><p class="cv-lead" data-v-6ae9786a>Frontend developer focused on enterprise dashboards, multi-tenant SaaS platforms, complex business workflows, and bilingual Arabic / English applications. I build role-aware, data-heavy interfaces with Vue 3, Nuxt 3, React, Angular, and TypeScript.</p></section><section class="cv-section" data-v-6ae9786a><h2 data-v-6ae9786a>Experience</h2><div class="cv-entries" data-v-6ae9786a><!--[-->`);
      ssrRenderList(unref(roles), (role) => {
        _push(`<article data-v-6ae9786a><div data-v-6ae9786a><h3 data-v-6ae9786a>${ssrInterpolate(role.title)}</h3><span class="mono" data-v-6ae9786a>${ssrInterpolate(role.period)}</span></div><p data-v-6ae9786a>${ssrInterpolate(role.responsibilities[0])}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="cv-section" data-v-6ae9786a><h2 data-v-6ae9786a>Projects</h2><div class="cv-entries" data-v-6ae9786a><!--[-->`);
      ssrRenderList(unref(studies), (study) => {
        _push(`<article data-v-6ae9786a><div data-v-6ae9786a><h3 data-v-6ae9786a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects/" + study.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(study.title)} `);
              _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(study.title) + " ", 1),
                createVNode(_component_ArrowIcon)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3><span class="mono" data-v-6ae9786a>${ssrInterpolate(study.category)}</span></div><p data-v-6ae9786a>${ssrInterpolate(study.summary)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="cv-section" data-v-6ae9786a><h2 data-v-6ae9786a>Skills</h2><div class="cv-columns" data-v-6ae9786a><div data-v-6ae9786a><h3 data-v-6ae9786a>Interface &amp; data</h3><p data-v-6ae9786a>Vue 3, Nuxt 3, React, Next.js, Angular, TypeScript, JavaScript, Pinia, Redux, PrimeVue, Tailwind CSS, SCSS, Axios, REST APIs, WebSockets, Vue Router, Vue I18n, Chart.js.</p></div><div data-v-6ae9786a><h3 data-v-6ae9786a>Architecture &amp; delivery</h3><p data-v-6ae9786a>Clean Architecture, feature-based modules, multi-tenant and white-label SaaS, reusable components, composables, OOP, role-based access, RTL/LTR, PDF and Excel workflows, Playwright.</p></div></div></section><section class="cv-section" data-v-6ae9786a><h2 data-v-6ae9786a>Education</h2><div class="cv-entries" data-v-6ae9786a><article data-v-6ae9786a><div data-v-6ae9786a><h3 data-v-6ae9786a>Bachelor of Engineering</h3><span class="mono" data-v-6ae9786a>2019\u20132024</span></div><p data-v-6ae9786a>Mansoura University, Faculty of Engineering \xB7 Mechatronics Department</p></article><article data-v-6ae9786a><div data-v-6ae9786a><h3 data-v-6ae9786a>Embedded Systems Training</h3><span class="mono" data-v-6ae9786a>2023</span></div><p data-v-6ae9786a>National Telecommunication Institute (NTI)</p></article></div></section><div class="cv-close" data-v-6ae9786a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Me `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Contact Me "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cv.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cv = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6ae9786a"]]);

export { cv as default };
//# sourceMappingURL=cv-CwQSK5wL.mjs.map
