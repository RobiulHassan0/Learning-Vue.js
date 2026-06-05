<script setup>
import { ref } from 'vue';

  const input = ref('Test');
  // const takeInput = (e) => { input.value = e.target.value;}
  const check = ref([]);
  const radio = ref('');
  const select = ref('');

</script>

<template>
  <div>
    <p >Output: {{ input }}</p>
    <!-- <span>Input: <span><input type="text" :value="input" @input="takeInput(event)"></span></span> -->
     <span>Input: </span> <input type="text" v-model="input" /> <br>  <br>
     <p>Check: {{ check }}</p> 

     <span>Input: </span> 
     <label for=""><input type="checkbox" value="class" v-model="check" />Class</label>
    <label for=""><input type="checkbox" value="record" v-model="check" />Record</label>  <br>  <br>

    <p>Radio: {{ radio }}</p> 
    <span>Input: </span>
     <label for=""><input type="radio" value="class" v-model="radio">Class</label>
     <label for=""><input type="radio" value="record" v-model="radio">Record</label>  <br> <br>

    <p>Select: {{ select }}</p>
    <select v-model="select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
</template>

<style scoped>
  p, span{
    padding: 4;
  }
</style>