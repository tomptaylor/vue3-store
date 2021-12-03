import { reactive, readonly } from "vue";

const state = reactive({
  fnacResults: [],
  interResults: []
});

export default {
  state: readonly(state),
  actions: {
    addFnacResult(item) {
      state.fnacResults.push(item);
    },
    addInterResult(item) {
      state.interResults.push(item);
    }
  }
};
