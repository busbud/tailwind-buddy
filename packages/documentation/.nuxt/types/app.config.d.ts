
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'
import cfg0 from "/Users/florentgiraud/dev/busbud/tailwind-classes-authority/packages/documentation/app.config"
import cfg1 from "/Users/florentgiraud/dev/busbud/tailwind-classes-authority/node_modules/.pnpm/shadcn-docs-nuxt@0.1.3_@opentelemetry+api@1.9.0_@parcel+watcher@2.4.1_@types+node@20.14.2_@un_gt4qwtyxjkvknromndkpxrlbry/node_modules/shadcn-docs-nuxt/app.config"

declare const inlineConfig = {
  "nuxt": {
    "buildId": "3110e9cf-e146-41cf-8ddc-b65dab0e0e29"
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0, typeof cfg1]>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
