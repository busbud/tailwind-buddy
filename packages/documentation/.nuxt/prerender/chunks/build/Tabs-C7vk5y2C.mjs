import { useSSRContext, defineComponent, ref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, createVNode, resolveDynamicComponent, unref, withModifiers, withDirectives, vShow, renderSlot, computed } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderSlot } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { useForwardPropsEmits, TabsRoot, useForwardProps, TabsTrigger, TabsList, TabsContent } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/radix-vue@1.8.3_vue@3.4.27_typescript@5.4.5_/node_modules/radix-vue/dist/index.js';
import { c as cn } from './utils-H80jjgLf.mjs';
import __nuxt_component_1 from './Icon-CBPqgZrW.mjs';
import { _ as _sfc_main$5 } from './Card-T9vkftQH.mjs';
import { u as useConfig, a as _sfc_main$1$1, _ as _sfc_main$6 } from './ScrollArea-Dp1JD7h-.mjs';
import _sfc_main$7 from './CodeCopy-zWliNKu9.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/tailwind-merge@2.3.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs';
import './index-BI9maR1C.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import './server.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@unhead+ssr@1.9.12/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
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
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@iconify+vue@4.1.2_vue@3.4.27_typescript@5.4.5_/node_modules/@iconify/vue/dist/iconify.mjs';
import './index-D15JYp8X.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/Tabs.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        class: unref(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
      }, delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    variant: { default: "separate" },
    padded: { type: Boolean, default: true }
  },
  setup(__props) {
    const activeTabIndex = ref(0);
    const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon));
    function icon(props) {
      var _a;
      return (props == null ? void 0 : props.icon) || iconMap.get((_a = props == null ? void 0 : props.filename) == null ? void 0 : _a.toLowerCase()) || iconMap.get(props == null ? void 0 : props.language);
    }
    function label(props) {
      return (props == null ? void 0 : props.label) || (props == null ? void 0 : props.filename);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b, _c;
      const _component_UiTabs = _sfc_main$4;
      const _component_UiTabsList = _sfc_main$2;
      const _component_UiTabsTrigger = _sfc_main$3;
      const _component_Icon = __nuxt_component_1;
      const _component_UiTabsContent = _sfc_main$1;
      const _component_UiCard = _sfc_main$5;
      const _component_UiScrollArea = _sfc_main$6;
      const _component_CodeCopy = _sfc_main$7;
      if (_ctx.variant === "separate") {
        _push(ssrRenderComponent(_component_UiTabs, mergeProps({
          class: "[&:not(:first-child)]:mt-5",
          "default-value": label((_c = ((_a2 = (_b = (_a = _ctx.$slots).default) == null ? void 0 : _b.call(_a)) != null ? _a2 : [])[0]) == null ? void 0 : _c.props)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            var _a22, _b2, _c2, _d;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTabsList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a4, _b4;
                  var _a32, _b32, _c3, _d2;
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList((_a4 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)) != null ? _a4 : [], (slot, i) => {
                      _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                        key: `${i}${label(slot.props)}`,
                        value: label(slot.props)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (icon(slot == null ? void 0 : slot.props)) {
                              _push4(ssrRenderComponent(_component_Icon, {
                                name: icon(slot == null ? void 0 : slot.props),
                                class: "self-center mr-1.5"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(` ${ssrInterpolate(label(slot.props))}`);
                          } else {
                            return [
                              icon(slot == null ? void 0 : slot.props) ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: icon(slot == null ? void 0 : slot.props),
                                class: "self-center mr-1.5"
                              }, null, 8, ["name"])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(label(slot.props)), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_b4 = (_d2 = (_c3 = _ctx.$slots).default) == null ? void 0 : _d2.call(_c3)) != null ? _b4 : [], (slot, i) => {
                        return openBlock(), createBlock(_component_UiTabsTrigger, {
                          key: `${i}${label(slot.props)}`,
                          value: label(slot.props)
                        }, {
                          default: withCtx(() => [
                            icon(slot == null ? void 0 : slot.props) ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: icon(slot == null ? void 0 : slot.props),
                              class: "self-center mr-1.5"
                            }, null, 8, ["name"])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(label(slot.props)), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList((_a3 = (_b2 = (_a22 = _ctx.$slots).default) == null ? void 0 : _b2.call(_a22)) != null ? _a3 : [], (slot, i) => {
                _push2(ssrRenderComponent(_component_UiTabsContent, {
                  key: `${i}${label(slot.props)}`,
                  value: label(slot.props)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(slot), null, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(slot)))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode(_component_UiTabsList, null, {
                  default: withCtx(() => {
                    var _a4;
                    var _a32, _b32;
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList((_a4 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)) != null ? _a4 : [], (slot, i) => {
                        return openBlock(), createBlock(_component_UiTabsTrigger, {
                          key: `${i}${label(slot.props)}`,
                          value: label(slot.props)
                        }, {
                          default: withCtx(() => [
                            icon(slot == null ? void 0 : slot.props) ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: icon(slot == null ? void 0 : slot.props),
                              class: "self-center mr-1.5"
                            }, null, 8, ["name"])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(label(slot.props)), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList((_b3 = (_d = (_c2 = _ctx.$slots).default) == null ? void 0 : _d.call(_c2)) != null ? _b3 : [], (slot, i) => {
                  return openBlock(), createBlock(_component_UiTabsContent, {
                    key: `${i}${label(slot.props)}`,
                    value: label(slot.props)
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(slot)))
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (_ctx.variant === "card") {
        _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "[&:not(:first-child)]:mt-5" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3;
            var _a22, _b2, _c2, _d;
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiScrollArea, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a4, _b4;
                  var _a32, _b32, _c3, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
                  if (_push3) {
                    _push3(`<div class="border-b p-0.5 flex text-sm relative overflow-x-auto"${_scopeId2}><div class="flex p-1"${_scopeId2}><!--[-->`);
                    ssrRenderList((_a4 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)) != null ? _a4 : [], (slot, i) => {
                      _push3(`<div${ssrRenderAttr("value", label(slot.props))} class="${ssrRenderClass([[unref(activeTabIndex) === i && "bg-muted text-primary"], "flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer"])}"${_scopeId2}>`);
                      if (icon(slot == null ? void 0 : slot.props)) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: icon(slot == null ? void 0 : slot.props),
                          class: "self-center mr-1.5"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` ${ssrInterpolate(label(slot.props))}</div>`);
                    });
                    _push3(`<!--]--></div>`);
                    if ((_f = (_e = (_d2 = (_c3 = _ctx.$slots).default) == null ? void 0 : _d2.call(_c3)[unref(activeTabIndex)]) == null ? void 0 : _e.props) == null ? void 0 : _f.code) {
                      _push3(ssrRenderComponent(_component_CodeCopy, {
                        class: "self-center ml-auto mr-3 pl-2",
                        code: (_j = (_i = (_h = (_g = _ctx.$slots).default) == null ? void 0 : _h.call(_g)[unref(activeTabIndex)]) == null ? void 0 : _i.props) == null ? void 0 : _j.code
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_sfc_main$1$1, { orientation: "horizontal" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "border-b p-0.5 flex text-sm relative overflow-x-auto" }, [
                        createVNode("div", { class: "flex p-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_b4 = (_l = (_k = _ctx.$slots).default) == null ? void 0 : _l.call(_k)) != null ? _b4 : [], (slot, i) => {
                            return openBlock(), createBlock("div", {
                              key: `${i}${label(slot.props)}`,
                              value: label(slot.props),
                              class: ["flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer", [unref(activeTabIndex) === i && "bg-muted text-primary"]],
                              onMousedown: withModifiers(($event) => activeTabIndex.value = i, ["left"])
                            }, [
                              icon(slot == null ? void 0 : slot.props) ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: icon(slot == null ? void 0 : slot.props),
                                class: "self-center mr-1.5"
                              }, null, 8, ["name"])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(label(slot.props)), 1)
                            ], 42, ["value", "onMousedown"]);
                          }), 128))
                        ]),
                        ((_p = (_o = (_n = (_m = _ctx.$slots).default) == null ? void 0 : _n.call(_m)[unref(activeTabIndex)]) == null ? void 0 : _o.props) == null ? void 0 : _p.code) ? (openBlock(), createBlock(_component_CodeCopy, {
                          key: 0,
                          class: "self-center ml-auto mr-3 pl-2",
                          code: (_t = (_s = (_r = (_q = _ctx.$slots).default) == null ? void 0 : _r.call(_q)[unref(activeTabIndex)]) == null ? void 0 : _s.props) == null ? void 0 : _t.code
                        }, null, 8, ["code"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_sfc_main$1$1, { orientation: "horizontal" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList((_a3 = (_b2 = (_a22 = _ctx.$slots).default) == null ? void 0 : _b2.call(_a22)) != null ? _a3 : [], (slot, i) => {
                var _a32, _b32, _c3;
                _push2(`<div style="${ssrRenderStyle(unref(activeTabIndex) === i ? null : { display: "none" })}"${ssrRenderAttr("value", label(slot.props))} class="${ssrRenderClass([[_ctx.padded && ((_c3 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)[unref(activeTabIndex)]) == null ? void 0 : _c3.type).tag !== "pre" && "p-3"], "mt-0"])}"${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(slot), { "in-group": true }, null), _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode(_component_UiScrollArea, null, {
                  default: withCtx(() => {
                    var _a4;
                    var _a32, _b32, _c3, _d2, _e, _f, _g, _h, _i, _j;
                    return [
                      createVNode("div", { class: "border-b p-0.5 flex text-sm relative overflow-x-auto" }, [
                        createVNode("div", { class: "flex p-1" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a4 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)) != null ? _a4 : [], (slot, i) => {
                            return openBlock(), createBlock("div", {
                              key: `${i}${label(slot.props)}`,
                              value: label(slot.props),
                              class: ["flex px-3 py-1.5 rounded-md text-muted-foreground transition-all duration-75 cursor-pointer", [unref(activeTabIndex) === i && "bg-muted text-primary"]],
                              onMousedown: withModifiers(($event) => activeTabIndex.value = i, ["left"])
                            }, [
                              icon(slot == null ? void 0 : slot.props) ? (openBlock(), createBlock(_component_Icon, {
                                key: 0,
                                name: icon(slot == null ? void 0 : slot.props),
                                class: "self-center mr-1.5"
                              }, null, 8, ["name"])) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(label(slot.props)), 1)
                            ], 42, ["value", "onMousedown"]);
                          }), 128))
                        ]),
                        ((_f = (_e = (_d2 = (_c3 = _ctx.$slots).default) == null ? void 0 : _d2.call(_c3)[unref(activeTabIndex)]) == null ? void 0 : _e.props) == null ? void 0 : _f.code) ? (openBlock(), createBlock(_component_CodeCopy, {
                          key: 0,
                          class: "self-center ml-auto mr-3 pl-2",
                          code: (_j = (_i = (_h = (_g = _ctx.$slots).default) == null ? void 0 : _h.call(_g)[unref(activeTabIndex)]) == null ? void 0 : _i.props) == null ? void 0 : _j.code
                        }, null, 8, ["code"])) : createCommentVNode("", true)
                      ]),
                      createVNode(_sfc_main$1$1, { orientation: "horizontal" })
                    ];
                  }),
                  _: 1
                }),
                (openBlock(true), createBlock(Fragment, null, renderList((_b3 = (_d = (_c2 = _ctx.$slots).default) == null ? void 0 : _d.call(_c2)) != null ? _b3 : [], (slot, i) => {
                  var _a32, _b32, _c3;
                  return withDirectives((openBlock(), createBlock("div", {
                    key: `${i}${label(slot.props)}`,
                    value: label(slot.props),
                    class: ["mt-0", [_ctx.padded && ((_c3 = (_b32 = (_a32 = _ctx.$slots).default) == null ? void 0 : _b32.call(_a32)[unref(activeTabIndex)]) == null ? void 0 : _c3.type).tag !== "pre" && "p-3"]]
                  }, [
                    (openBlock(), createBlock(resolveDynamicComponent(slot), { "in-group": true }))
                  ], 10, ["value"])), [
                    [vShow, unref(activeTabIndex) === i]
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tabs-C7vk5y2C.mjs.map
