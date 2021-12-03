<template>
  <button @click="addResult">Add FNAC result</button>
</template>

<script>
import store from "@/store";

export default {
  setup() {
    return {
      addResult: () => store.actions.addFnacResult({ bar: new Date() }),
    };
  },
};
</script>