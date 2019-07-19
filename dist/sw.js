importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07517a03aedc9e0e05f7.js",
    "revision": "3bbd6120fc15cd1a75acd97824601cd0"
  },
  {
    "url": "/_nuxt/1890b1d69a95ac86b1c9.js",
    "revision": "7c264cddcafa94a9005ca73d91f8ee2d"
  },
  {
    "url": "/_nuxt/38bf973dbd871a572e37.js",
    "revision": "5b65494bfb40383a86096b66c5f5cfb5"
  },
  {
    "url": "/_nuxt/3c8d85754b0cef1b45c8.js",
    "revision": "bdc436631e93c6b107e7f90a24743699"
  },
  {
    "url": "/_nuxt/46ad51e580ba8c2d2713.js",
    "revision": "cfcb47b59bbded7ae53fccf569e3ccc3"
  },
  {
    "url": "/_nuxt/640d8d842eda35b0773c.js",
    "revision": "497c3aeecb1af9b57341ccd8b574d91f"
  },
  {
    "url": "/_nuxt/6d0c99cbac0a48ae2c12.js",
    "revision": "5298b6f12ff07f2c542b2984783e4063"
  },
  {
    "url": "/_nuxt/7547cf9b402ae6426eb7.js",
    "revision": "9b920fc58af9c415cf96e11c355231d3"
  },
  {
    "url": "/_nuxt/9436263ffb80e1f3af27.js",
    "revision": "e555b147c234c643e26a51660ed328ea"
  },
  {
    "url": "/_nuxt/9f3f7f34335756f40cf7.js",
    "revision": "54ae39803d1ae06230e4e4e3feee5ce2"
  },
  {
    "url": "/_nuxt/9f6aaad1fa6d3d8b8a63.js",
    "revision": "a02d092a829768da241c904856a7b077"
  },
  {
    "url": "/_nuxt/b91387b8567e7f2eaadf.js",
    "revision": "f2c99cd36acf7f5d1df7d9e1c17aa2b9"
  },
  {
    "url": "/_nuxt/dbf59f8c824a0dd7d47a.js",
    "revision": "07fb50e00398f18b6ed428cbea642c9b"
  },
  {
    "url": "/_nuxt/f2c93cbc91e94b01be59.js",
    "revision": "7fb780ebbe87d04d2e345f86eb3bb483"
  }
], {
  "cacheId": "my-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
