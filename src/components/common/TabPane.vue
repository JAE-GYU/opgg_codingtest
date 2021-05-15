<template>
  <div class="tab-pane" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-pane {
  background-color: #ededed;
}
</style>
