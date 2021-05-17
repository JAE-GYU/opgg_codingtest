import { getItems, getMatches } from "@/api";
import i18n from "@/i18n";

import { FETCH_MATCHES, FETCH_ITEMS } from "@/store/actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_ITEMS,
  SET_MATCH_TYPE,
  SET_MATCHES,
} from "@/store/mutations.type";


const state = {
  isLoading: true,
  matchType: "all",
  matches: [],
  items: [],
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  items(state) {
    return state.items;
  },
  matches(state) {
    return state.matches;
  },
  filterdMatches(state) {
    if (state.matchType === "all") {
      return state.matches;
    }

    return {
      ...state.matches,
      games: state.matches.games.filter(x => x.gameType === i18n.t(`game_type.match.${state.matchType}`))
    };
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
    state.isLoading = false;
  },
  [SET_ITEMS](state, matchType) {
    state.items = matchType;
  },
  [SET_MATCH_TYPE](state, matchType) {
    state.matchType = matchType;
  },
  [SET_MATCHES](state, matches) {
    state.matches = matches;
  },
};

const actions = {
  async [FETCH_ITEMS]({ commit }, summonerName) {
    const items = await getItems(summonerName);
    commit(SET_ITEMS, items);
  },
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
