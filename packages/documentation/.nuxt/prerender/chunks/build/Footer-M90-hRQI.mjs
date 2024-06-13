import { _ as __nuxt_component_0 } from './nuxt-link-CnbMhIht.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-tMXDCOio.mjs';
import { u as useConfig, _ as _sfc_main$A } from './ScrollArea-Dp1JD7h-.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, createVNode, ref, isRef, renderSlot, watch, useModel, withKeys, resolveComponent, toValue, reactive } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { cva } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/class-variance-authority@0.7.0/node_modules/class-variance-authority/dist/index.mjs';
import { _ as _sfc_main$B } from './index-B1wNUwWi.mjs';
import __nuxt_component_1 from './Icon-CBPqgZrW.mjs';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogClose, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, ComboboxRoot, ComboboxGroup, ComboboxLabel, useForwardProps, ComboboxInput, ComboboxItem, ComboboxContent, ComboboxSeparator, NavigationMenuViewport, NavigationMenuRoot, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/radix-vue@1.8.3_vue@3.4.27_typescript@5.4.5_/node_modules/radix-vue/dist/index.js';
import { a as useContent, u as useRoute, e as useContentHelpers, b as useState, n as navigateTo, f as fetchDefaults, c as useRequestFetch, d as useRuntimeConfig } from './server.mjs';
import _sfc_main$C from './Kbd-BRRxXFcO.mjs';
import { X, Search, ChevronDown } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/lucide-vue-next@0.379.0_vue@3.4.27_typescript@5.4.5_/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { c as cn } from './utils-H80jjgLf.mjs';
import { u as useColorMode, a as useMagicKeys } from './index-D15JYp8X.mjs';
import { hash } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import { u as useAsyncData } from './asyncData-BV4gSZ7U.mjs';
import { createError } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import MiniSearch from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/minisearch@6.3.0/node_modules/minisearch/dist/es/index.js';

