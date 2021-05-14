import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "@/i18n/locales/en.yaml";
import ko from "@/i18n/locales/ko.yaml";

import Utils from "@/utils";

Vue.use(VueI18n);

export function detectLocale() {
  let locale = "ko";

  if (navigator.language) {
    locale = navigator.language.toLowerCase();
  } else if (navigator.browserLangugae) {
    locale = navigator.browserLangugae.toLowerCase();
  }

  let getCookieLang = Utils.getCookie("lang");
  if (getCookieLang) {
    locale = getCookieLang;
  }

  switch (true) {
    case /^en.*/i.test(locale):
      locale = "en";
      break;
    case /^ko.*/i.test(locale):
      locale = "ko";
      break;
    default:
      locale = "en";
  }

  return locale;
}

const i18n = new VueI18n({
  locale: detectLocale(),
  fallbackLocale: "ko",
  messages: {
    en,
    ko,
  },
});

export default i18n;
