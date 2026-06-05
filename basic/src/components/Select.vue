<script setup>
import { reactive, ref } from "vue";

const choose = ref(0);

const persons = reactive([
  { name: "Ibn Fulan", age: 28, country: "Bangladesh" },
  { name: "Faris abdullah", age: 24, country: "Saudi Arabia" },
  { name: "Abu Fulan", age: 30, country: "Pakistan" },
  { name: "Nizamul Mulk", age: 22, country: "Turkiye" },
]);
</script>

<template>
  <p>Choose A Person</p>
  <select v-model="choose">
    <option
      v-for="(person, index) in persons"
      :key="index"
      :value="index"
    >
      {{ person.name }}
    </option>
  </select> 
  <span> Name: </span><input type="text" v-model="persons[choose].name">
  <span> Age: </span><input type="text" v-model="persons[choose].age">
  <span> Country: </span><input type="text" v-model="persons[choose].country">
</template>

<style scoped></style>
