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
  <div class="hero mb-5">
    <img
      class="w-100"
      src="../../assets/img/hero.jpg"
      alt=""
    />
    <h5 class="evidence m-text-cursive">APPARTAMENTI IN EVIDENZA</h5>
  </div>
  <div
    class="ms-page-container d-flex flex-wrap mt-4 mb-5"
    v-if="this.store.filteredApartments.length !== 0"
  >
    <AppCard
      v-for="filteredApartment in this.store.filteredApartments"
      :data="filteredApartment"
    />
  </div>
  <div v-else>
    <div
      class="ms-page-container d-flex justify-content-center align-items-center flex-wrap mt-5"
    >
      <div class="alert alert-danger mt-5">
        <i class="fa-solid fa-ban fa-lg fa-fw"></i> Nessun appartamento
        sponsorizzato.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  img {
    height: 350px;
    object-fit: cover;
    object-position: center;
    border-bottom: 2px solid var(--red-color);
  }
  .evidence {
    background-color: white;
    border: 2px solid var(--red-color);
    color: var(--red-color);
    position: absolute;
    left: 50%;
    bottom: -26px;
    transform: translate(-50%, 0);
    padding: 8px 15px;
    border-radius: 18px;
  }
}
div.ms-page-container {
  & .single-apartment {
    width: calc(100% / 4 - 24px);
    margin: 0 12px;
  }
}
</style>
