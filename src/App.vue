<template>
  <div id="app" class="container">
      <header>
          <h1>Arbeidslogg</h1>
          <toolbar
            v-on:check-in="checkIn()"
            v-on:check-out="checkOut()"
            v-on:new-task="newTask = !newTask"
            v-on:show-completed="showCompleted = !showCompleted"
            v-bind:checkedIn="checkedIn"
          ></toolbar>
          <info-screen 
            v-bind:logg="logg[index]"
          />
      </header>
    <main>
        <div class="container">
          <add-task 
              v-if="newTask"
              v-on:addTask="addTask()"
          />
            <current-task 
                v-bind:task="currentTask"
                v-on:complete="completeTask()"
                v-on:remove="removeCurrentTask()"
            />
            <completed-tasks 
              v-if="showCompleted"
              v-bind:tasks="tasks"
              v-on:remove="removeTask"
            />
        </div>
    </main>
  </div>
</template>

<script>
import Toolbar from "./components/menu.vue"
import InfoScreen from "./components/CheckInInfo.vue"
import AddTask from "./components/AddTask.vue"
import CurrentTask from "./components/CurrentTask.vue"
import CompletedTasks from "./components/Completed.vue"

export default {
  name: 'app',
  data() {
    return {
      logg: [{checkInTime: "nei"}],
      index: 0,
      checkedIn: false,
      newTask: false,
      tasks: [],
      currentTask: null,
      showCompleted: false
    }
  },
  methods: {
    checkIn() {
      const checkInTime = new Date;
      this.logg.push({checkInTime, "checkOutTime": false});
      this.index += 1;
      this.checkedIn = true;
    },
    checkOut() {
      this.logg[this.index].checkOutTime = new Date;
      this.checkedIn = false;
    },
    addToLocalStorage() {

    },
    addTask() {
            const time = new Date;
            const task = document.getElementById("task");
            this.currentTask = {"checkIn": time, "task": task.value, "checkOut": 0, "timeSpent": 0};
            task.value = "";
            this.newTask = false;
        },
        completeTask() {
            const time = new Date;
            const timeSpent = this.timeSpent(this.currentTask.checkIn, time);
            this.currentTask.checkOut = time;
            this.currentTask.timeSpent = timeSpent;
            this.tasks.push(this.currentTask);
            this.currentTask = null;
        },
        removeCurrentTask: function() {
                this.currentTask = null;
        },
        removeTask(index) {
            this.tasks.splice(index,1);
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
        }
  },
  components: {
    Toolbar,
    InfoScreen,
    AddTask,
    CurrentTask,
    CompletedTasks
  }
}
</script>

<style>
#app, main {
  margin-top: 60px;
}

h1 {
  text-align: center;
}
</style>
