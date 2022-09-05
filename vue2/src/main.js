import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(ElementUI)
Vue.use(Antd)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')