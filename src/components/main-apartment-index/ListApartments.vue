<script>
import { store } from "../../store";
import AppCard from "./card-components/AppCard.vue";

export default {
  components: {
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
  <div class="ms-page-container d-flex flex-wrap mt-4 mb-5" v-if="this.store.filteredApartments.length !== 0">
    <AppCard
      v-for="filteredApartment in this.store.filteredApartments"
      :data="filteredApartment"
    />
  </div>
  <div v-else>
    <div class="ms-page-container d-flex justify-content-center align-items-center flex-wrap mt-5">
      <div class="alert alert-danger mt-5">
        <i class="fa-solid fa-ban fa-lg fa-fw"></i> Nessun appartamento trovato.
      </div>
    </div>
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
