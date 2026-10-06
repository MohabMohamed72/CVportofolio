globalThis.__timing__.logStart('Load chunks/build/resume-CzucpJbZ');import { mergeProps, useSSRContext } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './server.mjs';
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

const cvPath = "/documents/mohab-mohamed-frontend-cv.pdf";
const _sfc_main = {
  __name: "resume",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "CV" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-resume" }, _attrs))}><section class="section resume-section"><div class="container"><div class="resume-header"><div><span class="section-label">Profile / Curriculum vitae</span><h1 class="section-title"> The full story,<br><span class="gradient-text">in two pages.</span></h1></div><div class="resume-actions"><a${ssrRenderAttr("href", cvPath)} target="_blank" rel="noopener" class="btn-outline"> Open PDF \u2197 </a><a${ssrRenderAttr("href", cvPath)} download="Mohab_Mohamed_Frontend_CV.pdf" class="btn-primary"> Download CV </a></div></div><div class="resume-frame-wrap"><div class="resume-frame-bar"><span>Mohab Mohamed \xB7 Frontend Developer</span><span>PDF / 02 pages</span></div><object class="resume-frame"${ssrRenderAttr("data", cvPath)} type="application/pdf" aria-label="Mohab Mohamed Frontend Developer CV"><div class="resume-fallback"><p>Your browser cannot display the PDF preview.</p><a${ssrRenderAttr("href", cvPath)} target="_blank" rel="noopener" class="btn-primary"> Open the CV </a></div></object></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/resume-CzucpJbZ');
//# sourceMappingURL=resume-CzucpJbZ.mjs.map
