<template>
  <div class="todo-item">
    <p v-bind:class="{'is-completed': todo.completed}" v-on:click="onClick(todo)">{{todo.title}}</p>

    <button class="btn-del" @click="$emit('del-todo', todo.id)">delete</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    onClick(todo) {
      todo.completed = !todo.completed;
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