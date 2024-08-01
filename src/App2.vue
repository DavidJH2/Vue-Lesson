<script setup>
  import {onMounted, ref} from 'vue';

  const name = ref('John Johnson');
  const status = ref('inactive');
  const tasks = ref(['Go to the store', 'Get eggs', 'Make breakfast']);
  const newTask = ref('');

  const toggleStatus = () => {
      if(status.value==="active")
        status.value = "inactive"
      else if(status.value=="pending")
        status.value = "active"
      else
        status.value = "pending"
  };

  const addTask = () => {
    if(newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  };

  const deleteTask = (index) => {
    tasks.value.splice(index, 1);
  };

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      tasks.value = data.map((task) => task.title)
    } catch {
        console.log('Error fetching tasks');
    }
  });
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status==='active'">User Active</p>
  <p v-else-if="status==='pending'">User Pending</p>
  <p v-else>User Not Active</p>


  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask"></input>
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">X</button>
      </span>
    </li>
  </ul>

  <br>
  <button @click="toggleStatus">Change Status</button>
</template>

