// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
    // '@nuxtjs/apollo',
  ],
  imports: {
    dirs: ["./stores"]
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // example: apiSecret: '123',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiKey: process.env.NASA_API_KEY,
    },
  },
  image: {
    // ToDo optimize images here - look into this in nuxt docs
  },
  // If you want to add graphql & mongodb continue this setup
  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: 'https://spacex-production.up.railway.app'
  //     }
  //   },
  // },
});
