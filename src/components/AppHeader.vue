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
    },
    filterWithService(){
        //this.store.servicesFilter = this.service.name;
        console.log(this.name);
        // axios.get(`${this.store.backendUrl}/search/apartment/${this.store.services}`)
        // .then((res) => {
        //   this.store.filteredApartments = res.data;
        // })
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
        <div class="h-top-left w-25 d-flex">
          <RouterLink :to="{ name: 'homepage' }" class="d-flex align-items-center text-decoration-none">
            <img src="../assets/img/logo-icon.png" alt="" style="width: 40px">
            <h3 class="mb-0 ps-1" style="">BoolBnB</h3>
          </RouterLink>
        </div >

        <!-- top Center -->
        <div class="h-top-center w-50" v-if="this.$route.name !== 'apartment-page'">
          <input type="search" class="m-auto form-control rounded-pill" placeholder="Cerca un appartamento" v-model="this.store.searchInput" @keyup="this.searchFieldApi">
        </div>

        <!-- top Right -->
        <div class="h-top-right d-flex justify-content-end align-items-center w-25">
          <a class="rent rounded-pill py-2 px-3 ms-3 fw-semibold text-decoration-none text-dark" href="#">Affitta con BoolBnB</a>

          <!-- Menu -->
          <div class="btn-group rounded-pill ms-3">
            <div class="d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-bars me-1"></i>
              <img class="rounded-pill ms-2" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="" style="width: 30px; height: 30px;">
            </div>
            <ul class="dropdown-menu dropdown-menu-end mt-2">
              <li><a :href="this.store.backendRegisterUrl" class="dropdown-item">Registrati</a></li>
              <li><a :href="this.store.backendLoginUrl" class="dropdown-item">Accedi</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Header bottom services -->
    <div class="header-container__bottom" v-if="this.$route.name !== 'apartment-page'">
      <div class="ms-page-container py-3 d-flex justify-content-between">
        <div v-for="service in services" class="service-box text-muted py-1 d-flex flex-column align-items-center justify-content-between">
          <div class="fa-lg fa-fw mb-1" v-html="service.icon" @click="filterWithService()"></div>
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
        & .rent {
          &:hover {
            background-color: rgba(0,0,0,.05);
          }
        }
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
    & .header-container__bottom {
      .service-box {
        border-bottom: 3px solid transparent;
        cursor: pointer;
        &:hover {
          border-color: rgba(0,0,0,0.18);
          color: black !important;
        }
      }
    }
  }
</style>