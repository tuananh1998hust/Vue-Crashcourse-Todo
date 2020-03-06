<template>
  <div>
    <h1>Todo</h1>
    <div v-bind:key="todo.id" v-for="todo in allTodos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TodoItem from './TodoItem';

export default {
  name: 'Todos',
  props: ['todos'],
  components: {
    TodoItem
  },
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos'])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped></style>>
