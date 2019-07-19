importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0155d6dd9db153986b1c.js",
    "revision": "b8ebf30792579eb2f68ab289f4770f2a"
  },
  {
    "url": "/_nuxt/14d42013cfb4c75f6311.js",
    "revision": "9ff8fd27a53d37966b0a4f2eff74b0b9"
  },
  {
    "url": "/_nuxt/22af2c64e04fd2796d57.js",
    "revision": "b29ec126581b729d1b732596ed11a0f2"
  },
  {
    "url": "/_nuxt/2ee75b4e0a59ea93aaae.js",
    "revision": "a88398c27c8e9b37dee4bbcd15114cbd"
  },
  {
    "url": "/_nuxt/4ca544439c46a01ac5fe.js",
    "revision": "a19d57e5139598c7604415e56d153adf"
  },
  {
    "url": "/_nuxt/5293dbebbe0136bca137.js",
    "revision": "697322da978d90cc9cc4e5df11b4f050"
  },
  {
    "url": "/_nuxt/a5d62702530ef330053f.js",
    "revision": "01c024b366c366c20dab63b45bd3ab00"
  },
  {
    "url": "/_nuxt/bb06746d614d4c2982e6.js",
    "revision": "88da6f507d9c25afb1e5e6958e48c06d"
  },
  {
    "url": "/_nuxt/d875dac034477e02cd60.js",
    "revision": "b2b35222c38d746edc8985d2c5b66ae0"
  },
  {
    "url": "/_nuxt/e0fff50e8789e8adf29f.js",
    "revision": "3f71850a1e43161a4c58e1b5d019ba80"
  },
  {
    "url": "/_nuxt/e5c67420bd433806223b.js",
    "revision": "463a657edb61aa82188a42745d68ca02"
  },
  {
    "url": "/_nuxt/ec675801910b55211c25.js",
    "revision": "c28c0136f946156edf325ce7f212b2ab"
  },
  {
    "url": "/_nuxt/f7f246c97c376ec6d569.js",
    "revision": "8c94d82f1405b26cb2587bb48de72619"
  },
  {
    "url": "/_nuxt/f8ae2b1bf44dd4659cda.js",
    "revision": "76c844bcfaf63f6c820ffc63f50c65f4"
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
