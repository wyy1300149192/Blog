
<template>
    <div v-cloak>
        <ClientOnly>
            <div>
                <n-divider title-placement="left"> <n-icon size="20" color="var(--vp-c-brand-1)">
                        <LogoWindows />
                    </n-icon><span class="title">windows常用工具：</span> </n-divider>

                <div class="list-item">
                    <n-card class="link-item" @click="toUrl(item.url)" hoverable v-for="item in windowsSoftwareList">
                        <div class="link-item-boty">
                            <n-avatar object-fit="contain"  :size="50" color="#ebebef" :src="item.image" style="padding:4px;flex-shrink: 0;" />
                            <div class="link-item-boty-right">
                                <p class="link-item-boty-title" v-istitle :title="item.name">{{ item.name }}</p>
                                <p class="link-item-boty-introduce" v-istitle :title="item.introduce">{{ item.introduce }}
                                </p>
                            </div>
                        </div>

                    </n-card>


                </div>

            </div>
            <div>
                <n-divider title-placement="left"> <n-icon size="20" color="var(--vp-c-brand-1)">
                        <TerminalSharp />
                    </n-icon><span class="title">开发相关：</span> </n-divider>

                <div class="list-item">
                    <n-card class="link-item" @click="toUrl(item.url)" hoverable v-for="item in DevelopmentList">
                        <div class="link-item-boty">
                            <n-avatar object-fit="contain"  :size="50" color="#ebebef" :src="item.image" style="padding:4px;flex-shrink: 0;" />
                            <div class="link-item-boty-right">
                                <p class="link-item-boty-title" v-istitle :title="item.name">{{ item.name }}</p>
                                <p class="link-item-boty-introduce" v-istitle :title="item.introduce">{{ item.introduce }}
                                </p>
                            </div>
                        </div>

                    </n-card>


                </div>

            </div>
            <div>
                <n-divider title-placement="left"> <n-icon size="20" color="var(--vp-c-brand-1)">
                        <Download />
                    </n-icon><span class="title">下载相关：</span> </n-divider>

                <div class="list-item">
                    <n-card class="link-item" @click="toUrl(item.url)" hoverable v-for="item in DownloadList">
                        <div class="link-item-boty">
                            <n-avatar object-fit="contain" :size="50" color="#ebebef" :src="item.image" style="padding:4px;flex-shrink: 0;" />
                            <div class="link-item-boty-right">
                                <p class="link-item-boty-title" v-istitle :title="item.name">{{ item.name }}</p>
                                <p class="link-item-boty-introduce" v-istitle :title="item.introduce">{{ item.introduce }}
                                </p>
                            </div>
                        </div>

                    </n-card>


                </div>

            </div>
        </ClientOnly>

    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { LogoWindows, TerminalSharp,Download } from "@vicons/ionicons5";

