import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/page/home/home'

// const HelloWorld = r => require.ensure([], () => r(require('../components/HelloWorld')), 'home')
const Home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const Address = r => require.ensure([], () => r(require('../page/address/address')), 'address')

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'App',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Address',
      component: Address
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
