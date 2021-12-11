<template>
  <div id="app">
    <Loader />
    <h2 v-if="isDeployed">
      {{ `${params[0]}x² + ${params[1]}x - ${params[2]}` }}
    </h2>
    <button @click="deploy()">ddd</button>
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";

import { init } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    Loader,
  },
  data() {
    return {
      params: [0, 0, 0],
      isDeployed: false,
      isDeploying: false,
    };
  },
  methods: {
    async deploy() {
      this.isDeploying = true;
      this.params = await init();
      console.log(this.params);
      this.isDeployed = true;
      this.isDeploying = false;
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