const windowsSoftwareList = reactive([
    {
        name: 'ChatGPT Turbo',
        introduce: '免费ChatGPT',
        image: 'https://img.icons8.com/?size=120&id=bqBDyembTAOT&format=png',
        url: 'https://aibox.cool/'
    },
    {
        name: '截图软件',
        introduce: '截图 贴图 生产力',
        image: 'https://zh.snipaste.com/img/logo.svg',
        url: 'https://zh.snipaste.com/'
    },
    {
        name: 'Watt Toolkit',
        introduce: '多功能 Steam 工具箱',
        image: 'https://steampp.net/svg/logo.png',
        url: 'https://steampp.net/'
    },
    {
        name: 'MSDN',
        introduce: '原版软件下载',
        image: 'https://msdn.itellyou.cn/favicon.ico',
        url: 'https://msdn.itellyou.cn/'
    },
    {
        name: 'Bandizip',
        introduce: '纯净解压软件',
        image: 'https://www.bandisoft.com/img.front/bandizip_logo.png',
        url: 'https://www.bandisoft.com/bandizip/'
    },
    {
        name: 'Google Chrome',
        introduce: '谷歌浏览器',
        image: 'https://www.google.cn/chrome/static/images/chrome-logo-m100.svg',
        url: 'https://www.google.cn/chrome/'
    },

    {
        name: 'Quicker',
        introduce: '您的指尖工具箱',
        image: 'https://getquicker.net/favicon.ico',
        url: 'https://getquicker.net/'
    }, {
        name: 'Steam',
        introduce: 'Steam 是畅玩游戏、讨论游戏、创造游戏的快乐所在。',
        image: 'https://store.steamchina.com/favicon.ico',
        url: 'https://store.steampowered.com/about/'
    }, {
        name: 'Epic Games',
        introduce: '欢迎来到Epic游戏商城！',
        image: 'https://www.epicgames.com/favicon.ico',
        url: 'https://www.epicgames.com/help/zh-CN/?lang=zh-CN'
    }, {
        name: '迅雷',
        introduce: '老牌下载软件',
        image: 'https://www.xunlei.com/main/logo.png',
        url: 'https://www.xunlei.com/'
    }, {
        name: '百度网盘',
        introduce: '自由存，随心享',
        image: 'https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico',
        url: 'https://pan.baidu.com/download#win'
    }, {
        name: '阿里云盘',
        introduce: '够安全、易于分享的网盘',
        image: 'https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico',
        url: 'https://www.aliyundrive.com/download'
    }, {
        name: 'PotPlayer',
        introduce: '实用本地视频播放器',
        image: 'https://imgsa.baidu.com/forum/pic/item/960a304e251f95ca1b9d4b57cb177f3e660952e3.jpg',
        url: 'https://potplayer.tv/?lang=zh_CN'
    }, {
        name: '格式工厂',
        introduce: '多媒体文件转换工具',
        image: 'https://ts1.cn.mm.bing.net/th/id/R-C.ef83716e60c0a32481a02c678ff4353a?rik=7BD7aMyl8vmA4A&riu=http%3a%2f%2fpic.pdowncc.com%2fuploadimg%2fico%2f2022%2f1118%2f1668760898376047.png&ehk=RTGXp2XITmdA6oQ9O43z8a%2f0Y689jyD0guCLVVM2rRc%3d&risl=&pid=ImgRaw&r=0',
        url: 'http://www.pcfreetime.com/formatfactory/CN/index.html'
    }, {
        name: 'MSI Afterburner',
        introduce: '监控温度、电压与风扇速度',
        image: 'https://asset.msi.com/global/picture/app/afterburner.png',
        url: 'https://www.msi.com/Landing/afterburner/graphics-cards'
    }, {
        name: 'Logi Options+',
        introduce: '罗技办公设备驱动',
        image: 'https://static.techspot.com/images2/downloads/topdownload/2022/09/2022-09-08-ts3_thumbs-a58.png',
        url: 'https://www.logitech.com/zh-cn/software/logi-options-plus.html'
    }, {
        name: '图吧工具箱',
        introduce: '图吧工具箱 - 最纯净的硬件工具箱',
        image: 'https://www.tbtool.cn/resource/icon.ico',
        url: 'https://www.tbtool.cn/'
    }, {
        name: 'AList',
        introduce: '一个支持多种存储的文件列表程序',
        image: 'https://alist.nn.ci/logo.svg',
        url: 'https://alist.nn.ci/zh/guide/install/manual.html'
    }
])
const DevelopmentList = reactive([
    {
        name: 'Visual Studio Code',
        introduce: '代码编辑器',
        image: 'https://code.visualstudio.com/favicon.ico',
        url: 'https://code.visualstudio.com/'
    }, {
        name: 'Node.js',
        introduce: 'Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。',
        image: 'https://img.nodejs.cn/favicon.png',
        url: 'https://nodejs.cn/download/'
    }, {
        name: 'SourceTree',
        introduce: '免费的Git客户端管理工具',
        image: 'https://www.runoob.com/wp-content/uploads/2022/06/Sourcetree@2x-icon-blue.png',
        url: 'https://www.sourcetreeapp.com/'
    },
    {
        name: 'HBuilderX',
        introduce: 'Uniapp IDE',
        image: 'https://qiniu-ecdn.dcloud.net.cn/uploads/images/hbuilderx/icon/hbuilderx_icon@2x.png',
        url: 'https://www.dcloud.io/hbuilderx.html'
    }, {
        name: '微信开发者工具',
        introduce: '微信小程序开发者工具',
        image: 'https://weixin.qq.com/zh_CN/htmledition/images/wechat_logo_109.2x219536.png',
        url: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html'
    }, {
        name: 'filezilla',
        introduce: 'FTP工具',
        image: 'https://www.filezilla.cn/images/filezilla-48x48.png',
        url: 'https://www.filezilla.cn/download'
    }, {
        name: 'Element UI',
        introduce: '基于 Vue 2.0 的组件库',
        image: 'https://element-plus.org/images/element-plus-logo.svg',
        url: 'https://element.eleme.cn/#/zh-CN'
    }, {
        name: 'Naive UI',
        introduce: '一个 Vue 3 组件库',
        image: 'https://www.naiveui.com/assets/naivelogo-XQ1U1Js8.svg',
        url: 'https://www.naiveui.com/zh-CN/light'
    }, {
        name: 'Ant Design of Vue',
        introduce: 'Ant Design Vue 组件库',
        image: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        url: 'https://www.antdv.com/docs/vue/introduce-cn'
    }, {
        name: 'Vant 4',
        introduce: '轻量、可定制的移动端 Vue 组件库',
        image: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        url: 'https://vant-contrib.gitee.io/vant/#/zh-CN'
    }, {
        name: 'ECharts',
        introduce: '一个基于 JavaScript 的开源可视化图表库',
        image: 'https://www.runoob.com/wp-content/uploads/2019/11/echarts_200.png',
        url: 'https://echarts.apache.org/zh/index.html'
    }, {
        name: 'iconfont',
        introduce: '阿里巴巴矢量图标库',
        image: 'https://img.alicdn.com/imgextra/i4/O1CN01XZe8pH1USpiUNT1QN_!!6000000002517-2-tps-114-114.png',
        url: 'https://www.iconfont.cn/?lang=zh-cn'
    }, {
        name: 'xicons',
        introduce: 'vue常用图标库资源',
        image: 'https://element.eleme.cn/static/resource.a72b8f8.png',
        url: 'https://xicons.org/#/zh-CN'
    }, {
        name: 'Bootstrap',
        introduce: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。',
        image: 'https://www.bootcss.com/assets/img/navlogo-small.png',
        url: 'https://www.bootcss.com/'
    }, {
        name: 'jQuery',
        introduce: '功能丰富的 JavaScript 工具库',
        image: 'https://www.jquery123.com/assets/images/jquery-logo-md.png',
        url: 'https://www.jquery123.com/'
    }, {
        name: 'Vue.js',
        introduce: 'JavaScript 框架',
        image: 'https://router.vuejs.org/logo.svg',
        url: 'https://cn.vuejs.org/guide/introduction.html'
    }, {
        name: 'Vue Router',
        introduce: '为 Vue.js 提供富有表现力、可配置的、方便的路由',
        image: 'https://router.vuejs.org/logo.svg',
        url: 'https://router.vuejs.org/zh/'
    }, {
        name: 'VitePress',
        introduce: '简单，强大，快速。你一直想要的现代 SSG 框架。',
        image: 'https://router.vuejs.org/logo.svg',
        url: 'https://skewb.gitee.io/vitepress/'
    }, {
        name: 'Cascadia Code',
        introduce: '微软出品的免费编辑器字体',
        image: 'https://github.com/microsoft/cascadia-code/raw/main/images/cascadia-code.png',
        url: 'https://github.com/microsoft/cascadia-code/releases'
    },

])
const DownloadList = reactive([
{
        name: '豆瓣奥斯卡',
        introduce: '奥斯卡汇总',
        image: 'https://img1.doubanio.com/favicon.ico',
        url: 'https://movie.douban.com/awards/Oscar/95/'
    },
    {
        name: '旋风动漫',
        introduce: '开启动漫下载之旅',
        image: 'https://static.ktxp.org/favicon.ico',
        url: 'http://share.xfapi.top:88/'
    }, {
        name: 'Anime字幕论坛',
        introduce: 'ACG字幕资源',
        image: 'https://bbs.acgrip.com/favicon.ico',
        url: 'https://bbs.acgrip.com/'
    }, {
        name: 'CD包音乐网',
        introduce: '专业的无损音乐论坛,APE,FLAC,WAV,CD,MP3专辑网站！',
        image: 'https://www.cdbao.net/favicon.ico',
        url: 'https://www.cdbao.net/'
    }, {
        name: '吾爱破解',
        introduce: '破解论坛',
        image: 'https://www.52pojie.cn/favicon.ico',
        url: 'https://www.52pojie.cn/'
    }, {
        name: '阿里云盘吧',
        introduce: '分享你的阿里云资源吧',
        image: 'https://www.aliyunpanba.com/favicon.ico',
        url: 'https://www.aliyunpanba.com/'
    }, {
        name: 'TGx',
        introduce: '可以使用IMDB号下载的网站',
        image: 'https://tgx.rs/common/favicon/favicon.ico',
        url: 'https://tgx.rs/'
    }, {
        name: 'RARBG',
        introduce: '影视磁力链下载',
        image: 'https://rargb.to/static/img/logo_dark_nodomain2_optimized.png',
        url: 'https://rargb.to/'
    }, {
        name: 'BDArtClub',
        introduce: '蓝光艺术收藏俱乐部',
        image: 'https://www.bdart.club/upload/mxcms/20220924-1/QQ%E5%9B%BE%E7%89%8720220924180932.png',
        url: 'https://www.bdart.club/'
    }, {
        name: '520Gamer',
        introduce: '游戏交流中心',
        image: 'https://www.gamer520.com/favicon/favicon.ico',
        url: 'https://www.gamer520.com'
    }, {
        name: '我的小站',
        introduce: '阿里云盘资源共享站',
        image: 'https://pan666.net/favicon.ico',
        url: 'https://pan666.net'
    }, {
        name: 'zlibrary',
        introduce: '您通往知识和文化的门户。 每个人都可以使用。',
        image: 'https://zh.z-library.se/img/logo.zlibrary.png',
        url: 'https://zh.z-library.se/'
    }, {
        name: 'volmoe',
        introduce: 'kindle漫画',
        image: 'https://www.volmoe.com/img/mox-logo-256.png',
        url: 'https://www.volmoe.com/'
    },
    {
        name: '3DM论坛',
        introduce: '单机游戏论坛',
        image: 'https://bbs.3dmgame.com/favicon.ico',
        url: 'https://bbs.3dmgame.com/forum.php'
    }, {
        name: 'NexusMods',
        introduce: '游戏mod论坛',
        image: 'https://images.nexusmods.com/favicons/ReskinOrange/favicon-32x32.png',
        url: 'https://www.nexusmods.com/'
    },



])
const toUrl = (url) => {
    window.open(url)
}

