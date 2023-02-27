<template>
  <div class="row">
    <div class="col-7">
      <ApartmentMainInfo :info="this.data" />
    </div>
    <div class="col-3">
      <PrenotationAsaid :info="this.data"/>
    </div>
  </div>
</template>

<script>
import ApartmentMainInfo from "./ApartmentMainInfo.vue";
import PrenotationAsaid from "./PrenotationAsaid.vue";

export default {
  components: {
    ApartmentMainInfo,
    PrenotationAsaid,
},
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped></style>
