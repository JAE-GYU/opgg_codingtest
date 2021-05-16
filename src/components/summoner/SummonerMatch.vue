<template>
  <div class="summoner-match">
    <div class="match-tabs">
      <div class="match-tab active">
        <span>{{ $t("game_type.total") }}</span>
      </div>
      <div class="match-tab">
        <span>{{ $t("game_type.solo_rank") }}</span>
      </div>
      <div class="match-tab">
        <span>{{ $t("game_type.flex_rank_short") }}</span>
      </div>
    </div>
    <div class="match__wrap">
      <summoner-overview></summoner-overview>
      <game-list></game-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import SummonerOverview from "@/components/summoner/SummonerOverview";
import GameList from "@/components/summoner/GameList";

export default {
  components: {
    SummonerOverview,
    GameList,
  },
  computed: {
    ...mapGetters("match", ["isLoading"]),
    ...mapGetters("summoner", ["summoner"]),
  },
  watch: {
    summoner() {},
  },
};
</script>

<style lang="scss" scoped>
.match-tabs {
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0px 16px 0px 16px;
  box-sizing: border-box;
  background: #f2f2f2;
  border: 1px solid #cdd2d2;

  .match-tab {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 24px;
    cursor: pointer;
    &.active {
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        background: #1f8ecd;
      }

      span {
        font-weight: bold;
        color: #1f8ecd;
      }
    }

    span {
      font-size: 12px;
      color: #555555;
    }
  }
}
</style>
