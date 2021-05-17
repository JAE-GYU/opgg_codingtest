<template>
  <div class="game-list">
    <template v-if="loading">
      <skeleton
        tagName="span"
        width="100%"
        height="96px"
        style="margin-top: 8px"
      />
      <skeleton
        tagName="span"
        width="100%"
        height="96px"
        style="margin-top: 8px"
      />
      <skeleton
        tagName="span"
        width="100%"
        height="96px"
        style="margin-top: 8px"
      />
      <skeleton
        tagName="span"
        width="100%"
        height="96px"
        style="margin-top: 8px"
      />
    </template>
    <template v-else>
      <game-list-item
        v-for="(item, idx) in matches.games"
        :key="idx"
        :game="item"
      ></game-list-item>
    </template>
  </div>
</template>

<script>
import GameListItem from "@/components/summoner/GameListItem";

export default {
  components: {
    GameListItem,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    matches: {
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.game-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
