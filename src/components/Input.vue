<template>
  <div>
    <input type="text" name="title" v-model="title" placeholder="Add Todo..." />
    <button @click="onClick">Add Todo</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Input',
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapActions(['addTodo']),

    onClick(e) {
      e.preventDefault();

      this.addTodo(this.title);

      this.title = '';
    }
  }
};
</script>

<style scoped></style>
