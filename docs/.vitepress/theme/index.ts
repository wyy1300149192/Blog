import Theme from 'vitepress/theme'
import './style/var.css'
import "./style/custom.css";
import {create, NDivider, NIcon, NCard, NAvatar } from 'naive-ui';

const naive = create({
  components: [NDivider,NIcon,NCard,NAvatar]
})



export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    app.use(naive)
  },
}