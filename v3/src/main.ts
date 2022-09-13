import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import Router from './router'

const app = createApp(App)
app.use(ElementPlus)
app.use(Antd)
app.use(Router)
app.mount('#app')
