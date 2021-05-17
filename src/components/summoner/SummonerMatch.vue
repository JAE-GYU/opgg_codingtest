<template>
  <div class="summoner-match">
    <div class="match-tabs" v-if="!isLoading">
      <div
        class="match-tab"
        v-for="(item, idx) in matchTypeTabs"
        :key="idx"
        :class="{ active: matchType === item.id }"
        @click="setMatchType(item.id)"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="match__wrap">
      <summoner-overview
        :loading="isLoading"
        :matches="matches"
      ></summoner-overview>
      <game-list :loading="isLoading" :matches="filterdMatches"></game-list>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import SummonerOverview from "@/components/summoner/SummonerOverview";
import GameList from "@/components/summoner/GameList";

import { FETCH_MATCHES, FETCH_ITEMS } from "@/store/actions.type";
import { FETCH_START, FETCH_END, SET_MATCH_TYPE } from "@/store/mutations.type";

export default {
  components: {
    SummonerOverview,
    GameList,
  },
  computed: {
    ...mapGetters("match", [
      "isLoading",
      "matches",
      "filterdMatches",
      "matchType",
    ]),
    ...mapGetters("summoner", ["summoner"]),
  },
  data() {
    return {
      matchTypeTabs: [
        {
          id: "all",
          label: this.$t("game_type.total"),
        },
        {
          id: "solo",
          label: this.$t("game_type.match.solo"),
        },
        {
          id: "flex",
          label: this.$t("game_type.match.flex"),
        },
      ],
    };
  },
  watch: {
    summoner: {
      immediate: true,
      handler() {
        if (!this.summoner) return false;
        const namespace = "match/";

        this.$store.commit(namespace + FETCH_START);

        Promise.all(
          [this[FETCH_MATCHES](this.summoner.name)],
          [this[FETCH_ITEMS](this.summoner.name)]
        )
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
    ...mapMutations(["match/" + SET_MATCH_TYPE]),
    ...mapActions({
      [FETCH_ITEMS]: "match/" + FETCH_ITEMS,
      [FETCH_MATCHES]: "match/" + FETCH_MATCHES,
    }),
    setMatchType(val) {
      const namespace = "match/";
      this.$store.commit(namespace + SET_MATCH_TYPE, val);
    },
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
