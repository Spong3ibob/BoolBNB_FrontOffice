<template>
  <div class="row">
    <div class="col-7">
      <ApartmentMainInfo />
    </div>
    <div class="col-3">2</div>
  </div>
</template>

<script>
import ApartmentMainInfo from "./ApartmentMainInfo.vue";

export default {
  components: {
    ApartmentMainInfo,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
