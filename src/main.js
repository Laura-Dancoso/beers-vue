import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueMq from "vue-mq";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 640,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
