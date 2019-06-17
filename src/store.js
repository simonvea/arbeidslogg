import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    logg: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    },
    addWorkTime(state, work) {
      state.logg.push(work);
    }
  },
  actions: {
    addTasksToLocalStorage({state}) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    addLoggToLocalStorage({state}) {
      localStorage.setItem('logg', JSON.stringify(state.logg));
    },
    getLoggFromLocalStorage({commit}) {
      const logg = localStorage.getItem('logg');
      const parsedLogg = JSON.parse(logg)
      commit('addWorkTime', ...parsedLogg)
    },
    getTasksFromLocalStorage({commit}) {
      const tasks = localStorage.getItem('tasks');
      const parsedTasks = JSON.parse(tasks);
      commit('addTask', ...parsedTasks)
    },
  }
})
