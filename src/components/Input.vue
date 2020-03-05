<template>
  <div>
    <input type="text" name="title" v-model="title" placeholder="Add Todo..." />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Input',
  data() {
    return {
      title: ''
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false
      };

      this.$emit('add-todo', newTodo);

      this.title = '';
    }
  }
};
</script>

<style scoped></style>
