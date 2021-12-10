<template>
  <div id="app">
    <h2 v-if="isDeployed">
      {{ `${params[0]}x² + ${params[1]}x - ${params[2]}` }}
    </h2>
    <button @click="deploy()">ddd</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { init } from "../dist/snapp/snapp.js";

export default {
  name: "App",
  components: {
    HelloWorld,
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
