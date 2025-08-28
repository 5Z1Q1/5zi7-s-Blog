import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "5zi7",
  description: "5zi7 = Wuzi7 = 5Z1Q1 = 五子棋",
  vite: {
    css: {
      preprocessorOptions: {}
    },
    build: {},
  },
  head: [
    ["link", { rel: "stylesheet", href: "/custom-bg.css" }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  { text: 'Lnh&Wzq', link: '/love-record' },
  { text: '简介', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
