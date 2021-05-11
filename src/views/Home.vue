<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld :msg="$t('welcome')" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
