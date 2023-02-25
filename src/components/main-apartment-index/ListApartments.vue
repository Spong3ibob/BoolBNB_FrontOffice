<script>
import ApiCard from "./card-components/ApiCard.vue";
import { store } from "../../store";
import AppCard from "./card-components/AppCard.vue";

export default {
  components: {
    ApiCard,
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="ms-page-container d-flex flex-wrap">
    <AppCard  v-for="filteredApartment in this.store.filteredApartments" 
      class="single-apartment" 
      :data="filteredApartment" />
  </div>
</template>

<style lang="scss" scoped>
  div.ms-page-container {
    & .single-apartment {
      width: calc(100% / 4 - 24px);
      margin: 0 12px;
    }
  }
</style>
