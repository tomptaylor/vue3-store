<template>
  <button @click="addResult">Add INTER result</button>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");

    return {
      addResult: () => store.actions.addInterResult({ foo: new Date() }),
    };
  },
};
</script>