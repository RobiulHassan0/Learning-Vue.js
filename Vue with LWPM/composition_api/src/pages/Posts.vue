<script setup>
import { useRoute } from 'vue-router';


defineProps({
    id: {
        type: String
    }
})


</script>

<template>
    <div>
        <button @click="$router.replace({name: 'home'})">Click me</button>
    </div>
</template>
