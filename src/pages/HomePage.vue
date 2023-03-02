<script>
import ListApartments from "../components/main-apartment-index/ListApartments.vue";
import SectionChiSiamo from "../components/main-apartment-index/SectionChiSiamo.vue";

export default {
  name: "HomePage",
  components: {
    SectionChiSiamo,
    ListApartments,
  },
};
</script>

<template>
  <ListApartments />
  <SectionChiSiamo />
</template>

<style lang="scss" scoped></style>
