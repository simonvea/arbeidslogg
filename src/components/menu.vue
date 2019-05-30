<template>
    <div class="row justify-content-center">
            <div class="btn-group" role="toolbar" aria-label="toolbar">
                <button type="button" class="btn btn-secondary">Logg inn / ut</button>
                <button type="button" class="btn btn-danger" v-if="checkedIn" v-on:click="$emit('check-out')">Sjekk ut</button>
                <button type="button" class="btn btn-success" v-else v-on:click="$emit('check-in')">Sjekk inn</button>
                <button type="button" class="btn btn-secondary">Ny oppgave</button>
                <button type="button" class="btn btn-secondary">Arbeidslogg</button>
            </div>
    </div>
</template>

<script>

export default {
    name: "toolbar",
    props: ["checkedIn"]
}
</script>

