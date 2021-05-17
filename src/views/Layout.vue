<template>
  <div class="layout-container">
    <site-header></site-header>
    <router-view />
  </div>
</template>

<script>
import SiteHeader from "@/components/layout/SiteHeader";

export default {
  components: {
    SiteHeader,
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  overflow-x: hidden;
}
</style>
