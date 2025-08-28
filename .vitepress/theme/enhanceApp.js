// enhanceApp.js - 客户端增强
export default {
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // 确保在客户端运行
      router.onAfterRouteChanged = () => {
        // 页面加载后应用样式
        setTimeout(() => {
          applyOurStoryStyle();
        }, 100);
      };

      // 初始页面加载
      if (typeof document !== 'undefined') {
        setTimeout(() => {
          applyOurStoryStyle();
        }, 500);
      }
    }
  }
};

function applyOurStoryStyle() {
  // 查找所有可能的 Our Story 链接
  const selectors = [
    'a[href="/love-record"]',
    'a[href*="love-record"]',
    '.VPNavBarMenuLink[href="/love-record"]',
    '.VPNav a[href="/love-record"]'
  ];

  let targetLink = null;
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
    // 直接设置内联样式，确保优先级最高
    targetLink.style.cssText = `
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
    targetLink.addEventListener('mouseenter', function() {
      this.style.cssText += `
        transform: scale(1.05) rotate(-1deg) !important;
        background: linear-gradient(90deg, #ffe4e1 0%, #ffb6c1 100%) !important;
        color: #ad1457 !important;
        box-shadow: 0 5px 20px rgba(255,182,193,0.6) !important;
        border-color: rgba(255,182,193,0.8) !important;
      `;
    });

    targetLink.addEventListener('mouseleave', function() {
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
}
