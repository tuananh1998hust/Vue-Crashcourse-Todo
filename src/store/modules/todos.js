import axios from 'axios';

const state = {
  todos: [
    {
      id: 1,
      title: 'Todo Store'
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    });

    commit('addTodo', res.data);
  },
  updateTodo({ commit }, id) {
    commit('updateTodo', id);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => (state.todos = [todo, ...state.todos]),
  updateTodo: (state, id) =>
    (state.todos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }))
};

export default {
  state,
  getters,
  actions,
  mutations
};
