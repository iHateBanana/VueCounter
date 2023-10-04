
<template>
  <div id="app">
    <h1>girlypop counter</h1>
    <p>girlies: {{ counter }}</p>
    <button @click="increment">increase</button>
    <button @click="decrement">decrease</button>
    <button @click="double">double</button>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    double() {
      this.$store.commit('double');
    },
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5a1a1;
  margin-top: 60px;
}

#app button {
  color: #df4d4d;
}
</style>
