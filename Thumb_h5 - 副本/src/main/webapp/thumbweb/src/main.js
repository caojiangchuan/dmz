import Vue from 'vue'
import './assets/css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
// window.urlTest= 'http://localhost:8080/ThumbFront/front/requestApi'
window.urlTest= '/financial-api/Api/requestDeal'//本地调接口
//window.urlTest= '/ThumbFront/front/requestApi'//配置地址大拇指
// window.urlTest2 = '/financial-api/Api/requestDeal' //理财网关
// VUE_APP_API=http://172.16.230.169:8880 测试环境
// VUE_APP_API=http://10.100.200.38:8080 开发环境

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
