// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  //aaaa
  ssr: true, // Enable Server-Side Rendering (default)
routeRules: {
'/static': { prerender: true }, // Example for static routes
},
});
