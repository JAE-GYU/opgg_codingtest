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

export default {
  getCookie,
};
