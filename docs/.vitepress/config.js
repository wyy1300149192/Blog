module.exports = {
    // 网站标题
    title: '失望的石榴',
    // 网站描述
    description: 'God help those who help themselves.',
    // 打包目录
    base: '/blog/',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '记录', link: '/record/Css' },
            { text: '生活', link: '/life/travel' },
        ],
        sidebar: { // 侧边栏，可以分组
            "/record/": [
                {
                    text: "前端知识点记录",
                    items: [
                        {
                            text: "Css",
                            link: "/record/Css",
                        },
                        {
                            text: "Html",
                            link: "/record/Html",
                        }
                    ],
                },
            ],
            "/life/": [
                {
                    text: "生活点滴",
                    items: [
                        {
                            text: "旅行",
                            link: "/life/travel",
                        },
                        {
                            text: "酒",
                            link: "/life/wine",
                        }
                    ],
                },
            ],
    
        },
    },

    

}