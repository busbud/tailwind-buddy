import { defineComponent, getCurrentInstance, toRaw, computed, h, resolveComponent, Text, useSSRContext, mergeProps, unref, Comment } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import destr from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import { pascalCase, kebabCase } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import { find, html } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/index.js';
import { ssrRenderComponent } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { j as useContentPreview } from './server.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@unhead+ssr@1.9.12/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/shiki@1.6.3/node_modules/shiki/dist/core.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@shikijs+transformers@1.6.3/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unified@11.0.4/node_modules/unified/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/remark-mdc@3.2.1/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/remark-emoji@4.0.1/node_modules/remark-emoji/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/minisearch@6.3.0/node_modules/minisearch/dist/es/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ipx@2.1.0_ioredis@5.4.1/node_modules/ipx/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unhead@1.9.12/node_modules/unhead/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@unhead+shared@1.9.12/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue-router@4.3.2_vue@3.4.27_typescript@5.4.5_/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/cookie-es@1.1.0/node_modules/cookie-es/dist/index.mjs';

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const _sfc_main$1 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: void 0
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    }
  },
  async setup(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const $nuxt = (_c = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app) == null ? void 0 : _c.$nuxt;
    const route = ($nuxt == null ? void 0 : $nuxt.$route) || ($nuxt == null ? void 0 : $nuxt._route);
    const { mdc } = ((_d = $nuxt == null ? void 0 : $nuxt.$config) == null ? void 0 : _d.public) || {};
    const tags = {
      ...((_e = mdc == null ? void 0 : mdc.components) == null ? void 0 : _e.prose) && props.prose !== false ? proseComponentMap : {},
      ...((_f = mdc == null ? void 0 : mdc.components) == null ? void 0 : _f.map) || {},
      ...toRaw(((_h = (_g = props.data) == null ? void 0 : _g.mdc) == null ? void 0 : _h.components) || {}),
      ...props.components
    };
    const contentKey = computed(() => {
      var _a2;
      const components = (((_a2 = props.body) == null ? void 0 : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
    });
    await resolveContentComponents(props.body, { tags });
    return { tags, contentKey, route };
  },
  render(ctx) {
    var _a, _b, _c;
    const { tags, tag, body, data, contentKey, route } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route };
    const component = tag !== false ? resolveVueComponent(tag || ((_a = meta.component) == null ? void 0 : _a.name) || meta.component || "div") : void 0;
    const childrenRenderer = renderSlots(body, h, meta, meta);
    return component ? h(component, { ...(_b = meta.component) == null ? void 0 : _b.props, ...this.$attrs, key: contentKey }, childrenRenderer) : (_c = childrenRenderer.default) == null ? void 0 : _c.call(childrenRenderer);
  }
});
function renderNode(node, h2, documentMeta, parentScope = {}) {
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const component = resolveVueComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    renderSlots(node, h2, documentMeta, { ...parentScope, ...props })
  );
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a2;
  var _a, _b;
  const data = {
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return void 0;
  }, data);
  const defaultValue = (_b = node.props) == null ? void 0 : _b.defaultValue;
  return h2(Text, (_a2 = value != null ? value : defaultValue) != null ? _a2 : "");
}
function renderSlots(node, h2, documentMeta, parentProps) {
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || [];
    if (node2.type === "element") {
      data[slotName].push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: []
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, children2]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = () => {
      const vNodes = children2.map((child) => renderNode(child, h2, documentMeta, parentProps));
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key) && !nativeInputs.includes(tag)) {
      return propsToDataRxModel(key, value, data, documentMeta);
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta) {
  const number = (d) => +d;
  const trim = (d) => d.trim();
  const noop = (d) => d;
  const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k) => {
    d[k] = true;
    return d;
  }, {});
  const field = "value";
  const event = mods.lazy ? "change" : "input";
  const processor = mods.number ? number : mods.trim ? trim : noop;
  data[field] = evalInContext(value, documentMeta);
  data.on = data.on || {};
  data.on[event] = (e) => documentMeta[value] = processor(e);
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveVueComponent = (component) => {
  if (!htmlTags.includes(component) && !(component == null ? void 0 : component.render) && !(component == null ? void 0 : component.ssrRender)) {
    const componentFn = resolveComponent(pascalCase(component), false);
    if (typeof componentFn === "object") {
      return componentFn;
    }
  }
  return component;
};
function evalInContext(code, context) {
  const result = code.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if ((c == null ? void 0 : c.render) || (c == null ? void 0 : c.ssrRender) || (c == null ? void 0 : c.__ssrInlineRender)) {
      return;
    }
    const resolvedComponent = resolveVueComponent(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
function findMappedTag(node, tags) {
  var _a;
  const tag = node.tag;
  if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxtjs+mdc@0.6.1_rollup@4.18.0/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentRendererMarkdown",
  __ssrInlineRender: true,
  props: {
    /**
     * Content to render
     */
    value: {
      type: Object,
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: String,
      default: "div"
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const debug = useContentPreview().isEnabled();
    const body = computed(() => {
      let body2 = props.value.body || props.value;
      if (props.excerpt && props.value.excerpt) {
        body2 = props.value.excerpt;
      }
      return body2;
    });
    const data = computed(() => {
      const { body: body2, excerpt, ...data2 } = props.value;
      return {
        ...data2,
        ...props.data
      };
    });
    const mdcComponents = computed(() => {
      return {
        ...props.components,
        ...data.value._components || {}
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDCRenderer = __nuxt_component_0;
      _push(ssrRenderComponent(_component_MDCRenderer, mergeProps({
        body: body.value,
        data: data.value,
        tag: __props.tag,
        components: mdcComponents.value,
        "data-content-id": unref(debug) ? __props.value._id : void 0
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+content@2.12.1_ioredis@5.4.1_nuxt@3.11.2_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_6z2aizzl4o6tqt2aeem7x7h7uy/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentRendererMarkdown-Ceiv-2ss.mjs.map
