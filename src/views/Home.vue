<template>
  <div>
    <current-task-component 
      v-bind:task="currentTask"
      v-on:complete="completeTask()"
      v-on:remove="removeCurrentTask()"
    />
    <add-task
      v-on:addTask="addTask()"
    />
  </div>
</template>

<script>
import CurrentTaskComponent from "@/components/CurrentTask.vue"
import addTask from "@/components/AddTask.vue"

export default {
  data() {
    return {
      newTask: false,
      currentTask: null
    }
  },
  components: {
    CurrentTaskComponent,
    addTask
  },
  methods: {
     addTask() {
      const time = new Date().getTime();
      const task = document.getElementById("task");
      this.currentTask = {"checkIn": time, "task": task.value, "checkOut": 0, "timeSpent": 0};
      task.value = "";
      this.newTask = false;
    },
    completeTask() {
      const time = new Date().getTime();
      const timeSpent = this.timeSpent(this.currentTask.checkIn, time);
      this.currentTask.checkOut = time;
      this.currentTask.timeSpent = timeSpent;
      this.tasks.push(this.currentTask);
      this.currentTask = null;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    removeCurrentTask: function() {
      this.currentTask = null;
    },
  }
}



/*     <current-task 
      v-bind:task="currentTask"
      v-on:complete="completeTask()"
      v-on:remove="removeCurrentTask()"
    />
    <completed-tasks 
      v-if="showCompleted"
      v-bind:tasks="tasks"
      v-on:remove="removeTask"
    /> */
</script>
