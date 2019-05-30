<template>
    <section class="row">
        <table class="table table-borderless table-striped">
            <thead>
                <tr class="bg-success">
                    <th scope="col">Dato</th>
                    <th scope="col">Startet</th>
                    <th scope="col">Avsluttet</th>
                    <th scope="col">Arbeidstid</th>
                    <th scope="col">Oppgave</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" v-bind:key="index">
                    <td>{{task.checkIn.getDate()+"."+task.checkIn.getMonth()+"."+task.checkIn.getFullYear()}}</td>
                    <td>{{task.checkIn.getHours() + ":" + task.checkIn.getMinutes()}}</td>
                    <td>{{task.checkOut.getHours() + ":" + task.checkOut.getMinutes()}}</td>
                    <td>{{task.timeSpent}}</td>
                    <td>{{task.task}}</td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
export default {
    name: "CompletedTasks",
    props: ["tasks"]
}
</script>
