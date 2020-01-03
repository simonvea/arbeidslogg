import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    tasks: [],
    logg: [],
    checkedIn: false,
    checkInTime: undefined
  },
  mutations: {
    addTask: (state, task) => state.tasks.push(task),
    removeTask: (state, index) => state.tasks.splice(index, 1),
    checkIn: state => (state.checkedIn = true),
    checkOut: state => (state.checkedIn = false),
    setCheckInTime: (state, timeJson) => (state.checkInTime = timeJson),
    resetCheckInTime: state => (state.checkInTime = undefined),
    addToLogg: (state, timesObject) => state.logg.push(timesObject)
  },
  actions: {
    addTasksToLocalStorage({ state }) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    addLoggToLocalStorage({ state }) {
      localStorage.setItem('logg', JSON.stringify(state.logg));
    },
    getLoggFromLocalStorage({ commit }) {
      const logg = localStorage.getItem('logg');
      const parsedLogg = JSON.parse(logg);
      commit('addWorkTime', ...parsedLogg);
    },
    getTasksFromLocalStorage({ commit }) {
      const tasks = localStorage.getItem('tasks');
      const parsedTasks = JSON.parse(tasks);
      commit('addTask', ...parsedTasks);
    },
    doCheckIn({ commit }) {
      const checkInTime = new Date().toJSON();
      commit('setCheckInTime', checkInTime);
      localStorage.setItem('checkIn', checkInTime);
      commit('checkIn');
    },
    doCheckOut({ state, commit }) {
      const checkOutTime = new Date().toJSON();
      const timesObject = {
        checkInTime: state.checkInTime,
        checkOutTime
      };
      localStorage.removeItem('checkIn');
      commit('checkOut');
      commit('addToLogg', timesObject);
      commit('resetCheckInTime');
    }
  }
});
