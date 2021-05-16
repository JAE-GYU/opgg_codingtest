<template>
  <div class="search-input" @click.prevent.stop>
    <input
      id="search"
      class="search-input__inner"
      type="text"
      name="search"
      autocomplete="off"
      ref="searchInput"
      v-model="searchVal"
      :placeholder="$t('search.placeholder')"
      @focus="setDropdownActive(true)"
      @input="handleInput"
      @keydown.enter="search(searchVal)"
      @keydown.up="handleArrowUpKey"
      @keydown.down="handleArrowDownKey"
    />
    <button class="search-input__btn" @click="search(searchVal)">
      <img src="@/assets/images/search.png" alt="search-btn" />
    </button>

    <div class="search-input__dropdown" v-show="dropdownActive">
      <div class="autocomplete__wrap" v-if="showAutocomplete">
        <ul class="autocomplete">
          <li
            v-for="(item, idx) in autocompleteList"
            :key="idx"
            :class="{ active: currentHoverItem === idx }"
            class="autocomplete-item"
            @mouseover="currentHoverItem = idx"
            @mouseleave="currentHoverItem = -1"
            @click="routeSummonerName(item.name)"
          >
            <img
              class="summoner-img"
              :src="item.profileImageUrl"
              :alt="'profile-img-' + item.name"
            />
            <div class="summoner-info">
              <div class="summoner-name">{{ item.name }}</div>
              <div class="tier">{{ item.tier }}</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="history" v-else>
        <tabs class="search-tab">
          <tab-pane :name="$t('search.recent')">
            <div class="no-result" v-if="searchHistory.length <= 0">
              <i class="icon icon-info"></i>
              <span class="no-result__text" v-html="$t('search.no_recent')">
              </span>
            </div>
            <ul class="search-history" v-else>
              <li
                class="search-history-item"
                v-for="(item, idx) in searchHistory"
                :key="idx"
              >
                <span
                  @click="routeSummonerName(item.summonerName)"
                  class="summoner-name"
                  >{{ item.summonerName }}</span
                >
                <div class="actions">
                  <span class="favorite" @click="setFavorite(item)">
                    <i v-if="item.favorite" class="icon icon-favorite-on"></i>
                    <i v-else class="icon icon-favorite-off"></i>
                  </span>
                  <span
                    class="remove"
                    @click="deleteSearchHistory(item.summonerName)"
                    ><i class="icon icon-close"></i
                  ></span>
                </div>
              </li>
            </ul>
          </tab-pane>
          <tab-pane :name="$t('search.favorites')">
            <div class="no-result" v-if="favoriteSearchHistory.length <= 0">
              <i class="icon icon-info"></i>
              <span class="no-result__text" v-html="$t('search.no_favorite')">
              </span>
            </div>
            <ul class="search-history" v-else>
              <li
                class="search-history-item"
                v-for="(item, idx) in sortedFavoriteSearchHistory"
                :key="idx"
              >
                <span @click="routeSummonerName(item)" class="summoner-name">{{
                  item
                }}</span>
                <div class="actions">
                  <span @click="deleteFavorite(item)" class="remove"
                    ><i class="icon icon-close"></i
                  ></span>
                </div>
              </li>
            </ul>
          </tab-pane>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

import { getSummoner } from "@/api";
import { getUnique, getDivisionTierNum } from "@/utils";

