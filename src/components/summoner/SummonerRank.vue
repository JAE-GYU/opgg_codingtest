<template>
  <skeleton tagName="div" :height="small ? '98px' : '124px'" :loading="loading">
    <div
      class="summoner-rank d-flex"
      :class="{ small: small }"
      v-if="league && league.hasResults"
    >
      <img
        class="summoner-rank-img"
        :src="league.tierRank.imageUrl"
        :alt="league.tierRank.tierDivision"
      />
      <div class="summoner-rank-info">
        <span class="rank-type">{{ title }}</span>
        <!-- 포지션 정보가 없음,,  -->
        <!-- <span class="most-position mt-4">탑 (총 27게임)</span> -->
        <span class="tier mt-4">{{ getDivisionTierNum }}</span>
        <span class="lp mt-6"
          ><b>{{ league.tierRank.lp }} LP</b> /
          {{
            $t("label.win_lose", { win: league.wins, lose: league.losses })
          }}</span
        >
        <span class="ratio mt-3"
          >{{ $t("label.wr") }}
          {{ getWinRatio(league.wins, league.losses) }}%</span
        >
      </div>
    </div>
    <div class="summoner-rank d-flex small" v-else>
      <img
        class="summoner-rank-img"
        src="@/assets/images/unranked.png"
        alt="unrank-img"
      />
      <div class="summoner-rank-info">
        <span class="rank-type">{{ title }}</span>
        <span class="unranked mt-2">Unranked</span>
      </div>
    </div>
  </skeleton>
</template>

<script>
import { getDivisionTierNum, getWinRatio } from "@/utils";

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    small: {
      type: Boolean,
      default: false,
    },
    league: {
      default: {
        hasResults: false,
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getDivisionTierNum() {
      return getDivisionTierNum(this.league.tierRank);
    },
  },
  methods: {
    getWinRatio,
  },
};
</script>

<style lang="scss" scoped>
.summoner-rank {
  width: 100%;
  height: 124px;
  display: flex;
  padding: 10px 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
  background: #f2f2f2;

  &-img {
    width: 104px;
    width: 104px;
  }

  &-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;

    .unranked {
      font-family: Helvetica;
      font-weight: bold;
      font-size: 13px;
      color: #879292;
    }

    .rank-type {
      font-size: 11px;
      color: #879292;
    }

    .most-position {
      font-size: 12px;
      color: #353a3a;
    }

    .tier {
      font-family: Helvetica;
      font-size: 15px;
      font-weight: bold;
      color: #1f8ecd;
    }

    .lp {
      font-family: Helvetica;
      font-size: 12px;
      color: #879292;

      b {
        color: #555e5e;
      }
    }

    .ratio {
      font-family: Helvetica;
      font-size: 12px;
      color: #879292;
    }
  }

  &.small {
    width: 100%;
    height: 98px;
    padding-top: 17px;
    padding-left: 28px;

    .summoner-rank-img {
      width: 64px;
      height: 64px;
    }

    .summoner-rank-info {
      display: flex;
      justify-content: center;
      margin-left: 28px;
    }

    .tier {
      font-size: 13px;
    }

    .lp {
      margin-top: 2px;
    }
  }
}
</style>
