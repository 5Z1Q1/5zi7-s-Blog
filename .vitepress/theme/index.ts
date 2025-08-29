import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }: { app: App, router: any, siteData: any }) {
    if (typeof window !== 'undefined') {
      // 确保在客户端运行
      const applyOurStoryStyle = () => {
        // 查找所有可能的 Our Story 链接
        const selectors = [
          'a[href="/love-record"]',
          'a[href*="love-record"]',
          '.VPNavBarMenuLink[href="/love-record"]',
          '.VPNav a[href="/love-record"]'
        ];

        let targetLink: Element | null = null;
        for (const selector of selectors) {
          targetLink = document.querySelector(selector);
          if (targetLink) break;
        }

        // 如果没找到，通过文本内容查找
        if (!targetLink) {
          const allLinks = document.querySelectorAll('.VPNavBar a, .VPNav a');
          for (const link of allLinks) {
            if (link.textContent && link.textContent.trim() === 'Our Story') {
              targetLink = link;
              break;
            }
          }
        }

        if (targetLink) {
          const linkElement = targetLink as HTMLElement;
          // 直接设置内联样式，确保优先级最高
          linkElement.style.cssText = `
            background: linear-gradient(90deg, #ffb6c1 0%, #ffe4e1 100%) !important;
            color: #d6336c !important;
            font-family: 'Brush Script MT', 'Comic Sans MS', 'Lucida Handwriting', cursive !important;
            font-size: 18px !important;
            font-weight: bold !important;
            border-radius: 12px !important;
            padding: 8px 16px !important;
            margin: 0 4px !important;
            box-shadow: 0 3px 12px rgba(255,182,193,0.4) !important;
            transition: all 0.3s ease !important;
            border: 2px solid rgba(255,182,193,0.3) !important;
            text-decoration: none !important;
          `;

          // 添加悬停效果
          linkElement.addEventListener('mouseenter', function() {
            this.style.cssText += `
              transform: scale(1.05) rotate(-1deg) !important;
              background: linear-gradient(90deg, #ffe4e1 0%, #ffb6c1 100%) !important;
              color: #ad1457 !important;
              box-shadow: 0 5px 20px rgba(255,182,193,0.6) !important;
              border-color: rgba(255,182,193,0.8) !important;
            `;
          });

          linkElement.addEventListener('mouseleave', function() {
            this.style.cssText = `
              background: linear-gradient(90deg, #ffb6c1 0%, #ffe4e1 100%) !important;
              color: #d6336c !important;
              font-family: 'Brush Script MT', 'Comic Sans MS', 'Lucida Handwriting', cursive !important;
              font-size: 18px !important;
              font-weight: bold !important;
              border-radius: 12px !important;
              padding: 8px 16px !important;
              margin: 0 4px !important;
              box-shadow: 0 3px 12px rgba(255,182,193,0.4) !important;
              transition: all 0.3s ease !important;
              border: 2px solid rgba(255,182,193,0.3) !important;
              text-decoration: none !important;
              transform: none !important;
            `;
          });

          console.log('Our Story 样式已应用！');
        } else {
          console.log('未找到 Our Story 链接');
        }
      };

      // 页面加载后应用样式
      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          applyOurStoryStyle();
        }, 100);
      };

      // 强制删除 aside-curtain 元素的函数
      const removeAsideCurtain = () => {
        // 查找所有 aside-curtain 元素
        const curtainElements = document.querySelectorAll(
          '.aside-curtain, [class*="aside-curtain"], div[data-v-343c73d6].aside-curtain'
        );
        
        curtainElements.forEach(element => {
          if (element && element instanceof HTMLElement) {
            // 多种删除方法
            element.remove(); // 直接删除
            element.style.display = 'none'; // 隐藏
            element.style.visibility = 'hidden'; // 不可见
            element.style.opacity = '0'; // 透明
            element.style.height = '0'; // 高度为0
            element.style.width = '0'; // 宽度为0
            element.style.overflow = 'hidden'; // 隐藏溢出
            element.style.position = 'absolute'; // 绝对定位
            element.style.left = '-9999px'; // 移出屏幕
            element.style.zIndex = '-9999'; // 置于底层
            
            // 清除所有背景
            element.style.background = 'none';
            element.style.backgroundImage = 'none';
            element.style.backgroundColor = 'transparent';
            
            console.log('Removed aside-curtain element:', element);
          }
        });
      };

      // 页面加载完成后删除
      const observer = new MutationObserver(() => {
        removeAsideCurtain();
      });

      // 监听DOM变化
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // 初始页面加载
      setTimeout(() => {
        applyOurStoryStyle();
        removeAsideCurtain(); // 删除 aside-curtain
      }, 500);

      // 路由变化时也删除
      router.afterEach(() => {
        setTimeout(() => {
          removeAsideCurtain();
        }, 100);
      });
    }
  }
}
