<template>
  <div class="summoner__wrap">
    <summoner-info></summoner-info>

    <div class="container">
      <div class="summoner-contents">
        <section class="side">
          <summoner-rank :league="{ hasResults: true }"></summoner-rank>
          <summoner-rank :league="{ hasResults: false }"></summoner-rank>
        </section>
        <section class="main"></section>
      </div>
    </div>
  </div>
</template>

<script>
import SummonerInfo from "@/components/SummonerInfo";
import SummonerRank from "@/components/SummonerRank";

export default {
  components: {
    SummonerInfo,
    SummonerRank,
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
  }

  .main {
    height: 400px;
    flex: 1 1 auto;
    background: #faa;
  }
}
</style>
