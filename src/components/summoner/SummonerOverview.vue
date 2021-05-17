<template>
  <skeleton
    tagName="div"
    className="match-overview"
    height="194px"
    :loading="loading"
    :style="{ marginBottom: '8px' }"
  >
    <template>
      <div class="summary" v-if="matches.summary">
        <div class="chart__wrap">
          <span class="overview-title">{{
            $t("label.total_win_lose", {
              total: matches.summary.wins + matches.summary.losses,
              win: matches.summary.wins,
              lose: matches.summary.losses,
            })
          }}</span>
          <div class="chart__wrap">
            <highcharts class="win-ratio-chart" :options="chartOptions" />
            <span class="win-ratio-text"
              >{{ getWinRatio(matches.summary) }}%</span
            >
          </div>
        </div>
        <div class="ratio-detail">
          <span class="kda">
            <span class="kill">{{ matches.summary.kills }} </span>
            <span class="divider">/</span>
            <span class="death color-red"> {{ matches.summary.deaths }} </span>
            <span class="divider">/</span>
            <span class="assist"> {{ matches.summary.assists }}</span>
          </span>
          <span class="kda-ratio mt-6">
            <span
              ><span class="accent" :class="getKdaColor(matches.summary)">{{
                getKdaScore(matches.summary)
              }}</span
              >:1</span
            >
            <span
              class="percentage color-red"
              v-tooltip="$t('label.pkill_percentage')"
            >
              ({{ getContributionForKillRateAvg }}%)</span
            >
          </span>
        </div>
      </div>
      <div class="most-champion" v-if="matches.champions">
        <div
          class="most__wrap"
          v-for="(item, idx) in getMergeGroupChampion"
          :key="idx"
        >
          <img class="champion-img" :src="item.imageUrl" :alt="item.name" />
          <div class="most-info">
            <span class="name">{{ item.name }}</span>
            <div class="most-detail mt-3">
              <div class="percentage" :class="getWinRatioColor(item)">
                {{ getWinRatio(item) }}%
              </div>
              <div class="ratio">
                ({{
                  $t("label.win_lose", { win: item.wins, lose: item.losses })
                }})
              </div>
              <div class="divider"></div>
              <div class="kda" :class="getKdaScoreColor(item)">
                {{ getKdaScore(item) }} {{ $t("label.kda") }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="most__wrap"
          v-for="(item, idx) in 3 - getMergeGroupChampion.length"
          :key="'no-champion-' + idx"
        >
          <img
            class="champion-img"
            src="@/assets/images/no_champion.png"
            alt="no-champion"
          />
          <div class="most-info">
            <div class="no-champion">{{ $t("label.no_champion") }}</div>
          </div>
        </div>
      </div>
      <div class="most-position" v-if="matches.positions">
        <span class="overview-title">{{ $t("label.prefer_position") }}</span>
        <div class="d-flex">
          <div
            class="most__wrap"
            v-for="(item, idx) in getMergeGroupPosition"
            :key="idx"
          >
            <img
              class="position-img"
              :src="
                require(`@/assets/images/position/${item.position.toLowerCase()}.png`)
              "
              alt="most-champion-name"
            />
            <div class="most-info">
              <span class="name">{{
                $t(`position.${item.position.toLowerCase()}`)
              }}</span>
              <div class="most-detail mt-3">
                <div class="percentage color-blue">
                  {{
                    Math.floor((item.games / matches.games.length) * 100) || 0
                  }}%
                </div>
                <div class="divider"></div>
                <div class="wr">
                  {{ $t("label.wr") }}
                  <div>{{ getWinRatio(item) }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </skeleton>
</template>

<script>
import {
  getWinRatio,
  getKdaScore,
  getKdaScoreColor,
  getKdaColor,
  getWinRatioColor,
  mergeGroupChampion,
  mergeGroupPosition,
} from "@/utils";

export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    matches: {
      required: false,
    },
  },
  computed: {
    getContributionForKillRateAvg() {
      if (!this.matches) return 0;
      return (
        this.matches.games.reduce((acc, current) => {
          return Math.floor(
            acc +
              +current.stats.general.contributionForKillRate.match(/\d+/g)[0]
          );
        }, 0) / 20
      ).toFixed(0);
    },
    getMergeGroupChampion() {
      if (!this.matches) return [];
      return mergeGroupChampion(this.matches.champions);
    },
    getMergeGroupPosition() {
      if (!this.matches) return [];

      return mergeGroupPosition(this.matches.positions);
    },
  },
  watch: {
    matches({ summary }) {
      this.chartOptions.series[0].data = [
        {
          name: "lose",
          y: summary.losses,
          color: "#ee5a52",
        },
        {
          name: "win",
          y: summary.wins,
          color: "#1f8ecd",
        },
      ];
    },
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "pie",
          width: 90,
          height: 90,
          backgroundColor: "transparent",
          marginTop: 15,
        },
        credits: {
          enabled: false,
        },
        title: {
          text: "",
        },
        plotOptions: {
          pie: {
            shadow: false,
            borderWidth: 0,
            size: "90px",
            innerSize: "70%",
          },
        },
        tooltip: {
          enabled: false,
        },
        series: [
          {
            data: [],
            dataLabels: {
              enabled: false,
            },
            enableMouseTracking: false,
            showInLegend: false,
            tooltip: {
              enabled: false,
            },
          },
        ],
        howInLegend: true,
      },
    };
  },
  methods: {
    getWinRatio,
    getWinRatioColor,
    getKdaScore,
    getKdaScoreColor,
    getKdaColor,
    mergeGroupChampion,
  },
};
</script>

