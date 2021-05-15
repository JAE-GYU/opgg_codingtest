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
      @keydown.enter="search(searchVal)"
    />
    <button class="search-input__btn" @click="search(searchVal)">
      <img src="@/assets/images/search.png" alt="search-btn" />
    </button>

    <div class="search-input__dropdown" v-show="dropdownActive">
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
              <router-link
                :to="`/summoner/${item.summonerName}`"
                class="summoner-name"
                >{{ item.summonerName }}</router-link
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
              <router-link :to="`/summoner/${item}`" class="summoner-name">{{
                item
              }}</router-link>
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
</template>

<script>
import Tabs from "@/components/common/Tabs";
import TabPane from "@/components/common/TabPane";

import { getUnique } from "@/utils";

export default {
  components: { Tabs, TabPane },
  data() {
    return {
      searchVal: "",
      dropdownActive: false,
      searchHistory: [],
      favoriteSearchHistory: [],
    };
  },
  computed: {
    sortedFavoriteSearchHistory() {
      return this.favoriteSearchHistory.slice().sort((a, b) => a - b);
    },
  },
  watch: {
    $route() {
      this.initSearchHistory();
    },
  },
  created() {
    window.addEventListener("click", this.closeDropdown);
    this.initSearchHistory();
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeDropdown);
  },
  methods: {
    setDropdownActive(val) {
      this.dropdownActive = val;
    },
    closeDropdown() {
      this.dropdownActive = false;
    },
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

      this.$refs.searchInput.blur();
      this.dropdownActive = false;

      this.$router
        .push({
          name: "Summoner",
          params: { userName: searchVal },
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
