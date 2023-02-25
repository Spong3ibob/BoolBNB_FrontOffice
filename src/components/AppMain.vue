<script>
import ListApartments from "./main-apartment-index/ListApartments.vue";

export default {
  name: "AppMain",
  components: {
    ListApartments,
  },
};
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.debug {
  background-color: cyan;
}
</style>
