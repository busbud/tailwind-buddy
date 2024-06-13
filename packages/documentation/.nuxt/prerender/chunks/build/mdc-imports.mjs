import { visit } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/index.js';
import { toString } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';

function rehypeHighlight$1(opts) {
  const options = opts;
  return async (tree) => {
    const tasks = [];
    const styles = [];
    visit(
      tree,
      (node) => ["pre", "code"].includes(node.tagName) && !!(node.properties?.language || node.properties?.highlights),
      (node) => {
        const _node = node;
        const highlights = typeof _node.properties.highlights === "string" ? _node.properties.highlights.split(/[,\s]+/).map(Number) : Array.isArray(_node.properties.highlights) ? _node.properties.highlights.map(Number) : [];
        const task = options.highlighter(
          toString(node),
          _node.properties.language,
          options.theme,
          {
            highlights: highlights.filter(Boolean),
            meta: _node.properties.meta
          }
        ).then(({ tree: tree2, className, style, inlineStyle }) => {
          _node.properties.className = ((_node.properties.className || "") + " " + className).trim();
          _node.properties.style = ((_node.properties.style || "") + " " + inlineStyle).trim();
          if (_node.children[0]?.tagName === "code") {
            _node.children[0].children = tree2;
          } else {
            _node.children = tree2[0].children || tree2;
          }
          if (style)
            styles.push(style);
        });
        tasks.push(task);
      }
    );
    if (tasks.length) {
      await Promise.all(tasks);
      tree.children.push({
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: cleanCSS(styles.join("")) }],
        properties: {}
      });
    }
  };
}
const cleanCSS = (css) => {
  const styles = css.split("}").filter((s) => Boolean(s.trim())).map((s) => s.trim() + "}");
  return Array.from(new Set(styles)).join("");
};

const defaults = {
  theme: {},
  async highlighter(code, lang, theme, options) {
    try {
      if (process.browser && window.sessionStorage.getItem("mdc-shiki-highlighter") === "browser") {
        return import('../runtime.mjs').then(function (n) { return n.m; }).then((h) => h.default(code, lang, theme, options)).catch(() => ({}));
      }
      return await $fetch("/api/_mdc/highlight", {
        params: {
          code,
          lang,
          theme: JSON.stringify(theme),
          options: JSON.stringify(options)
        }
      });
    } catch (e) {
      if (process.browser && e?.response?.status === 404) {
        window.sessionStorage.setItem("mdc-shiki-highlighter", "browser");
        return this.highlighter?.(code, lang, theme, options);
      }
    }
    return Promise.resolve({ tree: [{ type: "text", value: code }], className: "", style: "" });
  }
};
function rehypeHighlight(opts = {}) {
  const options = { ...defaults, ...opts };
  if (typeof options.highlighter !== "function") {
    options.highlighter = defaults.highlighter;
  }
  return rehypeHighlight$1(options);
}

const remarkPlugins = {
};

const rehypePlugins = {
  'highlight': { instance: rehypeHighlight, options: {} },
};

const highlight = {"theme":{"default":"github-light","dark":"github-dark"}};

export { highlight, rehypePlugins, remarkPlugins };
//# sourceMappingURL=mdc-imports.mjs.map
