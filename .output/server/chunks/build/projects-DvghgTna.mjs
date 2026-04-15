import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects" });
    const { projects: projects2 } = usePortfolioData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-projects" }, _attrs))} data-v-91d65192><section class="section" data-v-91d65192><div class="container" data-v-91d65192><span class="section-label" data-v-91d65192>// Portfolio</span><h1 class="section-title" data-v-91d65192>Featured <span class="gradient-text" data-v-91d65192>Projects</span></h1><p class="section-subtitle" data-v-91d65192>Real-world applications I&#39;ve built \u2014 dashboards, platforms, and full-stack systems.</p><div class="projects-list" data-v-91d65192><!--[-->`);
      ssrRenderList(unref(projects2), (project, i) => {
        _push(`<div class="project-card" data-v-91d65192><div class="project-visual" data-v-91d65192><div class="project-bg" style="${ssrRenderStyle({ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` })}" data-v-91d65192><span class="project-emoji" data-v-91d65192>${ssrInterpolate(project.image)}</span></div><div class="project-number" data-v-91d65192>0${ssrInterpolate(i + 1)}</div></div><div class="project-info" data-v-91d65192><div class="project-header" data-v-91d65192><h2 data-v-91d65192>${ssrInterpolate(project.title)}</h2><span class="project-sub" data-v-91d65192>${ssrInterpolate(project.subtitle)}</span></div><p class="project-desc" data-v-91d65192>${ssrInterpolate(project.description)}</p><div class="project-features" data-v-91d65192><!--[-->`);
        ssrRenderList(project.features, (f) => {
          _push(`<span class="feature" data-v-91d65192><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-91d65192><polyline points="20 6 9 17 4 12" data-v-91d65192></polyline></svg> ${ssrInterpolate(f)}</span>`);
        });
        _push(`<!--]--></div><div class="project-tech" data-v-91d65192><!--[-->`);
        ssrRenderList(project.tech, (t) => {
          _push(`<span class="tech-chip" style="${ssrRenderStyle({ borderColor: project.color + "40", color: project.color })}" data-v-91d65192>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div><div class="projects-cta" data-v-91d65192><p data-v-91d65192>Want to see more or discuss a project?</p><div class="cta-actions" data-v-91d65192><a href="https://github.com/MohabMohamed72" target="_blank" class="btn-primary" data-v-91d65192><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-91d65192><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-91d65192></path></svg> View GitHub </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Me`);
          } else {
            return [
              createTextVNode("Contact Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91d65192"]]);

export { projects as default };
//# sourceMappingURL=projects-DvghgTna.mjs.map
