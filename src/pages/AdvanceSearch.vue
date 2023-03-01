<template>
    <div class="ms-page-container">
        <div class="m-4 filtering-container d-flex justify-content-center">
            <div class="col-left-filters p-4">
                <div>
                    <label for="radius-range" class="form-label">Ricerca appartamenti a {{ this.$route.params.address }} nel raggio di {{ this.searchFilters.radiusStart }}km</label>
                    <input id="radius-range" class="form-range" type="range" min="1" max="300" v-model="this.searchFilters.radiusStart" step="1" @click="filterByRadius()">
                    Appartamenti trovati: {{ this.apartments.length }}    
                </div>
                <div>
                    <label for="">Numero minimo di stanze</label>
                    <input type="number" min="1" max="15" v-model="this.searchFilters.rooms" @change="filterByRadius()">
                </div>
                <div>
                    <label for="">Numero minimo di letti</label>
                    <input type="number" min="1" max="15" v-model="this.searchFilters.beds" @change="filterByRadius()">
                </div>
            </div>
            <div class="col-right-map">
                <div id='map' class='map'></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            store,
            apartments: '',
            searchFilters: {
                radiusStart: 2,
                rooms: 1,
                beds: 1,
            },
            currentAddressCoords: {
                latitude: '',
                longitude: '',
            }
        }
    },
    methods: {
        filterByRadius() {
            axios.get(`${this.store.backendUrl}/near-apartments-to/address=${this.$route.params.address}&radius=${this.searchFilters.radiusStart}&rooms=${this.searchFilters.rooms}&beds=${this.searchFilters.beds}`)
            .then((res) => {
                this.apartments = res.data[0];
                this.updateMapInfo();
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
                zoom: 15
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());

            function createMarker(position, color, popupText) {
                var markerElement = document.createElement('div');
                markerElement.className = 'marker';
                var markerContentElement = document.createElement('div');
                markerContentElement.className = 'marker-content';
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
                createMarker([elm.longitude, elm.latitude], 'red', `
                    <div class="mb-1"><b>${elm.title}</b></div>
                    <img src="${elm.image}" class="w-100 mb-1"></br>
                    <div class="mt-1">${elm.full_address}</div>
                    <div class="text-center">
                        <span class="me-1">${elm.rooms_num} <i class="fa-solid fa-house"></i></span>
                        <span class="ms-1">${elm.beds_num} <i class="fa-solid fa-bed fa-lg"></i></span>
                    </div>
                    <a href="http://localhost:5174/apartament/${elm.slug}" class="d-block btn btn-danger p-0 mt-2 mx-3">Visualizza appartamento</a>
                `);
            });
        }
    },
    created() {
        axios.get(`${this.store.backendUrl}/near-apartments-to/address=${this.$route.params.address}&radius=${this.searchFilters.radiusStart}&rooms=${this.searchFilters.rooms}&beds=${this.searchFilters.beds}`)
        .then((res) => {
            this.currentAddressCoords.latitude = res.data[1].position.lat.toString();
            this.currentAddressCoords.longitude = res.data[1].position.lon.toString();
            this.apartments = res.data[0];
            this.updateMapInfo();
        })
    }
}
</script>

<style lang="scss" scoped>
    .filtering-container {
        width: 100%;
        height: 600px;
        & .col-left-filters {
            width: 20%;
        }
        & .col-right-map {
            width: 65%;
            & .map {
                width: 100%;
                max-width: 1000px;
                height: 600px;
            }
        }
    }
</style>