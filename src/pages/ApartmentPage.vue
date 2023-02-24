<template>
  <div class="container">
    <InfoHeader :data="store.apartments" />
    <SectionAparmentDescription :data="store.apartments" />
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components/InfoHeader.vue";
import SectionAparmentDescription from "../components/apartment-components/SectionApartmentDescription.vue";
import { store } from "../store";

export default {
  components: {
    InfoHeader,
    SectionAparmentDescription,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
