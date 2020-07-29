module.exports = {
    themeConfig: {
      logo: '/assets/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '文档', link: '/guide/' },
        { text: '分享', link: 'https://google.com' },
        {
            text: '选择语言',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ]
    }
  }