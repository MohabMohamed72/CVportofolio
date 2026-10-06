globalThis.__timing__.logStart('Load chunks/build/skills-Dn6Ls_3f');import { mergeProps, unref, useSSRContext } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/server-renderer/index.mjs';
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
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Skills" });
    const { skills: skills2 } = usePortfolioData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-skills" }, _attrs))} data-v-80f8d7d3><section class="section" data-v-80f8d7d3><div class="container" data-v-80f8d7d3><span class="section-label" data-v-80f8d7d3>Capabilities / Toolkit</span><h1 class="section-title" data-v-80f8d7d3> Tools I trust<br data-v-80f8d7d3><span class="gradient-text" data-v-80f8d7d3>to ship real work.</span></h1><p class="section-subtitle" data-v-80f8d7d3> A practical stack shaped by production dashboards, client platforms, and the occasional hard problem. </p><div class="skills-block" data-v-80f8d7d3><h2 class="block-title" data-v-80f8d7d3><span class="block-icon" data-v-80f8d7d3>\u26A1</span> Frontend Frameworks </h2><div class="skills-grid" data-v-80f8d7d3><!--[-->`);
      ssrRenderList(unref(skills2).frontend, (skill) => {
        _push(`<div class="skill-row" data-v-80f8d7d3><span class="skill-icon" data-v-80f8d7d3>${ssrInterpolate(skill.icon)}</span><span class="skill-name" data-v-80f8d7d3>${ssrInterpolate(skill.name)}</span><div class="skill-dots" data-v-80f8d7d3></div></div>`);
      });
      _push(`<!--]--></div></div><div class="skills-block" data-v-80f8d7d3><h2 class="block-title" data-v-80f8d7d3><span class="block-icon" data-v-80f8d7d3>\u{1F3A8}</span> Styling &amp; CSS </h2><div class="skills-grid" data-v-80f8d7d3><!--[-->`);
      ssrRenderList(unref(skills2).styling, (skill) => {
        _push(`<div class="skill-row" data-v-80f8d7d3><span class="skill-name" data-v-80f8d7d3>${ssrInterpolate(skill.name)}</span><div class="skill-dots accent" data-v-80f8d7d3></div></div>`);
      });
      _push(`<!--]--></div></div><div class="skills-block" data-v-80f8d7d3><h2 class="block-title" data-v-80f8d7d3><span class="block-icon" data-v-80f8d7d3>\u{1F527}</span> Tools &amp; Libraries </h2><div class="tools-grid" data-v-80f8d7d3><!--[-->`);
      ssrRenderList(unref(skills2).tools, (tool) => {
        _push(`<span class="tool-tag" data-v-80f8d7d3>${ssrInterpolate(tool)}</span>`);
      });
      _push(`<!--]--></div></div><div class="skills-block ai-block" data-v-80f8d7d3><h2 class="block-title" data-v-80f8d7d3><span class="block-icon" data-v-80f8d7d3>\u{1F916}</span> AI-Powered Development </h2><p class="ai-intro" data-v-80f8d7d3> Used thoughtfully for research, iteration, and review\u2014not as a substitute for engineering judgment. </p><div class="ai-grid" data-v-80f8d7d3><!--[-->`);
      ssrRenderList(unref(skills2).ai, (ai) => {
        _push(`<div class="ai-card" data-v-80f8d7d3><span class="ai-icon" data-v-80f8d7d3>${ssrInterpolate(ai.icon)}</span><h3 data-v-80f8d7d3>${ssrInterpolate(ai.category)}</h3><div class="ai-tools" data-v-80f8d7d3><!--[-->`);
        ssrRenderList(ai.tools, (t) => {
          _push(`<span class="ai-tool" data-v-80f8d7d3>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div><p class="ai-desc" data-v-80f8d7d3>${ssrInterpolate(ai.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skills.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-80f8d7d3"]]);

export { skills as default };;globalThis.__timing__.logEnd('Load chunks/build/skills-Dn6Ls_3f');
//# sourceMappingURL=skills-Dn6Ls_3f.mjs.map
