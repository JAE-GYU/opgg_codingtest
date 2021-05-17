<template>
  <div class="game-list-item mt-8" :class="game.isWin ? 'win' : 'lose'">
    <div class="game-list-item__inner">
      <div class="game-info">
        <div class="d-flex flex-d-column">
          <span class="stat-label"
            ><b>{{ game.gameType }}</b></span
          >
          <span class="stat-label mt-4" v-tooltip="getLocaleDate">{{
            getDateFromNow
          }}</span>
          <span class="divider"></span>
          <span
            class="stat-label mt-2"
            :class="game.isWin ? 'color-blue' : 'color-red'"
            ><b>{{
              game.isWin ? $t("label.victory") : $t("label.defeat")
            }}</b></span
          >
          <span class="stat-label mt-2">{{ getGameLength }}</span>
        </div>
      </div>
      <div class="game-setting">
        <div class="d-flex flex-d-column">
          <div class="game-setting__wrap">
            <img
              class="champion-img"
              :src="game.champion.imageUrl"
              :alt="getChampionName"
            />
            <div class="spells">
              <img
                v-for="(spell, idx) in game.spells"
                :key="idx"
                class="stat-img"
                :src="spell.imageUrl"
                :alt="getNameFromFileUrl(spell.imageUrl)"
              />
            </div>
            <div class="runes">
              <img
                v-for="(peak, idx) in game.peak"
                :key="idx"
                class="stat-img"
                :src="peak"
                :alt="getNameFromFileUrl(peak)"
              />
            </div>
          </div>
        </div>
        <span class="stat-label champion-name mt-8">{{ getChampionName }}</span>
      </div>
      <div class="kda">
        <span class="kill">{{ game.stats.general.kill }} </span>
        <span class="divider">/</span>
        <span class="death color-red"> {{ game.stats.general.death }} </span>
        <span class="divider">/</span>
        <span class="assist"> {{ game.stats.general.assist }}</span>
        <div class="stat-label mt-4">
          <b class="stat-label"
            >{{
              getKdaScore({
                kills: game.stats.general.kill,
                deaths: game.stats.general.death,
                assists: game.stats.general.assist,
              })
            }}:1</b
          >
          <span class="stat-label"> {{ $t("label.kda") }}</span>
        </div>
      </div>
      <div class="game-stat">
        <div class="d-flex flex-d-column">
          <span class="stat-label"
            >{{ $t("label.level") }} {{ game.champion.level }}</span
          >
          <v-popover trigger="hover" placement="top">
            <span class="stat-label mt-6"
              >{{ game.stats.general.cs }} ({{ game.stats.general.csPerMin }})
              CS</span
            >
            <span slot="popover">
              CS: {{ game.stats.general.cs }}<br />
              {{ $t("label.cs_per_min") }} :
              {{ game.stats.general.csPerMin }}
            </span>
          </v-popover>
          <span
            v-tooltip="$t('label.pkill_percentage')"
            class="stat-label mt-6 color-red"
            >{{ $t("label.pkill") }}
            {{ game.stats.general.contributionForKillRate }}</span
          >
        </div>
      </div>
      <div class="game-items">
        <div class="item-list">
          <div class="item" v-for="(item, idx) in 7" :key="idx">
            <v-popover
              popoverClass="item-popover"
              trigger="hover"
              v-if="game.items[idx]"
              placement="top"
            >
              <img
                class="stat-img"
                :src="game.items[idx].imageUrl"
                alt="item"
              />
              <span slot="popover">
                <span class="item-popover__inner">
                  <p class="item-tooltip__name">
                    {{ getItem(game.items[idx]).name }}
                  </p>
                  <span
                    class="item-tooltip__desc"
                    v-html="getItem(game.items[idx]).description"
                  ></span>
                  <p
                    class="item-tooltip__gold"
                    v-if="
                      getItem(game.items[idx]).gold &&
                      getItem(game.items[idx]).gold.total > 0
                    "
                  >
                    <br />
                    <br />
                    {{ $t("label.cost") }}
                    <span class="gold">
                      {{ getItem(game.items[idx]).gold.total }} / ({{
                        getItem(game.items[idx]).gold.base
                      }})
                    </span>
                  </p>
                </span>
              </span>
            </v-popover>
          </div>
          <div class="item bg-none">
            <img
              v-if="game.isWin"
              class="stat-img"
              src="@/assets/images/icons/icon_item_blue.png"
              alt="item"
            />
            <img
              v-else
              class="stat-img"
              src="@/assets/images/icons/icon_item_red.png"
              alt="item"
            />
          </div>
        </div>
        <div class="ward">
          <img
            v-if="game.isWin"
            class="stat-img small"
            src="@/assets/images/icons/icon_ward_blue.png"
            alt="item"
          />
          <img
            v-else
            class="stat-img small"
            src="@/assets/images/icons/icon_ward_red.png"
            alt="item"
          />
          <span class="ward__label"
            >{{ $t("label.ward") }}
            {{
              game.stats.ward.sightWardsBought +
              game.stats.ward.visionWardsBought
            }}</span
          >
        </div>
      </div>
      <div class="game-players">
        <div
          class="team"
          v-for="(team, teamIdx) in matchDetail.teams"
          :key="teamIdx"
        >
          <div
            class="player"
            v-for="(player, idx) in team.players"
            :key="idx"
            @click="routeSummonerName(player.summonerName)"
          >
            <img
              class="stat-img small"
              :src="player.champion.imageUrl"
              alt="player"
            />
            <div class="stat-label">{{ player.summonerName }}</div>
          </div>
        </div>
      </div>
      <div class="details">
        <img
          v-if="game.isWin"
          class="details__icon"
          src="@/assets/images/icons/icon_arrow_blue.png"
          alt="item"
        />
        <img
          v-else
          class="details__icon"
          src="@/assets/images/icons/icon_arrow_red.png"
          alt="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

