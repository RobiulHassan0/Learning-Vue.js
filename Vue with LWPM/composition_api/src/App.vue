<script setup>
import { computed, ref } from 'vue';

  let password = ref("")

  const passwordStrength = computed( () => {
    let strenth = (password.value.length * 100) / 10;

    return Math.min(strenth, 100);
  });

  let firstName = ref("");
  let lastName = ref("");

  const fullName = computed( () => {
    let fullName = firstName.value+ ' ' +lastName.value;

    return fullName;
  });


  const zip = ref("");
  
  const zipUppercase = computed({
    get: () => zip.value.toUpperCase(),

    set: value => {zip.value = value.toUpperCase() }
  });
</script>


<template>
<div class="main">

  <div>
      <input type="password" v-model="password" placeholder="Enter your password">
      {{ passwordStrength }} % strong lol
  </div>

  
  <input type="text" v-model="firstName" placeholder="Enter your first name">
  <input type="text" v-model="lastName" placeholder="Enter your last name">
  {{ fullName }}

  <br>

  <input type="text" v-model="zipUppercase">
  {{ zipUppercase}}
    
</div>
</template>


<style scoped>
  .main{
    display: flex;
    justify-content: center;
    gap: 50px;
  }
</style>
