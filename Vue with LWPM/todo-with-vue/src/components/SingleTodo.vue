<script setup>
defineProps({
  index:{
    type: Number
  },
  todo: {
    type: Object
  }
});


</script>

<template>
            <div class="flex items-center justify-between">
          <div class="flex items-center">

            <input @input="$emit('checkComplete', index)" :checked="todo.completed" type="checkbox" class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" name="todo" :id="`todo-${todo.id}`"/>

            <label :class="{'line-through' : todo.completed}" class="ml-3 block text-gray-900" :for="`todo-${todo.id}`">
              <span class="text-lg font-medium">{{ todo.title }}</span>
            </label>
          </div>

          <button @click="$emit('delete', index)" class="flex-shirnk-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
              <linearGradient id="g" x1="18.405" x2="33.814" y1="10.91" y2="43.484" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#32bdef" />
                <stop offset="1" stop-color="#1ea2e4" />
              </linearGradient>

              <path fill="url(#g)"
                d="M39 10l-2.835 31.181C36.072 42.211 35.208 43 34.174 43H13.826c-1.034 0-1.898-.789-1.992-1.819L9 10h30z" />
              <path fill="#0176d0" d="M32 7a2 2 0 0 0-2-2H18a2 2 0 0 0-2 2v1h16V7z" />
              <path fill="#007ad9"
                d="M7 9.886c0-.523.358-.974.868-1.086C10.173 8.293 16.763 7 24 7s13.827 1.293 16.132 1.8c.51.112.868.563.868 1.086 0 .615-.499 1.114-1.114 1.114H8.114A1.114 1.114 0 0 1 7 9.886z" />
            </svg>
          </button>

        </div>
</template>