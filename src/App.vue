<template>
  <div id="app">
    <header>
      <h1>Arbeidslogg</h1>
      <a-menu></a-menu>
    </header>
    <main>
      <section class="container">
        <section class="check-in-info"></section>
        <section class="add-task"></section>
      </section>
      <section class="tasks">
        <section class="current-task"></section>
        <section class="complete-tasks"></section>
      </section>
    </main>
  </div>
</template>

<script>
import Menu from "./components/menu.vue"

export default {
  name: 'app',
  components: {
    AMenu: Menu,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
