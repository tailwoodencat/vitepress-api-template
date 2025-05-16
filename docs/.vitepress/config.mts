import { defineConfig } from 'vitepress'
// import { tocPlugin } from '@mdit-vue/plugin-toc';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // set base for github pages
  base: '/vitepress-api-template/',

  // https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: true,

  title: "vitepress-api-template",
  description: "A Vitepress Api template",
  markdown: {
    // https://github.com/tani/markdown-it-mathjax3
    math: true,
    // markdown-it-anchor 的选项
    // // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: markdownItAnchor.permalink.headerLink()
    // },
    // @mdit-vue/plugin-toc 的选项
    // // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    // toc: { level: [1, 2, 3 ]},
    // config: (md) => {
    //   // 使用更多的 Markdown-it 插件！
    //   md.use(tocPlugin)
    // }
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo/icon.iconset/icon_128x128.png',
      dark: '/logo/icon.iconset/icon_128x128.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'guide', link: '/guide/markdown' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Markdown', link: '/guide/markdown' },
          { text: 'Asset', link: '/guide/asset' },
        ]
      }
    ],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    outline: {
      level: [1, 4],
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tailwoodencat/vitepress-api-template' }
    ]
  }
})
