<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from '.././components/main-apartment-index/card-components/AppCard.vue'

export default {
    data() {
        return {
            store,
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
            if(!this.searchFilters.servicesFilter.includes(service)) {
                this.searchFilters.servicesFilter.push(service);
            } else {
                let index = this.searchFilters.servicesFilter.indexOf(service);
                this.searchFilters.servicesFilter.splice(index, 1);
            }
        },
        sendRequestApi() {
            const filters = this.searchFilters;
            if( filters.radiusStart < 1 || filters.radiusStart > 35|| filters.rooms < 1 || filters.rooms > 15 || filters.beds < 1 || filters.beds > 15) {
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
    <div class="ms-page-container mt-3">
        <div v-if="this.services.length === 0" class="my-5 pt-5 d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>    
        </div>
        <div v-else class="ms-page-container">

                <form action="" class="py-1" @submit.prevent="this.filterByRadius()" @keypress.enter.prevent>
                    
                    <div class="row rooms-beds-container p-3">
                        <div class=" col-4 radius_range">
                            <label for="radius-range" class="form-label">Ricerca appartamenti a <strong class="text-capitalize">{{ this.$route.params.address }}</strong> nel raggio di {{ this.searchFilters.radiusStart }}km</label>
                            <input id="radius-range" class="form-range" type="range" min="1" max="35" v-model="this.searchFilters.radiusStart" step="1" required  @change="sendRequestApi()">
                        </div>
                        <div class="col-4 rooms-number">
                            <label class="form-label" for="rooms-number-input">Numero minimo di stanze*</label>
                            <input class="form-control" id="rooms-number-input" type="number" min="1" max="15" v-model="this.searchFilters.rooms" required @change="sendRequestApi()">
                        </div>
                        <div class="col-4 beds-number">
                            <label class="form-label" for="beds-number-input">Numero minimo di letti*</label>
                            <input class="form-control" id="beds-number-input" type="number" min="1" max="15" v-model="this.searchFilters.beds" required @change="sendRequestApi()">
                        </div>
                    </div>
                    <div class="all-services">
                        <div class="container-service d-flex flex-row justify-content-center align-items-center">
                            <div class="service p-3" v-for="service in this.services">
                                <div class=" d-flex flex-column justify-content-center align-items-center" @click="pushServicesFilter(service.name), sendRequestApi()">
                                    <div class="form-check-icon d-flex flex-column justify-content-center align-items-center"  v-html="service.icon" :id="service.name + '-' + service.id"></div>
                                    <div class="form-check-label d-flex flex-column justify-content-center align-items-center" :for="service.name + '-' + service.id">
                                        {{ service.name }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button id="submit-form-search" class="d-none"></button>
                    <div class="d-flex justify-content-center">
                        Appartamenti trovati &nbsp <strong>{{ this.apartments.length }} </strong>   
                    </div>
                </form>
        </div>
        <div class="card-container d-flex justify-content-center">
            <div class="col-left-card">
                <div
                class="apartment-search"
                v-if="this.apartments.length !== 0"
                >
                    <AppCard
                    v-for="apartment in this.apartments"
                    :data="apartment"
                    />
                </div>
                <div v-else>
                    <div
                    class="apartment-search"
                    >
                        <div class="alert alert-danger mt-5">
                            <i class="fa-solid fa-ban fa-lg fa-fw"></i> Ci dispiace in questa zona non sono ancora presenti degli appartamenti.
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-right-map ps-3">
                <div  class="alert alert-danger error-params-search w-50 fw-bold text-center" v-if="this.searchFilters.invalid_filter === true">
                    Parametri di ricerca non validi.
                </div>
                <div id='map' class='map'></div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.ms-page-container{

    .advanced-header {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        color: white;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid white;
    }

    .card-container {
        width: 100%;
        height: 650px;
        & .col-left-card {
            width: 30%;
            height: 100%;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
        }

        & .col-right-map {
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
                height: 667px;
                border-radius: 20px;
            }
        }
    }

   
    
}


</style>