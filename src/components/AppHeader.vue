<script>
import axios from 'axios';
import { store } from '../store';

export default {
  name: "AppHeader",
  data() {
    return {
      store,
      searchField: 'cas',
      is_invalid: false
    }
  },
  methods: {
    advanceSearchApartments() {
      if( this.searchField !== '' ) {
        return this.$router.push({ name: 'advance-search', params: { address: this.searchField}});
      } else {
        this.is_invalid = true;
      }
    }
  },
  mounted() {
    var options = {
      searchOptions: {
          key: "S7Di8WQbB2pqxqTH8RYmhO63cZwgtNgp",
          language: "it-IT",
          limit: 5,
      },
      autocompleteOptions: {
          key: "S7Di8WQbB2pqxqTH8RYmhO63cZwgtNgp",
          language: "it-IT",
      },
    }
    var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
    var searchBoxHTML = ttSearchBox.getSearchBoxHTML();

    const inputContainer = document.getElementById('input-search');
    inputContainer.append(searchBoxHTML);

    const searchBox = document.querySelector('.tt-search-box');
    searchBox.classList.add('m-0');

    const searchBoxInput = document.querySelector('.tt-search-box-input');
    searchBoxInput.placeholder = "Cerca un appartamento"

    const searchBoxInputContainer = document.querySelector('.tt-search-box-input-container');
    searchBoxInputContainer.classList.add('rounded-pill');

    const searchBoxResultListContainer = document.querySelector('.tt-search-box-result-list-container');
    searchBoxResultListContainer.classList.add('mt-1' ,'rounded');
    

    searchBoxInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter' && searchBoxInput.value !== '') {
        window.location.href = `/advance/search-apartments/${searchBoxInput.value}`
      }
    })
  },
  created() {
    axios.get(`${this.store.backendUrl}/sponsored-apartments`)
    .then( (res) => {
      this.store.filteredApartments = res.data.data;
      
      // Store pagination info
      this.store.currentPage = res.data.current_page;
      this.store.lastPage = res.data.last_page;
    });
  }
}
</script>

<template>
  <header>
    <!-- Header top -->
    <div class="header-container__top " :class="this.$route.name === 'apartment-page' ? 'border-transparent' : ''">
      <div class="d-flex justify-content-between align-items-center py-3" :class="this.$route.name !== 'apartment-page' ? 'ms-page-container' : 'ms-page-container-small'">
        <!-- top left -->
        <div class="h-top-left w-25 d-flex">
          <RouterLink :to="{ name: 'homepage' }" class="d-flex align-items-center text-decoration-none">
            <img src="../assets/img/logo-icon.png" alt="" style="width: 40px">
            <h2 class="mb-0 ps-1 m-text-cursive d-none d-md-inline">BoolBnB</h2>
          </RouterLink>
        </div >

        <!-- top Center -->
        <div class="h-top-center w-50" id="input-search">
        </div>

        <!-- top Right -->
        <div class="h-top-right d-flex justify-content-end align-items-center w-25">
          <a class="rent rounded-pill py-2 px-3 ms-3 fw-semibold text-decoration-none text-dark d-none d-lg-inline" href="" @click.prevent="this.$router.push({ name: 'advance-search', params: { address: 'Italia'}})">Affitta con BoolBnB</a>

          <!-- Menu -->
          <div class="btn-group rounded-pill ms-3">
            <div class="d-flex align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-bars me-1"></i>
              <img class="rounded-pill ms-2" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3" alt="" style="width: 30px; height: 30px;">
            </div>
            <ul class="dropdown-menu dropdown-menu-end mt-2">
              <li><a :href="this.store.backendRegisterUrl" class="dropdown-item">Registrati</a></li>
              <li><a :href="this.store.backendLoginUrl" class="dropdown-item">Accedi</a></li>
              <li><a href="" @click.prevent="this.$router.push({ name: 'advance-search', params: { address: 'Italia'}})" class="dropdown-item d-block d-lg-none">Affitta con BoolBnB</a></li>
            </ul>
          </div>
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
              & h2 {
                  display: inline-block;
                  color: var(--red-color);
                }
            }
            & .h-top-center{
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