<template>
  <div class="match-overview">
    <div class="win-ratio">
      <div class="chart__wrap">
        <span class="overview-title">{{
          $t("label.total_win_lose", { total: 70, win: 23, lose: 47 })
        }}</span>
        <div class="chart__wrap">
          <highcharts class="win-ratio-chart" :options="chartOptions" />
          <span class="win-ratio-text">32%</span>
        </div>
      </div>
      <div class="ratio-detail">
        <span class="kda">
          <span class="kill">25.9 </span>
          <span class="divider">/</span>
          <span class="death color-red"> 15.8 </span>
          <span class="divider">/</span>
          <span class="assist"> 14.1</span>
        </span>
        <span class="kda-ratio">
          <span><span class="accent color-green">3.73</span>:1</span>
          <span class="percentage color-red"> (58%)</span>
        </span>
      </div>
    </div>
    <div class="most-champion">
      <div class="most-item">
        <img
          class="champion-img"
          src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
          alt="most-champion-name"
        />
        <div class="most-info">
          <span class="name">애니비아</span>
          <div class="most-datail">
            <div class="percentage color-red">70%</div>
            <div class="ratio">
              ({{ $t("label.win_lose", { win: 7, lose: 3 }) }})
            </div>
            <div class="divider"></div>
            <div class="kda">13.01 {{ $t("label.kda") }}</div>
          </div>
        </div>
      </div>
      <div class="most-item">
        <img
          class="champion-img"
          src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
          alt="most-champion-name"
        />
        <div class="most-info">
          <span class="name">애니비아</span>
          <div class="most-datail">
            <div class="percentage color-red">70%</div>
            <div class="ratio">
              ({{ $t("label.win_lose", { win: 7, lose: 3 }) }})
            </div>
            <div class="divider"></div>
            <div class="kda">13.01 {{ $t("label.kda") }}</div>
          </div>
        </div>
      </div>
      <div class="most-item">
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
    <div class="most-position">
      <span class="overview-title">{{ $t("label.prefer_position") }}</span>
      <div class="most-item">
        <img
          class="position-img"
          src="@/assets/images/icon-mostposition-mid.png"
          alt="most-champion-name"
        />
        <div class="most-info">
          <span class="name">{{ $t("position.mid") }}</span>
          <div class="most-datail">
            <div class="percentage color-blue">70%</div>
            <div class="divider"></div>
            <div class="wr">
              {{ $t("label.wr") }}
              <div>33%</div>
            </div>
          </div>
        </div>
      </div>
      <div class="most-item">
        <img
          class="position-img"
          src="@/assets/images/icon-mostposition-top.png"
          alt="most-champion-name"
        />
        <div class="most-info">
          <span class="name">{{ $t("position.top") }}</span>
          <div class="most-datail">
            <div class="percentage color-blue">30%</div>
            <div class="divider"></div>
            <div class="wr">
              {{ $t("label.wr") }}
              <div>50%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
            data: [
              {
                name: "lose",
                y: 47,
                color: "#ee5a52",
              },
              {
                name: "win",
                y: 23,
                color: "#1f8ecd",
              },
            ],
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

  .overview-title {
    font-family: Helvetica;
    font-size: 12px;
    color: #666666;
  }

  .win-ratio,
  .most-champion,
  .most-position {
    box-sizing: border-box;
  }

  .win-ratio {
    display: flex;
    flex: 1;
    padding: 16px 24px;
    &-chart {
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

      .kda,
      .kda-ratio {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Helvetica;
        white-space: pre;
      }

      .kda span {
        font-size: 11px;
        font-weight: bold;
      }

      .divider {
        font-family: Helvetica;
        font-size: 11px;
        color: #999;
      }

      .kda-ratio {
        margin-top: 6px;

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

  .most-item {
    display: flex;

    .position-img {
      width: 28px;
      height: 28px;
      align-self: center;
    }

    & + .most-item {
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
      .most-datail {
        display: flex;
        margin-top: 3px;

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
    flex-basis: 228px;
    padding: 16px;
    border-width: 0 1px;
    border-style: solid;
    border-color: #cdd2d2;
  }

  .most-position {
    flex-basis: 184px;
    padding: 16px;

    .most-item {
      margin-top: 22px;
    }
  }
}
</style>
