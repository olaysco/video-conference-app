import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";
import { url, SERVER_URL } from "./utils/cofig";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageBusy: false,
    user: localStorage.getItem("user"),
    url: url
  },
  getters: {},
  mutations: {
    togglePageBusy(state) {
      state.pageBusy = !state.pageBusy;
    }
  },
  actions: {
    togglePageBusy(context) {
      context.commit("togglePageBusy");
    },
    setUser(context, payload) {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload.user));
    },
    fetchUser({ commit, state }) {
      const id = localStorage.getItem("whos_log");
      if (state.user !== null) {
        return true;
      }
      axios
        .get(`${SERVER_URL}/api/${id}`)
        .then(response => {
          console.log(response);
          if (response.ok) {
            const user = response.body.data.user;
            commit("setUser", user);
            return true;
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
