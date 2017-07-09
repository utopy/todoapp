import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/MainView'
import newTodo from '@/components/newtodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/new-todo',
      name: "New Todo",
      component: newTodo
    }
  ]
})
