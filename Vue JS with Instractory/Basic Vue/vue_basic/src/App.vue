<!-- <script >

// Options API
    // export default{
    //   data(){
    //     return{
    //       courseName: 'Vue JS',
    //       mentor: 'Mahmud',
    //       count: 0
    //     }
    //   }
    // }

// Compostion API
  export default{
    setup(){
      let count = 0;
      const courseName = "Vue JS 3 Masterclass";
      const mentor = "Mahmud Ibrahim";

      return {count, courseName, mentor}
    }
  }

</script> -->

<script>
  // import { ref } from 'vue';

  // let count = ref(0);
  // const courseName = ref("Vue JS 3 Masterclass");
  // const mentor = ref("Mahmud Ibrahim");

  import { ref } from 'vue';
  
  export default{
    setup() {
      let count = ref(0);
      const courseName = ref("Vue JS 3 Masterclass");
      const mentor = ref("Mahmud Ibrahim");

      return {count, courseName, mentor}
    }
  }

</script>



<template>
  <h1>course name:  {{ courseName }}</h1>
  <h1>Course By: {{ mentor }} </h1>

  <button @click="count++">+</button>
  <h4>{{ count }}</h4>
  <button @click="count--">-</button>
</template>





<style scoped></style>
