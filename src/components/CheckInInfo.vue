<template>
    <section class="container">
        <div class="row justify-content-center">
            <p v-if="checkedIn"> <strong>Sjekket inn:</strong> {{logg.checkInTime.toLocaleString()}} </p>
            <p v-else><strong>Ikke sjekket inn.</strong></p>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
          
        }
    },
    name: "checkInInfo",
    props: ["logg", "checkedIn"]
}
</script>

<style scoped>
    section {
        text-align: center;
    }
</style>


