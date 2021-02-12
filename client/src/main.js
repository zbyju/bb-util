import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

import axios from "axios"

import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuesax, {});

Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(require('vue-moment'));

axios.defaults.baseURL = process.env.VUE_APP_API_URL || "http://localhost:3000/server/client/"

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
