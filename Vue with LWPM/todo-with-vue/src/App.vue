<script setup>
import { computed, reactive, ref } from 'vue';
import SingleTodo from './components/SingleTodo.vue';

const todoAdd = ref('');

const todos = reactive([
  {
    id: 1,
    title: "list 01",
    completed: false
  },
  {
    id: 2,
    title: "list 02",
    completed: true
  },
]);

const addTodo = () => {
  if(todoAdd.value === ''){
    return;
  }else{ 
    todos.push({
      id: todos.length + 1,
      title: todoAdd.value,
      completed: false,
    });
  }

  todoAdd.value = '';
}

  const checkComplete = (index) => {
    todos[index].completed = !todos[index].completed
  }

  const removeTodo = (index) => {
    todos.splice(index, 1);
  }

const countAllTodo = computed( () => {
  return todos.length;
})

const countCompleteTodo = computed( () => {
  return todos.filter( todo => todo.completed).length;
})

</script>


<template>
  <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 p-6 space-y-6">
    <h1 class="text-2xl uppercase text-gray-700 font-bold">
      To do list <span v-if="todos.length">({{countCompleteTodo}}/{{ countAllTodo }})</span>
    </h1>

    <form @submit.prevent="addTodo">
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <input v-model="todoAdd" class="border-none focus:outline-none w-full text-gray-700" type="text"    placeholder="Add a task" />

        <button
          class="shrink-0 bg-teal-500 hover:bg-teal-700 border-4 text-sm hover:border-teal-700 text-white py-1 px-2 rounded"
          type="submit">
          Add
        </button>
      </div>
    </form>

    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="todo.id">
        <SingleTodo 
        :index="index" 
        :todo="todo" 
        @delete="removeTodo" 
        @checkComplete="checkComplete"/>

      </li>
    </ul>
    <div v-else="">
      <p>No task yet.</p>
    </div>

  </div>
</template>

<style scoped></style>