import i18n from "@/i18n";
import { getMatchDetail } from "@/api";
import { getNameFromFileUrl, getKdaScore } from "@/utils";

export default {
  props: {
    game: {
      required: true,
    },
  },
  computed: {
    ...mapGetters("summoner", ["summoner"]),
    ...mapGetters("match", ["items", "champions"]),
    getChampionName() {
      if (!this.champions.data) return false;
      const championName = getNameFromFileUrl(this.game.champion.imageUrl);

      return this.champions.data[championName]
        ? this.champions.data[championName].name
        : championName;
    },
    getLocaleDate() {
      moment.locale(i18n.locale);
      return moment(this.game.createDate, "X").format("LLL");
    },
    getDateFromNow() {
      moment.locale(i18n.locale);
      return moment(this.game.createDate, "X").fromNow();
    },
    getGameLength() {
      let seconds = this.game.gameLength;
      let str = "";

      let h = parseInt(seconds / 3600);
      let m = parseInt((seconds % 3600) / 60);
      let s = seconds % 60;

      if (h > 0) {
        str += `${h}${this.$t("time.h")}`;
      }

      str += `${m}${this.$t("time.m")} ${s}${this.$t("time.s")}`;

      return str;
    },
  },
  data() {
    return {
      matchDetail: [],
    };
  },
  async beforeMount() {
    const matchDetail = await getMatchDetail(
      this.summoner.name,
      this.game.gameId
    );
    if (matchDetail) {
      this.matchDetail = matchDetail;
    }
  },
  methods: {
    routeSummonerName(summonerName) {
      this.$router.push(`/summoner/${summonerName}`).catch(() => {});
    },
    getItem(item) {
      if (!this.items.data) return false;
      return this.items.data[getNameFromFileUrl(item.imageUrl)];
    },
    getNameFromFileUrl,
    getKdaScore,
  },
};
</script>

<style lang="scss" scoped>
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
    display: table-cell;
    vertical-align: bottom;
    padding-bottom: 12px;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    position: relative;
    text-align: center;
    &__icon {
      width: 13px;
      height: 10px;
      cursor: pointer;
    }
  }

  .game-info,
  .game-stat {
    width: 70px;
    text-align: center;
    .divider {
      width: 27px;
      height: 1px;
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
        display: block;
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
      cursor: pointer;

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

    .game-stat .divider,
    .game-info .divider {
      background-color: #94b9d6;
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

    .game-stat .divider,
    .game-info .divider {
      background-color: #d0a6a5;
    }
  }
}
</style>
