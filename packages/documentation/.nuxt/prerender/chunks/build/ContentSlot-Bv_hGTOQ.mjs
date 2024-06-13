import { _ as __nuxt_component_0 } from './MDCSlot-CmpPwHeD.mjs';
import { defineComponent, h, useSSRContext } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';

const _sfc_main = defineComponent({
  props: {
    /**
     * A slot name or function
     */
    use: {
      type: Function,
      default: void 0
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  render(props) {
    return h(__nuxt_component_0, props);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+content@2.12.1_ioredis@5.4.1_nuxt@3.11.2_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_6z2aizzl4o6tqt2aeem7x7h7uy/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentSlot-Bv_hGTOQ.mjs.map
