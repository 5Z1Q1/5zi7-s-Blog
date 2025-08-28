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
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    // 使用 logo.png 作为 favicon
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
  { text: '简介', link: '/about' },
  { text: 'Our Story', link: '/love-record' },
  { text: '技术文章', link: '/redis-guide' }
    ],

    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '简介',
        link: '/about'
      },
      {
        text: '技术文章',
        items: [
          { text: 'Redis 实践入门', link: '/redis-guide' }
        ]
      },
      {
        text: '生活随笔',
        items: [
          { text: 'Our Story', link: '/love-record' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
