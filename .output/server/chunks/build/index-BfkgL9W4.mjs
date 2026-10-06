import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1, c as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './ProjectMedia-CRaDEA6x.mjs';
import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Projects" });
    const major = useCaseStudies();
    const secondary = [
      { title: "Fashion Store", category: "E-commerce", detail: "React storefront with product discovery, categories, and cart.", role: "Frontend development: product browsing, filtering, and cart interfaces.", technology: "React.js \xB7 JavaScript \xB7 Tailwind CSS", link: "https://ecommerce8.netlify.app/" },
      { title: "Mega E-Commerce", category: "E-commerce", detail: "Vue marketplace across multiple consumer product categories.", role: "Frontend development: marketplace browsing, search, and shopping state.", technology: "Vue.js \xB7 TypeScript \xB7 Tailwind CSS \xB7 Pinia", link: "https://ecommerce759.netlify.app/" },
      { title: "Alkhalil Traveling", category: "Travel & booking", detail: "Flight and hotel booking workflows with e-ticket generation.", role: "Frontend development: booking workflows and e-ticket interfaces.", technology: "Vue.js \xB7 TypeScript \xB7 SCSS \xB7 REST APIs \xB7 Payment Integration", link: "" }
    ];
    const experiments = [{ title: "FilmPire", subtitle: "Movies & actors discovery platform", detail: "Movie discovery with actor profiles, ratings, search, and cast details.", role: "Frontend development: API-driven discovery and movie detail interfaces.", technology: "React.js \xB7 JavaScript \xB7 REST APIs \xB7 Tailwind CSS", link: "https://filmpiren.netlify.app/" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_ProjectMedia = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-73c784fe><section class="paper project-intro" data-v-73c784fe><div class="container" data-v-73c784fe><p class="page-label" data-v-73c784fe>Projects</p><div class="project-intro-grid" data-v-73c784fe><h1 class="display display-lg" data-v-73c784fe>Projects</h1><p class="body-lg" data-v-73c784fe>Selected web applications and platforms I\u2019ve worked on.</p></div><nav class="project-directory" aria-label="Jump to a production system" data-v-73c784fe><!--[-->`);
      ssrRenderList(unref(major), (study) => {
        _push(`<a${ssrRenderAttr("href", "#" + study.slug)} data-v-73c784fe><strong data-v-73c784fe>${ssrInterpolate(study.shortTitle)}</strong><span data-v-73c784fe>${ssrInterpolate(study.category)}</span></a>`);
      });
      _push(`<!--]--></nav></div></section><section class="major-list" data-v-73c784fe><!--[-->`);
      ssrRenderList(unref(major), (study, i) => {
        _push(`<article${ssrRenderAttr("id", study.slug)} class="${ssrRenderClass(["major-" + i, "major-project"])}" data-v-73c784fe><div class="container" data-v-73c784fe><div class="major-header" data-v-73c784fe><div data-v-73c784fe><h2 class="display display-lg" data-v-73c784fe>${ssrInterpolate(study.title)}</h2></div><p data-v-73c784fe>${ssrInterpolate(study.category)}<br data-v-73c784fe><span data-v-73c784fe>${ssrInterpolate(study.summary)}</span></p></div><div class="project-facts" data-v-73c784fe><p data-v-73c784fe><strong data-v-73c784fe>My Role</strong>${ssrInterpolate(study.role)}</p><p data-v-73c784fe><strong data-v-73c784fe>Tech Stack</strong>${ssrInterpolate(study.technology.slice(0, 5).join(" \xB7 "))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects/" + study.slug,
          class: "line-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View Details`);
            } else {
              return [
                createTextVNode("View Details")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="project-features" data-v-73c784fe><h3 data-v-73c784fe>Key Features</h3><ul data-v-73c784fe><!--[-->`);
        ssrRenderList(study.features.slice(0, 4), (feature) => {
          _push(`<li data-v-73c784fe>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul>`);
        if (study.external) {
          _push(`<a${ssrRenderAttr("href", study.external)} target="_blank" rel="noopener noreferrer" class="line-link" data-v-73c784fe>View Project `);
          _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ProjectMedia, { study }, null, _parent));
        _push(`<div class="major-foot" data-v-73c784fe><p data-v-73c784fe>${ssrInterpolate(study.problem)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects/" + study.slug,
          class: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View Details `);
              _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("View Details "),
                createVNode(_component_ArrowIcon)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></article>`);
      });
      _push(`<!--]--></section><section id="orbit-client-portal" class="portal-feature paper-soft chapter-tight" data-v-73c784fe><div class="container" data-v-73c784fe><h2 class="display display-md" data-v-73c784fe>Orbit Client Portal</h2><p class="portal-type" data-v-73c784fe>Client-facing engineering portal</p><p data-v-73c784fe>A client-facing experience within Orbit\u2019s role-based project ecosystem.</p><div class="project-facts" data-v-73c784fe><p data-v-73c784fe><strong data-v-73c784fe>My Role</strong>Frontend development for the client-facing portal.</p><p data-v-73c784fe><strong data-v-73c784fe>Core Technologies</strong>Orbit ecosystem: Vue 3 \xB7 TypeScript \xB7 Pinia \xB7 SCSS \xB7 REST APIs. Shared system stack; not a separate portal-stack claim.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects/orbit-system",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Orbit Case Study`);
          } else {
            return [
              createTextVNode("View Orbit Case Study")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="other-work" class="other-work paper chapter" data-v-73c784fe><div class="container" data-v-73c784fe><div class="section-head" data-v-73c784fe><h2 class="display display-md" data-v-73c784fe>Other Projects</h2><p data-v-73c784fe>Commerce flows and adjacent product work.</p></div><div class="other-list" data-v-73c784fe><!--[-->`);
      ssrRenderList(secondary, (item) => {
        _push(`<article class="other-row" data-v-73c784fe><div data-v-73c784fe><h3 class="display" data-v-73c784fe>${ssrInterpolate(item.title)}</h3><p class="project-type" data-v-73c784fe>${ssrInterpolate(item.category)}</p></div><div data-v-73c784fe><p data-v-73c784fe>${ssrInterpolate(item.detail)}</p><p class="secondary-fact" data-v-73c784fe><strong data-v-73c784fe>My Role</strong>${ssrInterpolate(item.role)}</p><p class="secondary-fact" data-v-73c784fe><strong data-v-73c784fe>Core Technologies</strong>${ssrInterpolate(item.technology)}</p></div>`);
        if (item.link) {
          _push(`<a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener noreferrer" class="line-link" data-v-73c784fe>View Project `);
          _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<div class="unavailable-action" data-v-73c784fe><p data-v-73c784fe>Live preview unavailable.</p><a href="mailto:mohabmohamedd772@gmail.com?subject=Alkhalil%20Traveling%20project%20details" class="line-link" data-v-73c784fe>Request Project Details `);
          _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
          _push(`</a></div>`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></div></section><section class="experiments chapter-tight" data-v-73c784fe><div class="container experiments-inner" data-v-73c784fe><div data-v-73c784fe><h2 class="display display-md" data-v-73c784fe>Smaller Projects</h2><p data-v-73c784fe>Space to explore different product patterns and stacks.</p></div><!--[-->`);
      ssrRenderList(experiments, (project) => {
        _push(`<div class="experiment-item" data-v-73c784fe><h3 class="display" data-v-73c784fe>${ssrInterpolate(project.title)}</h3><p class="project-type" data-v-73c784fe>${ssrInterpolate(project.subtitle)}</p><p data-v-73c784fe>${ssrInterpolate(project.detail)}</p><p class="secondary-fact" data-v-73c784fe><strong data-v-73c784fe>My Role</strong>${ssrInterpolate(project.role)}</p><p class="secondary-fact" data-v-73c784fe><strong data-v-73c784fe>Core Technologies</strong>${ssrInterpolate(project.technology)}</p>`);
        if (project.link) {
          _push(`<a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener noreferrer" class="line-link" data-v-73c784fe>View Project `);
          _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
          _push(`</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-73c784fe"]]);

export { index as default };
//# sourceMappingURL=index-BfkgL9W4.mjs.map
