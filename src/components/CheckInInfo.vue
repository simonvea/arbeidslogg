<template>
    <section class="container">
        <div class="row justify-content-center">
            <p v-if="checkedIn"> <strong>Sjekket inn:</strong> {{logg.checkInTime.toLocaleString()}} </p>
            <p v-else><strong>Ikke sjekket inn.</strong></p>
            <p>Timer jobbet: {{ timeSpent() }}</p>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            worktime: 0
        }
    },
    name: "checkInInfo",
    props: ["logg", "checkedIn", "time"],
    methods: {
        timeSpent() {
            const start = this.logg.checkInTime;
            const end = new Date();
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
    }
}
</script>

<style scoped>
    section {
        text-align: center;
    }
</style>


