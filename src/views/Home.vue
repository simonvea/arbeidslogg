<template>
  <div>
    <current-task-component 
      v-bind:task="currentTask"
      v-on:complete="completeTask()"
      v-on:remove="removeCurrentTask()"
      v-if="currentTask"
    />
    <add-task
      v-else
      v-on:addTask="addTask()"
    />
  </div>
</template>

<script>
import CurrentTaskComponent from "@/components/CurrentTask.vue"
import addTask from "@/components/AddTask.vue"
import store from "@/store"

export default {
  data() {
    return {
      currentTask: null
    }
  },
  components: {
    CurrentTaskComponent,
    addTask
  },
  methods: {
    completeTask() {
      const time = new Date().getTime();
      const timeSpent = this.timeSpent(this.currentTask.checkIn, time);
      this.currentTask.checkOut = time;
      this.currentTask.timeSpent = timeSpent;
      store.commit("addTask", this.currentTask);
      this.currentTask = null;
      localStorage.setItem('tasks', JSON.stringify(store.state.tasks));
    },
    removeCurrentTask: function() {
      this.currentTask = null;
    },
    addTask() {
      const time = new Date().getTime();
      const task = document.getElementById("task");
      this.currentTask = {"checkIn": time, "task": task.value, "checkOut": 0, "timeSpent": 0};
      task.value = "";
    },
    timeSpent(start, end) {
      let timeSpentSeconds = (end - start)/1000;
      let minutesSpent = Math.trunc(timeSpentSeconds/60);
      let hoursSpent = Math.trunc(minutesSpent / 60);
      if(hoursSpent != 0) {
          minutesSpent = minutesSpent - (60*hoursSpent);
      }

      let returnString = "";

      if (minutesSpent == 1) {returnString = minutesSpent + " minutt";
      } else {returnString = minutesSpent + " minutter";}  

      if (hoursSpent == 0) {return returnString}
      
      if (hoursSpent == 1) {returnString = hoursSpent + " time og " + returnString;
      } else {returnString = hoursSpent + " timer og " + returnString}
      
      return returnString;
    },
  }
}
</script>
