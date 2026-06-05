<script setup>
import { reactive, ref } from 'vue';

    const qustions = reactive([
        {qtext: 'Is number one is right?', answer: 'yes'},
        {qtext: 'Is number two is right?', answer: 'no'},
        {qtext: 'Is number three is right?', answer: 'yes'},
        {qtext: 'Is number four is right?', answer: 'no'},
        {qtext: 'Is number five is right?', answer: 'yes'},
    ]);


    // const calculateScore = () => {
    //     let score = 0;

    //     qustions.forEach( (qustion) => {
    //         if(qustion.answer === qustion.input){
    //             score++;
    //         }
    //     });
    //     return score;
    // }

    const score = ref(0);

    const calculateScore = () => {
        score.value = 0;
        qustions.forEach( (qustion) => {
            if(qustion.answer === qustion.input){
                score.value++;
            }
        });
    }
    
</script>

<template>

    <div class="container">
        <p class="score">Your Score: {{ score }}</p>
        <div v-for="(question, index) in qustions" :key="index"  class="question-cotnainer">
            <p>{{ question.qtext }}</p>
            <label><input type="radio" value="yes" @change="calculateScore()" v-model="question.input" /><span>Yes</span></label>
            <label><input type="radio" value="no" @change="calculateScore()" v-model="question.input" /><span>No</span></label>
        </div>
    </div>
    <!-- <div class="container">
        <p class="score">Your Score: {{ calculateScore() }}</p>
        <div v-for="(question, index) in qustions" :key="index"  class="question-cotnainer">
            <p>{{ question.qtext }}</p>
            <label><input type="radio" value="yes" v-model="question.input" /><span>Yes</span></label>
            <label><input type="radio" value="no" v-model="question.input" /><span>No</span></label>
        </div>
    </div> -->
    <pre>{{ qustions }}</pre>
</template>
 
 
<style scoped>
    .score{
        padding: 16px;
    }

    .question-cotnainer{
        border: 1px solid black; 
        border-radius: 4px; 
        padding: 16px; 
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label{
        padding: px;
    }

    span{
        padding-left: 8px;
    }
</style>