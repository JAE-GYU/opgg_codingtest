import { getMatches } from "@/api";

import { FETCH_MATCHES } from "@/store/actions.type";
import { FETCH_START, FETCH_END, SET_MATCHES } from "@/store/mutations.type";

const state = {
  isLoading: true,
  matches: [],
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  matches(state) {
    return state.matches;
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    setTimeout(() => {
      state.isLoading = false;
    }, 150);
  },
  [SET_MATCHES](state, matches) {
    state.matches = matches;
  },
};

const actions = {
  async [FETCH_MATCHES]({ commit }, summonerName) {
    const matches = await getMatches(summonerName);
    commit(SET_MATCHES, matches);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
