import { createStore } from 'vuex';

const store = createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    double(state) {
      state.counter *= 2;
    },
  },
});

export default store;

