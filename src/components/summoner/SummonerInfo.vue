<template>
  <section id="summoner-info">
    <div class="container">
      <div class="tags__wrap">
        <template v-if="loading">
          <skeleton tagName="span" width="50px" height="22px" />
          <skeleton tagName="span" width="50px" height="22px" />
          <skeleton tagName="span" width="50px" height="22px" />
        </template>
        <template v-else>
          <span
            class="tag"
            v-for="(item, idx) in sortedpreviousTier"
            :key="idx"
          >
            <span class="season">{{ `S${item.season}` }}</span>
            <span class="rank"> {{ item.tier }}</span>
          </span>
        </template>
      </div>
      <div class="profile">
        <div class="profile-img">
          <skeleton
            tagName="span"
            width="100px"
            height="100px"
            :loading="loading"
          >
            <img
              class="profile-img__border"
              :src="summoner && summoner.profileBorderImageUrl"
              alt="profile-border"
            />
            <img
              class="profile-img__inner"
              :src="summoner && summoner.profileImageUrl"
              alt="profile-img"
            />
            <span class="badge">{{ summoner && summoner.level }}</span>
          </skeleton>
        </div>
        <div class="profile-info">
          <div class="profile-info-name">
            <skeleton
              tag-name="span"
              :loading="loading"
              width="130px"
              height="24px"
            >
              {{ summoner && summoner.name }}
            </skeleton>
          </div>
          <div class="profile-info-rank mt-4">
            <skeleton
              tag-name="span"
              :loading="loading"
              width="150px"
              height="13px"
            >
              <span
                v-html="
                  summoner &&
                  $t('label.ladderRank', {
                    rank: summoner.ladderRank.rank,
                    percentage: summoner.ladderRank.rankPercentOfTop,
                  })
                "
              >
              </span>
            </skeleton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_SUMMONER } from "@/store/actions.type";

export default {
  computed: {
    ...mapState({
      loading: (state) => state.summoner.loading,
      summoner: (state) => state.summoner.summoner,
    }),
    sortedpreviousTier() {
      return this.summoner
        ? this.summoner.previousTiers
            .slice()
            .sort((a, b) => a.season - b.season)
        : [];
    },
  },
  watch: {
    "$route.params.summonerName": {
      immediate: true,
      async handler(summonerName) {
        if (!summonerName) this.$router.push({ name: "NoSummoner" });
        await this.$store.dispatch(FETCH_SUMMONER, summonerName);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#summoner-info {
  width: 100%;
  height: 175px;
  border-bottom: 1px solid #d8d8d8;

  .container {
    padding-top: 15px;
    padding-left: 20px;
  }

  .tags__wrap {
    display: flex;
    padding-left: 12px;

    .tag + .tag,
    .skeleton + .skeleton {
      margin-left: 7px;
    }
  }

  .tag {
    display: flex;
    border-radius: 2px;
    padding: 4px 5px 3px;
    box-sizing: border-box;
    background: #e0e3e3;
    border: 1px solid #d0d3d4;

    .season,
    .rank {
      font-family: Helvetica;
      font-size: 11px;
      line-height: normal;
      color: #657070;
      white-space: pre;
    }

    .season {
      font-weight: bold;
    }
  }

  .profile {
    display: flex;
    padding-top: 6px;

    &-img {
      width: 120px;
      height: 120px;
      position: relative;
      .skeleton {
        margin: 10px;
      }
      &__inner {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
      }

      &__border {
        top: 0;
        left: 0;
        position: absolute;
      }

      .badge {
        width: 44px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url("~@/assets/images/summoner_badge.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        font-family: Helvetica;
        color: #eabd56;
      }
    }

    &-info {
      padding-top: 11px;
      padding-left: 17px;
      &-name span {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.77px;
        color: #242929;
      }

      &-rank {
        font-size: 11px;
        color: #657070;
      }
    }
  }
}
</style>
