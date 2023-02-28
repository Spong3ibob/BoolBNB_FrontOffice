<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    }
  },
  methods: {
    prova() {
      return this.$router.push({ name: 'advance-search' });
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/sponsored-apartments')
    .then( (res) => {
      this.store.filteredApartments = res.data;
    })
  }
}
</script>

<template>
  <header>
    <!-- Header top -->
    <div class="header-container__top" :class="this.$route.name === 'apartment-page' ? 'border-transparent' : ''">
      <div class="d-flex justify-content-between align-items-center py-3" :class="this.$route.name !== 'apartment-page' ? 'ms-page-container' : 'ms-page-container-small'">
        <!-- top left -->
        <div class="h-top-left w-25 d-flex">
          <RouterLink :to="{ name: 'homepage' }" class="d-flex align-items-center text-decoration-none">
            <img src="../assets/img/logo-icon.png" alt="" style="width: 40px">
            <h3 class="mb-0 ps-1" style="">BoolBnB</h3>
          </RouterLink>
        </div >

        <!-- top Center -->
        <div class="h-top-center w-50" v-if="this.$route.name !== 'apartment-page'">
          <div class="input-container text-center rounded-pill d-flex align-items-center ">
            <div>
              <input type="search" id="search" class="rounded-pill form-control" placeholder="Cerca un appartamento" @keypress.enter="prova()">
            </div>
            <div @click="prova()">
              <i class="search-icon fa-solid fa-magnifying-glass fa-lg fa-fw"></i>
            </div>
          </div>
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
    <!-- <div class="header-container__bottom" v-if="this.$route.name === 'advanced-search-apartment'">
      <div class="ms-page-container py-3 d-flex justify-content-between">
        <div v-for="service in services" @click="filterByService(service)" :id="`${service.name}-${service.id}`" class="service-box text-muted py-1 d-flex flex-column align-items-center justify-content-between">
          <div class="fa-lg fa-fw mb-1" v-html="service.icon"></div>
          <div class="service-name" >
              <small>{{ service.name }}</small>
          </div>
        </div>
      </div>
    </div> -->
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
        & .input-container {
          background-color: transparent;
          width: 100%;
          max-width: 550px;
          margin: auto;
          border: 1px solid #ced4da;
          &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
          }
        }
        & input {
          width: 510px;
          padding: 12px 20px;
          border: none;
          &:focus {
            box-shadow: none;
          }
        }
        & .search-icon {
          cursor: pointer;
          color: var(--red-color);
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
    .service-clicked {
      color: black !important;
      border-color: black !important;
    }
  }

  .border-transparent {
    border-color: transparent !important;
  }
</style>