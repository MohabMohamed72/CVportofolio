import { _ as _export_sfc, u as useHead, a as __nuxt_component_0$1, c as __nuxt_component_1$1, d as _sfc_main$5 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, ref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './ProjectMedia-CRaDEA6x.mjs';
import { u as useCaseStudies } from './useCaseStudies-DSBT46o8.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const technologies = ["Vue 3", "Nuxt 3", "React", "Angular", "TypeScript"];
    const hero = ref(null);
    const active = ref(false);
    const coordinates = ref({ x: 0, y: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_CvDownload = _sfc_main$5;
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "hero",
        ref: hero,
        class: ["hero paper", { "guides-active": unref(active) }],
        "aria-labelledby": "hero-title"
      }, _attrs))} data-v-d5994507><div class="hero-gridlines" aria-hidden="true" data-v-d5994507><span data-v-d5994507></span><span data-v-d5994507></span><span data-v-d5994507></span></div><div class="crosshair" aria-hidden="true" data-v-d5994507><span class="guide guide-x" data-v-d5994507></span><span class="guide guide-y" data-v-d5994507></span><span class="guide-coordinate mono" data-v-d5994507>X ${ssrInterpolate(unref(coordinates).x)} / Y ${ssrInterpolate(unref(coordinates).y)}</span></div><div class="container hero-content" data-v-d5994507><div class="hero-meta mono" data-v-d5994507><span data-v-d5994507>Portfolio / ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</span><span data-v-d5994507>Web Interface Engineering</span><span data-v-d5994507>Mansoura, Egypt</span></div><div class="name-layout" data-v-d5994507><h1 id="hero-title" aria-label="Mohab Mohamed" class="display hero-name" data-v-d5994507><span data-v-d5994507>MOHAB<span class="name-registration" aria-hidden="true" data-v-d5994507>01</span></span><span class="surname" data-v-d5994507>MOHAMED<span class="name-stop" data-v-d5994507>.</span></span></h1><nav class="tech-index" aria-label="Core frontend technologies" data-v-d5994507><ol data-v-d5994507><!--[-->`);
      ssrRenderList(technologies, (technology, index2) => {
        _push(`<li data-v-d5994507><span class="mono" data-v-d5994507>${ssrInterpolate(String(index2 + 1).padStart(2, "0"))}</span><span data-v-d5994507>${ssrInterpolate(technology)}</span></li>`);
      });
      _push(`<!--]--></ol>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/skills" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Skills `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("All Skills "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="hero-introduction" data-v-d5994507><p class="hero-role display" data-v-d5994507>Frontend<br data-v-d5994507><span data-v-d5994507>Developer.</span></p><div class="hero-copy" data-v-d5994507><p data-v-d5994507>I build scalable web applications<br class="desktop-break" data-v-d5994507> for complex products and digital platforms.</p><p class="technology-line" data-v-d5994507>Vue 3 \xB7 Nuxt 3 \xB7 React \xB7 Angular \xB7 TypeScript</p><div class="hero-actions" data-v-d5994507>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "button button-dark primary-project"
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
      _push(ssrRenderComponent(_component_CvDownload, { class: "hero-download" }, null, _parent));
      _push(`</div><div class="hero-social" data-v-d5994507>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="https://github.com/MohabMohamed72" target="_blank" rel="noopener noreferrer" data-v-d5994507>GitHub</a><a href="https://linkedin.com/in/mohab-mohamed-a5121024b" target="_blank" rel="noopener noreferrer" data-v-d5994507>LinkedIn</a></div></div><div class="availability" data-v-d5994507><p data-v-d5994507><span class="availability-dot" aria-hidden="true" data-v-d5994507></span>Available for opportunities</p><span data-v-d5994507>Frontend Development</span><span data-v-d5994507>Mansoura, Egypt \xB7 Arabic / English</span></div></div><div class="hero-bottom" data-v-d5994507><dl class="hero-stats" data-v-d5994507><div data-v-d5994507><dt data-v-d5994507>Years Experience</dt><dd data-v-d5994507>02+</dd></div><div data-v-d5994507><dt data-v-d5994507>Selected Projects</dt><dd data-v-d5994507>07+</dd></div><div data-v-d5994507><dt data-v-d5994507>Core Technologies</dt><dd data-v-d5994507>05</dd></div><div data-v-d5994507><dt data-v-d5994507>Mansoura, Egypt</dt><dd data-v-d5994507>EG</dd></div></dl><a class="scroll-cue" href="#featured-projects" data-v-d5994507><span class="mono" data-v-d5994507>Scroll / Selected Projects</span><span class="scroll-line" aria-hidden="true" data-v-d5994507></span>`);
      _push(ssrRenderComponent(_component_ArrowIcon, { direction: "down" }, null, _parent));
      _push(`</a></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeHero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d5994507"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeFeaturedProjects",
  __ssrInlineRender: true,
  setup(__props) {
    const studies = useCaseStudies();
    const featured = ["hse-management-system", "education-system", "orbit-system"].map((slug) => studies.find((study) => study.slug === slug));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ArrowIcon = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProjectMedia = __nuxt_component_2;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "featured-projects",
        class: "featured paper",
        "aria-labelledby": "projects-title"
      }, _attrs))} data-v-1de7ecbd><div class="container" data-v-1de7ecbd><header class="featured-heading" data-v-1de7ecbd><div data-v-1de7ecbd><p class="mono" data-v-1de7ecbd>01 / Selected Work</p><h2 id="projects-title" class="display" aria-label="Featured Projects" data-v-1de7ecbd><span data-v-1de7ecbd>Featured</span><span class="projects-line" data-v-1de7ecbd><span data-v-1de7ecbd>Projects</span>`);
      _push(ssrRenderComponent(_component_ArrowIcon, { direction: "down" }, null, _parent));
      _push(`</span></h2></div><p data-v-1de7ecbd>Production systems for education, enterprise operations, and workplace safety.</p></header><!--[-->`);
      ssrRenderList(unref(featured), (study, index2) => {
        _push(`<article class="${ssrRenderClass(["feature-" + index2, "project-feature"])}" data-v-1de7ecbd><div class="project-story" data-v-1de7ecbd><span class="project-number mono" data-v-1de7ecbd>${ssrInterpolate(String(index2 + 1).padStart(2, "0"))} / Production System</span><h3 class="display" data-v-1de7ecbd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects/" + study.slug
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(study.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(study.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h3><p class="project-type" data-v-1de7ecbd>${ssrInterpolate(study.category)}</p><p class="project-description" data-v-1de7ecbd>${ssrInterpolate(study.summary)}</p><p class="contribution" data-v-1de7ecbd><strong data-v-1de7ecbd>My Contribution</strong>${ssrInterpolate(study.role)}</p><ul class="project-technologies" data-v-1de7ecbd><!--[-->`);
        ssrRenderList(study.technology.slice(0, 4), (technology) => {
          _push(`<li data-v-1de7ecbd>${ssrInterpolate(technology)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects/" + study.slug,
          class: "line-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`View Case Study `);
              _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("View Case Study "),
                createVNode(_component_ArrowIcon)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="project-visual" data-v-1de7ecbd>`);
        _push(ssrRenderComponent(_component_ProjectMedia, {
          study,
          compact: ""
        }, null, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--><div class="project-directory" data-v-1de7ecbd><p data-v-1de7ecbd>Also built: Orbit Client Portal, commerce applications, and smaller product explorations.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "button button-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Projects `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("View All Projects "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomeFeaturedProjects.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1de7ecbd"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Mohab Mohamed \u2014 Frontend Developer" });
    const profile = useProfessionalProfile();
    const revealObservers = /* @__PURE__ */ new WeakMap();
    const vHomeReveal = {
      mounted(element) {
        if ((void 0).matchMedia("(prefers-reduced-motion:reduce)").matches || !("IntersectionObserver" in void 0)) return;
        const observer = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            element.classList.add("home-entered");
            observer.disconnect();
          }
        }, { threshold: 0.08 });
        revealObservers.set(element, observer);
        observer.observe(element);
      },
      unmounted(element) {
        var _a;
        (_a = revealObservers.get(element)) == null ? void 0 : _a.disconnect();
        revealObservers.delete(element);
      }
    };
    const stack = [
      { name: "Vue 3", kind: "Frontend Framework", size: "large" },
      { name: "TypeScript", kind: "Language", size: "large" },
      { name: "Nuxt 3", kind: "Vue Application Framework", size: "large" },
      { name: "React", kind: "UI Library", size: "medium" },
      { name: "Pinia", kind: "State Management", size: "small" },
      { name: "Angular", kind: "Frontend Framework", size: "medium" },
      { name: "Tailwind CSS", kind: "Styling", size: "small" },
      { name: "REST APIs", kind: "Data Integration", size: "small" }
    ];
    const expertise = [
      { title: "Complex Dashboards", description: "Data-heavy interfaces, operational reporting, permissions, and live status updates." },
      { title: "Business Systems", description: "Engineering ERP workflows that connect clients, teams, documents, and financial operations." },
      { title: "Education Platforms", description: "Multi-tenant learning experiences with protected content, assessments, payments, and progress." },
      { title: "E-Commerce Experiences", description: "Product discovery, branded storefronts, and mobile-responsive checkout interfaces." },
      { title: "Responsive Web Applications", description: "Accessible Arabic / English interfaces, reusable components, and maintainable frontend modules." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHero = __nuxt_component_0;
      const _component_HomeFeaturedProjects = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ArrowIcon = __nuxt_component_1$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "home-page" }, _attrs))} data-v-a7680d40>`);
      _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeFeaturedProjects, null, null, _parent));
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "selected-stack",
        "aria-labelledby": "stack-title"
      }, ssrGetDirectiveProps(_ctx, vHomeReveal)))} data-v-a7680d40><div class="container" data-v-a7680d40><header class="stack-heading" data-v-a7680d40><div data-v-a7680d40><p class="mono" data-v-a7680d40>02 / Stack</p><h2 id="stack-title" class="display" data-v-a7680d40>Selected Stack</h2></div><p data-v-a7680d40>The tools behind the interfaces.<br data-v-a7680d40>The architecture connects them.</p></header><ul class="stack-composition" data-v-a7680d40><!--[-->`);
      ssrRenderList(stack, (item) => {
        _push(`<li class="${ssrRenderClass(item.size)}" data-v-a7680d40><span class="display" data-v-a7680d40>${ssrInterpolate(item.name)}</span><span class="stack-kind" data-v-a7680d40>${ssrInterpolate(item.kind)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/skills",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`All Technical Skills `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("All Technical Skills "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section${ssrRenderAttrs(mergeProps({
        class: "expertise paper",
        "aria-labelledby": "expertise-title"
      }, ssrGetDirectiveProps(_ctx, vHomeReveal)))} data-v-a7680d40><div class="container" data-v-a7680d40><header class="expertise-heading" data-v-a7680d40><p class="mono" data-v-a7680d40>03 / Expertise</p><h2 id="expertise-title" class="display" data-v-a7680d40>What I Build</h2></header><ol class="expertise-list" data-v-a7680d40><!--[-->`);
      ssrRenderList(expertise, (item, index2) => {
        _push(`<li data-v-a7680d40><span class="expertise-number mono" data-v-a7680d40>${ssrInterpolate(String(index2 + 1).padStart(2, "0"))}</span><h3 class="display" data-v-a7680d40>${ssrInterpolate(item.title)}</h3><p data-v-a7680d40>${ssrInterpolate(item.description)}</p>`);
        _push(ssrRenderComponent(_component_ArrowIcon, { "aria-hidden": "true" }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ol><div class="human-note" data-v-a7680d40><p class="display" data-v-a7680d40>I care about interfaces that are <span data-v-a7680d40>fast, clear, maintainable,</span> and genuinely useful.</p><div data-v-a7680d40><h3 data-v-a7680d40>Work Experience</h3><ul data-v-a7680d40><!--[-->`);
      ssrRenderList(unref(profile).experienceEntries, (job) => {
        _push(`<li data-v-a7680d40><strong data-v-a7680d40>${ssrInterpolate(job.title)}</strong><span data-v-a7680d40>${ssrInterpolate(job.period)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/experience",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View Experience `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("View Experience "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="home-contact" aria-labelledby="home-contact-title" data-v-a7680d40><div class="container" data-v-a7680d40><div class="contact-heading" data-v-a7680d40><p class="mono" data-v-a7680d40>04 / Contact</p><h2 id="home-contact-title" class="display" data-v-a7680d40>Let&#39;s build<br data-v-a7680d40><span data-v-a7680d40>something useful.</span></h2><p data-v-a7680d40>Have a project or frontend opportunity?</p></div><div class="contact-actions" data-v-a7680d40><a class="contact-email" href="mailto:mohabmohamedd772@gmail.com" data-v-a7680d40><span data-v-a7680d40>mohabmohamedd772@gmail.com</span>`);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</a><div data-v-a7680d40><a href="https://wa.me/201007599123" target="_blank" rel="noopener noreferrer" class="line-link" data-v-a7680d40>WhatsApp `);
      _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "line-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Form `);
            _push2(ssrRenderComponent(_component_ArrowIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("Contact Form "),
              createVNode(_component_ArrowIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7680d40"]]);

export { index as default };
//# sourceMappingURL=index-CSxKcjUj.mjs.map
