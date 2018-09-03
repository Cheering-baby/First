import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Item from '../pages/item'
import Final from '../pages/final'
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
    },{
      path: '/final',
      name: 'Final',
      component: Final
    }
  ]
})
