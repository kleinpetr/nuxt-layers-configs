export default defineAppConfig({
  baseLayer: {
    values: ['val1', 'val2', 'val3']
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    baseLayer?: {
      /** Project name */
      values?: string[]
    }
  }
}
