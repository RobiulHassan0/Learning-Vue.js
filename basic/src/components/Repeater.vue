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
            <div v-for="(student, index) in students" :key="index">
                <label>Name:</label><input type="text" v-model="student.name">
                
                <label><input type="radio" value="Male" v-model="student.gender"><span>Male</span></label>
                  <label><input type="radio" value="Female" v-model="student.gender"><span>Female</span></label>
            </div>
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

    template{
        display: block;
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
