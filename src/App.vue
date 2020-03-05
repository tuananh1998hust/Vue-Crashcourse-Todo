<template>
  <div id="app">
    <Input v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import axios from 'axios';
// Components
import Todos from './components/Todo';
import Input from './components/Input';

export default {
  name: 'App',
  components: {
    Todos,
    Input
  },
  data() {
    return {
      todos: [
        {
          id: '0',
          title: 'Study Vue',
          completed: true
        },
        {
          id: '1',
          title: 'Working with project',
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  },
  async created() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    this.todos = res.data;
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
