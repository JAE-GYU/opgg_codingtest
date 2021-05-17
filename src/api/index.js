import axios from "axios";
import i18n from "@/i18n";

const baseURL = "https://codingtest.op.gg/api";

function get(url, config = { params: {} }) {
  return new Promise((resolve, reject) => {
    config.params.hl = i18n.locale;
    axios
      .get(url, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.data);
      });
  });
}

export function getSummoner(summonerName) {
  return get(`${baseURL}/summoner/${summonerName}`);
}

export function getMostInfo(summonerName) {
  return get(`${baseURL}/summoner/${summonerName}/mostInfo`);
}

export function getMatches(summonerName) {
  return get(`${baseURL}/summoner/${summonerName}/matches`);
}

export function getMatchDetail(summonerName, gameId) {
  return get(`${baseURL}/summoner/${summonerName}/matchDetail/${gameId}`);
}

export function getItems() {
  return get(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`);
}
