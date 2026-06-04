<script setup>
import { reactive, ref } from "vue";

const users = reactive([]);
const searchInput = ref("");

const getUsersFromServer = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      data.forEach(user => {
        users.push({name: user.name, email: user.email})
      });
    })
};

getUsersFromServer();

const getUsers = () => {
  if(searchInput.value){
    return users.filter( user => {
      if(user.name.toLowerCase().includes(searchInput.value.toLowerCase())){
        return user;
      }
    })
  }else{
    return users;
  }
}

// getUsers();

console.log(users);

const clearSearch = () => {
  searchInput.value = "";
}
</script>

<template>

<div class="app">
  <div class="search-box">
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>

    <input
      type="text"
      placeholder="Search user..."
      v-model="searchInput"
    />

    <button @click="clearSearch">
      Clear
    </button>
  </div>
  <p>writiing: {{ searchInput }}</p>


  <div class="users">
    <div
      class="card"
      v-for="(user, index) in getUsers()"
      :key="index"
    >
      <div class="avatar">
        {{ user.name.charAt(0) }}
      </div>

      <div class="content">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>

        <div class="bottom">
          <span>#{{ user.id }}</span>
          <button>Profile</button>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 40px;
  background: #f8fafc;
}

.search-box {
  max-width: 700px;
  margin: 0 auto 40px;

  display: flex;
  align-items: center;
  gap: 12px;

  background: white;
  padding: 10px;

  border-radius: 18px;

  box-shadow:
    0 8px 30px rgba(0,0,0,.08);

  border: 1px solid #e5e7eb;
}

.search-icon {
  color: #94a3b8;
  margin-left: 8px;
}

.search-box input {
  flex: 1;

  border: none;
  outline: none;

  padding: 12px;

  font-size: 16px;

  background: transparent;
}

.search-box input::placeholder {
  color: #94a3b8;
}

.search-box button {
  border: none;

  background: #111827;
  color: white;

  padding: 12px 18px;

  border-radius: 12px;

  cursor: pointer;

  transition: .2s;
}

.search-box button:hover {
  background: #6366f1;
}

.search-box:focus-within {
  border-color: #6366f1;

  box-shadow:
    0 0 0 4px rgba(99,102,241,.15),
    0 10px 30px rgba(0,0,0,.08);
}

.users {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border: 1px solid #e2e8f0;

  border-radius: 18px;
  padding: 20px;

  display: flex;
  gap: 16px;

  transition: 0.25s;
}

.card:hover {
  transform: translateY(-3px);
  border-color: #6366f1;

  box-shadow:
    0 10px 25px rgba(99,102,241,.08);
}

.avatar {
  width: 55px;
  height: 55px;

  border-radius: 50%;

  background: #6366f1;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 700;

  flex-shrink: 0;
}

.content {
  flex: 1;
}

.content h3 {
  margin: 0;
  font-size: 18px;
  color: #0f172a;
}

.content p {
  margin: 6px 0 16px;
  color: #64748b;
  font-size: 14px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bottom span {
  color: #94a3b8;
  font-size: 13px;
}

.bottom button {
  border: none;
  background: #111827;
  color: white;

  padding: 8px 14px;
  border-radius: 8px;

  cursor: pointer;
}
</style>
