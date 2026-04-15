import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Skills" });
    const { skills: skills2 } = usePortfolioData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-skills" }, _attrs))} data-v-631cb8bc><section class="section" data-v-631cb8bc><div class="container" data-v-631cb8bc><span class="section-label" data-v-631cb8bc>// Skills &amp; Expertise</span><h1 class="section-title" data-v-631cb8bc>My <span class="gradient-text" data-v-631cb8bc>Technical Arsenal</span></h1><p class="section-subtitle" data-v-631cb8bc>Technologies, frameworks, and AI tools I use to build modern web applications.</p><div class="skills-block" data-v-631cb8bc><h2 class="block-title" data-v-631cb8bc><span class="block-icon" data-v-631cb8bc>\u26A1</span> Frontend Frameworks </h2><div class="skills-bars" data-v-631cb8bc><!--[-->`);
      ssrRenderList(unref(skills2).frontend, (skill) => {
        _push(`<div class="skill-row" data-v-631cb8bc><div class="skill-info" data-v-631cb8bc><span class="skill-icon" data-v-631cb8bc>${ssrInterpolate(skill.icon)}</span><span class="skill-name" data-v-631cb8bc>${ssrInterpolate(skill.name)}</span><span class="skill-pct" data-v-631cb8bc>${ssrInterpolate(skill.level)}%</span></div><div class="skill-bar" data-v-631cb8bc><div class="skill-fill" style="${ssrRenderStyle({ width: skill.level + "%" })}" data-v-631cb8bc></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="skills-block" data-v-631cb8bc><h2 class="block-title" data-v-631cb8bc><span class="block-icon" data-v-631cb8bc>\u{1F3A8}</span> Styling &amp; CSS </h2><div class="skills-bars" data-v-631cb8bc><!--[-->`);
      ssrRenderList(unref(skills2).styling, (skill) => {
        _push(`<div class="skill-row" data-v-631cb8bc><div class="skill-info" data-v-631cb8bc><span class="skill-name" data-v-631cb8bc>${ssrInterpolate(skill.name)}</span><span class="skill-pct" data-v-631cb8bc>${ssrInterpolate(skill.level)}%</span></div><div class="skill-bar" data-v-631cb8bc><div class="skill-fill accent" style="${ssrRenderStyle({ width: skill.level + "%" })}" data-v-631cb8bc></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="skills-block" data-v-631cb8bc><h2 class="block-title" data-v-631cb8bc><span class="block-icon" data-v-631cb8bc>\u{1F527}</span> Tools &amp; Libraries </h2><div class="tools-grid" data-v-631cb8bc><!--[-->`);
      ssrRenderList(unref(skills2).tools, (tool) => {
        _push(`<span class="tool-tag" data-v-631cb8bc>${ssrInterpolate(tool)}</span>`);
      });
      _push(`<!--]--></div></div><div class="skills-block ai-block" data-v-631cb8bc><h2 class="block-title" data-v-631cb8bc><span class="block-icon" data-v-631cb8bc>\u{1F916}</span> AI-Powered Development </h2><p class="ai-intro" data-v-631cb8bc> I integrate AI tools across the full development lifecycle to boost productivity and code quality. </p><div class="ai-grid" data-v-631cb8bc><!--[-->`);
      ssrRenderList(unref(skills2).ai, (ai) => {
        _push(`<div class="ai-card" data-v-631cb8bc><span class="ai-icon" data-v-631cb8bc>${ssrInterpolate(ai.icon)}</span><h3 data-v-631cb8bc>${ssrInterpolate(ai.category)}</h3><div class="ai-tools" data-v-631cb8bc><!--[-->`);
        ssrRenderList(ai.tools, (t) => {
          _push(`<span class="ai-tool" data-v-631cb8bc>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div><p class="ai-desc" data-v-631cb8bc>${ssrInterpolate(ai.description)}</p></div>`);
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
const skills = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-631cb8bc"]]);

export { skills as default };
//# sourceMappingURL=skills-IRKhaPAF.mjs.map
