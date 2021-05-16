import { getSummoner, getMostInfo } from "@/api";

import { FETCH_SUMMONER, FETCH_MOST_INFO } from "@/store/actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_SUMMONER,
  SET_MOST_INFO,
} from "@/store/mutations.type";

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

// 중복되는 챔피언은 값 합침
function mergeGroupObject(arr) {
  let returnArr = {};
  arr.forEach(item => {
    if (returnArr[item.id]) {
      let tmp = { ...returnArr[item.id] };
      returnArr[item.id] = {
        ...item,
        assists: tmp.assists + item.assists,
        cs: tmp.cs + item.cs,
        deaths: tmp.deaths + item.deaths,
        games: tmp.games + item.games,
        kills: tmp.kills + item.kills,
        losses: tmp.losses + item.losses,
        wins: tmp.wins + item.wins,
      }
    } else {
      returnArr[item.id] = item;
    }
  });

  return returnArr;
}

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    setTimeout(() => {
      state.isLoading = false;
    }, 150);
  },
  [SET_SUMMONER](state, summoner) {
    state.summoner = summoner;
  },
  [SET_MOST_INFO](state, mostInfo) {
    state.mostInfo = {
      champions: Object.values(mergeGroupObject(mostInfo.champions)),
      recentWinRate: Object.values(mergeGroupObject(mostInfo.recentWinRate)),
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
}
