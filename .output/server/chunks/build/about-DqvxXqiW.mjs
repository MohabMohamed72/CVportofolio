import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "About" });
    const details = [
      { label: "Name", value: "Mohab Mohamed" },
      { label: "Location", value: "Mansoura, Egypt" },
      { label: "Experience", value: "1+ Year Professional" },
      { label: "Frameworks", value: "Vue, React, Angular, Nuxt" },
      { label: "Languages", value: "Arabic (Native), English" },
      { label: "Instructor", value: "2+ Years, 200+ Students" }
    ];
    const whatIDo = [
      { title: "Frontend Development", desc: "Building modern, responsive web applications using Vue.js, React, Angular, and Nuxt.js with TypeScript." },
      { title: "UI/UX Implementation", desc: "Translating Figma designs into pixel-perfect interfaces with Tailwind CSS, SCSS, and cross-browser compatibility." },
      { title: "AI-Powered Workflows", desc: "Integrating GitHub Copilot, Cursor AI, ChatGPT into development for 40% faster delivery." },
      { title: "Dashboard Systems", desc: "Complex admin panels with analytics, role-based access, real-time data visualization, and payment integration." },
      { title: "API Integration", desc: "Connecting frontends to RESTful APIs, GraphQL endpoints, payment gateways, and third-party services." },
      { title: "Teaching & Mentoring", desc: "Sharing knowledge in Python, ML, and frontend development with 200+ students across multiple programs." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-about" }, _attrs))} data-v-be75804e><section class="section" data-v-be75804e><div class="container" data-v-be75804e><div class="about-header" data-v-be75804e><span class="section-label" data-v-be75804e>// About Me</span><h1 class="section-title" data-v-be75804e>Passionate about building<br data-v-be75804e><span class="gradient-text" data-v-be75804e>exceptional web experiences</span></h1></div><div class="about-grid" data-v-be75804e><div class="about-content" data-v-be75804e><p class="about-text" data-v-be75804e> I&#39;m <strong data-v-be75804e>Mohab Mohamed</strong>, a Frontend Developer based in Mansoura, Egypt. I hold a Bachelor&#39;s degree in Mechatronics Engineering from Mansoura University, which gave me a unique blend of software and hardware skills. </p><p class="about-text" data-v-be75804e> With 1+ year of professional experience, I specialize in building scalable web applications using <strong data-v-be75804e>Vue.js, React.js, Angular, Nuxt.js, and TypeScript</strong>. I love turning Figma designs into pixel-perfect, responsive interfaces. </p><p class="about-text" data-v-be75804e> What sets me apart is my deep integration of <strong data-v-be75804e>AI-powered tools</strong> into my workflow \u2014 GitHub Copilot, Cursor AI, ChatGPT, and Claude are part of my daily toolkit, helping me deliver faster, cleaner, and more innovative solutions. </p><p class="about-text" data-v-be75804e> Beyond coding, I&#39;m also a <strong data-v-be75804e>programming instructor</strong> with 2+ years of teaching experience, mentoring 200+ students in Python, Machine Learning, and more. </p><div class="about-actions" data-v-be75804e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get In Touch`);
          } else {
            return [
              createTextVNode("Get In Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/MohabMohamed72" target="_blank" class="btn-outline" data-v-be75804e>View GitHub</a></div></div><div class="about-details" data-v-be75804e><div class="detail-card" data-v-be75804e><div class="detail-items" data-v-be75804e><!--[-->`);
      ssrRenderList(details, (item, i) => {
        _push(`<div class="detail-item" data-v-be75804e><span class="detail-label" data-v-be75804e>${ssrInterpolate(item.label)}</span><span class="detail-value" data-v-be75804e>${ssrInterpolate(item.value)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="edu-card" data-v-be75804e><div class="edu-icon" data-v-be75804e>\u{1F393}</div><h3 data-v-be75804e>Education</h3><p class="edu-degree" data-v-be75804e>B.Eng \u2014 Mechatronics</p><p class="edu-uni" data-v-be75804e>Mansoura University</p><p class="edu-year" data-v-be75804e>2019 \u2013 2024</p></div></div></div><div class="what-i-do" data-v-be75804e><h2 class="section-title" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "48px" })}" data-v-be75804e> What I <span class="gradient-text" data-v-be75804e>Bring</span></h2><div class="wid-grid" data-v-be75804e><!--[-->`);
      ssrRenderList(whatIDo, (item, i) => {
        _push(`<div class="wid-card" data-v-be75804e><span class="wid-num" data-v-be75804e>0${ssrInterpolate(i + 1)}</span><h3 data-v-be75804e>${ssrInterpolate(item.title)}</h3><p data-v-be75804e>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be75804e"]]);

export { about as default };
//# sourceMappingURL=about-DqvxXqiW.mjs.map
