
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "3110e9cf-e146-41cf-8ddc-b65dab0e0e29"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/florentgiraud/dev/busbud/tailwind-classes-authority/packages/documentation/app.config.ts"
import cfg1 from "/Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/shadcn-docs-nuxt@0.1.3_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.2_@un_gt4qwtyxjkvknromndkpxrlbry/node_modules/shadcn-docs-nuxt/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, inlineConfig)
