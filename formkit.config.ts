import { defineFormKitConfig } from '@formkit/vue'

export default defineFormKitConfig(() => {
  const config = useRuntimeConfig()

  return {
    config: {
      theme: 'genesis',
    },
    // rules: {},
    // locales: {},
    // etc.
  }
})
