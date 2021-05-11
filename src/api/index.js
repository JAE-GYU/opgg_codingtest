import axios from "axios";

const baseURL = "https://codingtest.op.gg/api";

function get(url, config) {
  return new Promise((resolve, reject) => {
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
