import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AddTask from './components/AddTask.vue'
import CompletedTasks from "./components/Completed.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addtask',
      name: 'addtask',
      component: AddTask
    },
    {
      path: '/logg',
      name: 'logg',
      component: CompletedTasks
    },
    { path: '*', component: Home }
  ]
})
