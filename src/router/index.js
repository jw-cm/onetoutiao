// 引入 Vue的依赖
import Vue from 'vue'
// 引入路由的依赖
import VueRouter from 'vue-router'
// 引入 home组件
import Home from '../views/Home.vue'

// 将VueRouter 混入到Vue中
// 在Vue中就可以使用this.$touter
Vue.use(VueRouter)

// 例外)axios没法混入Vue中,需要自己来挂上去

// 路由的配置
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 路由的 懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  // mode: 'history', 去掉默认是 #模式
  // base: process.env.BASE_URL,
  
  routes
})

export default router
