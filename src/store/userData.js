import { setLocalItem, getLocalItem } from "../api/cookie.js";

const userData = {
  state: () => ({
    TOKEN: getLocalItem("TOKEN"),
  }),
  mutations: {
    setToken(state, data) {
      // `state` is the local module state
      state.TOKEN = data;
      setLocalItem("TOKEN",data)
    },
  },
  getters: {
    getToken(state) {
      return state.TOKEN;
    },
  },
};

export default userData
