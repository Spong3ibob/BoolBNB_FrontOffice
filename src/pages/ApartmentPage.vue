<template>
  <div class="container">
    <InfoHeader />
    <SectionAparmentDescription />
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components/InfoHeader.vue";
import SectionAparmentDescription from "../components/apartment-components/SectionApartmentDescription.vue";

export default {
  components: {
    InfoHeader,
    SectionAparmentDescription,
  },
};
</script>

<style lang="scss" scoped></style>
