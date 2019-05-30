<template>
    <section class="row justify-content-center">
        <form v-on:submit.prevent="$emit('addTask')">
            <div class="form-group">
                <label><strong> Oppgave: </strong>
                    <input type=text name="task" class="form-control" id="task">
                </label>
            </div>
            <button type="submit" id="check-in" class="btn btn-primary">Legg til</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "addTask"
}
</script>

