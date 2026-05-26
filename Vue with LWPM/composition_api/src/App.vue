<script setup>
import { ref } from 'vue';
import useNumbers from './numbers';

  let number = ref(0);

  const {increment, decrement} = useNumbers(number)

</script>

<template>

  <div>{{ number }}</div>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>

</template>


<style scoped>

</style>
