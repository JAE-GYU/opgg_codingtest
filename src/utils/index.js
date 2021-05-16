export function getCookie(cName) {
  cName = cName + "=";
  let cookieData = document.cookie;
  let start = cookieData.indexOf(cName);
  let cValue = "";
  if (start != -1) {
    start += cName.length;
    let end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}

export function getUnique(arr, key) {
  return arr.reduce((unique, o) => {
    if (!unique.some((obj) => obj[key] === o[key])) {
      unique.push(o);
    }
    return unique;
  }, []);
}

// 중복되는 챔피언은 값 합침
export function mergeGroupChampion(arr) {
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

  return Object.values(returnArr);
}

export function mergeGroupPosition(arr) {
  let returnArr = {};
  arr.forEach(item => {
    if (returnArr[item.position]) {
      let tmp = { ...returnArr[item.position] };
      returnArr[item.position] = {
        ...item,
        games: tmp.games + item.games,
        losses: tmp.losses + item.losses,
        wins: tmp.wins + item.wins,
      }
    } else {
      returnArr[item.position] = item;
    }
  });

  return Object.values(returnArr);
}

export function getDivisionTierNum({ tierDivision, shortString }) {
  // 마스터, 그랜드마스터, 챌린저는 티어 숫자가 없음
  let tierNum = [
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
  ].includes(tierDivision)
    ? shortString.match(/\d+/g)
    : "";

  return `${tierDivision}${tierNum && " " + tierNum[0]}`;
}

export function getWinRatio({ wins, losses }) {
  return ((wins / (wins + losses)) * 100).toFixed(0);
}

export function getKdaScore({ kills, deaths, assists }) {
  return ((kills + assists) / deaths).toFixed(2);
}

export function getWinRatioColor({ wins, losses }) {
  let num = getWinRatio({ wins, losses });
  return num >= 60 ? "color-red" : "";
}

export function getKdaColor(item) {
  let num = getKdaScore(item);
  let color = "";
  if (5 <= num) color = "color-yellow";
  else if (4 <= num) color = "color-blue";
  else if (3 <= num) color = "color-green";

  return color;
}

export function getKdaScoreColor(item) {
  let num = getKdaScore(item);
  return num >= 6 ? "color-yellow" : "";
}

export default {
  getCookie,
  getUnique,
  getDivisionTierNum,
};
