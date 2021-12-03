<template>
  <FnacResultButton />
  <InterResultButton />
  <pre>store.state: {{ state }}</pre>
</template>

<script>
import { inject } from "vue";
import FnacResultButton from "@/components/FnacResultButton.vue";
import InterResultButton from "@/components/InterResultButton.vue";

export default {
  name: "App",
  components: {
    FnacResultButton,
    InterResultButton,
  },
  setup() {
    const store = inject("store");

    return {
      state: store.state,
    };
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
