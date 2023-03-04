<script>
import ListApartments from "../components/main-apartment-index/ListApartments.vue";
import SectionAboutUs from "../components/main-apartment-index/SectionAboutUs.vue";

export default {
  name: "HomePage",
  components: {
    SectionAboutUs,
    ListApartments,
  },
};
</script>

<template>
  <div id="index-home">
    <ListApartments />
    <SectionAboutUs />
  </div>
</template>

<style lang="scss" scoped></style>
