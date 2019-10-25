import Vue from "vue";
import Vuelidate from "vuelidate";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { url } from "./utils/cofig";
import LoadScript from "vue-plugin-load-script";
import Popover from "vue-js-popover";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
var VueCookie = require("vue-cookie");

Vue.use(Antd);

Vue.use(Popover, { tooltip: true });
//vue script loader
window.Vue = Vue;
Vue.use(LoadScript);

Vue.config.productionTip = false;

// Vue resource for http
Vue.use(VueResource);

// Vuelidate for validation
Vue.use(Vuelidate);

// Vuecookie for inapp temp storage
Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
