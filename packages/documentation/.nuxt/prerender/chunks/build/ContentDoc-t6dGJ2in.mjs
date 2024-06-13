import { d as useRuntimeConfig, u as useRoute } from './server.mjs';
import { defineComponent, useSlots, h, useSSRContext, unref, watch } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/index.mjs';
import { a as useHead } from './index-DIUDACRG.mjs';
import { withTrailingSlash, joinURL, withoutTrailingSlash, hasProtocol } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ufo@1.5.3/node_modules/ufo/dist/index.mjs';
import _sfc_main$2 from './ContentRenderer-C9p5rbdf.mjs';
import _sfc_main$1 from './ContentQuery-DjrHf90O.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/devalue@4.3.3/node_modules/devalue/index.js';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/vue@3.4.27_typescript@5.4.5/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@unhead+ssr@1.9.12/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unenv@1.9.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
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
import './ContentRendererMarkdown-Ceiv-2ss.mjs';
import 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/index.js';
import './asyncData-BV4gSZ7U.mjs';

const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = useRuntimeConfig();
  const refreshHead = (data = content) => {
    var _a;
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          property: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host != null ? host : "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          property: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        property: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          // @ts-ignore - We expect `head.image` from Nuxt configurations...
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, (_a = image.src) != null ? _a : "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const ContentDoc = defineComponent({
  name: "ContentDoc",
  props: {
    /**
     * Renderer props
     */
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default useRoute().path
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Whether or not to map the document data to the `head` property.
     */
    head: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  /**
   * Document empty fallback
   * @slot empty
   */
  /**
   * Document not found fallback
   * @slot not-found
   */
  render(ctx) {
    const { contentHead } = useRuntimeConfig().public.content;
    const slots = useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const shouldInjectContentHead = head === void 0 ? contentHead : head;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || withTrailingSlash(useRoute().path),
      find: "one"
    };
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
          var _a;
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { doc: data, refresh, isPartial, excerpt, ...this.$attrs });
        } : ({ data }) => {
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return h(
            _sfc_main$2,
            { value: data, excerpt, tag, ...this.$attrs },
            // Forward local `empty` slots to ContentRenderer if it is used.
            { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) }
          );
        },
        // Empty slot
        empty: (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
        },
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
        }
      }
    );
  }
});
const _sfc_main = ContentDoc;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/@nuxt+content@2.12.1_ioredis@5.4.1_nuxt@3.11.2_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_6z2aizzl4o6tqt2aeem7x7h7uy/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentDoc-t6dGJ2in.mjs.map
