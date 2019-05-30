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
                    <td>{{getDate(task.checkIn)}}</td>
                    <td>{{getTime(task.checkIn)}}</td>
                    <td>{{task.task}}</td>
                    <td>
                        <button type="button" class="btn btn-success" v-on:click="$emit('complete')">Fullfør</button>
                        <button class="btn btn-outline-danger" v-on:click="$emit('remove')">X</button>
                    </td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
export default {
    name: "currentTask",
    props: ["task"],
    methods: {
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
