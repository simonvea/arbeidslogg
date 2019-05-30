<template>
    <section class="row">
        <table class="table table-borderless table-striped" v-if="task">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Dato</th>
                    <th scope="col">Startet</th>
                    <th scope="col">Oppgave</th>
                    <th scope="col">Fullfør / Slett</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{task.checkIn.getDate()+"."+task.checkIn.getMonth()+"."+task.checkIn.getFullYear()}}</td>
                    <td>{{task.checkIn.getHours() + ":" + task.checkIn.getMinutes()}}</td>
                    <td>{{task.task}}</td>
                    <td>
                        <button type="button" class="btn btn-success" v-on:click="$emit('complete')">Fullfør</button>
                        <button class="btn btn-danger" v-on:click="$emit('remove')">X</button>
                    </td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
export default {
    name: "currentTask",
    props: ["task"]
}
</script>
