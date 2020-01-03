<template>
  <section class="container">
    <div class="row justify-content-center">
      <div>
        <article v-if="checkedIn">
          <p>
            <strong>Sjekket inn:</strong>
            {{ checkInTimeString }}
          </p>
          <p>
            Tid jobbet: {{ timeSpent }}
            <font-awesome-icon
              id="refresh"
              icon="redo"
              @click="calculateTimeSpent"
            />
          </p>
        </article>
        <p v-else><strong>Ikke sjekket inn.</strong></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timeSpent: 'Trykk oppdater for å få kalkulert tid',
      timer: undefined
    };
  },
  name: 'checkInInfo',
  props: ['checkInTime', 'checkedIn'],
  methods: {
    calculateTimeSpent() {
      const start = new Date(this.checkInTime);
      if (!start) return 'Ikke startet enda';
      const end = new Date();
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
        this.timeSpent = returnString;
        return returnString;
      }

      if (hoursSpent == 1) {
        returnString = hoursSpent + ' time og ' + returnString;
      } else {
        returnString = hoursSpent + ' timer og ' + returnString;
      }
      this.timeSpent = returnString;
      return returnString;
    }
  },
  computed: {
    checkInTimeString() {
      if (this.checkInTime) {
        const time = new Date(this.checkInTime);
        return time.toLocaleString('nb-no');
      }
      return undefined;
    }
  },
  mounted() {
    this.calculateTimeSpent();
    this.timer = setInterval(
      () => this.checkInTime && this.calculateTimeSpent(),
      60000
    );
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timeSpent = 0;
  }
};
</script>

<style scoped>
section {
  text-align: center;
}

#refresh:hover {
  cursor: pointer;
}
</style>
