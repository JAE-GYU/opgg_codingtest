<template>
  <div class="summoner__wrap">
    <summoner-info :summoner="summoner" :loading="isLoading"></summoner-info>

    <div class="container">
      <div class="summoner-contents">
        <section class="side">
          <summoner-rank
            :title="$t('game_type.solo_rank')"
            :league="summoner && summoner.leagues[0]"
            :loading="isLoading"
          ></summoner-rank>
          <summoner-rank
            :title="$t('game_type.flex_rank')"
            :small="true"
            :league="summoner && summoner.leagues[1]"
            :loading="isLoading"
          ></summoner-rank>
          <summoner-most></summoner-most>
        </section>
        <section class="main">
          <summoner-match></summoner-match>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SummonerInfo from "@/components/summoner/SummonerInfo";
import SummonerRank from "@/components/summoner/SummonerRank";
import SummonerMatch from "@/components/summoner/SummonerMatch";
import SummonerMost from "@/components/summoner/SummonerMost";

import { FETCH_START, FETCH_END } from "@/store/mutations.type";
import { FETCH_SUMMONER, FETCH_MOST_INFO } from "@/store/actions.type";

export default {
  components: {
    SummonerInfo,
    SummonerRank,
    SummonerMost,
    SummonerMatch,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    summoner() {
      return this.$store.getters.summoner;
    },
  },
  watch: {
    "$route.params.summonerName": {
      immediate: true,
      async handler(summonerName) {
        if (!summonerName) {
          this.$router.push({ name: "NoSummoner" });
          return false;
        }

        this.$store.commit(FETCH_START);

        Promise.all([
          this.$store.dispatch(FETCH_SUMMONER, summonerName),
          this.$store.dispatch(FETCH_MOST_INFO, summonerName),
        ])
          .catch(() => {
            this.$router.push({ name: "NoSummoner" });
          })
          .finally(() => {
            this.$store.commit(FETCH_END);
          });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.summoner-contents {
  display: flex;
  padding-top: 10px;

  .side {
    height: 300px;
    flex-basis: 300px;
    margin-right: 10px;

    & > div + div {
      margin-top: 8px;
    }
  }

  .main {
    height: 400px;
    flex: 1 1 auto;
  }
}
</style>
