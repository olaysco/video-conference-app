import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";
import { url } from "./utils/cofig";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageBusy: false,
    user: null,
    url: url
  },
  getters: {},
  mutations: {
    togglePageBusy(state) {
      state.pageBusy = !state.pageBusy;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    togglePageBusy(context) {
      context.commit("togglePageBusy");
    },
    setUser(context, user) {
      context.commit("setUser", user);
    }
  }
});
