<template>
  <header id="site-header">
    <div class="container">
      <span class="set-lang">
        <span @click="setLang('ko')">한글</span>
        <div class="divider"></div>
        <span @click="setLang('en')">English</span>
      </span>
      <search-input></search-input>
    </div>
  </header>
</template>

<script>
import { setCookie } from "@/utils";
import SearchInput from "@/components/common/SearchInput";

export default {
  components: {
    SearchInput,
  },
  methods: {
    setLang(lang) {
      setCookie("lang", lang);
      document.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
#site-header {
  width: 100%;
  height: 97px;
  padding: 12px 0;
  display: flex;
  background-color: #1ea1f7;
  .container {
    display: flex;
    position: relative;
    .search-input {
      align-self: flex-end;
      margin-left: auto;
    }
  }

  .set-lang {
    display: flex;
    position: absolute;
    right: 0;
    align-items: center;
    span {
      color: #fff;
      cursor: pointer;
    }
    .divider {
      width: 1px;
      height: 10px;
      background: #fff;
      margin: 0 8px;
    }
  }
}
</style>
