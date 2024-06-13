import _Highlight from '/Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/@nuxtjs+mdc@0.6.1_rollup@4.18.0/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"}}