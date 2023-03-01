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
      src="https://static9.depositphotos.com/1007593/1127/i/450/depositphotos_11276642-stock-photo-luxury-place-resort.jpg"
      alt=""
    />
    <h4 class="evidence">APPARTAMENTI IN EVIDENZA</h4>
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
    background-color: var(--red-color);
    color: white;
    position: absolute;
    left: 50%;
    bottom: -29px;
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
