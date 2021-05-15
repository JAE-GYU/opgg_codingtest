<template>
  <div class="summoner-most">
    <tabs>
      <tab-pane :name="$t('label.wr_champion')">
        <div class="most-champion__wrap">
          <div class="most-champion">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
              alt="most-champion-name"
            />
            <div class="most-champion-info">
              <div class="info__item">
                <span class="info__text accent">애니비아</span>
                <span class="info__text">CS 67.8 (2.4)</span>
              </div>
              <div class="info__item">
                <span class="info__text accent">2.88:1 평점</span>
                <span class="info__text">6.5 / 4.5 / 6.4</span>
              </div>
              <div class="info__item">
                <span class="info__text accent">56%</span>
                <span class="info__text">58게임</span>
              </div>
            </div>
          </div>
          <div class="most-champion">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841"
              alt="most-champion-name"
            />
            <div class="most-champion-info">
              <div class="info__item">
                <span class="info__text accent">볼리베어</span>
                <span class="info__text">CS 67.8 (2.4)</span>
              </div>
              <div class="info__item">
                <span class="info__text accent color-blue">4.88:1 평점</span>
                <span class="info__text">6.5 / 4.5 / 6.4</span>
              </div>
              <div class="info__item">
                <span class="info__text accent">36%</span>
                <span class="info__text">58게임</span>
              </div>
            </div>
          </div>
          <div class="most-champion">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=q_auto&v=1591083841"
              alt="most-champion-name"
            />
            <div class="most-champion-info">
              <div class="info__item">
                <span class="info__text accent">아트록스</span>
                <span class="info__text">CS 67.8 (2.4)</span>
              </div>
              <div class="info__item">
                <span class="info__text accent color-yellow">5.88:1 평점</span>
                <span class="info__text">6.5 / 4.5 / 6.4</span>
              </div>
              <div class="info__item">
                <span class="info__text accent color-red">67%</span>
                <span class="info__text">58게임</span>
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
      <tab-pane :name="$t('label.wr_week')">
        <div class="most-champion-week__wrap">
          <div class="most-champion-week">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
              alt="most-champion-name"
            />
            <div class="most-champion-week-info">
              <span class="champion-name">애니비아</span>
              <span class="win-ratio">71%</span>
              <div class="win-ratio-chart">
                <div class="win" style="width: 40%">
                  <span>4승</span>
                </div>
                <div class="lose" style="width: 60%">
                  <span>6패</span>
                </div>
              </div>
            </div>
          </div>
          <div class="most-champion-week">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
              alt="most-champion-name"
            />
            <div class="most-champion-week-info">
              <span class="champion-name">애니비아</span>
              <span class="win-ratio">71%</span>
              <div class="win-ratio-chart">
                <div class="win" style="width: 40%">
                  <span>4승</span>
                </div>
                <div class="lose" style="width: 60%">
                  <span>6패</span>
                </div>
              </div>
            </div>
          </div>
          <div class="most-champion-week">
            <img
              class="champion-img"
              src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
              alt="most-champion-name"
            />
            <div class="most-champion-week-info">
              <span class="champion-name">애니비아</span>
              <span class="win-ratio">71%</span>
              <div class="win-ratio-chart">
                <div class="win" style="width: 40%">
                  <span>4승</span>
                </div>
                <div class="lose" style="width: 60%">
                  <span>6패</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import Tabs from "@/components/common/Tabs";
import TabPane from "@/components/common/TabPane";
export default {
  components: { Tabs, TabPane },
  data() {
    return {
      activeName: "champion",
    };
  },
  methods: {
    setActiveName(val) {
      this.activeName = val;
    },
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

    &:last-of-type {
      margin-right: 0;
    }

    .info__text {
      font-family: Helvetica;
      font-size: 11px;
      color: #879292;
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
      }

      .win-ratio {
        font-family: Helvetica;
        color: #879292;
      }

      .win-ratio-chart {
        width: 123px;
        height: 24px;
        border-radius: 4px;
        margin-left: 12px;
        overflow: hidden;
        display: flex;

        .win,
        .lose {
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
