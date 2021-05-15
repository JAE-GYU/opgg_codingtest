<template>
  <div class="search-input">
    <input
      id="search"
      class="search-input__inner"
      type="text"
      name="search"
      :placeholder="$t('search.placeholder')"
      autocomplete="off"
    />
    <div class="search-input__btn">
      <img src="@/assets/images/search.png" alt="search-btn" />
    </div>

    <div class="search-input__dropdown">
      <tabs class="search-tab">
        <tab-pane :name="$t('search.recent')">
          <!-- <div class="no-result">
            <i class="icon icon-info"></i>
            <span class="no-result__text" v-html="$t('search.no_recent')">
            </span>
          </div> -->
          <ul class="search-list">
            <li class="search-list-item">
              <router-link to="/" class="summoner-name"
                >용인기흥구신재규</router-link
              >
              <div class="actions">
                <span class="favorite"
                  ><i class="icon icon-favorite-on"></i
                ></span>
                <span class="remove"><i class="icon icon-close"></i></span>
              </div>
            </li>
            <li class="search-list-item">
              <router-link to="/" class="summoner-name"
                >용인기흥구신재규</router-link
              >
              <div class="actions">
                <span class="favorite"
                  ><i class="icon icon-favorite-on"></i
                ></span>
                <span class="remove"><i class="icon icon-close"></i></span>
              </div>
            </li>
          </ul>
        </tab-pane>
        <tab-pane :name="$t('search.favorites')">
          <!-- <div class="no-result">
            <i class="icon icon-info"></i>
            <span class="no-result__text" v-html="$t('search.no_favorite')">
            </span>
          </div> -->
          <ul class="search-list">
            <li class="search-list-item">
              <router-link to="/" class="summoner-name"
                >용인기흥구신재규</router-link
              >
              <div class="actions">
                <span class="remove"><i class="icon icon-close"></i></span>
              </div>
            </li>
            <li class="search-list-item">
              <router-link to="/" class="summoner-name"
                >용인기흥구신재규</router-link
              >
              <div class="actions">
                <span class="remove"><i class="icon icon-close"></i></span>
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

export default {
  components: { Tabs, TabPane },
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

  .search-list {
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
