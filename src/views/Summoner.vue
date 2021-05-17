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
          <summoner-most
            :most-info="mostInfo"
            :loading="isLoading"
          ></summoner-most>
        </section>
        <section class="main">
          <summoner-match></summoner-match>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
    ...mapGetters("summoner", ["isLoading", "summoner", "mostInfo"]),
  },
  watch: {
    "$route.params.summonerName": {
      immediate: true,
      async handler(summonerName) {
        const namespace = "summoner/";
        if (!summonerName) {
          this.$router.push({ name: "NoSummoner" });
          return false;
        }

        this.$store.commit(namespace + FETCH_START);

        Promise.all([
          this[FETCH_SUMMONER](summonerName),
          this[FETCH_MOST_INFO](summonerName),
        ])
          .catch((e) => {
            console.log(e);
            this.$router.push({ name: "NoSummoner" });
          })
          .finally(() => {
            this.$store.commit(namespace + FETCH_END);
          });
      },
    },
  },
  methods: {
    ...mapActions({
      [FETCH_SUMMONER]: "summoner/" + FETCH_SUMMONER,
      [FETCH_MOST_INFO]: "summoner/" + FETCH_MOST_INFO,
    }),
  },
};
</script>

<style lang="scss" scoped>
.summoner-contents {
  display: flex;
  padding-top: 10px;

  .side {
    flex-basis: 300px;
    margin-right: 10px;

    & > div + div {
      margin-top: 8px;
    }
  }

  .main {
    flex: 1 1 auto;
  }
}
</style>
