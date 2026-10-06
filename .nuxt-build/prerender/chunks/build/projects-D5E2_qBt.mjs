globalThis.__timing__.logStart('Load chunks/build/projects-D5E2_qBt');import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderTeleport } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/server-renderer/index.mjs';
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
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects" });
    const { projects: projects2 } = usePortfolioData();
    const selectedProject = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-projects" }, _attrs))} data-v-680296fb><section class="section" data-v-680296fb><div class="container" data-v-680296fb><span class="section-label" data-v-680296fb>Work / Selected builds</span><h1 class="section-title" data-v-680296fb> Shipped systems.<br data-v-680296fb><span class="gradient-text" data-v-680296fb>Not concept shots.</span></h1><p class="section-subtitle" data-v-680296fb> A selection of products built around real workflows, real users, and real technical constraints. </p><div class="projects-list" data-v-680296fb><!--[-->`);
      ssrRenderList(unref(projects2), (project, i) => {
        _push(`<div class="project-card" data-v-680296fb><div class="project-visual" data-v-680296fb><div class="project-bg" style="${ssrRenderStyle({
          background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`
        })}" data-v-680296fb><img class="project-emoji"${ssrRenderAttr("src", project.image)} data-v-680296fb></div><div class="project-number" data-v-680296fb>0${ssrInterpolate(i + 1)}</div></div><div class="project-info" data-v-680296fb><div class="project-header" data-v-680296fb><h2 data-v-680296fb>${ssrInterpolate(project.title)}</h2><span class="project-sub" data-v-680296fb>${ssrInterpolate(project.subtitle)}</span></div><p class="project-desc" data-v-680296fb>${ssrInterpolate(project.description)}</p><div class="project-features" data-v-680296fb><!--[-->`);
        ssrRenderList(project.features, (f) => {
          _push(`<span class="feature" data-v-680296fb><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-680296fb><polyline points="20 6 9 17 4 12" data-v-680296fb></polyline></svg> ${ssrInterpolate(f)}</span>`);
        });
        _push(`<!--]--></div><div class="project-tech" data-v-680296fb><!--[-->`);
        ssrRenderList(project.tech, (t) => {
          _push(`<span class="tech-chip" style="${ssrRenderStyle({
            borderColor: project.color + "40",
            color: project.color
          })}" data-v-680296fb>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div><span class="view-details-hint" data-v-680296fb>Click to view details \u2192</span></div></div>`);
      });
      _push(`<!--]--></div><div class="projects-cta" data-v-680296fb><p data-v-680296fb>Want to see more or discuss a project?</p><div class="cta-actions" data-v-680296fb><a href="https://github.com/MohabMohamed72" target="_blank" class="btn-primary" data-v-680296fb><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-680296fb><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-680296fb></path></svg> View GitHub </a>`);
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
      _push(`</div></div></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(selectedProject)) {
          _push2(`<div class="dialog-backdrop" data-v-680296fb><div class="dialog" role="dialog"${ssrRenderAttr("aria-label", unref(selectedProject).title)} data-v-680296fb><div class="dialog-header" style="${ssrRenderStyle({ borderBottomColor: unref(selectedProject).color + "30" })}" data-v-680296fb><div class="dialog-title-row" data-v-680296fb><img class="dialog-emoji"${ssrRenderAttr("src", unref(selectedProject).image)} data-v-680296fb><div data-v-680296fb><div data-v-680296fb><h2 class="dialog-title" data-v-680296fb>${ssrInterpolate(unref(selectedProject).title)}</h2><span class="dialog-subtitle" style="${ssrRenderStyle({ color: unref(selectedProject).color })}" data-v-680296fb>${ssrInterpolate(unref(selectedProject).subtitle)}</span></div>`);
          _push2(ssrRenderComponent(_component_NuxtLink, {
            to: unref(selectedProject).link,
            target: "_blank",
            class: "dialog-link",
            style: { color: unref(selectedProject).color }
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` View Project <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-680296fb${_scopeId}><polyline points="9 18 15 12 9 6" data-v-680296fb${_scopeId}></polyline></svg>`);
              } else {
                return [
                  createTextVNode(" View Project "),
                  (openBlock(), createBlock("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5"
                  }, [
                    createVNode("polyline", { points: "9 18 15 12 9 6" })
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div><button class="dialog-close" aria-label="Close" data-v-680296fb><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-v-680296fb><line x1="18" y1="6" x2="6" y2="18" data-v-680296fb></line><line x1="6" y1="6" x2="18" y2="18" data-v-680296fb></line></svg></button></div><div class="dialog-body" data-v-680296fb><div class="dialog-section" data-v-680296fb><h3 class="dialog-section-title" data-v-680296fb>Overview</h3><p class="dialog-overview" data-v-680296fb>${ssrInterpolate(unref(selectedProject).details.overview)}</p></div><div class="dialog-section" data-v-680296fb><h3 class="dialog-section-title" data-v-680296fb>Key Highlights</h3><ul class="dialog-highlights" data-v-680296fb><!--[-->`);
          ssrRenderList(unref(selectedProject).details.highlights, (h) => {
            _push2(`<li data-v-680296fb><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="${ssrRenderStyle({ color: unref(selectedProject).color })}" data-v-680296fb><polyline points="20 6 9 17 4 12" data-v-680296fb></polyline></svg> ${ssrInterpolate(h)}</li>`);
          });
          _push2(`<!--]--></ul></div><div class="dialog-section" data-v-680296fb><h3 class="dialog-section-title" data-v-680296fb>Tech Stack</h3><div class="dialog-tech-grid" data-v-680296fb><!--[-->`);
          ssrRenderList(unref(selectedProject).details.techStack, (group) => {
            _push2(`<div class="tech-group" data-v-680296fb><span class="tech-group-label" data-v-680296fb>${ssrInterpolate(group.category)}</span><div class="tech-group-chips" data-v-680296fb><!--[-->`);
            ssrRenderList(group.items, (item) => {
              _push2(`<span class="tech-chip" style="${ssrRenderStyle({
                borderColor: unref(selectedProject).color + "40",
                color: unref(selectedProject).color
              })}" data-v-680296fb>${ssrInterpolate(item)}</span>`);
            });
            _push2(`<!--]--></div></div>`);
          });
          _push2(`<!--]--></div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-680296fb"]]);

export { projects as default };;globalThis.__timing__.logEnd('Load chunks/build/projects-D5E2_qBt');
//# sourceMappingURL=projects-D5E2_qBt.mjs.map
