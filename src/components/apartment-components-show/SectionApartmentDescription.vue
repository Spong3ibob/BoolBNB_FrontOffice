<template>
  <div class="row">
    <div class="col-lg-7 col-md-8 col-xs-12">
      <ApartmentMainInfo :info="this.data" />
    </div>
    <div class="col-lg-5 col-md-4 col-xs-12">
      <!-- <div class="sticky"> -->
        <PrenotationAside class="mx-xs-auto" :info="this.data" />
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
