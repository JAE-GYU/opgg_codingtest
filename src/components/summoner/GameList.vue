<template>
  <div class="game-list">
    <div class="game-list-item mt-8 lose">
      <div class="game-list-item__inner">
        <div class="game-info">
          <div class="d-flex flex-d-column">
            <span class="stat-label"><b>솔랭</b></span>
            <span class="stat-label mt-4">하루전</span>
            <span class="divider"></span>
            <span class="stat-label mt-2 color-red"><b>패배</b></span>
            <span class="stat-label mt-2">15분 53초</span>
          </div>
        </div>
        <div class="game-setting">
          <div class="d-flex flex-d-column">
            <div class="game-setting__wrap">
              <img
                class="champion-img"
                src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
                alt="spell-name"
              />
              <div class="spells">
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png"
                  alt="spell-name"
                />
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png"
                  alt="spell-name"
                />
              </div>
              <div class="runes">
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/perk/8229.png"
                  alt="spell-name"
                />
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png"
                  alt="spell-name"
                />
              </div>
            </div>
          </div>
          <span class="stat-label champion-name mt-8">애니비아</span>
        </div>
        <div class="kda">
          <span class="kill">25 </span>
          <span class="divider">/</span>
          <span class="death color-red"> 15 </span>
          <span class="divider">/</span>
          <span class="assist"> 14</span>
          <div class="stat-label mt-4">
            <b class="stat-label">1.50:1</b>
            <span class="stat-label"> 평점</span>
          </div>
        </div>
        <div class="game-stat">
          <div class="d-flex flex-d-column">
            <span class="stat-label">레벨 8</span>
            <span class="stat-label mt-6">20 (1.3) CS</span>
            <span class="stat-label mt-6 color-red">킬관여 38%</span>
          </div>
        </div>
        <div class="game-items">
          <div class="item-list">
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/3340.png"
                alt="item-name"
              />
            </div>
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/1026.png"
                alt="item-name"
              />
            </div>
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/3113.png"
                alt="item-name"
              />
            </div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item bg-none">
              <img
                class="stat-img"
                src="@/assets/images/icons/icon_item_red.png"
                alt="item-name"
              />
            </div>
          </div>
          <div class="ward">
            <img
              class="stat-img small"
              src="@/assets/images/icons/icon_ward_red.png"
              alt="ward"
            />
            <span class="ward__label">제어와드 1</span>
          </div>
        </div>
        <div class="game-players">
          <div class="team">
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
          </div>
          <div class="team">
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
          </div>
        </div>
        <div class="details">
          <img
            class="details__icon"
            src="@/assets/images/icons/icon_arrow_red.png"
            alt="detail_icon"
          />
        </div>
      </div>
    </div>
    <div class="game-list-item mt-8 win">
      <div class="game-list-item__inner">
        <div class="game-info">
          <div class="d-flex flex-d-column">
            <span class="stat-label"><b>솔랭</b></span>
            <span class="stat-label mt-4">하루전</span>
            <span class="divider"></span>
            <span class="stat-label mt-2 color-blue"><b>승리</b></span>
            <span class="stat-label mt-2">15분 53초</span>
          </div>
        </div>
        <div class="game-setting">
          <div class="d-flex flex-d-column">
            <div class="game-setting__wrap">
              <img
                class="champion-img"
                src="https://opgg-static.akamaized.net/images/lol/champion/Anivia.png?image=w_30&v=1"
                alt="spell-name"
              />
              <div class="spells">
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png"
                  alt="spell-name"
                />
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png"
                  alt="spell-name"
                />
              </div>
              <div class="runes">
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/perk/8229.png"
                  alt="spell-name"
                />
                <img
                  class="stat-img"
                  src="https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png"
                  alt="spell-name"
                />
              </div>
            </div>
          </div>
          <span class="stat-label champion-name mt-8">애니비아</span>
        </div>
        <div class="kda">
          <span class="kill">25 </span>
          <span class="divider">/</span>
          <span class="death color-red"> 15 </span>
          <span class="divider">/</span>
          <span class="assist"> 14</span>
          <div class="stat-label mt-4">
            <b class="stat-label">1.50:1</b>
            <span class="stat-label"> 평점</span>
          </div>
        </div>
        <div class="game-stat">
          <div class="d-flex flex-d-column">
            <span class="stat-label">레벨 8</span>
            <span class="stat-label mt-6">20 (1.3) CS</span>
            <span class="stat-label mt-6 color-red">킬관여 38%</span>
          </div>
        </div>
        <div class="game-items">
          <div class="item-list">
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/3340.png"
                alt="item-name"
              />
            </div>
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/1026.png"
                alt="item-name"
              />
            </div>
            <div class="item">
              <img
                class="stat-img"
                src="https://opgg-static.akamaized.net/images/lol/item/3113.png"
                alt="item-name"
              />
            </div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item bg-none">
              <img
                class="stat-img"
                src="@/assets/images/icons/icon_item_blue.png"
                alt="item-name"
              />
            </div>
          </div>
          <div class="ward">
            <img
              class="stat-img small"
              src="@/assets/images/icons/icon_ward_blue.png"
              alt="ward"
            />
            <span class="ward__label">제어와드 1</span>
          </div>
        </div>
        <div class="game-players">
          <div class="team">
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
          </div>
          <div class="team">
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
            <div class="player">
              <img
                class="stat-img small"
                src="https://opgg-static.akamaized.net/images/lol/champion/Tristana.png"
                alt="player"
              />
              <div class="stat-label">용인기흥구신재규123</div>
            </div>
          </div>
        </div>
        <div class="details">
          <img
            class="details__icon"
            src="@/assets/images/icons/icon_arrow_blue.png"
            alt="detail_icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-list {
  width: 100%;
  display: flex;
  flex-direction: column;

  .game-list-item {
    width: 100%;
    height: 96px;
    display: flex;

    &__inner {
      width: 100%;
      height: 100%;
      max-width: 690px;
      display: table;
      flex: 1;
      border-collapse: collapse;
      border-width: 1px 0 1px 1px;
      border-style: solid;
      box-sizing: border-box;
      & > div {
        display: table-cell;
        vertical-align: middle;
      }
    }

    .stat-label {
      font-size: 11px;
      color: #555;
      b {
        font-size: 11px;
      }

      &.color-red {
        color: #d0021b !important;
      }

      &.color-blue {
        color: #2c709b !important;
      }
    }

    .stat-img {
      width: 22px;
      height: 22px;
      &.small {
        width: 16px;
        height: 16px;
      }
    }

    .details {
      width: 30px;
      height: 96px;
      border-width: 1px;
      border-style: solid;
      box-sizing: border-box;
      position: relative;
      &__icon {
        width: 13px;
        height: 10px;
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .game-info,
    .game-stat {
      width: 70px;
      text-align: center;
      .divider {
        width: 27px;
        height: 1px;
        background-color: #d0a6a5;
        margin: 3px auto;
      }
    }

    .game-stat {
      width: 90px;
    }

    .game-setting {
      width: 100px;
      &__wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .champion-img {
        width: 46px;
        height: 46px;
      }

      .spells,
      .runes {
        display: flex;
        flex-direction: column;
      }

      .spells {
        margin-left: 6px;
      }

      .runes {
        margin-left: 4px;
      }

      .champion-name {
        width: 100%;
        display: inline-block;
        text-align: center;
      }
    }

    .kda {
      text-align: center;
      span:not(.stat-label) {
        font-size: 15px;
        color: #555e5e;
      }

      b {
        color: #333333;
      }
    }

    .game-items {
      .item-list {
        width: 96px;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        .item {
          width: 22px;
          height: 22px;
          flex-grow: 0;
          flex-shrink: 0;
          border-radius: 2px;
          margin: 1px;
          overflow: hidden;
          &.bg-none {
            background: none !important;
          }
        }
      }

      .ward {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 7px auto 0 auto;
        &__label {
          margin-left: 4px;
          font-size: 11px;
          color: #000;
        }
      }
    }

    .game-players {
      width: 170px;
      vertical-align: middle;
      .team {
        float: left;
        width: 50%;
      }
      .player {
        display: flex;
        align-items: center;
        width: 80px;
        overflow: hidden;
        margin-left: 3px;
        box-sizing: border-box;

        & + .player {
          margin-top: 2px;
        }

        .stat-img {
          margin-right: 3px;
        }

        .stat-label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    &.win {
      .game-list-item__inner {
        background-color: #b0ceea;
        border-color: #a1b8cd;
      }

      .details {
        background-color: #7fb0e1;
        border-color: #549dc7;
      }

      .item-list .item {
        background-color: #7aa5c3;
      }
    }

    &.lose {
      .game-list-item__inner {
        background-color: #d6b5b2;
        border-color: #c0aba8;
      }

      .details {
        background-color: #e89c95;
        border-color: #c8817c;
      }

      .item-list .item {
        background-color: #cb9e9a;
      }
    }
  }
}
</style>