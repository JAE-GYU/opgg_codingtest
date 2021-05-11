<template>
  <div class="hello">
    {{ summoner }}
  </div>
</template>

<script>
import { getSummoner } from "@/api";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      summoner: null,
    };
  },
  mounted() {
    getSummoner("Hide on bush").then((res) => {
      this.summoner = res;
    });
  },
};
</script>

<style scoped lang="scss"></style>
