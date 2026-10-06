import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageHeader",
  __ssrInlineRender: true,
  props: {
    label: {},
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "page-header" }, _attrs))} data-v-c41aa111><div class="container" data-v-c41aa111><p class="page-label" data-v-c41aa111>${ssrInterpolate(__props.label)}</p><h1 class="display" data-v-c41aa111>${ssrInterpolate(__props.title)}</h1><p class="body-lg page-description" data-v-c41aa111>${ssrInterpolate(__props.description)}</p></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c41aa111"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHeader-By1A9Wqt.mjs.map
