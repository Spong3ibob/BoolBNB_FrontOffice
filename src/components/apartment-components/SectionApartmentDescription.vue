<template>
  <div class="row">
    <div class="col-7">
      <ApartmentMainInfo :info="apartment" />
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

  props: {
    apartment: Object,
  },
};
</script>

<style lang="scss" scoped></style>