const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  setup(__props) {
    const { logo, title, showTitle } = useConfig().value.header;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      if (unref(logo).light && unref(logo).dark) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: "/",
          class: "flex"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: unref(logo).light,
                class: "dark:hidden h-7"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: unref(logo).dark,
                class: "hidden dark:block h-7"
              }, null, _parent2, _scopeId));
              if (unref(showTitle) && unref(title)) {
                _push2(`<span class="self-center font-bold ml-3"${_scopeId}>${ssrInterpolate(unref(title))}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  src: unref(logo).light,
                  class: "dark:hidden h-7"
                }, null, 8, ["src"]),
                createVNode(_component_NuxtImg, {
                  src: unref(logo).dark,
                  class: "hidden dark:block h-7"
                }, null, 8, ["src"]),
                unref(showTitle) && unref(title) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "self-center font-bold ml-3"
                }, toDisplayString(unref(title)), 1)) : createCommentVNode("", true)
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
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header/Logo.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "Sheet",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/Sheet.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "SheetTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetTrigger.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SheetContent",
  __ssrInlineRender: true,
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, side, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps({
              class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
            }, { ...unref(forwarded), ..._ctx.$attrs }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "w-4 h-4 text-muted-foreground" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(X), { class: "w-4 h-4 text-muted-foreground" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "w-4 h-4 text-muted-foreground" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps({
                class: unref(cn)(unref(sheetVariants)({ side: _ctx.side }), props.class)
              }, { ...unref(forwarded), ..._ctx.$attrs }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "w-4 h-4 text-muted-foreground" })
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sheet/SheetContent.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { open })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/Collapsible.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleTrigger), mergeProps(props, _attrs), {
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
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleTrigger.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(CollapsibleContent), mergeProps(props, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }, _attrs), {
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
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/collapsible/CollapsibleContent.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
function useCollapsedMap() {
  return useState("docs-collapsed-map", () => /* @__PURE__ */ new Map());
}
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "NavMobileItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    index: {}
  },
  setup(__props) {
    const props = __props;
    const collapsed = useCollapsedMap();
    const isOpen = ref(collapsed.value.get(`mobile-header-nav${props.index}`) || false);
    watch(isOpen, (v) => {
      collapsed.value.set(`mobile-header-nav${props.index}`, v);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCollapsible = _sfc_main$v;
      const _component_UiCollapsibleTrigger = _sfc_main$u;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCollapsibleContent = _sfc_main$t;
      const _component_NuxtLink = __nuxt_component_0;
      if (_ctx.item.links) {
        _push(ssrRenderComponent(_component_UiCollapsible, mergeProps({
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "w-full text-left p-2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex gap-1"${_scopeId2}>${ssrInterpolate(_ctx.item.title)} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                      size: "12",
                      class: "ml-auto self-center"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full flex gap-1" }, [
                        createTextVNode(toDisplayString(_ctx.item.title) + " ", 1),
                        createVNode(_component_Icon, {
                          name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                          size: "12",
                          class: "ml-auto self-center"
                        }, null, 8, ["name"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<ul class="pl-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(_ctx.item.links, (link) => {
                      _push3(`<li${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: link.to,
                        target: link.to,
                        class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="font-semibold"${_scopeId3}>${ssrInterpolate(link.title)}</div><div class="text-muted-foreground text-sm"${_scopeId3}>${ssrInterpolate(link.description)}</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                              createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", { class: "pl-2" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.links, (link) => {
                          return openBlock(), createBlock("li", {
                            key: link.title
                          }, [
                            createVNode(_component_NuxtLink, {
                              to: link.to,
                              target: link.to,
                              class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                              ]),
                              _: 2
                            }, 1032, ["to", "target"])
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCollapsibleTrigger, { class: "w-full text-left p-2" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full flex gap-1" }, [
                      createTextVNode(toDisplayString(_ctx.item.title) + " ", 1),
                      createVNode(_component_Icon, {
                        name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                        size: "12",
                        class: "ml-auto self-center"
                      }, null, 8, ["name"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiCollapsibleContent, null, {
                  default: withCtx(() => [
                    createVNode("ul", { class: "pl-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.links, (link) => {
                        return openBlock(), createBlock("li", {
                          key: link.title
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: link.to,
                            target: link.to,
                            class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                              createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                            ]),
                            _: 2
                          }, 1032, ["to", "target"])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: _ctx.item.to,
          target: _ctx.item.target,
          class: "w-full flex p-2"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.item.title)} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:arrow-up-right",
                class: "ml-1 text-muted-foreground",
                size: "12"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.item.title) + " ", 1),
                createVNode(_component_Icon, {
                  name: "lucide:arrow-up-right",
                  class: "ml-1 text-muted-foreground",
                  size: "12"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header/NavMobileItem.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "NavMobile",
  __ssrInlineRender: true,
  setup(__props) {
    const { nav } = useConfig().value.header;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeaderNavMobileItem = _sfc_main$s;
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(nav), (item, i) => {
        _push(ssrRenderComponent(_component_LayoutHeaderNavMobileItem, {
          key: i,
          item,
          index: i
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header/NavMobile.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/Dialog.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(DialogContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Close</span>`);
                      } else {
                        return [
                          createVNode(unref(X), { class: "w-4 h-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                      default: withCtx(() => [
                        createVNode(unref(X), { class: "w-4 h-4" }),
                        createVNode("span", { class: "sr-only" }, "Close")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
              createVNode(unref(DialogContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  createVNode(unref(DialogClose), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, {
                    default: withCtx(() => [
                      createVNode(unref(X), { class: "w-4 h-4" }),
                      createVNode("span", { class: "sr-only" }, "Close")
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dialog/DialogContent.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Command",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    open: { type: Boolean, default: true },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", props.class)
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/Command.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "CommandGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps(delegatedProps.value, {
        class: unref(cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.heading) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.heading ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandGroup.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        "auto-focus": "",
        class: unref(cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandInput.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CommandItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps(unref(forwarded), {
        class: unref(cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50", props.class)
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
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandItem.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "CommandList",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: false },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxContent), mergeProps(unref(forwarded), {
        class: unref(cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div role="presentation"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { role: "presentation" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandList.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CommandSeparator",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(ComboboxSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 h-px bg-border", props.class)
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandSeparator.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const searchContent = async (search, options = {}) => {
  const runtimeConfig = useRuntimeConfig();
  const { content } = runtimeConfig.public;
  const { integrity, api: { baseURL: baseAPI }, search: searchOptions } = content;
  const { indexed: useIndexedSearch } = searchOptions || {};
  const searchRoute = `${baseAPI}/search${integrity ? "-" + integrity : ""}`;
  if (useIndexedSearch) {
    const { options: miniSearchOptions } = searchOptions || {};
    const { data: data2 } = await useFetch(searchRoute, { responseType: "text" }, "$XERswYhI4C");
    if (!data2.value) {
      throw createError({
        statusCode: 500,
        message: "Missing search data"
      });
    }
    const results2 = useIndexedMiniSearch(search, data2, miniSearchOptions);
    return results2;
  }
  if (!options.miniSearch) {
    throw createError({
      statusCode: 500,
      message: "Missing miniSearch options"
    });
  }
  const { data } = await useFetch(searchRoute, "$wXkdvyfTb0");
  if (!data.value) {
    throw createError({
      statusCode: 500,
      message: "Missing search data"
    });
  }
  const results = useMiniSearch(search, data, options.miniSearch);
  return results;
};
const useIndexedMiniSearch = (search, indexedData, options) => {
  const indexedMiniSearch = computed(() => {
    return MiniSearch.loadJSON(toValue(indexedData), toValue(options));
  });
  const results = computed(() => {
    return indexedMiniSearch.value.search(toValue(search));
  });
  return results;
};
const useMiniSearch = function(search, data, options) {
  const miniSearch = computed(() => {
    return new MiniSearch(toValue(options));
  });
  miniSearch.value.addAll(toValue(data));
  const results = computed(() => {
    return miniSearch.value.search(toValue(search));
  });
  return results;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SearchDialog",
  __ssrInlineRender: true,
  props: {
    "open": { type: Boolean },
    "openModifiers": {}
  },
  emits: ["update:open"],
  setup(__props) {
    const open = useModel(__props, "open");
    const mode = useColorMode();
    const activeSelect = ref(0);
    const { Meta_K, Ctrl_K } = useMagicKeys({
      passive: false,
      onEventFired(e) {
        if (e.key === "k" && (e.metaKey || e.ctrlKey))
          e.preventDefault();
      }
    });
    watch([Meta_K, Ctrl_K], (v) => {
      if (v[0] || v[1])
        open.value = true;
    });
    const input = ref("");
    const searchResult = ref();
    watch(
      input,
      async (v) => {
        activeSelect.value = 0;
        searchResult.value = (await searchContent(v)).value;
      }
    );
    function getHighlightedContent(text) {
      return text.replace(input.value, `<span class="font-semibold underline">${input.value}</span>`);
    }
    const { navKeyFromPath } = useContentHelpers();
    const { navigation } = useContent();
    function getItemIcon(path) {
      return navKeyFromPath(path, "icon", navigation.value);
    }
    watch(activeSelect, (value) => {
      var _a;
      (_a = (void 0).querySelector(`[id="${value}"]`)) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
    });
    function handleEnter() {
      var _a;
      if ((_a = searchResult.value[activeSelect.value]) == null ? void 0 : _a.id) {
        navigateTo(searchResult.value[activeSelect.value].id);
        open.value = false;
      }
    }
    function handleNavigate(delta) {
      if (activeSelect.value + delta >= 0 && activeSelect.value + delta < searchResult.value.length)
        activeSelect.value += delta;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$q;
      const _component_UiDialogContent = _sfc_main$p;
      const _component_UiCommand = _sfc_main$o;
      const _component_UiCommandInput = _sfc_main$m;
      const _component_UiCommandList = _sfc_main$k;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCommandGroup = _sfc_main$n;
      const _component_UiCommandItem = _sfc_main$l;
      const _component_UiCommandSeparator = _sfc_main$j;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, {
                    "search-term": unref(input),
                    "onUpdate:searchTerm": ($event) => isRef(input) ? input.value = $event : null,
                    class: "h-[350px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, {
                          placeholder: "Search documentation...",
                          onKeydown: [handleEnter, ($event) => handleNavigate(1), ($event) => handleNavigate(-1)]
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, {
                          class: "text-sm",
                          onEscapeKeyDown: ($event) => open.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                            if (_push5) {
                              if ((_a = unref(searchResult)) == null ? void 0 : _a.length) {
                                _push5(`<div class="p-1.5"${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(searchResult), (item, i) => {
                                  _push5(ssrRenderComponent(_component_NuxtLink, {
                                    id: i,
                                    key: item.id,
                                    to: item.id,
                                    class: ["flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none", [i === unref(activeSelect) && "bg-muted"]],
                                    onClick: ($event) => {
                                      open.value = false;
                                      activeSelect.value = i;
                                    }
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      var _a2;
                                      if (_push6) {
                                        if (getItemIcon(item.id)) {
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: getItemIcon(item.id),
                                            class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<div class="flex-shrink-0 h-4 w-4 mr-2"${_scopeId5}></div>`);
                                        }
                                        _push6(`<!--[-->`);
                                        ssrRenderList(item.titles, (subtitle, j) => {
                                          _push6(`<span class="flex flex-shrink-0 self-center"${_scopeId5}>${ssrInterpolate(subtitle)} `);
                                          _push6(ssrRenderComponent(_component_Icon, {
                                            name: "lucide:chevron-right",
                                            class: "self-center mx-0.5 text-muted-foreground"
                                          }, null, _parent6, _scopeId5));
                                          _push6(`</span>`);
                                        });
                                        _push6(`<!--]--><span class="self-center flex-shrink-0"${_scopeId5}>${ssrInterpolate(item.title)}</span><span class="self-center text-xs text-muted-foreground truncate ml-2"${_scopeId5}>${(_a2 = getHighlightedContent(item.content)) != null ? _a2 : ""}</span>`);
                                      } else {
                                        return [
                                          getItemIcon(item.id) ? (openBlock(), createBlock(_component_Icon, {
                                            key: 0,
                                            name: getItemIcon(item.id),
                                            class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                          }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "flex-shrink-0 h-4 w-4 mr-2"
                                          })),
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.titles, (subtitle, j) => {
                                            return openBlock(), createBlock("span", {
                                              key: `${subtitle}${j}`,
                                              class: "flex flex-shrink-0 self-center"
                                            }, [
                                              createTextVNode(toDisplayString(subtitle) + " ", 1),
                                              createVNode(_component_Icon, {
                                                name: "lucide:chevron-right",
                                                class: "self-center mx-0.5 text-muted-foreground"
                                              })
                                            ]);
                                          }), 128)),
                                          createVNode("span", { class: "self-center flex-shrink-0" }, toDisplayString(item.title), 1),
                                          createVNode("span", {
                                            class: "self-center text-xs text-muted-foreground truncate ml-2",
                                            innerHTML: getHighlightedContent(item.content)
                                          }, null, 8, ["innerHTML"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!((_b = unref(searchResult)) == null ? void 0 : _b.length) && ((_c = unref(input)) == null ? void 0 : _c.length)) {
                                _push5(`<div class="text-center text-muted-foreground pt-4"${_scopeId4}> No results found. </div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (!((_d = unref(searchResult)) == null ? void 0 : _d.length) && !((_e = unref(input)) == null ? void 0 : _e.length)) {
                                _push5(`<!--[--><!--[-->`);
                                ssrRenderList(unref(navigation), (item) => {
                                  _push5(`<!--[-->`);
                                  if (item.children) {
                                    _push5(ssrRenderComponent(_component_UiCommandGroup, {
                                      heading: item.title,
                                      class: "p-1.5"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<!--[-->`);
                                          ssrRenderList(item.children, (child) => {
                                            _push6(ssrRenderComponent(_component_NuxtLink, {
                                              key: child.id,
                                              to: child._path
                                            }, {
                                              default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(_component_UiCommandItem, {
                                                    value: child._path
                                                  }, {
                                                    default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        if (child.icon) {
                                                          _push8(ssrRenderComponent(_component_Icon, {
                                                            name: child.icon,
                                                            class: "h-4 w-4 mr-2"
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<div class="h-4 w-4 mr-2"${_scopeId7}></div>`);
                                                        }
                                                        _push8(`<span${_scopeId7}>${ssrInterpolate(child.title)}</span>`);
                                                      } else {
                                                        return [
                                                          child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                            key: 0,
                                                            name: child.icon,
                                                            class: "h-4 w-4 mr-2"
                                                          }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                            key: 1,
                                                            class: "h-4 w-4 mr-2"
                                                          })),
                                                          createVNode("span", null, toDisplayString(child.title), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiCommandItem, {
                                                      value: child._path
                                                    }, {
                                                      default: withCtx(() => [
                                                        child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                          key: 0,
                                                          name: child.icon,
                                                          class: "h-4 w-4 mr-2"
                                                        }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                          key: 1,
                                                          class: "h-4 w-4 mr-2"
                                                        })),
                                                        createVNode("span", null, toDisplayString(child.title), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          });
                                          _push6(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                              return openBlock(), createBlock(_component_NuxtLink, {
                                                key: child.id,
                                                to: child._path
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiCommandItem, {
                                                    value: child._path
                                                  }, {
                                                    default: withCtx(() => [
                                                      child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                        key: 0,
                                                        name: child.icon,
                                                        class: "h-4 w-4 mr-2"
                                                      }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                        key: 1,
                                                        class: "h-4 w-4 mr-2"
                                                      })),
                                                      createVNode("span", null, toDisplayString(child.title), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  if (item.children) {
                                    _push5(ssrRenderComponent(_component_UiCommandSeparator, null, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<!--]-->`);
                                });
                                _push5(`<!--]-->`);
                                _push5(ssrRenderComponent(_component_UiCommandGroup, {
                                  heading: "Theme",
                                  class: "p-1.5"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: "light",
                                        onClick: ($event) => mode.value = "light"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "lucide:sun",
                                              class: "h-4 w-4 mr-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>Light</span>`);
                                          } else {
                                            return [
                                              createVNode(_component_Icon, {
                                                name: "lucide:sun",
                                                class: "h-4 w-4 mr-2"
                                              }),
                                              createVNode("span", null, "Light")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: "dark",
                                        onClick: ($event) => mode.value = "dark"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "lucide:moon",
                                              class: "h-4 w-4 mr-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>Dark</span>`);
                                          } else {
                                            return [
                                              createVNode(_component_Icon, {
                                                name: "lucide:moon",
                                                class: "h-4 w-4 mr-2"
                                              }),
                                              createVNode("span", null, "Dark")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: "system",
                                        onClick: ($event) => mode.value = "auto"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "lucide:monitor",
                                              class: "h-4 w-4 mr-2"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<span${_scopeId6}>System</span>`);
                                          } else {
                                            return [
                                              createVNode(_component_Icon, {
                                                name: "lucide:monitor",
                                                class: "h-4 w-4 mr-2"
                                              }),
                                              createVNode("span", null, "System")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiCommandItem, {
                                          value: "light",
                                          onClick: ($event) => mode.value = "light"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:sun",
                                              class: "h-4 w-4 mr-2"
                                            }),
                                            createVNode("span", null, "Light")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiCommandItem, {
                                          value: "dark",
                                          onClick: ($event) => mode.value = "dark"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:moon",
                                              class: "h-4 w-4 mr-2"
                                            }),
                                            createVNode("span", null, "Dark")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiCommandItem, {
                                          value: "system",
                                          onClick: ($event) => mode.value = "auto"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:monitor",
                                              class: "h-4 w-4 mr-2"
                                            }),
                                            createVNode("span", null, "System")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                ((_f = unref(searchResult)) == null ? void 0 : _f.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "p-1.5"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(searchResult), (item, i) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      id: i,
                                      key: item.id,
                                      to: item.id,
                                      class: ["flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none", [i === unref(activeSelect) && "bg-muted"]],
                                      onClick: ($event) => {
                                        open.value = false;
                                        activeSelect.value = i;
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        getItemIcon(item.id) ? (openBlock(), createBlock(_component_Icon, {
                                          key: 0,
                                          name: getItemIcon(item.id),
                                          class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                        }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex-shrink-0 h-4 w-4 mr-2"
                                        })),
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.titles, (subtitle, j) => {
                                          return openBlock(), createBlock("span", {
                                            key: `${subtitle}${j}`,
                                            class: "flex flex-shrink-0 self-center"
                                          }, [
                                            createTextVNode(toDisplayString(subtitle) + " ", 1),
                                            createVNode(_component_Icon, {
                                              name: "lucide:chevron-right",
                                              class: "self-center mx-0.5 text-muted-foreground"
                                            })
                                          ]);
                                        }), 128)),
                                        createVNode("span", { class: "self-center flex-shrink-0" }, toDisplayString(item.title), 1),
                                        createVNode("span", {
                                          class: "self-center text-xs text-muted-foreground truncate ml-2",
                                          innerHTML: getHighlightedContent(item.content)
                                        }, null, 8, ["innerHTML"])
                                      ]),
                                      _: 2
                                    }, 1032, ["id", "to", "class", "onClick"]);
                                  }), 128))
                                ])) : createCommentVNode("", true),
                                !((_g = unref(searchResult)) == null ? void 0 : _g.length) && ((_h = unref(input)) == null ? void 0 : _h.length) ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "text-center text-muted-foreground pt-4"
                                }, " No results found. ")) : createCommentVNode("", true),
                                !((_i = unref(searchResult)) == null ? void 0 : _i.length) && !((_j = unref(input)) == null ? void 0 : _j.length) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: item._path
                                    }, [
                                      item.children ? (openBlock(), createBlock(_component_UiCommandGroup, {
                                        key: 0,
                                        heading: item.title,
                                        class: "p-1.5"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                            return openBlock(), createBlock(_component_NuxtLink, {
                                              key: child.id,
                                              to: child._path
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiCommandItem, {
                                                  value: child._path
                                                }, {
                                                  default: withCtx(() => [
                                                    child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                      key: 0,
                                                      name: child.icon,
                                                      class: "h-4 w-4 mr-2"
                                                    }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "h-4 w-4 mr-2"
                                                    })),
                                                    createVNode("span", null, toDisplayString(child.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["heading"])) : createCommentVNode("", true),
                                      item.children ? (openBlock(), createBlock(_component_UiCommandSeparator, { key: 1 })) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  createVNode(_component_UiCommandGroup, {
                                    heading: "Theme",
                                    class: "p-1.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: "light",
                                        onClick: ($event) => mode.value = "light"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:sun",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "Light")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiCommandItem, {
                                        value: "dark",
                                        onClick: ($event) => mode.value = "dark"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:moon",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "Dark")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiCommandItem, {
                                        value: "system",
                                        onClick: ($event) => mode.value = "auto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:monitor",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "System")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandInput, {
                            placeholder: "Search documentation...",
                            onKeydown: [
                              withKeys(handleEnter, ["enter"]),
                              withKeys(($event) => handleNavigate(1), ["down"]),
                              withKeys(($event) => handleNavigate(-1), ["up"])
                            ]
                          }, null, 8, ["onKeydown"]),
                          createVNode(_component_UiCommandList, {
                            class: "text-sm",
                            onEscapeKeyDown: ($event) => open.value = false
                          }, {
                            default: withCtx(() => {
                              var _a, _b, _c, _d, _e;
                              return [
                                ((_a = unref(searchResult)) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "p-1.5"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(searchResult), (item, i) => {
                                    return openBlock(), createBlock(_component_NuxtLink, {
                                      id: i,
                                      key: item.id,
                                      to: item.id,
                                      class: ["flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none", [i === unref(activeSelect) && "bg-muted"]],
                                      onClick: ($event) => {
                                        open.value = false;
                                        activeSelect.value = i;
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        getItemIcon(item.id) ? (openBlock(), createBlock(_component_Icon, {
                                          key: 0,
                                          name: getItemIcon(item.id),
                                          class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                        }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex-shrink-0 h-4 w-4 mr-2"
                                        })),
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.titles, (subtitle, j) => {
                                          return openBlock(), createBlock("span", {
                                            key: `${subtitle}${j}`,
                                            class: "flex flex-shrink-0 self-center"
                                          }, [
                                            createTextVNode(toDisplayString(subtitle) + " ", 1),
                                            createVNode(_component_Icon, {
                                              name: "lucide:chevron-right",
                                              class: "self-center mx-0.5 text-muted-foreground"
                                            })
                                          ]);
                                        }), 128)),
                                        createVNode("span", { class: "self-center flex-shrink-0" }, toDisplayString(item.title), 1),
                                        createVNode("span", {
                                          class: "self-center text-xs text-muted-foreground truncate ml-2",
                                          innerHTML: getHighlightedContent(item.content)
                                        }, null, 8, ["innerHTML"])
                                      ]),
                                      _: 2
                                    }, 1032, ["id", "to", "class", "onClick"]);
                                  }), 128))
                                ])) : createCommentVNode("", true),
                                !((_b = unref(searchResult)) == null ? void 0 : _b.length) && ((_c = unref(input)) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "text-center text-muted-foreground pt-4"
                                }, " No results found. ")) : createCommentVNode("", true),
                                !((_d = unref(searchResult)) == null ? void 0 : _d.length) && !((_e = unref(input)) == null ? void 0 : _e.length) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: item._path
                                    }, [
                                      item.children ? (openBlock(), createBlock(_component_UiCommandGroup, {
                                        key: 0,
                                        heading: item.title,
                                        class: "p-1.5"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                            return openBlock(), createBlock(_component_NuxtLink, {
                                              key: child.id,
                                              to: child._path
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiCommandItem, {
                                                  value: child._path
                                                }, {
                                                  default: withCtx(() => [
                                                    child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                      key: 0,
                                                      name: child.icon,
                                                      class: "h-4 w-4 mr-2"
                                                    }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                      key: 1,
                                                      class: "h-4 w-4 mr-2"
                                                    })),
                                                    createVNode("span", null, toDisplayString(child.title), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1032, ["to"]);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1032, ["heading"])) : createCommentVNode("", true),
                                      item.children ? (openBlock(), createBlock(_component_UiCommandSeparator, { key: 1 })) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  createVNode(_component_UiCommandGroup, {
                                    heading: "Theme",
                                    class: "p-1.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: "light",
                                        onClick: ($event) => mode.value = "light"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:sun",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "Light")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiCommandItem, {
                                        value: "dark",
                                        onClick: ($event) => mode.value = "dark"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:moon",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "Dark")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiCommandItem, {
                                        value: "system",
                                        onClick: ($event) => mode.value = "auto"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:monitor",
                                            class: "h-4 w-4 mr-2"
                                          }),
                                          createVNode("span", null, "System")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          }, 8, ["onEscapeKeyDown"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCommand, {
                      "search-term": unref(input),
                      "onUpdate:searchTerm": ($event) => isRef(input) ? input.value = $event : null,
                      class: "h-[350px]"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, {
                          placeholder: "Search documentation...",
                          onKeydown: [
                            withKeys(handleEnter, ["enter"]),
                            withKeys(($event) => handleNavigate(1), ["down"]),
                            withKeys(($event) => handleNavigate(-1), ["up"])
                          ]
                        }, null, 8, ["onKeydown"]),
                        createVNode(_component_UiCommandList, {
                          class: "text-sm",
                          onEscapeKeyDown: ($event) => open.value = false
                        }, {
                          default: withCtx(() => {
                            var _a, _b, _c, _d, _e;
                            return [
                              ((_a = unref(searchResult)) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "p-1.5"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(searchResult), (item, i) => {
                                  return openBlock(), createBlock(_component_NuxtLink, {
                                    id: i,
                                    key: item.id,
                                    to: item.id,
                                    class: ["flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none", [i === unref(activeSelect) && "bg-muted"]],
                                    onClick: ($event) => {
                                      open.value = false;
                                      activeSelect.value = i;
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      getItemIcon(item.id) ? (openBlock(), createBlock(_component_Icon, {
                                        key: 0,
                                        name: getItemIcon(item.id),
                                        class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                      }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex-shrink-0 h-4 w-4 mr-2"
                                      })),
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.titles, (subtitle, j) => {
                                        return openBlock(), createBlock("span", {
                                          key: `${subtitle}${j}`,
                                          class: "flex flex-shrink-0 self-center"
                                        }, [
                                          createTextVNode(toDisplayString(subtitle) + " ", 1),
                                          createVNode(_component_Icon, {
                                            name: "lucide:chevron-right",
                                            class: "self-center mx-0.5 text-muted-foreground"
                                          })
                                        ]);
                                      }), 128)),
                                      createVNode("span", { class: "self-center flex-shrink-0" }, toDisplayString(item.title), 1),
                                      createVNode("span", {
                                        class: "self-center text-xs text-muted-foreground truncate ml-2",
                                        innerHTML: getHighlightedContent(item.content)
                                      }, null, 8, ["innerHTML"])
                                    ]),
                                    _: 2
                                  }, 1032, ["id", "to", "class", "onClick"]);
                                }), 128))
                              ])) : createCommentVNode("", true),
                              !((_b = unref(searchResult)) == null ? void 0 : _b.length) && ((_c = unref(input)) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "text-center text-muted-foreground pt-4"
                              }, " No results found. ")) : createCommentVNode("", true),
                              !((_d = unref(searchResult)) == null ? void 0 : _d.length) && !((_e = unref(input)) == null ? void 0 : _e.length) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                                  return openBlock(), createBlock(Fragment, {
                                    key: item._path
                                  }, [
                                    item.children ? (openBlock(), createBlock(_component_UiCommandGroup, {
                                      key: 0,
                                      heading: item.title,
                                      class: "p-1.5"
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                          return openBlock(), createBlock(_component_NuxtLink, {
                                            key: child.id,
                                            to: child._path
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiCommandItem, {
                                                value: child._path
                                              }, {
                                                default: withCtx(() => [
                                                  child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                    key: 0,
                                                    name: child.icon,
                                                    class: "h-4 w-4 mr-2"
                                                  }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                    key: 1,
                                                    class: "h-4 w-4 mr-2"
                                                  })),
                                                  createVNode("span", null, toDisplayString(child.title), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"])
                                            ]),
                                            _: 2
                                          }, 1032, ["to"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1032, ["heading"])) : createCommentVNode("", true),
                                    item.children ? (openBlock(), createBlock(_component_UiCommandSeparator, { key: 1 })) : createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                createVNode(_component_UiCommandGroup, {
                                  heading: "Theme",
                                  class: "p-1.5"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommandItem, {
                                      value: "light",
                                      onClick: ($event) => mode.value = "light"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:sun",
                                          class: "h-4 w-4 mr-2"
                                        }),
                                        createVNode("span", null, "Light")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiCommandItem, {
                                      value: "dark",
                                      onClick: ($event) => mode.value = "dark"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:moon",
                                          class: "h-4 w-4 mr-2"
                                        }),
                                        createVNode("span", null, "Dark")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiCommandItem, {
                                      value: "system",
                                      onClick: ($event) => mode.value = "auto"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:monitor",
                                          class: "h-4 w-4 mr-2"
                                        }),
                                        createVNode("span", null, "System")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }, 8, ["onEscapeKeyDown"])
                      ]),
                      _: 1
                    }, 8, ["search-term", "onUpdate:searchTerm"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, {
                    "search-term": unref(input),
                    "onUpdate:searchTerm": ($event) => isRef(input) ? input.value = $event : null,
                    class: "h-[350px]"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, {
                        placeholder: "Search documentation...",
                        onKeydown: [
                          withKeys(handleEnter, ["enter"]),
                          withKeys(($event) => handleNavigate(1), ["down"]),
                          withKeys(($event) => handleNavigate(-1), ["up"])
                        ]
                      }, null, 8, ["onKeydown"]),
                      createVNode(_component_UiCommandList, {
                        class: "text-sm",
                        onEscapeKeyDown: ($event) => open.value = false
                      }, {
                        default: withCtx(() => {
                          var _a, _b, _c, _d, _e;
                          return [
                            ((_a = unref(searchResult)) == null ? void 0 : _a.length) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "p-1.5"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(searchResult), (item, i) => {
                                return openBlock(), createBlock(_component_NuxtLink, {
                                  id: i,
                                  key: item.id,
                                  to: item.id,
                                  class: ["flex p-2 hover:bg-muted hover:cursor-pointer rounded-md select-none", [i === unref(activeSelect) && "bg-muted"]],
                                  onClick: ($event) => {
                                    open.value = false;
                                    activeSelect.value = i;
                                  }
                                }, {
                                  default: withCtx(() => [
                                    getItemIcon(item.id) ? (openBlock(), createBlock(_component_Icon, {
                                      key: 0,
                                      name: getItemIcon(item.id),
                                      class: "flex-shrink-0 self-center h-4 w-4 mr-2"
                                    }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex-shrink-0 h-4 w-4 mr-2"
                                    })),
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.titles, (subtitle, j) => {
                                      return openBlock(), createBlock("span", {
                                        key: `${subtitle}${j}`,
                                        class: "flex flex-shrink-0 self-center"
                                      }, [
                                        createTextVNode(toDisplayString(subtitle) + " ", 1),
                                        createVNode(_component_Icon, {
                                          name: "lucide:chevron-right",
                                          class: "self-center mx-0.5 text-muted-foreground"
                                        })
                                      ]);
                                    }), 128)),
                                    createVNode("span", { class: "self-center flex-shrink-0" }, toDisplayString(item.title), 1),
                                    createVNode("span", {
                                      class: "self-center text-xs text-muted-foreground truncate ml-2",
                                      innerHTML: getHighlightedContent(item.content)
                                    }, null, 8, ["innerHTML"])
                                  ]),
                                  _: 2
                                }, 1032, ["id", "to", "class", "onClick"]);
                              }), 128))
                            ])) : createCommentVNode("", true),
                            !((_b = unref(searchResult)) == null ? void 0 : _b.length) && ((_c = unref(input)) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "text-center text-muted-foreground pt-4"
                            }, " No results found. ")) : createCommentVNode("", true),
                            !((_d = unref(searchResult)) == null ? void 0 : _d.length) && !((_e = unref(input)) == null ? void 0 : _e.length) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (item) => {
                                return openBlock(), createBlock(Fragment, {
                                  key: item._path
                                }, [
                                  item.children ? (openBlock(), createBlock(_component_UiCommandGroup, {
                                    key: 0,
                                    heading: item.title,
                                    class: "p-1.5"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                        return openBlock(), createBlock(_component_NuxtLink, {
                                          key: child.id,
                                          to: child._path
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCommandItem, {
                                              value: child._path
                                            }, {
                                              default: withCtx(() => [
                                                child.icon ? (openBlock(), createBlock(_component_Icon, {
                                                  key: 0,
                                                  name: child.icon,
                                                  class: "h-4 w-4 mr-2"
                                                }, null, 8, ["name"])) : (openBlock(), createBlock("div", {
                                                  key: 1,
                                                  class: "h-4 w-4 mr-2"
                                                })),
                                                createVNode("span", null, toDisplayString(child.title), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"])
                                          ]),
                                          _: 2
                                        }, 1032, ["to"]);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["heading"])) : createCommentVNode("", true),
                                  item.children ? (openBlock(), createBlock(_component_UiCommandSeparator, { key: 1 })) : createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              createVNode(_component_UiCommandGroup, {
                                heading: "Theme",
                                class: "p-1.5"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCommandItem, {
                                    value: "light",
                                    onClick: ($event) => mode.value = "light"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:sun",
                                        class: "h-4 w-4 mr-2"
                                      }),
                                      createVNode("span", null, "Light")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiCommandItem, {
                                    value: "dark",
                                    onClick: ($event) => mode.value = "dark"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:moon",
                                        class: "h-4 w-4 mr-2"
                                      }),
                                      createVNode("span", null, "Dark")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiCommandItem, {
                                    value: "system",
                                    onClick: ($event) => mode.value = "auto"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:monitor",
                                        class: "h-4 w-4 mr-2"
                                      }),
                                      createVNode("span", null, "System")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }),
                        _: 1
                      }, 8, ["onEscapeKeyDown"])
                    ]),
                    _: 1
                  }, 8, ["search-term", "onUpdate:searchTerm"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SearchDialog.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const { enable, inAside } = useConfig().value.search;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$B;
      const _component_Kbd = _sfc_main$C;
      const _component_LayoutSearchDialog = _sfc_main$i;
      _push(`<!--[-->`);
      if (unref(enable)) {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "outline",
          class: ["pr-1.5 h-8 self-center w-full rounded-md", [unref(inAside) ? "mb-4" : "md:w-40 lg:w-64"]],
          onClick: ($event) => isOpen.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-muted-foreground overflow-hidden mr-auto"${_scopeId}> Search... </span>`);
              _push2(ssrRenderComponent(_component_Kbd, { class: "hidden md:block ml-auto" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-xs"${_scopeId2}>\u2318</span>K `);
                  } else {
                    return [
                      createVNode("span", { class: "text-xs" }, "\u2318"),
                      createTextVNode("K ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "text-muted-foreground overflow-hidden mr-auto" }, " Search... "),
                createVNode(_component_Kbd, { class: "hidden md:block ml-auto" }, {
                  default: withCtx(() => [
                    createVNode("span", { class: "text-xs" }, "\u2318"),
                    createTextVNode("K ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_LayoutSearchDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SearchButton.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AsideTreeItem",
  __ssrInlineRender: true,
  props: {
    link: {},
    level: {}
  },
  setup(__props) {
    const props = __props;
    const { collapse } = useConfig().value.aside;
    const collapsed = useCollapsedMap();
    const isOpen = ref(collapsed.value.get(props.link._path) || props.level < 1 && !collapse);
    watch(isOpen, (v) => {
      collapsed.value.set(props.link._path, v);
    });
    const isActive = computed(() => props.link._path === useRoute().path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCollapsible = _sfc_main$v;
      const _component_UiCollapsibleTrigger = _sfc_main$u;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCollapsibleContent = _sfc_main$t;
      const _component_LayoutAsideTree = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: ["rounded-md transition-all underline-offset-4 [&:not(:first-child)]:pt-3", [_ctx.level > 0 && "pl-4"]]
      }, _attrs))}>`);
      if (_ctx.link.children) {
        _push(ssrRenderComponent(_component_UiCollapsible, {
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "w-full text-left" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex gap-1"${_scopeId2}>`);
                    if (_ctx.link.icon) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: _ctx.link.icon,
                        class: "self-center mr-1",
                        size: "15"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(_ctx.link.title)} `);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                      size: "12",
                      class: "ml-auto self-center"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full flex gap-1" }, [
                        _ctx.link.icon ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: _ctx.link.icon,
                          class: "self-center mr-1",
                          size: "15"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(_ctx.link.title) + " ", 1),
                        createVNode(_component_Icon, {
                          name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                          size: "12",
                          class: "ml-auto self-center"
                        }, null, 8, ["name"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_LayoutAsideTree, {
                      links: _ctx.link.children,
                      level: _ctx.level + 1
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_LayoutAsideTree, {
                        links: _ctx.link.children,
                        level: _ctx.level + 1
                      }, null, 8, ["links", "level"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCollapsibleTrigger, { class: "w-full text-left" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full flex gap-1" }, [
                      _ctx.link.icon ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: _ctx.link.icon,
                        class: "self-center mr-1",
                        size: "15"
                      }, null, 8, ["name"])) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(_ctx.link.title) + " ", 1),
                      createVNode(_component_Icon, {
                        name: unref(isOpen) ? "lucide:chevrons-down-up" : "lucide:chevrons-up-down",
                        size: "12",
                        class: "ml-auto self-center"
                      }, null, 8, ["name"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiCollapsibleContent, null, {
                  default: withCtx(() => [
                    createVNode(_component_LayoutAsideTree, {
                      links: _ctx.link.children,
                      level: _ctx.level + 1
                    }, null, 8, ["links", "level"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: _ctx.link._path,
          class: ["w-full flex hover:underline text-muted-foreground gap-1", [unref(isActive) && "font-medium text-primary"]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.link.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: _ctx.link.icon,
                  class: "self-center mr-1",
                  size: "15"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(_ctx.link.title)}`);
            } else {
              return [
                _ctx.link.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: _ctx.link.icon,
                  class: "self-center mr-1",
                  size: "15"
                }, null, 8, ["name"])) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(_ctx.link.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AsideTreeItem.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "AsideTree",
  __ssrInlineRender: true,
  props: {
    links: {},
    level: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutAsideTreeItem = _sfc_main$g;
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["py-2.5", [_ctx.level > 0 && "border-l"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.links, (link) => {
        _push(ssrRenderComponent(_component_LayoutAsideTreeItem, {
          link,
          level: _ctx.level
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AsideTree.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Aside",
  __ssrInlineRender: true,
  props: {
    isMobile: { type: Boolean }
  },
  setup(__props) {
    const { navDirFromPath } = useContentHelpers();
    const { navigation } = useContent();
    const config = useConfig();
    const tree = computed(() => {
      const route = useRoute();
      const path2 = route.path.split("/");
      if (config.value.aside.useLevel) {
        const leveledPath = path2.splice(0, 2).join("/");
        const dir = navDirFromPath(leveledPath, navigation.value);
        return dir != null ? dir : [];
      }
      return navigation.value;
    });
    const path = useRoute().path;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiScrollArea = _sfc_main$A;
      const _component_LayoutHeaderNavMobile = _sfc_main$r;
      const _component_LayoutSearchButton = _sfc_main$h;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_LayoutAsideTree = _sfc_main$f;
      _push(ssrRenderComponent(_component_UiScrollArea, mergeProps({
        orientation: "vertical",
        class: "relative overflow-hidden h-full py-6 pr-6 text-sm",
        type: "hover"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.isMobile) {
              _push2(ssrRenderComponent(_component_LayoutHeaderNavMobile, { class: "border-b pb-2 mb-5" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(config).search.inAside) {
              _push2(ssrRenderComponent(_component_LayoutSearchButton, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(config).aside.useLevel) {
              _push2(`<ul class="pb-4 border-b mb-1"${_scopeId}><!--[-->`);
              ssrRenderList(unref(navigation), (link) => {
                _push2(`<li${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: link._path,
                  class: ["px-3 py-2 mb-1 hover:bg-muted rounded-md w-full flex gap-2 transition-all", [
                    unref(path).startsWith(link._path) && "bg-muted hover:bg-muted font-semibold text-primary"
                  ]]
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (link.icon) {
                        _push3(ssrRenderComponent(_component_Icon, {
                          name: link.icon,
                          class: "self-center",
                          size: "16"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(` ${ssrInterpolate(link.title)}`);
                    } else {
                      return [
                        link.icon ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: link.icon,
                          class: "self-center",
                          size: "16"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(link.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_LayoutAsideTree, {
              links: unref(tree),
              level: 0,
              class: "pl-3 pt-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              _ctx.isMobile ? (openBlock(), createBlock(_component_LayoutHeaderNavMobile, {
                key: 0,
                class: "border-b pb-2 mb-5"
              })) : createCommentVNode("", true),
              unref(config).search.inAside ? (openBlock(), createBlock(_component_LayoutSearchButton, { key: 1 })) : createCommentVNode("", true),
              unref(config).aside.useLevel ? (openBlock(), createBlock("ul", {
                key: 2,
                class: "pb-4 border-b mb-1"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation), (link) => {
                  return openBlock(), createBlock("li", {
                    key: link.id
                  }, [
                    createVNode(_component_NuxtLink, {
                      to: link._path,
                      class: ["px-3 py-2 mb-1 hover:bg-muted rounded-md w-full flex gap-2 transition-all", [
                        unref(path).startsWith(link._path) && "bg-muted hover:bg-muted font-semibold text-primary"
                      ]]
                    }, {
                      default: withCtx(() => [
                        link.icon ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: link.icon,
                          class: "self-center",
                          size: "16"
                        }, null, 8, ["name"])) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(link.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "class"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode(_component_LayoutAsideTree, {
                links: unref(tree),
                level: 0,
                class: "pl-3 pt-4"
              }, null, 8, ["links"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Aside.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "MobileNav",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$y;
      const _component_UiSheetTrigger = _sfc_main$x;
      const _component_UiButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_1;
      const _component_UiSheetContent = _sfc_main$w;
      const _component_LayoutHeaderLogo = _sfc_main$z;
      const _component_LayoutAside = _sfc_main$e;
      _push(ssrRenderComponent(_component_UiSheet, mergeProps({
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "ghost",
                    size: "icon",
                    class: "md:hidden"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "lucide:menu",
                          size: "18"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "lucide:menu",
                            size: "18"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "md:hidden"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "lucide:menu",
                          size: "18"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, {
              side: "left",
              class: "pr-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutHeaderLogo, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_LayoutAside, { "is-mobile": "" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutHeaderLogo),
                    createVNode(_component_LayoutAside, { "is-mobile": "" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "ghost",
                    size: "icon",
                    class: "md:hidden"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "lucide:menu",
                        size: "18"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiSheetContent, {
                side: "left",
                class: "pr-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_LayoutHeaderLogo),
                  createVNode(_component_LayoutAside, { "is-mobile": "" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/MobileNav.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuViewport",
  __ssrInlineRender: true,
  props: {
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute left-0 top-full flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(NavigationMenuViewport), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuViewport.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("relative z-10 flex max-w-max flex-1 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_sfc_main$c, null, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_sfc_main$c)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenu.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuList",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(NavigationMenuList), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "group flex flex-1 list-none items-center justify-center gap-x-1",
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuList.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuItem), mergeProps(props, _attrs), {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuTrigger",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(NavigationMenuTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(navigationMenuTriggerStyle)(), "group", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronDown), {
              class: "relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronDown), {
                class: "relative top-px ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
                "aria-hidden": "true"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuTrigger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuContent.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NavigationMenuLink), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/navigation-menu/NavigationMenuLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const { nav } = useConfig().value.header;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiNavigationMenu = _sfc_main$b;
      const _component_UiNavigationMenuList = _sfc_main$a;
      const _component_UiNavigationMenuItem = _sfc_main$9;
      const _component_UiNavigationMenuTrigger = _sfc_main$8;
      const _component_UiNavigationMenuContent = _sfc_main$7;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_UiNavigationMenuLink = _sfc_main$6;
      _push(ssrRenderComponent(_component_UiNavigationMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiNavigationMenuList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(nav), (item, i) => {
                    _push3(ssrRenderComponent(_component_UiNavigationMenuItem, { key: i }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (item.links) {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(_component_UiNavigationMenuTrigger, { class: "font-semibold bg-transparent" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(item.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiNavigationMenuContent, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<ul class="w-[250px] p-2"${_scopeId4}><!--[-->`);
                                  ssrRenderList(item.links, (link) => {
                                    _push5(`<li${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_NuxtLink, {
                                      to: link.to,
                                      target: link.target,
                                      class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="font-semibold"${_scopeId5}>${ssrInterpolate(link.title)}</div><div class="text-muted-foreground text-sm"${_scopeId5}>${ssrInterpolate(link.description)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                            createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</li>`);
                                  });
                                  _push5(`<!--]--></ul>`);
                                } else {
                                  return [
                                    createVNode("ul", { class: "w-[250px] p-2" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.links, (link) => {
                                        return openBlock(), createBlock("li", {
                                          key: link.title
                                        }, [
                                          createVNode(_component_NuxtLink, {
                                            to: link.to,
                                            target: link.target,
                                            class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                              createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "target"])
                                        ]);
                                      }), 128))
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--]-->`);
                          } else {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: item.to,
                              target: item.target,
                              class: "relative!"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:arrow-up-right",
                                    class: "absolute right-2 top-2 text-muted-foreground",
                                    size: "13"
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiNavigationMenuLink, {
                                    class: ["pr-6 font-semibold bg-transparent", unref(navigationMenuTriggerStyle)()]
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:arrow-up-right",
                                      class: "absolute right-2 top-2 text-muted-foreground",
                                      size: "13"
                                    }),
                                    createVNode(_component_UiNavigationMenuLink, {
                                      class: ["pr-6 font-semibold bg-transparent", unref(navigationMenuTriggerStyle)()]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            item.links ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_UiNavigationMenuTrigger, { class: "font-semibold bg-transparent" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiNavigationMenuContent, null, {
                                default: withCtx(() => [
                                  createVNode("ul", { class: "w-[250px] p-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.links, (link) => {
                                      return openBlock(), createBlock("li", {
                                        key: link.title
                                      }, [
                                        createVNode(_component_NuxtLink, {
                                          to: link.to,
                                          target: link.target,
                                          class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                            createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "target"])
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ], 64)) : (openBlock(), createBlock(_component_NuxtLink, {
                              key: 1,
                              to: item.to,
                              target: item.target,
                              class: "relative!"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "lucide:arrow-up-right",
                                  class: "absolute right-2 top-2 text-muted-foreground",
                                  size: "13"
                                }),
                                createVNode(_component_UiNavigationMenuLink, {
                                  class: ["pr-6 font-semibold bg-transparent", unref(navigationMenuTriggerStyle)()]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["to", "target"]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(nav), (item, i) => {
                      return openBlock(), createBlock(_component_UiNavigationMenuItem, { key: i }, {
                        default: withCtx(() => [
                          item.links ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiNavigationMenuTrigger, { class: "font-semibold bg-transparent" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiNavigationMenuContent, null, {
                              default: withCtx(() => [
                                createVNode("ul", { class: "w-[250px] p-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(item.links, (link) => {
                                    return openBlock(), createBlock("li", {
                                      key: link.title
                                    }, [
                                      createVNode(_component_NuxtLink, {
                                        to: link.to,
                                        target: link.target,
                                        class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                          createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to", "target"])
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ], 64)) : (openBlock(), createBlock(_component_NuxtLink, {
                            key: 1,
                            to: item.to,
                            target: item.target,
                            class: "relative!"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "lucide:arrow-up-right",
                                class: "absolute right-2 top-2 text-muted-foreground",
                                size: "13"
                              }),
                              createVNode(_component_UiNavigationMenuLink, {
                                class: ["pr-6 font-semibold bg-transparent", unref(navigationMenuTriggerStyle)()]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["to", "target"]))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiNavigationMenuList, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(nav), (item, i) => {
                    return openBlock(), createBlock(_component_UiNavigationMenuItem, { key: i }, {
                      default: withCtx(() => [
                        item.links ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_UiNavigationMenuTrigger, { class: "font-semibold bg-transparent" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiNavigationMenuContent, null, {
                            default: withCtx(() => [
                              createVNode("ul", { class: "w-[250px] p-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(item.links, (link) => {
                                  return openBlock(), createBlock("li", {
                                    key: link.title
                                  }, [
                                    createVNode(_component_NuxtLink, {
                                      to: link.to,
                                      target: link.target,
                                      class: "px-3 py-2 mb-1 hover:bg-muted rounded-md w-full block gap-2 transition-all"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "font-semibold" }, toDisplayString(link.title), 1),
                                        createVNode("div", { class: "text-muted-foreground text-sm" }, toDisplayString(link.description), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to", "target"])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ], 64)) : (openBlock(), createBlock(_component_NuxtLink, {
                          key: 1,
                          to: item.to,
                          target: item.target,
                          class: "relative!"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-up-right",
                              class: "absolute right-2 top-2 text-muted-foreground",
                              size: "13"
                            }),
                            createVNode(_component_UiNavigationMenuLink, {
                              class: ["pr-6 font-semibold bg-transparent", unref(navigationMenuTriggerStyle)()]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["to", "target"]))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header/Nav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DarkModeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const mode = useColorMode();
    function switchMode() {
      const sys = mode.system.value;
      if (mode.value === "light")
        mode.value = sys === "dark" ? "auto" : "dark";
      else if (mode.value === "dark")
        mode.value = sys === "light" ? "auto" : "light";
      else if (mode.value === "auto")
        mode.value = sys === "light" ? "dark" : "light";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(_component_UiButton, mergeProps({
        variant: "ghost",
        size: "icon",
        onClick: switchMode
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:sun",
              class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              size: "18"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:moon",
              class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              size: "18"
            }, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle theme</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:sun",
                class: "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
                size: "18"
              }),
              createVNode(_component_Icon, {
                name: "lucide:moon",
                class: "absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
                size: "18"
              }),
              createVNode("span", { class: "sr-only" }, "Toggle theme")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DarkModeToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useScrollspy() {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  const observerCallback = (entries) => entries.forEach((entry) => {
    const id = entry.target.id;
    if (entry.isIntersecting)
      visibleHeadings.value.push(id);
    else
      visibleHeadings.value = visibleHeadings.value.filter((t) => t !== id);
  });
  const updateHeadings = (headings) => {
    if (observer.value)
      observer.value.disconnect();
    observer.value = new IntersectionObserver(observerCallback);
    headings.forEach((heading) => {
      observer.value.observe(heading);
    });
  };
  watch(
    visibleHeadings,
    (val, oldVal) => {
      if (val.length === 0)
        activeHeadings.value = oldVal;
      else
        activeHeadings.value = val;
    },
    { deep: true }
  );
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TocTree",
  __ssrInlineRender: true,
  props: {
    links: {},
    level: {}
  },
  setup(__props) {
    const { activeHeadings, updateHeadings } = useScrollspy();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TocTree = resolveComponent("TocTree", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: [_ctx.level !== 0 && "pl-4"]
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.links, (link) => {
        _push(`<li class="pt-2">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `#${link.id}`,
          class: ["text-muted-foreground hover:text-primary transition-all", [unref(activeHeadings).includes(link.id) && "text-primary"]]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (link.children) {
          _push(ssrRenderComponent(_component_TocTree, {
            links: link.children,
            level: _ctx.level + 1
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/TocTree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Toc",
  __ssrInlineRender: true,
  props: {
    isSmall: { type: Boolean }
  },
  setup(__props) {
    const { toc } = useContent();
    const { title, links } = useConfig().value.toc;
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UiScrollArea = _sfc_main$A;
      const _component_LayoutTocTree = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_UiCollapsible = _sfc_main$v;
      const _component_UiCollapsibleTrigger = _sfc_main$u;
      const _component_UiCollapsibleContent = _sfc_main$t;
      if ((_a = unref(toc)) == null ? void 0 : _a.links.length) {
        _push(`<!--[-->`);
        if (!_ctx.isSmall) {
          _push(ssrRenderComponent(_component_UiScrollArea, {
            orientation: "vertical",
            class: "hidden lg:block h-[calc(100vh-6.5rem)] z-30 md:block overflow-y-auto",
            type: "hover"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<p class="mb-2 text-base font-semibold"${_scopeId}>${ssrInterpolate(unref(title))}</p>`);
                _push2(ssrRenderComponent(_component_LayoutTocTree, {
                  links: unref(toc).links,
                  level: 0,
                  class: [unref(links) && "pb-5 border-b"]
                }, null, _parent2, _scopeId));
                if (unref(links)) {
                  _push2(`<div class="pt-5 text-muted-foreground"${_scopeId}><!--[-->`);
                  ssrRenderList(unref(links), (link, i) => {
                    _push2(ssrRenderComponent(_component_NuxtLink, {
                      key: i,
                      to: link.to,
                      target: link.target,
                      class: "w-full flex hover:underline underline-offset-4 gap-1 [&:not(:first-child)]:pt-3"
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          if (link.icon) {
                            _push3(ssrRenderComponent(_component_Icon, {
                              name: link.icon,
                              class: "self-center mr-1",
                              size: "16"
                            }, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(` ${ssrInterpolate(link.title)} `);
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "lucide:arrow-up-right",
                            class: "ml-auto self-center text-muted-foreground",
                            size: "13"
                          }, null, _parent3, _scopeId2));
                        } else {
                          return [
                            link.icon ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: link.icon,
                              class: "self-center mr-1",
                              size: "16"
                            }, null, 8, ["name"])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(link.title) + " ", 1),
                            createVNode(_component_Icon, {
                              name: "lucide:arrow-up-right",
                              class: "ml-auto self-center text-muted-foreground",
                              size: "13"
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("p", { class: "mb-2 text-base font-semibold" }, toDisplayString(unref(title)), 1),
                  createVNode(_component_LayoutTocTree, {
                    links: unref(toc).links,
                    level: 0,
                    class: [unref(links) && "pb-5 border-b"]
                  }, null, 8, ["links", "class"]),
                  unref(links) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "pt-5 text-muted-foreground"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(links), (link, i) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: i,
                        to: link.to,
                        target: link.target,
                        class: "w-full flex hover:underline underline-offset-4 gap-1 [&:not(:first-child)]:pt-3"
                      }, {
                        default: withCtx(() => [
                          link.icon ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: link.icon,
                            class: "self-center mr-1",
                            size: "16"
                          }, null, 8, ["name"])) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(link.title) + " ", 1),
                          createVNode(_component_Icon, {
                            name: "lucide:arrow-up-right",
                            class: "ml-auto self-center text-muted-foreground",
                            size: "13"
                          })
                        ]),
                        _: 2
                      }, 1032, ["to", "target"]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_UiCollapsible, {
            open: unref(isOpen),
            "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
            class: "block lg:hidden text-sm w-full border-b"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "px-4 py-3 w-full flex text-left font-medium" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(title))} `);
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:chevron-right",
                        class: ["ml-auto self-center transition-all", [unref(isOpen) && "rotate-90"]]
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(title)) + " ", 1),
                        createVNode(_component_Icon, {
                          name: "lucide:chevron-right",
                          class: ["ml-auto self-center transition-all", [unref(isOpen) && "rotate-90"]]
                        }, null, 8, ["class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_LayoutTocTree, {
                        links: unref(toc).links,
                        level: 0,
                        class: "text-sm pl-4 border-l mb-3 mx-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_LayoutTocTree, {
                          links: unref(toc).links,
                          level: 0,
                          class: "text-sm pl-4 border-l mb-3 mx-4"
                        }, null, 8, ["links"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiCollapsibleTrigger, { class: "px-4 py-3 w-full flex text-left font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(title)) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "lucide:chevron-right",
                        class: ["ml-auto self-center transition-all", [unref(isOpen) && "rotate-90"]]
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCollapsibleContent, null, {
                    default: withCtx(() => [
                      createVNode(_component_LayoutTocTree, {
                        links: unref(toc).links,
                        level: 0,
                        class: "text-sm pl-4 border-l mb-3 mx-4"
                      }, null, 8, ["links"])
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Toc.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeaderLogo = _sfc_main$z;
      const _component_LayoutMobileNav = _sfc_main$d;
      const _component_LayoutHeaderNav = _sfc_main$5;
      const _component_LayoutSearchButton = _sfc_main$h;
      const _component_DarkModeToggle = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_1;
      const _component_LayoutToc = _sfc_main$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky z-40 top-0 bg-background/80 backdrop-blur-lg lg:border-b" }, _attrs))}><div class="container px-4 md:px-8 flex h-14 max-w-screen-2xl items-center border-b lg:border-none gap-2 justify-between">`);
      _push(ssrRenderComponent(_component_LayoutHeaderLogo, { class: "hidden md:flex flex-1" }, null, _parent));
      _push(ssrRenderComponent(_component_LayoutMobileNav, null, null, _parent));
      _push(ssrRenderComponent(_component_LayoutHeaderNav, { class: "hidden lg:flex flex-1" }, null, _parent));
      _push(`<div class="flex flex-1 justify-end gap-2">`);
      if (!unref(config).search.inAside) {
        _push(ssrRenderComponent(_component_LayoutSearchButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex">`);
      if (unref(config).header.darkModeToggle) {
        _push(ssrRenderComponent(_component_DarkModeToggle, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(config).header.links, (link, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: link == null ? void 0 : link.to,
          target: link == null ? void 0 : link.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                size: "icon",
                class: "flex gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (link == null ? void 0 : link.icon) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: link.icon,
                        size: "18"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      (link == null ? void 0 : link.icon) ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: link.icon,
                        size: "18"
                      }, null, 8, ["name"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  variant: "ghost",
                  size: "icon",
                  class: "flex gap-2"
                }, {
                  default: withCtx(() => [
                    (link == null ? void 0 : link.icon) ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: link.icon,
                      size: "18"
                    }, null, 8, ["name"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
      if (unref(config).toc.enable) {
        _push(`<div class="lg:hidden">`);
        _push(ssrRenderComponent(_component_LayoutToc, { "is-small": "" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { footer } = useConfig().value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiButton = _sfc_main$B;
      const _component_Icon = __nuxt_component_1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "text-muted-foreground py-6 md:px-8 md:py-0" }, _attrs))}><div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row"><span class="text-sm">${ssrInterpolate(unref(footer).credits)}</span><span class="flex-1"></span><!--[-->`);
      ssrRenderList(unref(footer).links, (link, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: i,
          to: link == null ? void 0 : link.to,
          target: link == null ? void 0 : link.target
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiButton, {
                variant: "ghost",
                size: (link == null ? void 0 : link.icon) && !(link == null ? void 0 : link.title) ? "icon" : "default",
                class: "flex gap-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (link == null ? void 0 : link.icon) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: link.icon,
                        size: "20"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (link == null ? void 0 : link.title) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(link.title)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      (link == null ? void 0 : link.icon) ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: link.icon,
                        size: "20"
                      }, null, 8, ["name"])) : createCommentVNode("", true),
                      (link == null ? void 0 : link.title) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(link.title), 1)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiButton, {
                  variant: "ghost",
                  size: (link == null ? void 0 : link.icon) && !(link == null ? void 0 : link.title) ? "icon" : "default",
                  class: "flex gap-2"
                }, {
                  default: withCtx(() => [
                    (link == null ? void 0 : link.icon) ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: link.icon,
                      size: "20"
                    }, null, 8, ["name"])) : createCommentVNode("", true),
                    (link == null ? void 0 : link.title) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(link.title), 1)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["size"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main$e as a, _sfc_main$2 as b, _sfc_main as c };
//# sourceMappingURL=Footer-M90-hRQI.mjs.map
