<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      services: [
            'Wifi',
            'Vasca',
            'Vasca idromassaggio',
            'Spa zonarelax',
            'Cancellazione gratuita', 
            'Animali ammessi',
            'Parcheggio gratuito', 
            'Area intrattenimento bimbi',
            'TV',
            'Stanza climatizzata',
            'Servizio navetta',
            'Zona fumatori',
      ]
    }
  },
  methods: {
    searchFieldApi(){
      if(this.store.searchInput !== ''){
        axios.get(`${this.store.backendUrl}/search/apartment/${this.store.searchInput}`)
        .then((res) => {
          this.store.filteredApartments = res.data;
        })
      } else {
        this.store.filteredApartments = this.store.apartments;
      }
    }
  },
  created(){
    axios.get(`${this.store.backendUrl}/apartments`).then((res) => {
      this.store.filteredApartments = res.data;
      this.store.apartments = this.store.filteredApartments;
    });
  }
}
</script>

<template>
  <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center mb-5">
    <div class="container">
        <a href="/" class="navbar-brand d-flex w-50 me-auto"><img src="../assets/img/logoboolbnb-prova1.png" alt=""></a>
        <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100">
            <ul class="navbar-nav border rounded-pill w-100 p-2">
              <input type="search" class="form-control border-0" placeholder="Cerca un appartamento" v-model="this.store.searchInput" @keyup="this.searchFieldApi">
            </ul>
            <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link me-3" href="#">Affitta con Airbnb</a>
                </li>
                <li class="nav-item dropdown">
                  <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> Account </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Registrati</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Accedi</a></li>
                    </ul>
                  </div>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  <div class="container d-flex justify-content-center mb-4">
    <div class="">
      <ul class="d-flex list-unstyled">
        <li class="me-3" v-for="service in services"><small>{{ service }}</small></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>