<!-- App.vue -->
<template>
    <div class="todo-app">
      <h1>Mi Lista de Tareas</h1>
      
      <!-- Formulario para agregar tareas -->
      <div class="add-todo">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo"
          placeholder="Nueva tarea..."
        >
        <button @click="addTodo">Agregar</button>
      </div>
  
      <!-- Lista de tareas -->
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <input 
            type="checkbox" 
            v-model="todo.completed"
          >
          <span :class="{ completed: todo.completed }">
            {{ todo.text }}
          </span>
          <button @click="removeTodo(todo.id)">
            Eliminar
          </button>
        </li>
      </ul>
  
      <!-- Estadísticas -->
      <div class="stats">
        <p>Total de tareas: {{ todos.length }}</p>
        <p>Completadas: {{ completedCount }}</p>
      </div>



    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: []
      }
    },
    computed: {
      completedCount() {
        return this.todos.filter(todo => todo.completed).length
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({
            id: Date.now(),
            text: this.newTodo,
            completed: false
          })
          this.newTodo = ''
        }
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
      }
    }
  }
  </script>
  
  <style>
  .todo-app {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .add-todo {
    margin: 20px 0;
    display: flex;
    gap: 10px;
  }
  
  .add-todo input {
    flex: 1;
    padding: 8px;
  }
  
  button {
    padding: 8px 16px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .todo-list {
    list-style: none;
    padding: 0;
  }
  
  .todo-list li {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
    gap: 10px;
  }
  
  .completed {
    text-decoration: line-through;
    color: #888;
  }
  
  .stats {
    margin-top: 20px;
    color: #666;
  }
  </style>