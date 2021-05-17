<template>
  <skeleton
    tagName="div"
    className="summoner-most"
    height="256px"
    :loading="loading"
  >
    <tabs v-if="mostInfo">
      <tab-pane :name="$t('label.wr_champion')">
        <div class="no-results" v-if="mostInfo.champions.length <= 0">
          {{ $t("label.no_results_recorded") }}
        </div>
        <div class="most-champion__wrap" v-else>
          <div
            class="most-champion"
            v-for="(item, idx) in mostInfo.champions"
            :key="idx"
          >
            <img class="champion-img" :src="item.imageUrl" :alt="item.name" />
            <div class="most-champion-info">
              <div class="info__item">
                <span class="info__text accent">{{ item.name }}</span>
                <!-- csPerMin이 없음 -->
                <span class="info__text" v-tooltip="$t('label.cs_avg')"
                  >CS {{ item.cs }}</span
                >
              </div>
              <div class="info__item">
                <span
                  v-tooltip="
                    $t('label.kda_avg', {
                      kills: (item.kills / item.games).toFixed(1),
                      deaths: (item.deaths / item.games).toFixed(1),
                      assists: (item.assists / item.games).toFixed(1),
                    })
                  "
                  class="info__text accent"
                  :class="getKdaColor(item)"
                  >{{ getKdaScore(item) }}:1 {{ $t("label.kda") }}</span
                >
                <span class="info__text"
                  >{{ (item.kills / item.games).toFixed(1) }} /
                  {{ (item.deaths / item.games).toFixed(1) }} /
                  {{ (item.assists / item.games).toFixed(1) }}</span
                >
              </div>
              <div class="info__item">
                <span
                  v-tooltip="$t('label.wr')"
                  class="info__text accent"
                  :class="getWinRatioColor(item)"
                  >{{ getWinRatio(item) }}%</span
                >
                <span class="info__text"
                  >{{ item.games }}{{ $t("label.played") }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
      <tab-pane :name="$t('label.wr_week')">
        <div class="no-results" v-if="mostInfo.recentWinRate.length <= 0">
          {{ $t("label.no_results_recorded") }}
        </div>
        <div class="most-champion-week__wrap" v-else>
          <div
            class="most-champion-week"
            v-for="(item, idx) in mostInfo.recentWinRate"
            :key="idx"
          >
            <img class="champion-img" :src="item.imageUrl" :alt="item.name" />
            <div class="most-champion-week-info">
              <span class="champion-name">{{ item.name }}</span>
              <span class="win-ratio" :class="getWinRatioColor(item)"
                >{{ getWinRatio(item) }}%</span
              >
              <div class="win-ratio-chart">
                <div
                  class="win"
                  :style="{
                    width: (getWinRatio(item) || 0) + '%',
                  }"
                >
                  <span>{{ item.wins }}{{ $t("label.win") }}</span>
                </div>
                <div class="lose">
                  <span>{{ item.losses }}{{ $t("label.lose") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
    </tabs>
  </skeleton>
</template>

<script>
import Tabs from "@/components/common/Tabs";
import TabPane from "@/components/common/TabPane";

import {
  getWinRatio,
  getKdaScore,
  getKdaColor,
  getWinRatioColor,
} from "@/utils";

export default {
  components: { Tabs, TabPane },
  props: {
    mostInfo: {
      type: Object,
    },
    loading: {
      type: Boolean,
    },
  },
  data() {
    return {
      activeName: "champion",
    };
  },
  methods: {
    setActiveName(val) {
      this.activeName = val;
    },
    getWinRatio,
    getKdaScore,
    getKdaColor,
    getWinRatioColor,
  },
};
</script>

<style lang="scss" scoped>
.summoner-most {
  width: 100%;
  display: flex;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
  background: #ededed;

  .no-results {
    padding-top: 126px;
    background-image: url("~@/assets/images/icons/icon_info_large.png");
    background-repeat: no-repeat;
    background-position: 50% 50px;
    padding-bottom: 60px;
    text-align: center;
    font-size: 16px;
    color: #555e5e;
  }

  .info__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;

    &:last-of-type {
      margin-right: 0;
      text-align: center;
    }

    .info__text {
      font-family: Helvetica;
      font-size: 11px;
      color: #879292;
      overflow: hidden;
      text-overflow: ellipsis;
      &.accent {
        font-size: 13px;
        font-weight: bold;
        color: #5e5e5e;
        margin-bottom: 3px;
      }
    }
  }

  .most-champion {
    width: 100%;
    height: 53px;
    padding: 4px 16px 4px 15px;

    .champion-img {
      width: 45px;
      height: 45px;
    }

    &-info {
      padding-left: 10px;
      display: flex;
      flex: 1;

      .info__item:nth-of-type(1) {
        flex-basis: 85px;
      }

      .info__item:nth-of-type(3) {
        margin-left: auto;
      }
    }
  }

  .most-champion-week {
    width: 100%;
    height: 48px;
    padding: 8px 8px 8px 15px;

    .champion-img {
      width: 32px;
      height: 32px;
    }

    &-info {
      display: flex;
      flex: 1;
      align-items: center;
      padding-left: 10px;
      box-sizing: border-box;

      .champion-name,
      .win-ratio {
        line-height: 16px;
        font-size: 13px;
        font-weight: bold;
      }

      .champion-name {
        font-family: Helvetica;
        width: 60px;
        color: #5e5e5e;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .win-ratio {
        flex: 1;
        font-family: Helvetica;
        text-align: center;
        color: #879292;
      }

      .win-ratio-chart {
        width: 123px;
        height: 24px;
        border-radius: 4px;
        margin-left: auto;
        overflow: hidden;
        display: flex;

        .win,
        .lose {
          display: flex;
          height: 100%;
          line-height: 24px;
          float: left;
          span {
            font-family: Helvetica;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
          }
        }

        .win {
          padding-left: 4px;
          background: #1f8ecd;
        }

        .lose {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          padding-right: 4px;
          background: #ee5a52;
          text-align: right;
        }
      }
    }
  }

  .most-champion,
  .most-champion-week {
    border-bottom: 1px solid #cdd2d2;
    box-sizing: border-box;
    display: flex;
    &:last-of-type,
    &:last-of-type {
      border: none;
    }
  }
}
</style>
