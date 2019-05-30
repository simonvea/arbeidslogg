<template>
  <div id="app" class="container">
      <header>
          <h1>Arbeidslogg</h1>
          <toolbar
            v-on:check-in="checkIn()"
            v-on:check-out="checkOut()"
            v-bind:checkedIn="checkedIn"
          ></toolbar>
      </header>
    <main>
        <div class="row">
          <section class="col-12 col-md-5">
            <info-screen 
              v-bind:logg="logg[index]"
            />
          </section>
          <section class="col-12 col-md-7">
            <p>
            <add-task />
            </p>
            <p>
            <current-task />
            </p>
            <p>
            <completed-tasks />
            </p>
          </section>
        </div>
    </main>
  </div>
</template>

<script>
import Toolbar from "./components/menu.vue"
import Info from "./components/CheckInInfo.vue"
import AddTask from "./components/AddTask.vue"
import CurrentTask from "./components/CurrentTask.vue"
import CompletedTasks from "./components/Completed.vue"

export default {
  name: 'app',
  data() {
    return {
      logg: [{checkInTime: new Date}],
      index: 0,
      checkedIn: false
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

    }
  },
  components: {
    Toolbar,
    InfoScreen: Info,
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
