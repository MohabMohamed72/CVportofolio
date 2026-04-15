import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import { u as usePortfolioData } from './usePortfolioData-j_3rPAQ_.mjs';
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
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Experience" });
    const { experiences, education } = usePortfolioData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-experience" }, _attrs))} data-v-9daec14a><section class="section" data-v-9daec14a><div class="container" data-v-9daec14a><span class="section-label" data-v-9daec14a>// Career Journey</span><h1 class="section-title" data-v-9daec14a>Professional <span class="gradient-text" data-v-9daec14a>Experience</span></h1><p class="section-subtitle" data-v-9daec14a>My path from Mechatronics Engineering to Frontend Development.</p><div class="timeline" data-v-9daec14a><div class="timeline-line" data-v-9daec14a></div><!--[-->`);
      ssrRenderList(unref(experiences), (exp, i) => {
        _push(`<div class="${ssrRenderClass([{ even: i % 2 === 1 }, "timeline-item"])}" data-v-9daec14a><div class="timeline-dot" data-v-9daec14a><span class="dot-inner" data-v-9daec14a></span></div><div class="timeline-card" data-v-9daec14a><div class="tc-header" data-v-9daec14a><span class="tc-period" data-v-9daec14a>${ssrInterpolate(exp.period)}</span><span class="tc-location" data-v-9daec14a>${ssrInterpolate(exp.location)}</span></div><h3 class="tc-title" data-v-9daec14a>${ssrInterpolate(exp.title)}</h3><span class="tc-company" data-v-9daec14a>${ssrInterpolate(exp.company)}</span><ul class="tc-highlights" data-v-9daec14a><!--[-->`);
        ssrRenderList(exp.highlights, (h, j) => {
          _push(`<li data-v-9daec14a><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-9daec14a><polyline points="20 6 9 17 4 12" data-v-9daec14a></polyline></svg><span data-v-9daec14a>${ssrInterpolate(h)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="edu-section" data-v-9daec14a><h2 class="section-title" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "40px" })}" data-v-9daec14a><span class="gradient-text" data-v-9daec14a>Education</span></h2><div class="edu-card-large" data-v-9daec14a><div class="edu-left" data-v-9daec14a><span class="edu-year-big" data-v-9daec14a>2019<br data-v-9daec14a>\u2014 2024</span></div><div class="edu-right" data-v-9daec14a><h3 data-v-9daec14a>${ssrInterpolate(unref(education).degree)}</h3><p class="edu-dept" data-v-9daec14a>${ssrInterpolate(unref(education).department)}</p><p class="edu-uni-name" data-v-9daec14a>${ssrInterpolate(unref(education).university)}</p><p class="edu-desc" data-v-9daec14a>${ssrInterpolate(unref(education).description)}</p></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9daec14a"]]);

export { experience as default };
//# sourceMappingURL=experience-DI1E60Iw.mjs.map
