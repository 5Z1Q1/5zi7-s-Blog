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
    ["style", {}, `
      body {
        background-image: url('/bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 100vh;
      }

      /* 顶部导航栏样式 */
      .VPNav {
        background: #F5F5F7 ;
        border-radius: 0px;
        box-shadow: none;
      }

      .VPNavBar {
        background: #F5F5F7;
        border-radius: 0px;
        box-shadow: none;
        position: fixed;
        z-index: 100;
      }

      .VPSidebar {
        background: linear-gradient(to bottom, #F5F5F7, transparent) !important;
        border-radius: 0px;
        box-shadow: none;
        position: fixed;
      }

      /* 强制侧边栏及其子元素背景透明 */
      .VPSidebar {
        background: linear-gradient(to bottom, #F5F5F7, transparent) !important;
        background-color: transparent !important;
      }

      /* 侧边栏导航元素透明背景 */
      .VPSidebar .nav, #VPSidebarNav, nav.nav {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* curtain 元素透明背景 */
      .VPSidebar .curtain, .curtain, .aside-curtain {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* 侧边栏项目背景透明 */
      .VPSidebar .VPSidebarItem, .VPSidebar .group, .VPSidebar .items {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* 侧边栏具体项目元素背景透明 */
      .VPSidebarItem.level-0, .VPSidebarItem.level-1, .VPSidebarItem .item {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* 强制所有侧边栏相关元素透明 */
      .group, .VPSidebarItem.level-0.has-active, .VPSidebarItem.level-1.is-link, 
      .VPSidebarItem.level-1.is-active.has-active {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* 导航栏标题背景透明 */
      .title, a.title {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* content-body 元素透明背景 */
      .content-body {
        background: transparent !important;
        background-color: transparent !important;
      }

      /* 为导航栏和侧边栏文字添加阴影 */
      .VPNavBar .VPNavBarMenuLink, .VPNavBar .VPNavBarTitle .text, .VPSidebar .VPSidebarLink .text {
        color: #000000ff;
      }

      /* 为内容区的文字添加阴影以提高可读性 */
      .VPContent, .VPContent p, .VPContent h1, .VPContent h2, .VPContent h3, .VPContent li, .VPContent a {
        color: #000000ff;
      }
    `]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
  { text: '简介', link: '/about' },
  { text: 'Lnh&Wzq', link: '/love-record' }
    ],

    sidebar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '简介',
        link: '/about'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
