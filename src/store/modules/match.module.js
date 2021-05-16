import { getMatches } from "@/api";

import { FETCH_MATCHES } from "@/store/actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_MATCH_TYPE,
  SET_MATCHES,
} from "@/store/mutations.type";

const state = {
  isLoading: true,
  matchType: "all",
  matches: [],
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  matches(state) {
    return state.matches;
  },
  matchType(state) {
    return state.matchType;
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
  [SET_MATCH_TYPE](state, matchType) {
    state.matchType = matchType;
  },
  [SET_MATCHES](state, matches) {
    state.matches = matches;
  },
};

const actions = {
  async [FETCH_MATCHES]({ commit }, summonerName) {
    const matches = await getMatches(summonerName);
    console.log(matches)
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
