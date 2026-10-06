import { _ as __nuxt_component_0 } from './PageHeader-By1A9Wqt.mjs';
import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1, c as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Professional Experience" });
    const { experienceEntries, location } = useProfessionalProfile();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-cc1dcd59>`);
      _push(ssrRenderComponent(_component_PageHeader, {
        class: "paper",
        label: "Experience",
        title: "Professional Experience",
        description: "Frontend development, e-commerce, and programming instruction since 2024."
      }, null, _parent));
      _push(`<section aria-label="Work experience" data-v-cc1dcd59><!--[-->`);
      ssrRenderList(unref(experienceEntries), (job, index) => {
        _push(`<article class="${ssrRenderClass(["job-" + index, "job chapter-tight"])}" data-v-cc1dcd59><div class="container job-layout" data-v-cc1dcd59><div class="job-meta" data-v-cc1dcd59><p class="mono" data-v-cc1dcd59>${ssrInterpolate(job.period)}</p><p data-v-cc1dcd59>${ssrInterpolate(job.type)}</p><p data-v-cc1dcd59>${ssrInterpolate(unref(location))}</p></div><div data-v-cc1dcd59><h2 class="display display-md" data-v-cc1dcd59>${ssrInterpolate(job.title)}</h2><p class="company" data-v-cc1dcd59>${ssrInterpolate(job.company)}</p><ul class="responsibilities" data-v-cc1dcd59><!--[-->`);
        ssrRenderList(job.responsibilities, (point) => {
          _push(`<li data-v-cc1dcd59>${ssrInterpolate(point)}</li>`);
        });
        _push(`<!--]--></ul><p class="job-stack" data-v-cc1dcd59><strong data-v-cc1dcd59>Technologies</strong><br data-v-cc1dcd59>${ssrInterpolate(job.technology)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: job.proof,
          class: "line-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(index === 2 ? "About My Background" : "View Related Projects")} `);
              _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(index === 2 ? "About My Background" : "View Related Projects") + " ", 1),
                createVNode(_component_ArrowIcon)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></article>`);
      });
      _push(`<!--]--></section><section class="paper chapter-tight" data-v-cc1dcd59><div class="container education-layout" data-v-cc1dcd59><h2 class="display display-md" data-v-cc1dcd59>Education</h2><div data-v-cc1dcd59><h3 data-v-cc1dcd59>Bachelor of Engineering</h3><p data-v-cc1dcd59>Mechatronics Engineering \xB7 Mansoura University</p><p data-v-cc1dcd59>2019 \u2013 2024</p><p class="education-note" data-v-cc1dcd59>Faculty of Engineering, with a foundation in software, embedded systems, and control.</p><h3 class="training" data-v-cc1dcd59>Embedded Systems Training</h3><p data-v-cc1dcd59>National Telecommunication Institute (NTI) \xB7 2023</p></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cc1dcd59"]]);

export { experience as default };
//# sourceMappingURL=experience-BbHmsC5d.mjs.map
