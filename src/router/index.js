import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: ()=>import('../components/login/Login')
  },
  {
    path: '/home',
    component: ()=>import('views/home/home')
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=='/login') {
    next()
  }
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr){
    next('/')
  }

  next()

})

export default router
