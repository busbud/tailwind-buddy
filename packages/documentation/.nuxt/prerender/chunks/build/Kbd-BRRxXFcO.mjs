import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Kbd",
  __ssrInlineRender: true,
  props: {
    size: { default: "sm" }
  },
  setup(__props) {
    const sizeClasses = {
      xs: "min-h-4 text-[10px] h-4 px-1",
      sm: "min-h-5 text-[11px] h-5 px-1",
      md: "min-h-6 text-[12px] h-6 px-1.5"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<kbd${ssrRenderAttrs(mergeProps({
        class: ["inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border border-border bg-muted font-sans font-medium", sizeClasses[_ctx.size]]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</kbd>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Kbd.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Kbd-BRRxXFcO.mjs.map
