<template>
  <div id="no-summoner">
    <div class="container">
      <img
        class="no-summoner__img"
        src="@/assets/images/no_summoner.png"
        alt="no-summoner"
      />
      <p class="no-summoner__text" v-html="no_summoner_page_title"></p>
      <search-input class="no-results-search-input"></search-input>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/common/SearchInput";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss">
#no-summoner {
  .container {
    padding-top: 104px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .no-summoner__img {
    width: 350px;
    margin-bottom: 40px;
  }

  .no-summoner__text,
  .no-summoner__text b {
    font-size: 26px;
    color: #242929;
  }

  .no-summoner__text2 {
    font-size: 15px;
    color: #555e5e;
    margin-top: 20px;
  }

  .search-input {
    width: 100%;
    max-width: 640px;
    height: 50px;
    margin-top: 10px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 19%);
    &__dropdown {
      top: 54px;
    }

    .search-history {
      flex-wrap: wrap;
      display: flex;
      padding-left: 0;
      &-item {
        width: 33.33%;
        .summoner-name {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>