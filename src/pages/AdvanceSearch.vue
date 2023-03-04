<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from '.././components/main-apartment-index/card-components/AppCard.vue'

export default {
    data() {
        return {
            store,
            idx: '',
            apartments: '',
            services: [],
            searchFilters: {
                radiusStart: 5,
                rooms: 1,
                beds: 1,
                servicesFilter: [],
                invalid_filter: false
            },
            currentAddressCoords: {
                latitude: '',
                longitude: '',
            }
        }
        
    },
    components: {
    AppCard,
    },
    props:{
        data:Object,
    },
    methods: {
        pushServicesFilter(service){
            const serviceBox = document.getElementById(`${service.name}-${service.id}`)

            if(!this.searchFilters.servicesFilter.includes(service.name)) {
                this.searchFilters.servicesFilter.push(service.name);
                serviceBox.classList.add('service-clicked');
            } else {
                let index = this.searchFilters.servicesFilter.indexOf(service.name);
                this.searchFilters.servicesFilter.splice(index, 1);
                serviceBox.classList.remove('service-clicked');
            }
        },
        sendRequestApi() {
            const filters = this.searchFilters;
            if( filters.radiusStart < 1 || filters.radiusStart > 35 || filters.rooms < 1 || filters.rooms > 15 || filters.beds < 1 || filters.beds > 15) {
                filters.invalid_filter = true
            } else {
                filters.invalid_filter = false
            }

            if (filters.invalid_filter === false) {
                document.getElementById('submit-form-search').click();
            }
        },
        filterByRadius() {
            axios.get(`${this.store.backendUrl}/near-apartments-to/address=${this.$route.params.address}&radius=${this.searchFilters.radiusStart}&rooms=${this.searchFilters.rooms}&beds=${this.searchFilters.beds}&services${this.searchFilters.servicesFilter.length > 0 ?  `=${this.searchFilters.servicesFilter}` : ''}`)
            .then((res) => {
                this.apartments = res.data[0];
                this.updateMapInfo();
            })
            .catch((err) => {
                console.log(err);
            })
        },
        updateMapInfo() {
            // Define your product name and version.
            tt.setProductInfo('Codepen Examples', '${analytics.productVersion}');
            var map = tt.map({
                key: 'S7Di8WQbB2pqxqTH8RYmhO63cZwgtNgp',
                container: 'map',
                dragPan: !isMobileOrTablet(),
                // Longitude and Latitude
                center: [this.currentAddressCoords.longitude, this.currentAddressCoords.latitude],
                zoom: 10
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());

            function createMarker(position, color, popupText, classColor) {
                var markerElement = document.createElement('div');
                markerElement.className = 'marker';
                var markerContentElement = document.createElement('div');
                markerContentElement.className = classColor;
                markerContentElement.style.backgroundColor = color;
                markerElement.appendChild(markerContentElement);
                var iconElement = document.createElement('div');
                iconElement.className = 'marker-icon';
                iconElement.style.backgroundImage =
                    'url(https://download.tomtom.com/open/manuals/vio/html/en-gb/residentialarea.png)';
                markerContentElement.appendChild(iconElement);
                var popupOffsets = {
                    top: [0, 0],
                    bottom: [0, -50],
                    "bottom-right": [0, -50],
                    "bottom-left": [0, -50],
                    left: [25, -35],
                    right: [-25, -35],
                }
                var popup = new tt.Popup({ offset: popupOffsets }).setHTML(
                    popupText
                )
                // add marker to map
                new tt.Marker({element: markerElement, anchor: 'bottom'})
                    .setLngLat(position)
                    .setPopup(popup)
                    .addTo(map);
            }

            this.apartments.forEach(elm => {
                let is_sponsored = false;
                this.store.filteredApartments.forEach(element => {
                    if( elm.id === element.id) {
                        is_sponsored = true;
                    }
                });

                if(is_sponsored === true ) {
                    createMarker([elm.longitude, elm.latitude], '', `
                        <div class="mb-1"><b>${elm.title}</b></div>
                        <img src="${elm.image_url}" class="w-100 mb-1"></br>
                        <div class="mt-1">${elm.full_address}</div>
                        <div class="text-center">
                            <span class="me-1">${elm.rooms_num} <i class="fa-solid fa-house"></i></span>
                            <span class="ms-1">${elm.beds_num} <i class="fa-solid fa-bed fa-lg"></i></span>
                        </div>
                        <a href="http://localhost:5174/apartament/${elm.slug}" class="d-block btn btn-danger p-0 mt-2 mx-3">Visualizza appartamento</a>
                    `, 'marker-content-yellow');
                } else {
                    createMarker([elm.longitude, elm.latitude], '', `
                        <div class="mb-1"><b>${elm.title}</b></div>
                        <img src="${elm.image_url}" class="w-100 mb-1"></br>
                        <div class="mt-1">${elm.full_address}</div>
                        <div class="text-center">
                            <span class="me-1">${elm.rooms_num} <i class="fa-solid fa-house"></i></span>
                            <span class="ms-1">${elm.beds_num} <i class="fa-solid fa-bed fa-lg"></i></span>
                        </div>
                        <a href="http://localhost:5174/apartament/${elm.slug}" class="d-block btn btn-danger p-0 mt-2 mx-3">Visualizza appartamento</a>
                    `, 'marker-content-red');
                }
            });
        },
        autoScroll(action) {
            let idx;
            let nav = document.querySelector(".collections-nav");
            if (action == 'enter-left' ) {
                idx = nav.scrollLeft -= 200;
            } else if ( action == 'enter-right' ) {
                idx = nav.scrollLeft += 200;
            }
        }
    },
    created() {
        // Get all services
        axios.get(`${this.store.backendUrl}/services`)
        .then((res) => {
            this.services = res.data;
        })

        axios.get(`${this.store.backendUrl}/near-apartments-to/address=${this.$route.params.address}&radius=${this.searchFilters.radiusStart}&rooms=${this.searchFilters.rooms}&beds=${this.searchFilters.beds}&services${this.searchFilters.servicesFilter.length > 0 ?  `=${this.searchFilters.servicesFilter}` : ''}`)
        .then((res) => {
            // Save coords from the current address
            this.currentAddressCoords.latitude = res.data[1].position.lat.toString();
            this.currentAddressCoords.longitude = res.data[1].position.lon.toString();

            this.apartments = res.data[0];

            // Show map
            this.updateMapInfo();
        })
    }
}
</script>


<template>
    <div id="advance-search">
        <div class="ms-page-container mt-3">
            <div v-if="this.services.length === 0" class="my-5 pt-5 d-flex justify-content-center align-items-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>    
            </div>
            <div v-else class="ms-page-container">
                <form action="" class="py-1" @submit.prevent="this.filterByRadius()" @keypress.enter.prevent>
                    
                    <div class="row rooms-beds-container rounded-pill justify-content-around p-2 px-1 ms-1 mb-4">
                        <div class="col-md-5 col-sm-12 radius_range d-flex flex-column justify-content-center">
                            <label for="radius-range" class="form-label align-self-center w-sm-50 ">Ricerca appartamenti nel raggio di {{ this.searchFilters.radiusStart }}km | <strong class="text-capitalize">{{ this.$route.params.address }}</strong></label>
                            <input id="radius-range" class="form-range align-self-center w-sm-50 " type="range" min="1" max="35" v-model="this.searchFilters.radiusStart" step="1" required  @change="sendRequestApi()">
                        </div>
                        <div class="col-md-3 col-sm-12 rooms-number d-flex flex-column justify-content-center">
                            <label class="form-label align-self-center" for="rooms-number-input">Numero minimo di stanze*</label>
                            <input class="form-control w-25 align-self-center text-center" id="rooms-number-input" type="number" min="1" max="15" v-model="this.searchFilters.rooms" required @change="sendRequestApi()">
                        </div>
                        <div class="col-md-3 col-sm-12 beds-number d-flex flex-column justify-content-center">
                            <label class="form-label align-self-center" for="beds-number-input">Numero minimo di letti*</label>
                            <input class="form-control w-25 align-self-center text-center" id="beds-number-input" type="number" min="1" max="15" v-model="this.searchFilters.beds" required @change="sendRequestApi()">
                        </div>
                    </div>
                    <div class="all-services rounded-pill col-sm-12 p-2 px-4 mb-4">
                        <!-- <div class="service-container d-flex justify-content-between">
                            <div class="service-box d-flex flex-column align-items-center pb-1 me-3" v-for="service in this.services" :id="service.name + '-' + service.id" @click="pushServicesFilter(service), sendRequestApi()">
                                <span v-html="service.icon"></span>
                                <span>{{ service.name }}</span>
                            </div>
                        </div> -->
                        <div class="collections">
                            <ul class="collections-nav nav-tabs m-0 p-0 service-container d-flex justify-content-between">
                                <div class="service-box d-flex flex-column align-items-center justify-content-center px-3" v-for="service in this.services" :id="service.name + '-' + service.id" @click="pushServicesFilter(service), sendRequestApi()">
                                    <span v-html="service.icon"></span>
                                    <span>{{ service.name }}</span>
                                </div>
                            </ul>
                        </div>
                        <div class="arrow-container">
                            <div class="left bg-dark" @click="autoScroll('enter-left')"><i class="fa-solid fa-caret-left"></i></div>
                            <div class="right bg-dark" @click="autoScroll('enter-right')"><i class="fa-solid fa-caret-right"></i></div>
                        </div>
                    </div>
                    <button id="submit-form-search" class="d-none"></button>
                </form>
            </div>
            <div class="card-container d-flex justify-content-between">
                <div class="col-left-card m-2">
                    <div class="apartments-found">
                        Appartamenti trovati &nbsp <strong>{{ this.apartments.length }} </strong>   
                    </div>
                    <div class="apartment-search p-2" v-if="this.apartments.length !== 0">
                        <AppCard
                        v-for="apartment in this.apartments"
                        :data="apartment"
                        />
                    </div>
                    <div v-else>
                        <div class="apartment-search">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                <i class="fa-solid fa-ban fa-lg fa-fw"></i> Ci dispiace in questa zona non sono ancora presenti degli appartamenti.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-right-map pt-2">
                    <div  class="alert alert-danger error-params-search w-50 fw-bold text-center" v-if="this.searchFilters.invalid_filter === true">
                        Parametri di ricerca non validi.
                    </div>
                    <div id='map' class='map'></div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.ms-page-container{
    .rooms-beds-container {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        width: 100%;
        & .form-control {     
            height: 26px;
        }
    }
    .advanced-header {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        color: white;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid white;
    }
    .all-services{
        position: relative;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;   
        .service-container {
            overflow-x: auto;
        } 
    }
    .card-container {
        width: 100%;
        height: 610px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        margin-bottom: 15px;
        & .col-left-card {
            border-radius: 20px;
            width: 30%;
            max-height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            position: relative;
            border: 1px solid var(--red-color);
            & .apartments-found {
                position: sticky;
                top: 0;
                text-align: center;
                background-color: var(--red-color);
                color: white;
            }
        }

        & .col-right-map {
            border-radius: 20px;
            width: 65%;
            position: relative;
            & .error-params-search {
                position: absolute;
                top: 0px;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: 1000;
            }
            & .map {
                width: 100%;
                max-width: 1000px;
                height: 590px;
                border-radius: 20px;
                margin-left: -8px;
            }
        }
    }
}

.service-container {
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

/*--------------------------------
    AUTOSCROLL SERVICES
-------------------------------*/
.collections-nav {
  overflow-x: hidden;
  display: flex;
  gap: 15px;
  padding-left: 0rem;
  margin-top: 2rem;
  padding-bottom: 1.5rem;
}
.collections-nav::-webkit-scrollbar {
  height: 0px !important;
  /* width of the entire scrollbar */
}

.collections-nav::-webkit-scrollbar-track {
  background: white;
  /* color of the tracking area */
  border-radius: 10px;
}

.collections-nav::-webkit-scrollbar-thumb {
  background-color: white !important;
  /* color of the scroll thumb */
  border-radius: 10px;
}

.arrow-container {
    display: flex;
    justify-content: space-between;
    color: white !important;
    cursor: pointer;
  & .left {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
  & .right {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
  }
}
</style>