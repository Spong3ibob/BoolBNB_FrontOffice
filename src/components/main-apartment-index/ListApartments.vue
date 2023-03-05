<script>
import { store } from "../../store";
import AppCard from "./card-components/AppCard.vue";
import axios from "axios";

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getPaginationResults(pageNumber) {
      axios.get(`${this.store.backendUrl}/sponsored-apartments/?page=${pageNumber}`)
      .then( (res) => {
        this.store.filteredApartments = res.data.data;
        
        // Store pagination info
        this.store.currentPage = res.data.current_page;
        this.store.lastPage = res.data.last_page;

        // scroll page when clicked 
        window.scroll({
          top: 250,
          left: 0,
          behavior: 'smooth'
        })
      });
    }
  }
};
</script>

<template>
  <!-- Hero Top -->
  <div class="hero mb-5">
    <img class="w-100" src="../../assets/img/hero.jpg" alt="" />
    <h4 class="evidence m-text-cursive">APPARTAMENTI IN EVIDENZA</h4>
  </div>

  <!-- Sponsors apartments -->
  <div class="ms-page-container " v-if="this.store.filteredApartments.length !== 0">
    <div class="grid">
      <AppCard v-for="filteredApartment in this.store.filteredApartments" :data="filteredApartment"/>
    </div>
    
    <!-- Sponsors pagination -->
    <nav aria-label="Page navigation example" class="page-navigation d-flex justify-content-center">
      <ul class="pagination mb-5">

        <!-- Prev button -->
        <li class="page-item">
          <button class="page-link text-dark" :class="this.store.currentPage === this.store.firstPage ? 'disabled gray-disabled' : ''" @click="getPaginationResults(this.store.currentPage - 1)">Precedente</button>
        </li>
        
        <!-- Single numeric buttons -->
        <li class="page-item" :class="this.store.currentPage === numberPage ? 'disabled' : ''" v-for="numberPage in this.store.lastPage">
          <button class="page-link text-dark" :class="this.store.currentPage === numberPage ? 'red-pagination' : ''" @click="getPaginationResults(numberPage)">{{ numberPage }}</button>
        </li>

        <!-- Next button -->
        <li class="page-item">
          <button class="page-link text-dark" :class="this.store.currentPage === this.store.lastPage ? 'disabled gray-disabled' : ''" @click="getPaginationResults(this.store.currentPage + 1)">Successiva</button>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else>
    <div class="ms-page-container d-flex justify-content-center align-items-center flex-wrap mt-5">
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
    bottom: -30px;
    transform: translate(-50%, 0);
    padding: 8px 15px;
    border-radius: 18px;
    text-align: center;
  }
}
div.ms-page-container {
  .grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }
  & .single-apartment {
    // width: calc(100% / 4 - 24px);
    margin: 0 12px;
    // margin-top: 0;
    // width: 100%;


  }
}

.page-navigation {
  & button {
    border-color: var(--red-color) !important;
  }
  & button:focus {
    box-shadow: none;
  }
  .red-pagination {
    background-color: var(--red-color) !important;
    color: white !important;
  }
  .gray-disabled {
    background-color: rgba(211, 211, 211, 0.3) !important;
  }
}
</style>
