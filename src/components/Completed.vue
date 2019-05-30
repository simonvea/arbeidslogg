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
                    <th scope="col">Slett</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" v-bind:key="index">
                    <td>{{parseDate(task.checkIn)}}</td>
                    <td>{{parseHours(task.checkIn)}}</td>
                    <td>{{parseHours(task.checkOut)}}</td>
                    <td>{{task.timeSpent}}</td>
                    <td>{{task.task}}</td>
                    <td> <button class="btn btn-danger" v-on:click="$emit('remove', index)">X</button> </td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
export default {
    name: "CompletedTasks",
    props: ["tasks"],
    methods: {
        parseHours(date) {
            const regexHours = /\d\d:\d\d/;
            return date.match(regexHours)[0]
        },
        parseDate(date) {
            const regexDate = /(\d\d\d\d)-(\d\d)-(\d\d)/;
            const testArray = date.match(regexDate);
            return `${testArray[3]}.${testArray[2]}.${testArray[1]}`
        }
    }
        
}
</script>
