module.exports = {
    // 网站标题
    title: '失望的石榴',
    // 网站描述
    description: 'God help those who help themselves.',
    // 根地址
    base: '/blog/',
    head: [
        // 添加图标
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: '知识', link: '/knowledge/Css' },
            { text: '生活', link: '/life/travel' },
            { text: '记录', link: '/rec/vitepress' },
        ],
        sidebar: { // 侧边栏，可以分组
            "/knowledge/": [
                {
                    text: "前端知识",
                    items: [
                        {
                            text: "Css",
                            link: "/knowledge/Css",
                        },
                        {
                            text: "Html",
                            link: "/knowledge/Html",
                        },
                        {
                            text: "JavaScript",
                            link: "/knowledge/JavaScript",
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
            "/rec/": [
                {
                    text: "学习记录",
                    items: [
                        {
                            text: "vitepress",
                            link: "/rec/vitepress",
                        }
                    ],
                },
            ],
    
        },
    },

    

}