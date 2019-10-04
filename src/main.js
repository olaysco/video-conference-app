import Vue from "vue";
import Vuelidate from "vuelidate";
import VueSocketIO from "vue-socket.io";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { url } from "./utils/cofig";

Vue.config.productionTip = false;

// Vue resource for http
Vue.use(VueResource);

// Vuelidate for validation
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
