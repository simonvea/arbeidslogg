<template>
    <section class="row">
        <table class="table table-borderless table-striped">
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
            const dateString = String(time.getDate()).padStart(2,"0");
            const monthString = String(time.getMonth()).padStart(2,"0");

            return `${dateString}.${monthString}.${time.getFullYear()}`
        },
        getTime(date) {
            const time = new Date(date);
            const hourString = String(time.getHours()).padStart(2, "0");
            const minuteString = String(time.getMinutes()).padStart(2,"0");
            return `${hourString}:${minuteString}`
        }
    }
}
</script>
