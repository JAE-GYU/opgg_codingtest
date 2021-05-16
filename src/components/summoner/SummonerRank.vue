<template>
  <skeleton
    tagName="div"
    className="summoner-rank"
    height="124px"
    :class="{ unranked: !league.hasResults }"
    :loading="false"
  >
    <div class="d-flex" v-if="league.hasResults">
      <img
        class="summoner-rank-img"
        src="https://opgg-static.akamaized.net/images/medals/platinum_1.png"
        alt="rank-img"
      />
      <div class="summoner-rank-info">
        <span class="rank-type">솔로 랭크</span>
        <span class="most-position mt-4">탑 (총 27게임)</span>
        <span class="tier mt-4">Platinum 1</span>
        <span class="lp mt-6"><b>80 LP</b> / 28승 30패</span>
        <span class="ratio mt-3">승률 51%</span>
      </div>
    </div>
    <template class="d-flex" v-else>
      <img
        class="summoner-rank-img"
        src="@/assets/images/unranked.png"
        alt="unrank-img"
      />
      <div class="summoner-rank-info">
        <span class="rank-type">자유 5:5 랭크</span>
        <span class="unranked mt-2">Unranked</span>
      </div>
    </template>
  </skeleton>
</template>

<script>
export default {
  props: {
    league: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.summoner-rank {
  width: 100%;
  height: 124px;
  display: flex;
  padding: 10px 8px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  box-sizing: border-box;
  background: #f2f2f2;

  &-img {
    width: 104px;
    width: 104px;
  }

  &-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 8px;

    .unranked {
      font-family: Helvetica;
      font-weight: bold;
      font-size: 13px;
      color: #879292;
    }

    .rank-type {
      font-size: 11px;
      color: #879292;
    }

    .most-position {
      font-size: 12px;
      color: #353a3a;
    }

    .tier {
      font-family: Helvetica;
      font-size: 15px;
      font-weight: bold;
      color: #1f8ecd;
    }

    .lp {
      font-family: Helvetica;
      font-family: 12px;
      color: #879292;

      b {
        color: #555e5e;
      }
    }

    .ratio {
      font-family: Helvetica;
      font-size: 12px;
      color: #879292;
    }
  }

  &.unranked {
    width: 100%;
    height: 98px;
    padding-top: 17px;
    padding-left: 28px;
    .summoner-rank-img {
      width: 64px;
      height: 64px;
    }

    .summoner-rank-info {
      display: flex;
      justify-content: center;
      margin-left: 28px;
    }
  }
}
</style>
