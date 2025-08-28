import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "5zi7Blog",
  description: "This is wuziqi's personal blog.",
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
  { text: 'Lnh&Wzq', link: '/love-record' }
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
