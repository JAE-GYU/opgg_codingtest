<template>
  <header id="site-header">
    <!-- <span @click="() => ($i18n.locale = 'en')">setLang</span> -->
    <div class="container">
      <search-input></search-input>
    </div>
  </header>
</template>

<script>
import SearchInput from "@/components/SearchInput";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss" scoped>
#site-header {
  width: 100%;
  height: 97px;
  padding: 12px 0;
  display: flex;
  justify-content: center;
  background-color: #1ea1f7;
  .container {
    display: flex;
    .search-input {
      align-self: flex-end;
      margin-left: auto;
    }
  }
}
</style>
