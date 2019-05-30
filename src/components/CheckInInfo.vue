<template>
    <section>
        <h5>Logget inn som: </h5>
        <h3>Sjekket inn: </h3>
            <p> {{logg.checkInTime.toLocaleString()}} </p>
        <h3>Oppgave: </h3>
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

