import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import i18n from "@/i18n";

import HighchartsVue from "highcharts-vue";
Vue.use(HighchartsVue);

import Skeleton from "@/components/common/Skeleton";
Vue.component("skeleton", Skeleton);

Vue.config.productionTip = false;

window.vue = new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
