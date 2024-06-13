import { defineComponent, mergeProps, useSSRContext } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import { s as ssrRenderSlot } from './ssrSlot-CoS0mSMX.mjs';
import './MDCSlot-CmpPwHeD.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Field",
  __ssrInlineRender: true,
  props: {
    name: {},
    type: {},
    required: { type: Boolean },
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "[&:not(:first-child)]:mt-4 [&:not(:first-child)]:pt-4" }, _attrs))}><div class="flex mb-2 space-x-2"><span class="font-bold text-md text-primary">${ssrInterpolate(_ctx.name)}</span>`);
      if (_ctx.required) {
        _push(`<span class="self-center font-mono text-sm text-muted-foreground"> required </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="flex-1"></span><span class="self-center font-mono text-sm text-muted-foreground">${ssrInterpolate(_ctx.type)}</span></div><span class="text-sm text-muted-foreground">`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push, _parent);
      _push(` ${ssrInterpolate(_ctx.description)}</span></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Field-yweOEF7o.mjs.map