import Tabs from "@/components/common/Tabs";
import TabPane from "@/components/common/TabPane";

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      searchVal: "",
      dropdownActive: false,
      lastSearchVal: "",
      currentHoverItem: -1,
      autocompleteList: [],
      searchHistory: [],
      favoriteSearchHistory: [],
    };
  },
  computed: {
    showAutocomplete() {
      return (
        this.dropdownActive &&
        this.searchVal &&
        this.autocompleteList &&
        this.autocompleteList.length > 0
      );
    },
    sortedFavoriteSearchHistory() {
      return this.favoriteSearchHistory.slice().sort();
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.initSearchHistory();
      },
    },
  },
  created() {
    window.addEventListener("click", this.closeDropdown);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
  },
  methods: {
    routeSummonerName(summonerName) {
      this.currentHoverItem = -1;
      this.$router.push(`/summoner/${summonerName}`).catch(() => {});
      this.closeDropdown();
    },
    setDropdownActive(val) {
      this.dropdownActive = val;
    },
    closeDropdown() {
      this.$refs.searchInput.blur();
      this.dropdownActive = false;
    },
    getTierRankString(summoner) {
      const hasTier = summoner.leagues.find((x) => x.hasResults);

      if (hasTier) {
        return `${getDivisionTierNum(hasTier.tierRank)} - ${
          hasTier.tierRank.lp
        }LP`;
      }

      return `LEVEL ${summoner.level}`;
    },
    handleArrowUpKey(e) {
      e.preventDefault();
      if (!this.showAutocomplete) return false;
      if (this.currentHoverItem != 0 && this.currentHoverItem != -1) {
        this.currentHoverItem -= 1;
        this.searchVal = this.autocompleteList[this.currentHoverItem].name;
      }

      return false;
    },
    handleArrowDownKey(e) {
      e.preventDefault();
      if (!this.showAutocomplete) return false;
      if (this.currentHoverItem == -1) {
        this.currentHoverItem = 0;
        return false;
      }

      if (this.currentHoverItem + 1 < this.autocompleteList.length) {
        this.currentHoverItem += 1;
        this.searchVal = this.autocompleteList[this.currentHoverItem].name;
      }

      return false;
    },
    handleInput: _.debounce(async function (e) {
      const val = e.target.value.replace(/ /g, "");
      // 한글 자음 모음 단일로 입력했을 경우 처리
      if (val && !this.searchVal) this.searchVal = val;
      if (
        ((e.inputType !== "deleteContentBackward" ||
          e.inputType !== "deleteContentForward") &&
          val === this.lastSearchVal) ||
        !val
      ) {
        this.currentHoverItem = -1;
        return false;
      }
      this.lastSearchVal = val;

      const res = await getSummoner(val);
      if (res.summoner) {
        this.autocompleteList = [
          {
            ...res.summoner,
          },
        ].map((x) => ({
          profileImageUrl: x.profileImageUrl,
          name: x.name,
          tier: this.getTierRankString(x),
        }));
      }
    }, 200),
    getLocalStorageObject(key) {
      try {
        const obj = JSON.parse(localStorage.getItem(key)) || [];
        return obj;
      } catch {
        return [];
      }
    },
    initSearchHistory() {
      this.searchHistory = getUnique(
        this.getLocalStorageObject("searchHistory"),
        "summonerName"
      );

      // searchHistory에 즐겨찾기 항목이 있지만 favoriteSearchHistory가 로컬스토리지에 없을 경우도 고려해서 추가
      this.favoriteSearchHistory = [
        ...new Set([
          ...this.getLocalStorageObject("favoriteSearchHistory"),
          ...this.searchHistory
            .filter((x) => x.favorite)
            .map((x) => x.summonerName),
        ]),
      ];

      this.setCurrentSearchHistory();
    },
    setCurrentSearchHistory() {
      localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
      localStorage.setItem(
        "favoriteSearchHistory",
        JSON.stringify(this.favoriteSearchHistory)
      );
    },
    addSearchHistory(summonerName) {
      if (!summonerName) return false;
      let searchHistory = this.getLocalStorageObject("searchHistory");
      let existItem = searchHistory.find(
        (x) => x.summonerName === summonerName
      );
      let favorite = existItem ? existItem.favorite : false;

      if (existItem) {
        searchHistory = searchHistory.filter(
          (x) => x.summonerName !== summonerName
        );
      }

      searchHistory = [
        {
          summonerName,
          favorite,
        },
        ...searchHistory,
      ].splice(0, 9);

      this.searchHistory = searchHistory;
      this.setCurrentSearchHistory();
    },
    deleteSearchHistory(summonerName) {
      const searchHistory = this.getLocalStorageObject("searchHistory").filter(
        (x) => x.summonerName !== summonerName
      );

      this.searchHistory = searchHistory;
      this.setCurrentSearchHistory();
    },
    setFavorite(item) {
      this.searchHistory.find(
        (x) => x.summonerName === item.summonerName
      ).favorite = !item.favorite;

      if (item.favorite) {
        this.favoriteSearchHistory.push(item.summonerName);
      } else {
        this.favoriteSearchHistory = this.favoriteSearchHistory.filter(
          (x) => x !== item.summonerName
        );
      }

      this.setCurrentSearchHistory();
    },
    deleteFavorite(summonerName) {
      this.favoriteSearchHistory = this.favoriteSearchHistory.filter(
        (x) => x !== summonerName
      );

      const findHistory = this.searchHistory.find(
        (x) => x.summonerName === summonerName
      );
      if (findHistory) {
        findHistory.favorite = false;
      }

      this.setCurrentSearchHistory();
    },
    search(searchVal) {
      this.addSearchHistory(searchVal);

      this.closeDropdown();

      this.$router
        .push({
          name: "Summoner",
          params: { summonerName: searchVal },
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  width: 268px;
  height: 32px;
  padding: 9px 12px 9px 14px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  border-radius: 2px;
  background: #fff;
  &__inner {
    width: 100%;
    padding: 0;
    color: #727272;
    font-size: 12px;
    border: none;
    background: none;
    outline: none;
    &::placeholder {
      color: #727272;
    }
  }

  &__btn {
    width: 30px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    img {
      width: 100%;
    }
  }

  &__dropdown {
    width: 100%;
    position: absolute;
    top: 36px;
    left: 0;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  }

  .autocomplete {
    list-style: none;
    &__wrap {
      padding-top: 10px;
      background-color: #fff;
    }
    .autocomplete-item {
      display: flex;
      padding: 7px 17px;
      box-sizing: border-box;
      cursor: pointer;

      &.active {
        background-color: #e8f5fb;
      }

      .summoner-img {
        width: 36px;
        height: 36px;
        margin-right: 14px;
        border-radius: 50%;
      }

      .summoner-info {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;

        .summoner-name {
          font-size: 14px;
          color: #333;
        }

        .tier {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }

  .search-history {
    list-style: none;
    padding: 5px 20px 20px 20px;
    box-sizing: border-box;
    &-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .summoner-name {
        font-size: 12px;
        color: #666;
        text-decoration: none;
        cursor: pointer;
      }

      .actions {
        display: flex;
        margin-left: auto;
      }

      .favorite,
      .remove {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .favorite {
        margin-right: 10px;
      }
    }
  }

  .no-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;

    &__text {
      width: 100%;
      font-size: 12px;
      color: #666;
      align-items: center;
    }

    .icon-info {
      margin-bottom: 16px;
    }
  }
}
</style>
