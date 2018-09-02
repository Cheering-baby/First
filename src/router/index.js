import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Item from '../pages/item'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
})
