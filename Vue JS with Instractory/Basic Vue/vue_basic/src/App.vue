<script setup>
  import { reactive, ref } from 'vue';
let title = ref('Method/ Function is vue');

  let count = ref(0);

  let course = reactive({
    name: 'Vue Js',
    student: 'R Hassan',
  });

  const increament = amount => count.value += amount; 
  const dereament = amount => count.value -= amount;

  const changeName = () => course.student = "Robin Khan";

</script>

<template>
  <h1>{{ title }}</h1>

  <p @click="changeName">Course by: {{ course.student }}</p>
  <br>

  <div>
    <button @click="increament(2)">+</button>
    <h4>{{ count }}</h4>
    <button @click="dereament(1)">-</button>
  </div>

</template>





<style scoped></style>
