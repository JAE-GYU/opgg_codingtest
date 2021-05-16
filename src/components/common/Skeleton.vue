<template>
  <div v-if="loading" class="skeleton" :style="getStyle"></div>
  <component v-else :is="tagName" :class="className">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
    },
    className: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getStyle() {
      return {
        width: this.width ? this.width : "100%",
        height: this.height ? this.height : "100%",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.skeleton {
  display: block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #d8d8d8;
  border-radius: 2px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#f0f0f0, 0) 0,
      rgba(#f0f0f0, 0.2) 20%,
      rgba(#f0f0f0, 0.5) 60%,
      rgba(#f0f0f0, 0)
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>