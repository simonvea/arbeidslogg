<template>
  <div id="app" class="container">
    <header>
      <h1>Arbeidslogg</h1>
      <div class="row justify-content-center">
        <nav class="btn-group" role="toolbar" aria-label="toolbar">
          <button
            class="btn btn-danger"
            v-if="checkedIn"
            v-on:click="doCheckOut"
          >
            Sjekk ut
          </button>
          <button class="btn btn-success" v-else v-on:click="doCheckIn">
            Sjekk inn
          </button>
          <router-link
            :to="{ name: 'home' }"
            tag="button"
            class="btn btn-secondary"
            >Ny oppgave</router-link
          >
          <router-link
            :to="{ name: 'logg' }"
            tag="button"
            class="btn btn-secondary"
            >Arbeidslogg</router-link
          >
        </nav>
      </div>
    </header>
    <main>
      <info-screen v-bind:checkInTime="checkInTime" />
      <router-view class="container"></router-view>
    </main>
  </div>
</template>

<script>
import InfoScreen from './components/CheckInInfo.vue';
import { mapActions } from 'vuex';

export default {
  name: 'app',
  components: {
    InfoScreen
  },
  computed: {
    checkedIn() {
      return this.$store.state.checkedIn;
    },
    checkInTime() {
      const time = Date(this.$store.state.checkInTime);
      return time.toLocaleString('nb-no');
    }
  },
  methods: {
    ...mapActions(['doCheckIn', 'doCheckOut'])
  },
  /*   beforeDestroy() {
    this.addToLocalStorage();
  }, */
  beforeMount() {}
};
</script>

<style>
#app,
main {
  margin-top: 60px;
}

h1 {
  text-align: center;
}
</style>
