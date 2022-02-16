/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import store from "./store/index";
import NowUiKit from "./plugins/now-ui-kit";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import Chart from 'chart.js'

Vue.config.productionTip = false;

Vue.use(NowUiKit);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(Vuetify);

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
