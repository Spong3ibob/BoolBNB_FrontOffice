<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      services: [],
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
    // Get all apartments
    axios.get(`${this.store.backendUrl}/apartments`).then((res) => {
      this.store.filteredApartments = res.data;
      this.store.apartments = this.store.filteredApartments;
    });

    // Get all services
    axios.get(`${this.store.backendUrl}/services`).then((res) => {
      this.services = res.data;
    });
  }
}
</script>

<template>
  <header>
    <!-- Header top -->
    <div class="header-container__top">
      <div class="ms-page-container d-flex justify-content-between align-items-center py-3">
        <!-- top left -->
        <div class="h-top-left d-flex align-items-center w-25">
          <img src="../assets/img/logo-icon.png" alt="" style="width: 40px">
          <h3 class="mb-0 ps-1">Boolbnb</h3>
        </div>

        <!-- top Center -->
        <div class="h-top-center w-50">
          <input type="search" class="m-auto form-control rounded-pill" placeholder="Cerca un appartamento" v-model="this.store.searchInput" @keyup="this.searchFieldApi">
        </div>

        <!-- top Right -->
        <div class="h-top-right w-25 d-flex justify-content-end align-items-center ">
          <a class="ms-3 fw-semibold text-decoration-none text-dark" href="#">Affitta con BoolBnB</a>

          <!-- Menu -->
          <div class="btn-group rounded-pill ms-3">
            <div class="d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-bars me-1"></i>
              <img class="rounded-pill ms-2" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="" style="width: 30px; height: 30px;">
            </div>
            <ul class="dropdown-menu dropdown-menu-end mt-2">
              <li><button class="dropdown-item" type="button">Registrati</button></li>
              <li><button class="dropdown-item" type="button">Accedi</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Header bottom services -->
    <div class="header-container__bottom">
      <div class="ms-page-container py-4 d-flex justify-content-between">
        <div v-for="service in services" class="d-flex flex-column align-items-center justify-content-between">
          <div class="fa-lg fa-fw mb-2" v-html="service.icon"></div>
          <small>{{ service.name }}</small>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    position: sticky;
      top: 0;
      left: 0;
      right: 0;
      background-color: white;
      z-index: 10;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    & .header-container__top {
      border-bottom: 1.8px solid #ebebeb;
      & .h-top-left {
        & h3 {
          display: inline-block;
          color: var(--red-color);
        }
      }
      & .h-top-center{
        & input {
          width: 500px;
          padding: 12px 25px;
          &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
          }
        }
      }
      & .h-top-right {
        & .btn-group {
          border: 1px solid #ced4da;
          & div {
            padding: 7px 13px;
          }
          &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
          }
        }
      }
    }
  }
</style>