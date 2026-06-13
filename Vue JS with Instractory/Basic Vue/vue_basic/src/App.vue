<script setup>
  import { computed, reactive, ref, watch } from 'vue';
let title = ref('Built in Directives - v-text');

  let count = ref(0);

  let course = reactive({
    courseName: 'Vue Js Course',
    student_fname: 'Ibn',
    student_lname: 'Fulan',
  });

  // Methods
  const increament = amount => count.value += amount; 
  const dereament = amount => count.value -= amount;
  const changeName = () => course.student = "Robin Khan";

  // Computed Methods
   const fullName = computed( () => {
    return course.student_fname + ' ' + course.student_lname;
   });

   const checkOddEven = computed( () => {
    return count.value % 2 === 0 ? 'even' : 'odd';
   });

  // Watch
  watch( () => count.value, (newValue, oldValue) => {
    console.log('newVale', newValue);
    console.log('oldValue', oldValue);  

    if(newValue > 10){
      alert('Counter value is over than 10');
    }
  } )
</script>

<template>
  <h1>course name: {{ course.courseName }} - <span v-text="title"></span></h1>

  <p @click="changeName">Course by: {{ fullName }}</p>
  <br>

  <div>
    <button @click="increament(2)">+</button>
    <h4>{{ count }} / {{ checkOddEven }}</h4>
    <button @click="dereament(1)">-</button>
  </div>

</template>





<style scoped></style>
