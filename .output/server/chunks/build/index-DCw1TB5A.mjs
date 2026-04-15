import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Home" });
    const typedText = ref("");
    ref(0);
    ref(0);
    ref(false);
    const overviewCards = [
      { icon: "\u26A1", title: "Frontend Frameworks", desc: "Vue.js, React, Angular, Nuxt.js, Next.js \u2014 building with the right tool for every project.", bg: "rgba(66, 211, 146, 0.12)" },
      { icon: "\u{1F916}", title: "AI-Powered Dev", desc: "GitHub Copilot, Cursor AI, ChatGPT, Claude \u2014 leveraging AI to ship faster and cleaner.", bg: "rgba(100, 126, 255, 0.12)" },
      { icon: "\u{1F3A8}", title: "Pixel-Perfect UIs", desc: "Tailwind CSS, SCSS, responsive design \u2014 translating Figma to flawless interfaces.", bg: "rgba(245, 158, 11, 0.12)" },
      { icon: "\u{1F680}", title: "Full-Stack Ready", desc: "REST APIs, GraphQL, Node.js, state management \u2014 end-to-end feature delivery.", bg: "rgba(239, 68, 68, 0.12)" }
    ];
    const techList = ["Vue.js", "React", "Angular", "Nuxt.js", "TypeScript", "Tailwind CSS", "SCSS", "Redux", "Pinia", "GraphQL", "Git", "Copilot", "Cursor AI", "ChatGPT", "Figma", "Vite", "Jest", "Cypress"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-61992fe9><section class="hero" data-v-61992fe9><div class="container hero-content" data-v-61992fe9><div class="hero-text" data-v-61992fe9><div class="hero-badge" data-v-61992fe9><span class="badge-dot" data-v-61992fe9></span><span data-v-61992fe9>Available for opportunities</span></div><h1 class="hero-title" data-v-61992fe9> Hi, I&#39;m <span class="gradient-text" data-v-61992fe9>Mohab Mohamed</span></h1><p class="hero-role" data-v-61992fe9><span class="typing-prefix" data-v-61992fe9>I build </span><span class="hero-typed gradient-text" data-v-61992fe9>${ssrInterpolate(unref(typedText))}<span class="cursor" data-v-61992fe9>|</span></span></p><p class="hero-desc" data-v-61992fe9> Frontend Developer crafting responsive, scalable web applications with Vue.js, React.js, Angular, Nuxt.js &amp; TypeScript \u2014 powered by modern AI tools. </p><div class="hero-actions" data-v-61992fe9>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-61992fe9${_scopeId}><rect x="3" y="3" width="7" height="7" rx="1" data-v-61992fe9${_scopeId}></rect><rect x="14" y="3" width="7" height="7" rx="1" data-v-61992fe9${_scopeId}></rect><rect x="3" y="14" width="7" height="7" rx="1" data-v-61992fe9${_scopeId}></rect><rect x="14" y="14" width="7" height="7" rx="1" data-v-61992fe9${_scopeId}></rect></svg> View Projects `);
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
            _push2(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-61992fe9${_scopeId}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-61992fe9${_scopeId}></path><polyline points="22,6 12,13 2,6" data-v-61992fe9${_scopeId}></polyline></svg> Contact Me `);
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
      _push(`</div><div class="hero-stats" data-v-61992fe9><div class="stat" data-v-61992fe9><span class="stat-num gradient-text" data-v-61992fe9>4+</span><span class="stat-label" data-v-61992fe9>Projects Delivered</span></div><div class="stat-divider" data-v-61992fe9></div><div class="stat" data-v-61992fe9><span class="stat-num gradient-text" data-v-61992fe9>1+</span><span class="stat-label" data-v-61992fe9>Year Experience</span></div><div class="stat-divider" data-v-61992fe9></div><div class="stat" data-v-61992fe9><span class="stat-num gradient-text" data-v-61992fe9>6+</span><span class="stat-label" data-v-61992fe9>AI Tools Mastered</span></div></div></div><div class="hero-visual" data-v-61992fe9><div class="code-window" data-v-61992fe9><div class="code-header" data-v-61992fe9><div class="code-dots" data-v-61992fe9><span style="${ssrRenderStyle({ "background": "#ff5f57" })}" data-v-61992fe9></span><span style="${ssrRenderStyle({ "background": "#febc2e" })}" data-v-61992fe9></span><span style="${ssrRenderStyle({ "background": "#28c840" })}" data-v-61992fe9></span></div><span class="code-filename" data-v-61992fe9>mohab.ts</span></div><pre class="code-body" data-v-61992fe9><code data-v-61992fe9><span class="kw" data-v-61992fe9>const</span> <span class="fn" data-v-61992fe9>developer</span> = {
  <span class="key" data-v-61992fe9>name</span>: <span class="str" data-v-61992fe9>&quot;Mohab Mohamed&quot;</span>,
  <span class="key" data-v-61992fe9>role</span>: <span class="str" data-v-61992fe9>&quot;Frontend Developer&quot;</span>,
  <span class="key" data-v-61992fe9>frameworks</span>: [
    <span class="str" data-v-61992fe9>&quot;Vue.js&quot;</span>, <span class="str" data-v-61992fe9>&quot;React&quot;</span>,
    <span class="str" data-v-61992fe9>&quot;Angular&quot;</span>, <span class="str" data-v-61992fe9>&quot;Nuxt&quot;</span>
  ],
  <span class="key" data-v-61992fe9>aiTools</span>: [
    <span class="str" data-v-61992fe9>&quot;Copilot&quot;</span>, <span class="str" data-v-61992fe9>&quot;Cursor&quot;</span>,
    <span class="str" data-v-61992fe9>&quot;ChatGPT&quot;</span>, <span class="str" data-v-61992fe9>&quot;Claude&quot;</span>
  ],
  <span class="key" data-v-61992fe9>passion</span>: <span class="str" data-v-61992fe9>&quot;Building the web&quot;</span>,
  <span class="fn" data-v-61992fe9>code</span>: () =&gt; <span class="str" data-v-61992fe9>&quot;pixel-perfect&quot;</span> <span class="cmt" data-v-61992fe9>\u2728</span>
};</code></pre></div><div class="floating-badge badge-vue" style="${ssrRenderStyle({ "animation-delay": "0s" })}" data-v-61992fe9>Vue.js</div><div class="floating-badge badge-react" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-61992fe9>React</div><div class="floating-badge badge-ts" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-61992fe9>TypeScript</div></div></div><div class="hero-scroll" data-v-61992fe9><span data-v-61992fe9>Scroll to explore</span><div class="scroll-line" data-v-61992fe9></div></div></section><section class="section overview" data-v-61992fe9><div class="container" data-v-61992fe9><div class="overview-grid" data-v-61992fe9><!--[-->`);
      ssrRenderList(overviewCards, (item, i) => {
        _push(`<div class="overview-card" data-v-61992fe9><div class="oc-icon" style="${ssrRenderStyle({ background: item.bg })}" data-v-61992fe9>${ssrInterpolate(item.icon)}</div><h3 data-v-61992fe9>${ssrInterpolate(item.title)}</h3><p data-v-61992fe9>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="marquee-section" data-v-61992fe9><div class="marquee" data-v-61992fe9><div class="marquee-track" data-v-61992fe9><!--[-->`);
      ssrRenderList([...techList, ...techList], (tech, i) => {
        _push(`<span class="marquee-item" data-v-61992fe9>${ssrInterpolate(tech)}</span>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61992fe9"]]);

export { index as default };
//# sourceMappingURL=index-DCw1TB5A.mjs.map
