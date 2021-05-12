<template>
  <div class="summoner-most">
    <div class="tab__wrap">
      <div class="tab__header">
        <div class="tab__header-item active">
          <span>챔피언 승률</span>
        </div>
        <div class="tab__header-item">
          <span>7일간 랭크 승률</span>
        </div>
      </div>
      <div class="tab__content">
        <div class="tab-pane">
          <div class="most-champion__wrap">
            <div class="most-champion">
              <img
                class="most-champion-img"
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
                class="most-champion-img"
                src="https://opgg-static.akamaized.net/images/lol/champion/Volibear.png?image=q_auto&v=1591083841"
                alt="most-champion-name"
              />
              <div class="most-champion-info">
                <div class="info__item">
                  <span class="info__text accent">볼리베어</span>
                  <span class="info__text">CS 67.8 (2.4)</span>
                </div>
                <div class="info__item">
                  <span class="info__text accent blue">4.88:1 평점</span>
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
                class="most-champion-img"
                src="https://opgg-static.akamaized.net/images/lol/champion/Aatrox.png?image=q_auto&v=1591083841"
                alt="most-champion-name"
              />
              <div class="most-champion-info">
                <div class="info__item">
                  <span class="info__text accent">아트록스</span>
                  <span class="info__text">CS 67.8 (2.4)</span>
                </div>
                <div class="info__item">
                  <span class="info__text accent yellow">5.88:1 평점</span>
                  <span class="info__text">6.5 / 4.5 / 6.4</span>
                </div>
                <div class="info__item">
                  <span class="info__text accent red">67%</span>
                  <span class="info__text">58게임</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summoner-most {
  width: 100%;
  display: flex;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
  background: #ededed;

  .tab__wrap {
    width: 100%;
    .tab__header {
      display: flex;
      &-item {
        height: 44px;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #cdd2d2;
        border-bottom: 1px solid #cdd2d2;
        background: #f2f2f2;
        cursor: pointer;

        &:hover span {
          color: #5e5e5e;
        }

        &.active {
          background: #ededed;
          border-bottom: 0;
          span {
            font-weight: bold;
            color: #5e5e5e;
          }
        }

        span {
          font-size: 12px;
          color: #879292;
        }
      }
    }
  }

  .most-champion {
    width: 100%;
    height: 53px;
    padding: 4px 16px 4px 15px;
    border-bottom: 1px solid #cdd2d2;
    box-sizing: border-box;
    display: flex;

    &:last-of-type {
      border-bottom: none;
    }

    &-img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    &-info {
      padding-left: 10px;
      display: flex;

      .info__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 24px;

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
            &.red {
              color: #c6443e;
            }
            &.green {
              color: #2daf7f;
            }
            &.blue {
              color: #1f8ecd;
            }
            &.yellow {
              color: #e19205;
            }
          }
        }
      }
    }
  }
}
</style>
