globalThis.__timing__.logStart('Load chunks/build/experience-DihulPek');import { mergeProps, unref, useSSRContext } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import { u as usePortfolioData } from './usePortfolioData-0YdNHbcF.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/h3/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/destr/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/hookable/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unstorage/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/ohash/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/klona/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/defu/dist/defu.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/scule/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unctx/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/techlab/projects/CVportofolio/node_modules/pathe/dist/index.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unhead/dist/server.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/devalue/index.js';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unhead/dist/utils.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/techlab/projects/CVportofolio/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Experience" });
    const { experiences, education } = usePortfolioData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-experience" }, _attrs))} data-v-f08e402a><section class="section" data-v-f08e402a><div class="container" data-v-f08e402a><span class="section-label" data-v-f08e402a>Experience / Timeline</span><h1 class="section-title" data-v-f08e402a> Work, teaching &amp;<br data-v-f08e402a><span class="gradient-text" data-v-f08e402a>the road here.</span></h1><p class="section-subtitle" data-v-f08e402a> From mechatronics engineering to product interfaces\u2014with teaching as the thread running through both. </p><div class="timeline" data-v-f08e402a><div class="timeline-line" data-v-f08e402a></div><!--[-->`);
      ssrRenderList(unref(experiences), (exp, i) => {
        _push(`<div class="${ssrRenderClass([{ even: i % 2 === 1 }, "timeline-item"])}" data-v-f08e402a><div class="timeline-dot" data-v-f08e402a><span class="dot-inner" data-v-f08e402a></span></div><div class="timeline-card" data-v-f08e402a><div class="tc-header" data-v-f08e402a><span class="tc-period" data-v-f08e402a>${ssrInterpolate(exp.period)}</span><span class="tc-location" data-v-f08e402a>${ssrInterpolate(exp.location)}</span></div><h3 class="tc-title" data-v-f08e402a>${ssrInterpolate(exp.title)}</h3><span class="tc-company" data-v-f08e402a>${ssrInterpolate(exp.company)}</span><ul class="tc-highlights" data-v-f08e402a><!--[-->`);
        ssrRenderList(exp.highlights, (h, j) => {
          _push(`<li data-v-f08e402a><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-f08e402a><polyline points="20 6 9 17 4 12" data-v-f08e402a></polyline></svg><span data-v-f08e402a>${ssrInterpolate(h)}</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="edu-section" data-v-f08e402a><h2 class="section-title" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "40px" })}" data-v-f08e402a><span class="gradient-text" data-v-f08e402a>Education</span></h2><div class="edu-card-large" data-v-f08e402a><div class="edu-left" data-v-f08e402a><span class="edu-year-big" data-v-f08e402a>2019<br data-v-f08e402a>\u2014 2024</span></div><div class="edu-right" data-v-f08e402a><h3 data-v-f08e402a>${ssrInterpolate(unref(education).degree)}</h3><p class="edu-dept" data-v-f08e402a>${ssrInterpolate(unref(education).department)}</p><p class="edu-uni-name" data-v-f08e402a>${ssrInterpolate(unref(education).university)}</p><p class="edu-desc" data-v-f08e402a>${ssrInterpolate(unref(education).description)}</p></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f08e402a"]]);

export { experience as default };;globalThis.__timing__.logEnd('Load chunks/build/experience-DihulPek');
//# sourceMappingURL=experience-DihulPek.mjs.map
