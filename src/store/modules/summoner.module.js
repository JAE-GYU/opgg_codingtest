import { getSummoner, getMostInfo } from "@/api";

import { FETCH_SUMMONER, FETCH_MOST_INFO } from "@/store/actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_SUMMONER,
  SET_MOST_INFO,
} from "@/store/mutations.type";

import { mergeGroupChampion } from "@/utils";

const state = {
  isLoading: true,
  summoner: null,
  mostInfo: null,
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
  summoner(state) {
    return state.summoner;
  },
  mostInfo(state) {
    return state.mostInfo;
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    state.isLoading = false;
  },
  [SET_SUMMONER](state, summoner) {
    state.summoner = summoner;
  },
  [SET_MOST_INFO](state, mostInfo) {
    state.mostInfo = {
      champions: mergeGroupChampion(mostInfo.champions),
      recentWinRate: mergeGroupChampion(mostInfo.recentWinRate),
    };
  },
};

const actions = {
  async [FETCH_SUMMONER]({ commit }, summonerName) {
    const { summoner } = await getSummoner(summonerName);
    commit(SET_SUMMONER, summoner);
  },
  async [FETCH_MOST_INFO]({ commit }, summonerName) {
    const mostInfo = await getMostInfo(summonerName);
    commit(SET_MOST_INFO, mostInfo);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
