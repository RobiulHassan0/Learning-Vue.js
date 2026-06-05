<script setup>
import { reactive } from 'vue';

    const students = reactive([
        {name: 'Robin', gender: 'Male'}
    ]);

    const addNewStudent = () => {
        students.push(
            {name: "", gender: ""}
        )
    }
</script>

<template>

    <div>
        <p>{{ students }}</p>
        <div class="container">
            <p>Students</p>
            <template v-for="(student, index) in studenta" :key="index">
                <label>Name:</label><input type="text">
                <label><input type="readio"><span>Male</span></label>
                <label><input type="readio"><span>Female</span></label>
            </template>
            <button @click="addNewStudent()">Add New Student</button>
        </div>
    </div>


</template>


<style scoped>
    .container{
        border: 1px solid red;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    p{
        padding: 4px;
    }

    label{
        padding: 8px;
    }

    span{
        padding-left: 8px;
    }

    input{
        padding-right: 8px;
    }

    button{
        display: block;
        border: 1px solid black;
        padding: 16px;
        margin: 16px;
    }
</style>
