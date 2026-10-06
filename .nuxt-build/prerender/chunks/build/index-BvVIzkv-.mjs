globalThis.__timing__.logStart('Load chunks/build/index-BvVIzkv-');import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'file:///home/techlab/projects/CVportofolio/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Home" });
    const typedText = ref("");
    ref(0);
    ref(0);
    ref(false);
    const overviewCards = [
      {
        icon: "01",
        title: "Frontend Frameworks",
        desc: "Vue.js, React, Angular, Nuxt.js, Next.js \u2014 building with the right tool for every project.",
        bg: "rgba(66, 211, 146, 0.12)"
      },
      {
        icon: "02",
        title: "Complex Product UI",
        desc: "Dashboards, permissions, payments, and data-heavy workflows made simple to use.",
        bg: "rgba(100, 126, 255, 0.12)"
      },
      {
        icon: "03",
        title: "Design to Browser",
        desc: "Translating Figma systems into responsive interfaces without losing the details.",
        bg: "rgba(245, 158, 11, 0.12)"
      },
      {
        icon: "04",
        title: "Connected Systems",
        desc: "REST APIs, GraphQL, Node.js, and state management for complete product flows.",
        bg: "rgba(239, 68, 68, 0.12)"
      }
    ];
    const techList = [
      "Vue.js",
      "React",
      "Angular",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Redux",
      "Pinia",
      "GraphQL",
      "Git",
      "Copilot",
      "Cursor AI",
      "ChatGPT",
      "Figma",
      "Vite",
      "Jest",
      "Cypress"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-aab13c6b><section class="hero" data-v-aab13c6b><div class="container hero-content" data-v-aab13c6b><div class="hero-text" data-v-aab13c6b><div class="hero-badge" data-v-aab13c6b><span class="badge-dot" data-v-aab13c6b></span><span data-v-aab13c6b>Frontend engineer \xB7 Mansoura, EG</span></div><h1 class="hero-title" data-v-aab13c6b> Digital products,<br data-v-aab13c6b><span class="gradient-text" data-v-aab13c6b>made human.</span></h1><p class="hero-role" data-v-aab13c6b><span class="typing-prefix" data-v-aab13c6b>I design &amp; build </span><span class="hero-typed gradient-text" data-v-aab13c6b>${ssrInterpolate(unref(typedText))}<span class="cursor" data-v-aab13c6b>|</span></span></p><p class="hero-desc" data-v-aab13c6b> I turn complex product requirements into clear, responsive web experiences using Vue, React, Angular, Nuxt, and TypeScript. </p><div class="hero-actions" data-v-aab13c6b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-aab13c6b${_scopeId}><rect x="3" y="3" width="7" height="7" rx="1" data-v-aab13c6b${_scopeId}></rect><rect x="14" y="3" width="7" height="7" rx="1" data-v-aab13c6b${_scopeId}></rect><rect x="3" y="14" width="7" height="7" rx="1" data-v-aab13c6b${_scopeId}></rect><rect x="14" y="14" width="7" height="7" rx="1" data-v-aab13c6b${_scopeId}></rect></svg> View Projects `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("rect", {
                  x: "3",
                  y: "3",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "14",
                  y: "3",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "3",
                  y: "14",
                  width: "7",
                  height: "7",
                  rx: "1"
                }),
                createVNode("rect", {
                  x: "14",
                  y: "14",
                  width: "7",
                  height: "7",
                  rx: "1"
                })
              ])),
              createTextVNode(" View Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-aab13c6b${_scopeId}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-aab13c6b${_scopeId}></path><polyline points="22,6 12,13 2,6" data-v-aab13c6b${_scopeId}></polyline></svg> Contact Me `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                createVNode("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
                createVNode("polyline", { points: "22,6 12,13 2,6" })
              ])),
              createTextVNode(" Contact Me ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/resume",
        class: "btn-outline hero-cv-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` CV \u2197 `);
          } else {
            return [
              createTextVNode(" CV \u2197 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero-stats" data-v-aab13c6b><div class="stat" data-v-aab13c6b><span class="stat-num gradient-text" data-v-aab13c6b>4+</span><span class="stat-label" data-v-aab13c6b>Projects Delivered</span></div><div class="stat-divider" data-v-aab13c6b></div><div class="stat" data-v-aab13c6b><span class="stat-num gradient-text" data-v-aab13c6b>1+</span><span class="stat-label" data-v-aab13c6b>Year Experience</span></div><div class="stat-divider" data-v-aab13c6b></div><div class="stat" data-v-aab13c6b><span class="stat-num gradient-text" data-v-aab13c6b>200+</span><span class="stat-label" data-v-aab13c6b>Students Mentored</span></div></div></div><div class="hero-visual" data-v-aab13c6b><div class="code-window profile-card" data-v-aab13c6b><div class="profile-topline" data-v-aab13c6b><span data-v-aab13c6b>Independent developer</span><span data-v-aab13c6b>Available 2026</span></div><div class="profile-monogram" data-v-aab13c6b>MM</div><div class="profile-copy" data-v-aab13c6b><span data-v-aab13c6b>Based in Egypt<br data-v-aab13c6b>Working worldwide</span><strong data-v-aab13c6b>Clear thinking.<br data-v-aab13c6b>Clean execution.</strong></div><div class="profile-meta" data-v-aab13c6b><span data-v-aab13c6b>Vue / React / Nuxt</span><span data-v-aab13c6b>01 \u2014 04</span></div></div><div class="floating-badge badge-vue" style="${ssrRenderStyle({ "animation-delay": "0s" })}" data-v-aab13c6b> Vue.js </div><div class="floating-badge badge-react" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-aab13c6b> React </div><div class="floating-badge badge-ts" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-aab13c6b> TypeScript </div></div></div><div class="hero-scroll" data-v-aab13c6b><span data-v-aab13c6b>Scroll to explore</span><div class="scroll-line" data-v-aab13c6b></div></div></section><section class="section overview" data-v-aab13c6b><div class="container" data-v-aab13c6b><div class="overview-grid" data-v-aab13c6b><!--[-->`);
      ssrRenderList(overviewCards, (item, i) => {
        _push(`<div class="overview-card" data-v-aab13c6b><div class="oc-icon" style="${ssrRenderStyle({ background: item.bg })}" data-v-aab13c6b>${ssrInterpolate(item.icon)}</div><h3 data-v-aab13c6b>${ssrInterpolate(item.title)}</h3><p data-v-aab13c6b>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="marquee-section" data-v-aab13c6b><div class="marquee" data-v-aab13c6b><div class="marquee-track" data-v-aab13c6b><!--[-->`);
      ssrRenderList([...techList, ...techList], (tech, i) => {
        _push(`<span class="marquee-item" data-v-aab13c6b>${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aab13c6b"]]);

export { index as default };;globalThis.__timing__.logEnd('Load chunks/build/index-BvVIzkv-');
//# sourceMappingURL=index-BvVIzkv-.mjs.map
