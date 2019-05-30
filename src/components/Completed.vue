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
                    <td>{{getDate(task.checkIn)}}</td>
                    <td>{{getTime(task.checkIn)}}</td>
                    <td>{{getTime(task.checkOut)}}</td>
                    <td>{{task.timeSpent}}</td>
                    <td>{{task.task}}</td>
                    <td> <button class="btn btn-outline-danger" v-on:click="$emit('remove', index)">X</button> </td>
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
        },
        getDate(date) {
            const time = new Date(date);
            return `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`
        },
        getTime(date) {
            const time = new Date(date);
            return `${time.getHours()}:${time.getMinutes()}`
        }
    }
        
}
</script>
