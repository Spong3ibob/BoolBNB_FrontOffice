<template>
  <div class="container-card">
    <InfoHeader />
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components/InfoHeader.vue";

export default {
  components: {
    InfoHeader,
  },
};
</script>

<style lang="scss" scoped>
.container-card {
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}
</style>