const vIstitle = {
    mounted: (el) => {
        console.log("🚀 ~ file: software.vue:249 ~ el.clientWidth:", el.clientWidth)
        console.log("🚀 ~ file: software.vue:250 ~ el.scrollWidth:", el.scrollWidth)
        if (el.scrollWidth <= el.clientWidth) {
            el.title = ''
        }
    }
}

</script>



<style scoped>
.dark .link-item {
    background-color: #32363f;
    border-color: #32363f;
}

.list-item {
    overflow: hidden;
}

.title {
    margin-left: 5px;
    color: var(--vp-c-text-1);
}



.link-item {
    float: left;
    cursor: pointer;
    max-width: 22%;
    margin: 10px;

}

@media screen and (max-width:750px) {
    .link-item {
        max-width: 90%;
    }
}

.link-item-boty {
    display: flex;
    align-items: center;

}

.link-item-boty-right {
    margin-left: 5px;
    width: 0;
    flex: 1;
}

.link-item-boty-title {
    color: var(--vp-c-text-1);
    font-weight: bolder;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    line-height: 23px;

}

.link-item-boty-introduce {
    font-size: 12px;
    line-height: 20px;
    color: #6c757d !important;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

:deep(.n-card__content) {
    padding: 8px !important;
}



p {
    margin: 0;
    padding: 0;
}

[v-cloak] {
    display: none;
}
</style>