<template>
  <div id="app" class="container">
    <header>
      <h1>Arbeidslogg</h1>
      <div class="row justify-content-center">
        <nav class="btn-group" role="toolbar" aria-label="toolbar">
          <button class="btn btn-danger" v-if="checkedIn" v-on:click="checkOut">
            Sjekk ut
          </button>
          <button class="btn btn-success" v-else v-on:click="checkIn">
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
      <info-screen
        v-bind:checkInTime="checkInTime"
        v-bind:checkedIn="checkedIn"
      />
      <router-view class="container"></router-view>
    </main>
  </div>
</template>

<script>
import InfoScreen from './components/CheckInInfo.vue';

export default {
  name: 'app',
  components: {
    InfoScreen
  },
  data() {
    return {
      logg: [],
      checkedIn: false,
      checkInTime: undefined
    };
  },
  methods: {
    checkIn() {
      const checkInTime = new Date();
      this.checkInTime = checkInTime.toJSON();
      localStorage.setItem('checkIn', checkInTime.toJSON());
      this.checkedIn = true;
    },
    checkOut() {
      const checkOutTime = new Date();
      this.logg.push({
        checkInTime: this.checkInTime,
        checkOutTime: checkOutTime.toJSON()
      });
      this.checkedIn = false;
      const oldLogg = localStorage.getItem('logg');
      oldLogg
        ? localStorage.setItem(
            'logg',
            JSON.stringify(JSON.parse(oldLogg).concat(this.logg))
          )
        : localStorage.setItem('logg', JSON.stringify(this.logg));

      localStorage.removeItem('checkIn');
    },
    timeSpent(start, end) {
      let timeSpentSeconds = (end - start) / 1000;
      let minutesSpent = Math.trunc(timeSpentSeconds / 60);
      let hoursSpent = Math.trunc(minutesSpent / 60);
      if (hoursSpent != 0) {
        minutesSpent = minutesSpent - 60 * hoursSpent;
      }

      let returnString = '';

      if (minutesSpent == 1) {
        returnString = minutesSpent + ' minutt';
      } else {
        returnString = minutesSpent + ' minutter';
      }

      if (hoursSpent == 0) {
        return returnString;
      }

      if (hoursSpent == 1) {
        returnString = hoursSpent + ' time og ' + returnString;
      } else {
        returnString = hoursSpent + ' timer og ' + returnString;
      }

      return returnString;
    },
    addToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('logg', JSON.stringify(this.logg));
    },
    getFromLocalStorage() {
      /*       const tasks = localStorage.getItem('tasks');
      const logg = localStorage.getItem('logg');
      
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
      if (logg != null && logg.length > 0) {
        this.logg = JSON.parse(logg);
      } */
      const checkInTime = localStorage.getItem('checkIn');
      if (checkInTime) {
        this.checkInTime = checkInTime;
        this.checkedIn = true;
      }
    }
  },
  /*   beforeDestroy() {
    this.addToLocalStorage();
  }, */
  beforeMount() {
    this.getFromLocalStorage();
  }
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
