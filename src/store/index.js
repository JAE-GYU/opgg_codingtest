import Vue from "vue";
import Vuex from "vuex";

import summoner from "@/store/modules/summoner.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    summoner,
  }
});
