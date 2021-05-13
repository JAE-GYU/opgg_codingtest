<template>
  <div class="summoner__wrap">
    <summoner-info></summoner-info>

    <div class="container">
      <div class="summoner-contents">
        <section class="side">
          <summoner-rank :league="{ hasResults: true }"></summoner-rank>
          <summoner-rank :league="{ hasResults: false }"></summoner-rank>
          <summoner-most></summoner-most>
        </section>
        <section class="main">
          <summoner-match></summoner-match>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SummonerInfo from "@/components/SummonerInfo";
import SummonerRank from "@/components/SummonerRank";
import SummonerMatch from "@/components/SummonerMatch";
import SummonerMost from "@/components/SummonerMost";

export default {
  components: {
    SummonerInfo,
    SummonerRank,
    SummonerMost,
    SummonerMatch,
  },
};
</script>

<style lang="scss" scoped>
.summoner-contents {
  display: flex;
  padding-top: 10px;

  .side {
    height: 300px;
    flex-basis: 300px;
    margin-right: 10px;

    & > div + div {
      margin-top: 8px;
    }
  }

  .main {
    height: 400px;
    flex: 1 1 auto;
  }
}
</style>
