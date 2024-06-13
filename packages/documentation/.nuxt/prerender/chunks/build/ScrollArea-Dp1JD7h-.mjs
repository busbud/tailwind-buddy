import { computed, defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext, renderSlot } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { u as useAppConfig } from './index-BI9maR1C.mjs';
import { a as useContent, u as useRoute, e as useContentHelpers } from './server.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/radix-vue@1.8.3_vue@3.4.27_typescript@5.4.5_/node_modules/radix-vue/dist/index.js';
import { c as cn } from './utils-H80jjgLf.mjs';

function useConfig() {
  const appConfig = computed(() => {
    var _a;
    return ((_a = useAppConfig()) == null ? void 0 : _a.shadcnDocs) || {};
  });
  const { navKeyFromPath } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();
  return computed(
    () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const header = ((_a = appConfig == null ? void 0 : appConfig.value) == null ? void 0 : _a.header) || {};
      const main = ((_b = appConfig == null ? void 0 : appConfig.value) == null ? void 0 : _b.main) || {};
      const aside = ((_c = appConfig == null ? void 0 : appConfig.value) == null ? void 0 : _c.aside) || {};
      const footer = ((_d = appConfig == null ? void 0 : appConfig.value) == null ? void 0 : _d.footer) || {};
      const toc = ((_e = appConfig == null ? void 0 : appConfig.value) == null ? void 0 : _e.toc) || {};
      return {
        ...appConfig.value,
        header: {
          ...header,
          ...navKeyFromPath(route.path, "header", navigation.value || []),
          ...(_f = page.value) == null ? void 0 : _f.header
        },
        main: {
          ...main,
          ...navKeyFromPath(route.path, "main", navigation.value || []),
          ...(_g = page.value) == null ? void 0 : _g.main
        },
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, "aside", navigation.value || []),
          ...(_h = page.value) == null ? void 0 : _h.aside
        },
        toc: {
          ...toc,
          ...navKeyFromPath(route.path, "toc", navigation.value || []),
          ...(_i = page.value) == null ? void 0 : _i.toc
        },
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, "footer", navigation.value || []),
          ...(_j = page.value) == null ? void 0 : _j.footer
        }
      };
    }
  );
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ScrollBar",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "vertical" },
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
      _push(ssrRenderComponent(unref(ScrollAreaScrollbar), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "flex touch-none select-none transition-colors",
          _ctx.orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
          _ctx.orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaThumb), { class: "relative flex-1 rounded-full bg-border" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ScrollArea",
  __ssrInlineRender: true,
  props: {
    type: {},
    dir: {},
    scrollHideDelay: {},
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
      _push(ssrRenderComponent(unref(ScrollAreaRoot), mergeProps(delegatedProps.value, {
        class: unref(cn)("relative overflow-hidden", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ScrollAreaCorner), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ScrollAreaViewport), { class: "h-full w-full rounded-[inherit]" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }),
              createVNode(_sfc_main$1),
              createVNode(unref(ScrollAreaCorner))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/scroll-area/ScrollArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a, useConfig as u };
//# sourceMappingURL=ScrollArea-Dp1JD7h-.mjs.map
