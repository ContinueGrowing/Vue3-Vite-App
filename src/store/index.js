import { createStore } from "vuex";
import userData from "./userData.js"

// Create a new store instance.
const store = createStore({
  modules: {
    userData: userData,
    //   b: moduleB
  },
});

export default store;
