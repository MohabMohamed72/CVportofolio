import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectMedia",
  __ssrInlineRender: true,
  props: {
    study: {},
    compact: { type: Boolean },
    eager: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<figure${ssrRenderAttrs(mergeProps({
        class: ["project-media", { compact: __props.compact }]
      }, _attrs))} data-v-c8441dd5>`);
      if (__props.study.screenshot) {
        _push(`<img class="project-screenshot"${ssrRenderAttr("src", __props.study.screenshot)}${ssrRenderAttr("alt", __props.study.title + " interface screenshot")}${ssrRenderAttr("loading", __props.eager ? "eager" : "lazy")}${ssrRenderAttr("fetchpriority", __props.eager ? "high" : "auto")} width="1600" height="1000" data-v-c8441dd5>`);
      } else {
        _push(`<div class="${ssrRenderClass([__props.study.slug, "system-map"])}" data-v-c8441dd5><div class="map-heading" data-v-c8441dd5><strong data-v-c8441dd5>${ssrInterpolate(__props.study.category)}</strong><span data-v-c8441dd5>Product relationships \xB7 schematic</span></div>`);
        if (__props.study.slug === "education-system") {
          _push(`<div class="tenant-map" data-v-c8441dd5><div class="tenant-origin" data-v-c8441dd5><strong class="display" data-v-c8441dd5>One platform.<br data-v-c8441dd5>Each teacher\u2019s identity.</strong><p data-v-c8441dd5>A teacher\u2019s domain selects their brand and learning experience.</p></div><div class="tenant-branches" data-v-c8441dd5><div data-v-c8441dd5><h3 data-v-c8441dd5>Identity &amp; discovery</h3><p data-v-c8441dd5>Brand \xB7 stages \xB7 courses \xB7 books<br data-v-c8441dd5>Blog \xB7 FAQs \xB7 contact</p></div><div data-v-c8441dd5><h3 data-v-c8441dd5>Protected learning</h3><p data-v-c8441dd5>Multimedia \xB7 live sessions<br data-v-c8441dd5>Watermark &amp; access controls</p></div><div data-v-c8441dd5><h3 data-v-c8441dd5>Student continuity</h3><p data-v-c8441dd5>Payments \xB7 homework \xB7 timed exams<br data-v-c8441dd5>Favorites \xB7 progress</p></div></div></div>`);
        } else if (__props.study.slug === "orbit-system") {
          _push(`<div class="orbit-map" data-v-c8441dd5><h3 class="display" data-v-c8441dd5>A project moves.<br data-v-c8441dd5>The teams stay connected.</h3><ol class="lifecycle" data-v-c8441dd5><!--[-->`);
          ssrRenderList(__props.study.workflow, (step) => {
            _push(`<li data-v-c8441dd5>${ssrInterpolate(step)}</li>`);
          });
          _push(`<!--]--></ol><div class="operations" data-v-c8441dd5><span data-v-c8441dd5>Client &amp; project</span><span data-v-c8441dd5>People &amp; daily work</span><span data-v-c8441dd5>Finance &amp; documents</span><span data-v-c8441dd5>Chat &amp; live notifications</span></div></div>`);
        } else {
          _push(`<div class="safety-map" data-v-c8441dd5><h3 class="display" data-v-c8441dd5>Reported is not resolved.</h3><ol data-v-c8441dd5><!--[-->`);
          ssrRenderList(__props.study.workflow, (step, i) => {
            _push(`<li data-v-c8441dd5><span data-v-c8441dd5>${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><strong data-v-c8441dd5>${ssrInterpolate(step)}</strong><small data-v-c8441dd5>${ssrInterpolate(["Observation or incident", "Evidence & witnesses", "Five Whys analysis", "Assigned actions & due dates", "Action verification", "Lessons learned & closure"][i])}</small></li>`);
          });
          _push(`<!--]--></ol></div>`);
        }
        _push(`<p class="map-stack" data-v-c8441dd5>${ssrInterpolate(__props.study.technology.slice(0, 3).join(" \xB7 "))}</p></div>`);
      }
      if (!__props.study.screenshot) {
        _push(`<figcaption class="media-caption" data-v-c8441dd5>Verified product scope, not an interface screenshot. Actual product captures are pending.</figcaption>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</figure>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectMedia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8441dd5"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ProjectMedia-CRaDEA6x.mjs.map
