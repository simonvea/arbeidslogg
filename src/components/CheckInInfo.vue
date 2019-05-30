<template>
    <section class="container">
        <div class="row justify-content-center">
            <p> <strong>Sjekket inn:</strong> {{logg.checkInTime.toLocaleString()}} </p>
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
    props: ["logg"]
}
</script>

<style scoped>
    section {
        text-align: center;
    }
</style>


