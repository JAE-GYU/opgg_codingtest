import axios from "axios";
import i18n from "@/i18n";

const baseURL = "https://codingtest.op.gg/api";

function get(url, config = { params: {} }, setHl = true) {
  return new Promise((resolve, reject) => {
    if (setHl) config.params.hl = i18n.locale;
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

function getLocaleStr() {
  let locale = i18n.locale;
  switch (locale) {
    case "en":
      locale = "en_US";
      break;
    case "ko":
      locale = "ko_KR";
      break;
  }
  return locale;
}

export function getItems() {
  let locale = getLocaleStr();

  return get(`http://ddragon.leagueoflegends.com/cdn/10.15.1/data/${locale}/item.json`, null, false);
}

export function getChampions() {
  let locale = getLocaleStr();
  return get(`http://ddragon.leagueoflegends.com/cdn/11.10.1/data/${locale}/champion.json`, null, false);
}
