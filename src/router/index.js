import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path:'/',
    redirect:'/dashboard/home'
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:()=>import('../views/dashboard/DashBoard.vue'),
    children:[
      {path:'dashboard',redirect:'/dashboard/home'},
      {path:'home',name:'home',component:()=>import('../views/home/Home.vue')},
      {path:'cart',name:'cart',component:()=>import('../views/cart/Cart.vue'),meta:{keepAlive:true}},
      {path:'category',name:'category',component:()=>import('../views/category/Category.vue'),meta:{keepAlive:true}},
      {path:'mine',name:'mine',component:()=>import('../views/mine/Mine.vue')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
