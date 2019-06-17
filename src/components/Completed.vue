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
                    <td> <button class="btn btn-outline-danger" v-on:click="removeTask(index)">X</button> </td>
                </tr>
            </tbody>
        </table>    
    </section>
</template>

<script>
import store from "@/store"

export default {
    data() {
        return {
            tasks: store.state.tasks
        }
    },
    name: "CompletedTasks",
    methods: {
        getDate(date) {
            const time = new Date(date);
            const dateString = String(time.getDate()).padStart(2,"0");
            const monthString = String(time.getMonth()).padStart(2,"0");

            return `${dateString}.${monthString}.${time.getFullYear()}`
        },
        getTime(date) {
            const time = new Date(date);
            return `${time.getHours()}:${String(time.getMinutes()).padStart(2,"0")}`
        },
        removeTask(index) {
            store.commit("removeTask", index);
            localStorage.setItem('tasks', JSON.stringify(store.state.tasks));
        }
    }
        
}
</script>
