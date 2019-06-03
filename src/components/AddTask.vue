<template>
    <section class="row justify-content-center">
        <form v-on:submit.prevent="$emit('addTask')">
            <div class="form-group">
                <input type=text name="task" class="form-control" id="task" placeholder="Ny oppgave">
            </div>
            <button type="submit" id="check-in" class="btn btn-primary">Start</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "addTask"
}
</script>

<style scoped>
    form {
        text-align: center;
    }

    section {
        padding-bottom: 30px;
    }
</style>


