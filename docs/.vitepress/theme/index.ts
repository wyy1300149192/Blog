import Theme from 'vitepress/theme'
import './style/var.css'
import "./style/custom.css";
import "./style/animista.css";
import {create, NDivider, NIcon, NCard, NAvatar,NTabs,NTabPane, NList, NListItem, NProgress, NStatistic, NNumberAnimation } from 'naive-ui';

const naive = create({
  components: [NDivider,NIcon,NCard,NAvatar,NTabs,NTabPane,NList,NListItem,NProgress,NStatistic,NNumberAnimation]
})



export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    app.use(naive)
  },
}