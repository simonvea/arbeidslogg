<template>
    <form>
        <div class="form-group">
                <label>Oppgave:
                    <input type=text name="task" class="form-control">
                </label>
            </div>
            <button type="submit" id="check-in" class="btn btn-sucess">Sjekk in</button>
    </form>
</template>

<script>
export default {
    name: "CheckInForm"
}
</script>
