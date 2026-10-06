import { _ as __nuxt_component_0 } from './PageHeader-By1A9Wqt.mjs';
import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1, c as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useProfessionalProfile } from './useProfessionalProfile-BvD7gs9m.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "About Me" });
    const profile = useProfessionalProfile();
    const facts = [{ label: "Name", value: profile.name }, { label: "Role", value: profile.role }, { label: "Location", value: profile.location }, { label: "Experience", value: profile.experience }, { label: "Languages", value: profile.languages }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-81d3a1a3>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        label: "About",
        title: "About Me",
        description: "Frontend Developer based in Mansoura, Egypt, with an engineering background and production application experience."
      }, null, _parent));
      _push(`<section class="paper chapter-tight" data-v-81d3a1a3><div class="container about-summary" data-v-81d3a1a3><div data-v-81d3a1a3><h2 class="display display-md" data-v-81d3a1a3>Professional Summary</h2><p data-v-81d3a1a3>I build frontend applications for enterprise operations, education, safety management, and e-commerce. My work includes complex dashboards, role-based workflows, bilingual interfaces, and real-time integrations.</p><p data-v-81d3a1a3>Mechatronics Engineering at Mansoura University gave me a foundation in software, hardware, and interconnected systems. NTI Embedded Systems training added practical experience with microcontrollers and real-time constraints.</p><p data-v-81d3a1a3>Alongside development, I teach programming. Explaining Arduino, AI, Machine Learning, Computer Vision, Scratch, Python, and C helps me communicate clearly and break complex problems into manageable steps.</p></div><aside data-v-81d3a1a3><h2 data-v-81d3a1a3>Quick Info</h2><dl data-v-81d3a1a3><!--[-->`);
      ssrRenderList(facts, (fact) => {
        _push(`<div data-v-81d3a1a3><dt data-v-81d3a1a3>${ssrInterpolate(fact.label)}</dt><dd data-v-81d3a1a3>${ssrInterpolate(fact.value)}</dd></div>`);
      });
      _push(`<!--]--></dl></aside></div></section><section class="paper-soft chapter-tight" data-v-81d3a1a3><div class="container education-layout" data-v-81d3a1a3><h2 class="display display-md" data-v-81d3a1a3>Education</h2><div data-v-81d3a1a3><h3 data-v-81d3a1a3>Bachelor of Engineering</h3><p data-v-81d3a1a3>Mechatronics Engineering \xB7 Mansoura University, Faculty of Engineering</p><p class="education-date" data-v-81d3a1a3>2019 \u2013 2024</p><h3 class="training-title" data-v-81d3a1a3>Embedded Systems Training</h3><p data-v-81d3a1a3>National Telecommunication Institute (NTI) \xB7 2023</p></div></div></section><section class="chapter-tight" data-v-81d3a1a3><div class="container" data-v-81d3a1a3><h2 class="display display-md" data-v-81d3a1a3>What I Focus On</h2><ul class="focus-list" data-v-81d3a1a3><li data-v-81d3a1a3>Frontend Applications</li><li data-v-81d3a1a3>Dashboard Systems</li><li data-v-81d3a1a3>E-Commerce</li><li data-v-81d3a1a3>Educational Platforms</li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Projects `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("View Projects "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81d3a1a3"]]);

export { about as default };
//# sourceMappingURL=about--6VNITLI.mjs.map
