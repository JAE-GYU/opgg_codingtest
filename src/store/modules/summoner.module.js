import { getSummoner } from '@/api'

import { FETCH_SUMMONER } from "@/store/actions.type";
import { SET_SUMMONER } from "@/store/mutations.type";

const state = {
  loading: true,
  summoner: null,
};
const getters = {};
const mutations = {
  [SET_SUMMONER](state, payload) {
    state.summoner = payload;
  },
};
const actions = {
  async [FETCH_SUMMONER]({ commit, state }, summonerName) {
    const { summoner } = await getSummoner(summonerName);
    commit(SET_SUMMONER, summoner);

    state.loading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
}
