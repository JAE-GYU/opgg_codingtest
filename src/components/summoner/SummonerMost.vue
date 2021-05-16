<template>
  <skeleton
    tagName="div"
    className="summoner-most"
    height="256px"
    :loading="loading"
  >
    <tabs v-if="mostInfo">
      <tab-pane :name="$t('label.wr_champion')">
        <div class="most-champion__wrap">
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
                <span class="info__text">CS {{ item.cs }}</span>
              </div>
              <div class="info__item">
                <span
                  class="info__text accent"
                  :class="
                    getKdaColor(
                      ((item.kills + item.assists) / item.deaths).toFixed(2)
                    )
                  "
                  >{{
                    ((item.kills + item.assists) / item.deaths).toFixed(2)
                  }}:1 {{ $t("label.kda") }}</span
                >
                <span class="info__text"
                  >{{ (item.kills / item.games).toFixed(1) }} /
                  {{ (item.deaths / item.games).toFixed(1) }} /
                  {{ (item.assists / item.games).toFixed(1) }}</span
                >
              </div>
              <div class="info__item">
                <span
                  class="info__text accent"
                  :class="getWinRatioColor(item.wins, item.losses)"
                  >{{ getWinRatio(item.wins, item.losses) }}%</span
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
        <div class="most-champion-week__wrap">
          <div
            class="most-champion-week"
            v-for="(item, idx) in mostInfo.recentWinRate"
            :key="idx"
          >
            <img class="champion-img" :src="item.imageUrl" :alt="item.name" />
            <div class="most-champion-week-info">
              <span class="champion-name">{{ item.name }}</span>
              <span
                class="win-ratio"
                :class="getWinRatioColor(item.wins, item.losses)"
                >{{ getWinRatio(item.wins, item.losses) }}%</span
              >
              <div class="win-ratio-chart">
                <div
                  class="win"
                  :style="{
                    width: (getWinRatio(item.wins, item.losses) || 0) + '%',
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

import { getWinRatio, getKdaColor, getWinRatioColor } from "@/utils";

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
