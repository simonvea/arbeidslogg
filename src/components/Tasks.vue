<template>
    <div>
        <p>
            <add-task 
                v-on:addTask="addTask()"
            />
        </p>
        <p>
            <current-task 
                v-bind:task="currentTask"
                v-on:complete="completeTask()"
                v-on:remove="removeCurrentTask()"
            />
        </p>
        <p>
            <completed-tasks 
                v-bind:tasks="tasks"
                v-on:remove="removeTask"
            />
        </p>
    </div>
</template>

<script>
import AddTask from "./AddTask.vue"
import CurrentTask from "./CurrentTask.vue"
import CompletedTasks from "./Completed.vue"

export default {
    name: "Tasks",
    data() {
        return {
            tasks: [],
            currentTask: null
        }
    },
    methods: {
        addTask() {
            const time = new Date;
            const task = document.getElementById("task");
            this.currentTask = {"checkIn": time, "task": task.value, "checkOut": 0, "timeSpent": 0};
            task.value = "";  
        },
        completeTask() {
            const time = new Date;
            const timeSpent = this.timeSpent(this.currentTask.checkIn, time);
            this.currentTask.checkOut = time;
            this.currentTask.timeSpent = timeSpent;
            this.tasks.push(this.currentTask);
            this.currentTask = null;
        },
        removeCurrentTask: function() {
                this.currentTask = null;
        },
        removeTask(index) {
            this.tasks.splice(index,1);
        },
        timeSpent(start, end) {
            let timeSpentSeconds = (end - start)/1000;
            let minutesSpent = Math.trunc(timeSpentSeconds/60);
            let hoursSpent = Math.trunc(minutesSpent / 60);
            if(hoursSpent != 0) {
                minutesSpent = minutesSpent - (60*hoursSpent);
            }

            let returnString = "";

            if (minutesSpent == 1) {returnString = minutesSpent + " minutt";
            } else {returnString = minutesSpent + " minutter";}  

            if (hoursSpent == 0) {return returnString}
            
            if (hoursSpent == 1) {returnString = hoursSpent + " time og " + returnString;
            } else {returnString = hoursSpent + " timer og " + returnString}
            
            return returnString;
        }
    },
    components: {
        AddTask,
        CurrentTask,
        CompletedTasks
    }
}
</script>

