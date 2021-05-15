<template>
  <div class="tabs">
    <div class="tab__header">
      <div
        v-for="(tab, idx) in tabs"
        :key="`tab-${idx}`"
        @click="selectTab(idx)"
        class="tab__header-item"
        :class="{ active: selectedIdx === idx }"
      >
        <span>{{ tab.name }}</span>
      </div>
    </div>
    <div class="tab__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "card",
    },
  },
  data() {
    return {
      tabs: [],
      selectedIdx: 0,
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIdx = i;

      this.tabs.forEach((tab, idx) => {
        tab.isActive = idx === i;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  .tab__header {
    display: flex;
    &-item {
      height: 44px;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #cdd2d2;
      border-bottom: 1px solid #cdd2d2;
      box-sizing: border-box;
      background: #f2f2f2;
      cursor: pointer;

      &:first-of-type {
        border-left: none;
      }

      &:hover span {
        color: #5e5e5e;
      }

      &.active {
        background: #ededed;
        border-bottom-color: transparent;
        span {
          font-weight: bold;
          color: #5e5e5e;
        }
      }

      span {
        font-size: 12px;
        color: #879292;
      }
    }
  }
}
</style>