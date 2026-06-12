<script setup>
  import { reactive, ref } from 'vue';

  let count = ref(0);
  count.value = 10;

  const staticString = "Static Text"

  let course = reactive({
    name: 'Vue Js',
    student: 'R Hassan',
  });

  course.name = 'Javascript'

</script>

<template>
  <h1>{{ staticString }}</h1>
  <h1>course name:  {{ course.name }}</h1>
  <h1>Course By: {{ course.student }} </h1>
<br>

  <p>Give Intial value of count</p>
  <input type="number" v-model="count">
  <br>
  <br>

  <div>
    <button @click="count++">+</button>
    <h4>{{ count }}</h4>
    <button @click="count--">-</button>
  </div>

  <input type="text" v-model="course.name">
</template>





<style scoped></style>