<style lang="scss" scoped>
.match-overview {
  width: 100%;
  height: 158px;
  display: flex;
  background: #ededed;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: #cdd2d2;
  box-sizing: border-box;
  margin-bottom: 8px;

  .overview-title {
    font-family: Helvetica;
    font-size: 12px;
    color: #666666;
  }

  .summary,
  .most-champion,
  .most-position {
    box-sizing: border-box;
  }

  .summary {
    display: flex;
    flex: 1;
    padding: 16px 24px;
    .win-ratio-chart {
      width: 90px;
      height: 90px;
      margin-top: 14px;
    }

    .chart__wrap {
      width: 90px;
      text-align: center;
      position: relative;
    }

    .win-ratio-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: Helvetica;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      color: #555555;
    }

    .ratio-detail {
      padding-left: 35px;
      display: flex;
      flex-direction: column;
      align-self: center;

      .kda-ratio {
        span {
          font-size: 16px;
          color: #333333;
        }

        .accent {
          font-weight: bold;
        }
      }
    }
  }

  .most__wrap {
    display: flex;

    .position-img {
      width: 28px;
      height: 28px;
      align-self: center;
    }

    & + .most__wrap {
      margin-top: 13px;
    }

    .champion-img {
      width: 34px;
      height: 34px;
    }

    .no-champion {
      font-size: 11px;
      color: #999999;
    }

    .most-info {
      padding-left: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .name {
        font-size: 14px;
        color: #333333;
      }
      .most-detail {
        display: flex;

        & > div {
          font-family: Helvetica;
          font-size: 11px;
          color: #555555;
          white-space: pre;
        }

        .percentage {
          font-weight: bold;
        }

        .divider {
          width: 1px;
          height: 11px;
          margin: 0 6px;
          background-color: #cdd2d2;
        }

        .kda {
          font-weight: bold;
        }

        .wr {
          color: #333;
          div {
            display: inline-block;
            font-size: 11px;
            font-weight: bold;
          }
        }
      }
    }
  }

  .most-champion {
    max-width: 228px;
    flex-basis: 228px;
    padding: 16px;
    border-width: 0 1px;
    border-style: solid;
    border-color: #cdd2d2;
  }

  .most-position {
    max-width: 184px;
    display: flex;
    flex-direction: column;
    flex-basis: 184px;
    padding: 16px;

    & > .d-flex {
      flex: 1;
      justify-content: center;
      flex-direction: column;
    }

    .most__wrap {
      height: 33px;
      margin-top: 22px;
    }
  }
}
</style>
