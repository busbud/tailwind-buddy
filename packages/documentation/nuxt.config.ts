// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['shadcn-docs-nuxt'],
  telemetry: false,
  app: {
    baseURL: '/tailwind-classes-authority/',
    buildAssetsDir: 'assets'
  }
});
