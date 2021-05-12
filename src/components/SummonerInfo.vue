<template>
  <section id="summoner-info">
    <div class="container">
      <div class="tags__wrap">
        <span class="tag">
          <span class="season">S3</span>
          <span class="rank"> Bronze</span>
        </span>
        <span class="tag">
          <span class="season">S4</span>
          <span class="rank"> Silver</span>
        </span>
        <span class="tag">
          <span class="season">S5</span>
          <span class="rank"> Gold</span>
        </span>
      </div>
      <div class="profile">
        <div class="profile-img">
          <img
            class="profile-img__border"
            src="https://opgg-static.akamaized.net/images/borders2/challenger.png"
            alt="profile-border"
          />
          <img
            class="profile-img__inner"
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg"
            alt="profile-img"
          />
          <span class="badge">32</span>
        </div>
        <div class="profile-info">
          <div class="profile-info-name">플레이어아이디</div>
          <div class="profile-info-rank">레더 랭킹 363,499위 (상위 40.7%)</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#summoner-info {
  width: 100%;
  height: 175px;
  border-bottom: 1px solid #d8d8d8;

  .container {
    margin: 0 auto;
    padding-top: 15px;
    padding-left: 20px;
  }

  .tags__wrap {
    display: flex;
    padding-left: 12px;
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

  .tag + .tag {
    margin-left: 7px;
  }

  .profile {
    display: flex;
    padding-top: 6px;
    &-img {
      width: 120px;
      height: 120px;
      position: relative;
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
      &-name {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: -0.77px;
        color: #242929;
      }

      &-rank {
        margin-top: 4px;
        font-size: 11px;
        color: #657070;
      }
    }
  }
}
</style>
