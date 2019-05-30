<template>
    <section class="row">
        <form>
            <div class="form-group">
                <label>Oppgave:
                    <input type=text name="task" class="form-control">
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

