<template>
  <div id="app" class="container">
      <header>
          <h1>Arbeidslogg</h1>
          <div class="row justify-content-center">
            <section class="btn-group" role="toolbar" aria-label="toolbar">
              <button class="btn btn-danger" v-if="checkedIn" v-on:click="checkOut">Sjekk ut</button>
              <button class="btn btn-success" v-else v-on:click="checkIn">Sjekk inn</button>
              <router-link :to="{name: 'home'}" tag="button" class="btn btn-secondary">Ny oppgave</router-link>
              <router-link :to="{name: 'logg'}" tag="button" class="btn btn-secondary">Arbeidslogg</router-link>
            </section>
          </div>
          <info-screen 
            v-bind:logg="logg[index]"
            v-bind:checkedIn="checkedIn"
            v-bind:time="workTime"
          />
      </header>
    <main>
      <router-view class="container"></router-view>
    </main>
  </div>
</template>

<script>
import InfoScreen from "./components/CheckInInfo.vue"

export default {
  name: 'app',
  components: {
    InfoScreen
  },
  data() {
    return {
      logg:[{"first": "first"}],
      index: 0,
      checkedIn: false,
      workTime: 0
    }
  },
  methods: {
    checkIn() {
      const checkInTime = new Date;
      this.logg.push({checkInTime, "checkOutTime": false});
      this.index = this.logg.length-1;
      this.checkedIn = true;
    },
    checkOut() {
      this.logg[this.index].checkOutTime = new Date;
      this.checkedIn = false;
      localStorage.setItem('logg',JSON.stringify(this.logg));
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
   /*  addToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('logg', JSON.stringify(this.logg));
    },
    getFromLocalStorage() {
      const tasks = localStorage.getItem('tasks');
      const logg = localStorage.getItem('logg');
      this.tasks = JSON.parse(tasks);
      if(logg != null) {
        this.logg = JSON.parse(logg);
      }
    } */
  },
  /* beforeDestroy() {
    this.addToLocalStorage()
  },
  beforeMount() {
    this.getFromLocalStorage();
  } */
  
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
