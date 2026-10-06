import { _ as _export_sfc, e as useRoute, f as createError, u as useHead, a as __nuxt_component_0$1, c as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './ProjectMedia-CRaDEA6x.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { u as useCaseStudies } from './useCaseStudies-DSBT46o8.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const studies = useCaseStudies();
    const index = studies.findIndex((item) => item.slug === route.params.slug);
    if (index < 0) throw createError({ statusCode: 404, statusMessage: "Case study not found" });
    const study = studies[index];
    const next = studies[(index + 1) % studies.length];
    useHead({ title: study.title + " \u2014 Case Study" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_ProjectMedia = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-267d90bc><article data-v-267d90bc><header class="case-intro paper" data-v-267d90bc><div class="container" data-v-267d90bc><div class="index-meta" data-v-267d90bc>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 All projects`);
          } else {
            return [
              createTextVNode("\u2190 All projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-267d90bc>Case study / ${ssrInterpolate(String(unref(index) + 1).padStart(2, "0"))}</span></div><div class="case-intro-grid" data-v-267d90bc><h1 class="display display-xl" data-v-267d90bc>${ssrInterpolate(unref(study).title)}</h1><div data-v-267d90bc><p class="body-lg" data-v-267d90bc>${ssrInterpolate(unref(study).summary)}</p><p class="case-category" data-v-267d90bc>${ssrInterpolate(unref(study).category)}</p></div></div><nav class="case-navigation" aria-label="Case study sections" data-v-267d90bc><a href="#context" data-v-267d90bc>Overview &amp; Contribution</a><a href="#system" data-v-267d90bc>What I Built</a><a href="#features" data-v-267d90bc>Key Features</a><a href="#architecture" data-v-267d90bc>Tech Stack</a></nav></div></header><section id="context" class="case-overview chapter" data-v-267d90bc><div class="container overview-grid" data-v-267d90bc><div class="overview-aside" data-v-267d90bc><h2 class="role-heading" data-v-267d90bc>My Contribution</h2><p data-v-267d90bc>${ssrInterpolate(unref(study).role)}</p>`);
      if (unref(study).external) {
        _push(`<a${ssrRenderAttr("href", unref(study).external)} target="_blank" rel="noopener noreferrer" class="line-link" data-v-267d90bc>View Project `);
        _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Overview</h2><p class="body-lg" data-v-267d90bc>${ssrInterpolate(unref(study).context)}</p><h3 class="problem-heading" data-v-267d90bc>The Problem</h3><p class="body-lg" data-v-267d90bc>${ssrInterpolate(unref(study).problem)}</p></div></div></section><section id="features" class="case-detail chapter" data-v-267d90bc><div class="container detail-grid" data-v-267d90bc><div data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Key Features</h2></div><div data-v-267d90bc><h3 data-v-267d90bc>Features</h3><ul data-v-267d90bc><!--[-->`);
      ssrRenderList(unref(study).features, (feature) => {
        _push(`<li data-v-267d90bc>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div></div></section><section id="system" class="case-system paper chapter" data-v-267d90bc><div class="container" data-v-267d90bc><div class="section-head" data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>What I Built</h2><p data-v-267d90bc>${ssrInterpolate(unref(study).system)}</p></div>`);
      _push(ssrRenderComponent(_component_ProjectMedia, { study: unref(study) }, null, _parent));
      _push(`<div class="engineering-threads" data-v-267d90bc><!--[-->`);
      ssrRenderList(unref(study).threads, (thread) => {
        _push(`<article data-v-267d90bc><h3 data-v-267d90bc>${ssrInterpolate(thread.title)}</h3><p data-v-267d90bc>${ssrInterpolate(thread.description)}</p></article>`);
      });
      _push(`<!--]--></div></div></section><section id="architecture" class="case-architecture paper-soft chapter" data-v-267d90bc><div class="container" data-v-267d90bc><div class="section-head" data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Tech Stack</h2><p data-v-267d90bc>Technologies and architecture selected for the actual workflows.</p></div><div class="architecture-grid" data-v-267d90bc><div data-v-267d90bc><h3 data-v-267d90bc>Technologies</h3><ul data-v-267d90bc><!--[-->`);
      ssrRenderList(unref(study).technology, (item) => {
        _push(`<li data-v-267d90bc>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div data-v-267d90bc><h3 data-v-267d90bc>Architecture</h3><ul data-v-267d90bc><!--[-->`);
      ssrRenderList(unref(study).architecture, (item) => {
        _push(`<li data-v-267d90bc>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div></div></section><section class="case-challenges chapter-tight" data-v-267d90bc><div class="container" data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Challenges</h2><p class="body-lg" data-v-267d90bc>${ssrInterpolate(unref(study).challenge)}</p></div></section><section id="screenshots" class="case-screenshots paper chapter-tight" data-v-267d90bc><div class="container" data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Screenshots</h2>`);
      if (unref(study).screenshot) {
        _push(ssrRenderComponent(_component_ProjectMedia, { study: unref(study) }, null, _parent));
      } else {
        _push(`<p data-v-267d90bc>Actual product interface screenshots have not been supplied yet. The diagram above describes verified product scope; it is not a screenshot.</p>`);
      }
      _push(`</div></section><section id="outcome" class="case-result chapter" data-v-267d90bc><div class="container result-grid" data-v-267d90bc><div data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Result</h2><p class="body-lg" data-v-267d90bc>${ssrInterpolate(unref(study).result)}</p></div></div></section><section class="chapter-tight paper-soft" data-v-267d90bc><div class="container" data-v-267d90bc><h2 class="display display-md" data-v-267d90bc>Links</h2>`);
      if (unref(study).external) {
        _push(`<a${ssrRenderAttr("href", unref(study).external)} target="_blank" rel="noopener noreferrer" class="line-link" data-v-267d90bc>View Project `);
        _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<p data-v-267d90bc>A public project link is not available.</p>`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Projects `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("All Projects "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></article>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/" + unref(next).slug,
        class: "next-project"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="mono" data-v-267d90bc${_scopeId}>NEXT CASE STUDY</span><strong class="display" data-v-267d90bc${_scopeId}>${ssrInterpolate(unref(next).title)}</strong>`);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "mono" }, "NEXT CASE STUDY"),
              createVNode("strong", { class: "display" }, toDisplayString(unref(next).title), 1),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-267d90bc"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-C1S59dGg.mjs.map
