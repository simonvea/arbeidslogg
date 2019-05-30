<template>
  <div id="app">
    <header>
      <div class="container justify-content-center">
      <h1>Arbeidslogg</h1>
      <toolbar></toolbar>
      </div>
    </header>
    <main class="container">
      <div class="row align-items-center justify-content-center">
        <section class="col-12 col-md-6 justify-content-center">
          <info-screen />
        </section>
        <section class="tasks col-12 col-md-6">
          <add-task />
          <current-task />
          <completed-tasks />
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
#app {
  margin-top: 60px;
}

h1 {
  text-align: center;
}
</style>
