module.exports = {
    vite:{
        ssr: {
            noExternal: ['naive-ui'],
          },
    },
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
            { text: '知识', link: '/knowledge/studyPlan' },
            { text: '生活', link: '/life/travel/Datong' },
            { text: '记录', link: '/rec/software' },
        ],
        sidebar: { // 侧边栏，可以分组
            "/knowledge/": [
                {
                    text: "计划",
                    items: [
                        {
                            text: "学习计划",
                            link: "/knowledge/studyPlan",
                        }
                    ],
                },
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
                        },
                        {
                            text: "Vue3",
                            link: "/knowledge/Vue3",
                        }
                    ],
                },
            ],
            "/life/": [
                {
                    text: "旅行",
                    items: [
                        {
                            text: "三亚",
                            link: "/life/travel/SanYa",
                        },
                        {
                            text: "上海",
                            link: "/life/travel/Shanghai",
                        },
                        {
                            text: "大同",
                            link: "/life/travel/Datong",
                        },
                        {
                            text: "呼和浩特",
                            link: "/life/travel/Hohhot",
                        },
                        {
                            text: "预期",
                            link: "/life/travel/plan",
                        },
                     
                    ],
                },
                {
                    text: "其他",
                    items: [
                        {
                            text: "酒",
                            link: "/life/wine",
                        }
                    ],
                },
            ],
            "/rec/": [
                {
                    text: "常用软件",
                    items: [
                        {
                            text: "常用软件",
                            link: "/rec/software",
                        }
                    ],
                },
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