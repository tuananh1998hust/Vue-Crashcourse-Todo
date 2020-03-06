<template>
  <div class="todo-item">
    <p
      v-bind:class="{ 'is-completed': todo.completed }"
      v-on:click="onClick(todo)"
    >
      {{ todo.title }}
    </p>

    <button class="btn-del" @click="onClick">delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    ...mapActions(['updateTodo']),

    onClick(todo) {
      this.updateTodo(todo.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  background-color: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
  display: flex;
  align-items: center;
}

.is-completed {
  text-decoration: line-through;
}

.btn-del {
  float: right;
  background-color: red;
  color: #fff;
}
</style>
