import { getChampions, getItems, getMatches } from "@/api";
import i18n from "@/i18n";

import {
  FETCH_MATCHES,
  FETCH_CHAMPIONS,
  FETCH_ITEMS,
} from "@/store/actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_ITEMS,
  SET_MATCH_TYPE,
  SET_MATCHES,
  SET_CHAMPIONS,
} from "@/store/mutations.type";

const state = {
  isLoading: true,
  matchType: "all",
  matches: [],
  champions: [],
  items: [],
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  champions(state) {
    return state.champions;
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
      games: state.matches.games.filter(
        (x) => x.gameType === i18n.t(`game_type.match.${state.matchType}`)
      ),
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
    setTimeout(() => {
      state.isLoading = false;
    }, 150);
  },
  [SET_CHAMPIONS](state, champions) {
    state.champions = champions;
  },
  [SET_ITEMS](state, items) {
    state.items = items;
  },
  [SET_MATCH_TYPE](state, matchType) {
    state.matchType = matchType;
  },
  [SET_MATCHES](state, matches) {
    state.matches = matches;
  },
};

const actions = {
  async [FETCH_CHAMPIONS]({ commit }) {
    const champions = await getChampions();
    commit(SET_CHAMPIONS, champions);
  },
  async [FETCH_ITEMS]({ commit }) {
    const items = await getItems();
    commit(SET_ITEMS, items);
  },
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
