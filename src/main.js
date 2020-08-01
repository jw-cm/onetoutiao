import Vue from 'vue'

// 引入App组件
import App from './App.vue'
// 引入路由的配置
import router from './router'
// 引入vuex的配置
import store from './store' // ==./store/index.js
// 引入axios
import axios from "./comcon/myaxios"
// 在Vue的原型上添加 $axios
Vue.prototype.$axios = axios

//引入 element-UI 组件库
import {Message} from "element-ui" 
Vue.prototype.$message = Message;

// 控制台 [HMR] Waiting for update signal from WDS...
Vue.config.productionTip = false


// 创建一个Vue的实例
new Vue({
  router, //vue-router
  store, //vuex this.$stote.state
  render: h => h(App)  //一个方法 将APP组件渲染到#APP节点上
}).$mount('#app')
