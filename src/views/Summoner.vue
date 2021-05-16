<template>
  <div class="summoner__wrap">
    <summoner-info></summoner-info>

    <div class="container">
      <div class="summoner-contents">
        <section class="side">
          <summoner-rank
            :title="$t('game_type.solo_rank')"
            :league="summoner && summoner.leagues[0]"
            :loading="loading"
          ></summoner-rank>
          <summoner-rank
            :title="$t('game_type.flex_rank')"
            :small="true"
            :league="summoner && summoner.leagues[1]"
            :loading="loading"
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
import { mapState } from "vuex";

import SummonerInfo from "@/components/summoner/SummonerInfo";
import SummonerRank from "@/components/summoner/SummonerRank";
import SummonerMatch from "@/components/summoner/SummonerMatch";
import SummonerMost from "@/components/summoner/SummonerMost";

import { FETCH_SUMMONER } from "@/store/actions.type";

export default {
  components: {
    SummonerInfo,
    SummonerRank,
    SummonerMost,
    SummonerMatch,
  },
  computed: {
    ...mapState({
      loading: (state) => state.summoner.loading,
      summoner: (state) => state.summoner.summoner,
    }),
  },
  watch: {
    "$route.params.summonerName": {
      immediate: true,
      async handler(summonerName) {
        if (!summonerName) {
          this.$router.push({ name: "NoSummoner" });
          return false;
        }

        Promise.all([this.$store.dispatch(FETCH_SUMMONER, summonerName)]).catch(
          () => {
            this.$router.push({ name: "NoSummoner" });
          }
        );
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
