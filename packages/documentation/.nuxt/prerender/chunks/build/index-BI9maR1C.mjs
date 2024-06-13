import { klona } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import { l as useNuxtApp, k as defineAppConfig } from './server.mjs';
import { defuFn } from 'file:///Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';

const cfg0 = defineAppConfig({
  shadcnDocs: () => ({
    site: {
      name: "tailwind-classes-authority"
    },
    header: {
      title: "tailwind-classes-authority",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg"
      },
      nav: [],
      links: [{
        icon: "lucide:github",
        to: "https://github.com/flozero/tailwind-classes-authority",
        target: "_blank"
      }]
    },
    aside: {
      useLevel: true,
      collapse: false
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeIcon: defaultCodeIcon
    },
    footer: {
      credits: "Copyright \xA9 2024",
      links: [{
        icon: "lucide:github",
        to: "https://github.com/flozero/tailwind-classes-authority",
        target: "_blank"
      }]
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [{
        title: "Star on GitHub",
        icon: "lucide:star",
        to: "https://github.com/flozero/tailwind-classes-authority",
        target: "_blank"
      }, {
        title: "Create Issues",
        icon: "lucide:circle-dot",
        to: "https://github.com/flozero/tailwind-classes-authority/issues",
        target: "_blank"
      }]
    },
    search: {
      enable: true,
      inAside: false
    }
  })
});
const defaultCodeIcon = {
  "package.json": "vscode-icons:file-type-node",
  "tsconfig.json": "vscode-icons:file-type-tsconfig",
  ".npmrc": "vscode-icons:file-type-npm",
  ".editorconfig": "vscode-icons:file-type-editorconfig",
  ".eslintrc": "vscode-icons:file-type-eslint",
  ".eslintrc.cjs": "vscode-icons:file-type-eslint",
  ".eslintignore": "vscode-icons:file-type-eslint",
  "eslint.config.js": "vscode-icons:file-type-eslint",
  "eslint.config.mjs": "vscode-icons:file-type-eslint",
  "eslint.config.cjs": "vscode-icons:file-type-eslint",
  ".gitignore": "vscode-icons:file-type-git",
  "yarn.lock": "vscode-icons:file-type-yarn",
  ".env": "vscode-icons:file-type-dotenv",
  ".env.example": "vscode-icons:file-type-dotenv",
  ".vscode/settings.json": "vscode-icons:file-type-vscode",
  "nuxt": "vscode-icons:file-type-nuxt",
  ".nuxtrc": "vscode-icons:file-type-nuxt",
  ".nuxtignore": "vscode-icons:file-type-nuxt",
  "nuxt.config.js": "vscode-icons:file-type-nuxt",
  "nuxt.config.ts": "vscode-icons:file-type-nuxt",
  "nuxt.schema.ts": "vscode-icons:file-type-nuxt",
  "tailwind.config.js": "vscode-icons:file-type-tailwind",
  "tailwind.config.ts": "vscode-icons:file-type-tailwind",
  "vue": "vscode-icons:file-type-vue",
  "ts": "vscode-icons:file-type-typescript",
  "tsx": "vscode-icons:file-type-typescript",
  "mjs": "vscode-icons:file-type-js",
  "cjs": "vscode-icons:file-type-js",
  "js": "vscode-icons:file-type-js",
  "jsx": "vscode-icons:file-type-js",
  "md": "vscode-icons:file-type-markdown",
  "mdc": "vscode-icons:file-type-markdown",
  "py": "vscode-icons:file-type-python",
  "npm": "vscode-icons:file-type-npm",
  "pnpm": "vscode-icons:file-type-pnpm",
  "npx": "vscode-icons:file-type-npm",
  "yarn": "vscode-icons:file-type-yarn",
  "bun": "vscode-icons:file-type-bun",
  "yml": "vscode-icons:file-type-yaml",
  "json": "vscode-icons:file-type-json",
  "terminal": "lucide:terminal"
};
const cfg1 = defineAppConfig({
  shadcnDocs: {
    site: {
      name: "shadcn-docs"
    },
    header: {
      title: "shadcn-docs",
      showTitle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg"
      },
      darkModeToggle: true,
      nav: [{
        title: "Docs",
        links: [{
          title: "Getting Started",
          to: "/getting-started",
          description: "Start building your document with shadcn-docs-nuxt",
          target: void 0
        }, {
          title: "API",
          to: "/api",
          description: "Discover the configurations and exposed APIs.",
          target: void 0
        }]
      }, {
        title: "Credits",
        links: [{
          title: "shadcn-ui",
          to: "https://ui.shadcn.com/",
          description: "For the beautiful component design & docs design",
          target: "_blank"
        }, {
          title: "shadcn-vue",
          to: "https://www.shadcn-vue.com/",
          description: "For the vue port of shadcn-ui & some docs component source",
          target: "_blank"
        }, {
          title: "Docus",
          to: "https://docus.dev/",
          description: "For inspiration & some docs component source",
          target: "_blank"
        }, {
          title: "Nuxt Content",
          to: "https://content.nuxt.com/",
          description: "Content made easy for Vue Developers",
          target: "_blank"
        }]
      }, {
        title: "Use This Template",
        to: "/getting-started/installation",
        target: void 0
      }],
      links: [{
        icon: "lucide:github",
        to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
        target: "_blank"
      }]
    },
    aside: {
      useLevel: true,
      collapse: false
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeIcon: {
        "package.json": "vscode-icons:file-type-node",
        "tsconfig.json": "vscode-icons:file-type-tsconfig",
        ".npmrc": "vscode-icons:file-type-npm",
        ".editorconfig": "vscode-icons:file-type-editorconfig",
        ".eslintrc": "vscode-icons:file-type-eslint",
        ".eslintrc.cjs": "vscode-icons:file-type-eslint",
        ".eslintignore": "vscode-icons:file-type-eslint",
        "eslint.config.js": "vscode-icons:file-type-eslint",
        "eslint.config.mjs": "vscode-icons:file-type-eslint",
        "eslint.config.cjs": "vscode-icons:file-type-eslint",
        ".gitignore": "vscode-icons:file-type-git",
        "yarn.lock": "vscode-icons:file-type-yarn",
        ".env": "vscode-icons:file-type-dotenv",
        ".env.example": "vscode-icons:file-type-dotenv",
        ".vscode/settings.json": "vscode-icons:file-type-vscode",
        "nuxt": "vscode-icons:file-type-nuxt",
        ".nuxtrc": "vscode-icons:file-type-nuxt",
        ".nuxtignore": "vscode-icons:file-type-nuxt",
        "nuxt.config.js": "vscode-icons:file-type-nuxt",
        "nuxt.config.ts": "vscode-icons:file-type-nuxt",
        "nuxt.schema.ts": "vscode-icons:file-type-nuxt",
        "tailwind.config.js": "vscode-icons:file-type-tailwind",
        "tailwind.config.ts": "vscode-icons:file-type-tailwind",
        "vue": "vscode-icons:file-type-vue",
        "ts": "vscode-icons:file-type-typescript",
        "tsx": "vscode-icons:file-type-typescript",
        "mjs": "vscode-icons:file-type-js",
        "cjs": "vscode-icons:file-type-js",
        "js": "vscode-icons:file-type-js",
        "jsx": "vscode-icons:file-type-js",
        "md": "vscode-icons:file-type-markdown",
        "mdc": "vscode-icons:file-type-markdown",
        "py": "vscode-icons:file-type-python",
        "npm": "vscode-icons:file-type-npm",
        "pnpm": "vscode-icons:file-type-pnpm",
        "npx": "vscode-icons:file-type-npm",
        "yarn": "vscode-icons:file-type-yarn",
        "bun": "vscode-icons:file-type-bun",
        "yml": "vscode-icons:file-type-yaml",
        "json": "vscode-icons:file-type-json",
        "terminal": "lucide:terminal"
      }
    },
    footer: {
      credits: "Copyright \xA9 2024",
      links: [
        {
          title: "shadcn-vue",
          to: "https://www.shadcn-vue.com/",
          target: "_blank"
        },
        {
          icon: "lucide:github",
          to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
          target: "_blank"
        }
      ]
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [{
        title: "Star on GitHub",
        icon: "lucide:star",
        to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt",
        target: "_blank"
      }, {
        title: "Create Issues",
        icon: "lucide:circle-dot",
        to: "https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues",
        target: "_blank"
      }]
    },
    search: {
      enable: true,
      inAside: false
    }
  }
});
const inlineConfig = {
  "nuxt": {
    "buildId": "3110e9cf-e146-41cf-8ddc-b65dab0e0e29"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const iconCollections = ["fluent-emoji-high-contrast", "material-symbols-light", "cryptocurrency-color", "icon-park-outline", "icon-park-twotone", "fluent-emoji-flat", "emojione-monotone", "streamline-emojis", "heroicons-outline", "simple-line-icons", "material-symbols", "flat-color-icons", "icon-park-solid", "pepicons-pencil", "heroicons-solid", "pepicons-print", "cryptocurrency", "pixelarticons", "system-uicons", "bitcoin-icons", "devicon-plain", "entypo-social", "token-branded", "grommet-icons", "vscode-icons", "pepicons-pop", "svg-spinners", "fluent-emoji", "simple-icons", "circle-flags", "medical-icon", "icomoon-free", "majesticons", "radix-icons", "humbleicons", "fa6-regular", "emojione-v1", "skill-icons", "academicons", "healthicons", "fluent-mdl2", "teenyicons", "ant-design", "gravity-ui", "akar-icons", "lets-icons", "streamline", "fa6-brands", "file-icons", "game-icons", "foundation", "fa-regular", "mono-icons", "hugeicons", "iconamoon", "zondicons", "mdi-light", "eos-icons", "gridicons", "icon-park", "heroicons", "fa6-solid", "meteocons", "arcticons", "dashicons", "fa-brands", "websymbol", "fontelico", "mingcute", "flowbite", "marketeq", "bytesize", "guidance", "openmoji", "emojione", "nonicons", "brandico", "flagpack", "fa-solid", "fontisto", "si-glyph", "pepicons", "iconoir", "tdesign", "clarity", "octicon", "codicon", "pajamas", "formkit", "line-md", "twemoji", "noto-v1", "fxemoji", "devicon", "raphael", "flat-ui", "topcoat", "feather", "tabler", "carbon", "lucide", "memory", "mynaui", "circum", "fluent", "nimbus", "entypo", "icons8", "subway", "vaadin", "solar", "basil", "typcn", "charm", "prime", "quill", "logos", "token", "covid", "maki", "gala", "mage", "ooui", "noto", "unjs", "flag", "iwwa", "zmdi", "bpmn", "mdi", "ion", "uil", "bxs", "cil", "uiw", "uim", "uit", "uis", "jam", "oui", "bxl", "cib", "cbi", "cif", "gis", "map", "geo", "fad", "eva", "wpf", "whh", "ic", "ph", "ri", "bi", "bx", "gg", "ci", "ep", "fe", "mi", "f7", "ei", "wi", "la", "fa", "oi", "et", "el", "ls", "vs", "il", "ps"];
function resolveIconName(name = "") {
  let prefix;
  let provider = "";
  if (name[0] === "@" && name.includes(":")) {
    provider = name.split(":")[0].slice(1);
    name = name.split(":").slice(1).join(":");
  }
  if (name.startsWith("i-")) {
    name = name.replace(/^i-/, "");
    for (const collectionName of iconCollections) {
      if (name.startsWith(collectionName)) {
        prefix = collectionName;
        name = name.slice(collectionName.length + 1);
        break;
      }
    }
  } else if (name.includes(":")) {
    const [_prefix, _name] = name.split(":");
    prefix = _prefix;
    name = _name;
  }
  return {
    provider,
    prefix: prefix || "",
    name: name || ""
  };
}

export { resolveIconName as r, useAppConfig as u };
//# sourceMappingURL=index-BI9maR1C.mjs.map
