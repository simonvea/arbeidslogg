<template>
    <section class="row">
        <table class="table table-borderless table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Dato</th>
                    <th scope="col">Sjekket inn</th>
                    <th scope="col">Oppgave</th>
                    <th scope="col">Fullfør / Slett</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dato</td>
                    <td>10:53</td>
                    <td>blabla</td>
                    <td>
                        <button type="button" class="btn btn-success">Fullfør</button>
                        <button class="btn btn-danger">X</button>
                    </td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
export default {
    name: "currentTask"
}
</script>
