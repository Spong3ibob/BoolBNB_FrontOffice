<template>
  <div class="row">
    <div class="col-7">
      <ApartmentMainInfo :info="this.data" />
    </div>
    <div class="col-5">
      <!-- <div class="sticky"> -->
        <PrenotationAside :info="this.data" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import ApartmentMainInfo from "./ApartmentMainInfo.vue";
import PrenotationAside from "./PrenotationAside.vue";

export default {
  components: {
    ApartmentMainInfo,
    PrenotationAside,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-top: 1.25rem;
}

</style>
