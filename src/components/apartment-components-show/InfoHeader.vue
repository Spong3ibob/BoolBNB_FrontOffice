<template>
  <div class="">
    <h2 class="title mb-0">
      <span class="apartment-title"> {{ data.title }} </span>
    </h2>

    <div
      class="nav-info-apartment d-flex justify-content-between align-items-center mt-lg-0 mt-sm-2 mt-xs-2"
    >
      <!-- Informazioni  Via/Sponsor -->
      <div class="apartment-info-header ">
        <div v-if="data.sponsorships.length" class="d-none d-lg-inline ">
          <span class="header-info sponsor"><i class="icon fa-solid fa-medal"></i>Sponsorizzato</span>
          <span class="spacer-dot">·</span>
        </div>
        <span class="header-info text-decoration-underline address"><i> {{ data.full_address }}</i></span>
      </div>

      <!-- Condividi Link -->
      <div class="apartment-share">
        <span class="header-share">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#shareModel"
            id="shareBtn"
            data-bs-placement="top"
            title="Click Me!"
          >
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            <span class="text-decoration-underline">Condividi</span>
          </button>
        </span>
        <!-- <span class="header-share"
          ><button type="button">
            <i class="fa-regular fa-heart"></i> Preferiti
          </button></span
        > -->
        <!-- Modal -->
        <div
          class="modal fade"
          id="shareModel"
          tabindex="-1"
          aria-labelledby="shareModelLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModelLabel">Share Modal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Condividi pagina tramite</p>
                <div class="d-flex align-items-center icons">
                  <a href="#" class="fs-5 d-flex align-items-center justify-content-center"><span class="fab fa-facebook-f"></span></a>
                  <a href="#" class="fs-5 d-flex align-items-center justify-content-center"><span class="fab fa-twitter"></span></a>
                  <a href="#" class="fs-5 d-flex align-items-center justify-content-center"><span class="fab fa-instagram"></span></a>
                  <a href="#" class="fs-5 d-flex align-items-center justify-content-center"><span class="fab fa-whatsapp"></span></a>
                  <a href="#" class="fs-5 d-flex align-items-center justify-content-center"><span class="fab fa-telegram-plane"></span></a>
                </div>
                <p class="m-0">Oppure copia il seguente link</p>
                <div class="field d-flex align-items-center justify-content-between">
                  <span class="fas fa-link text-center"></span>
                  <input id="share-page-link" type="text" :value="this.fullPathUrl" disabled>
                  <button id="copy-button" @click="copyToClipboard()">Copia</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Button larger image on clickl -->
      <div class="images-box d-flex justify-content-between">
          <div class="image-box ">
            <img :src="data.image_url" :alt="data.title" data-bs-toggle="modal" data-bs-target="#exampleModal" style="cursor: zoom-in;"/>
          </div>
          <div class="map-box ms-2">
            <div id='map' class='map m-0'></div>
          </div>
        </div>
  </div>

  <!-- Button larger image on clickl -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <button id="bigger-image-click" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <img class="w-100" :src="data.image_url" :alt="data.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";

export default {
  props: {
    data: Object,
  },
  data() {
    return {
      store,
      fullPathUrl: ''
    }
  },
  methods: {
    copyToClipboard() {
      // Get the text field
      const copyButton = document.getElementById('copy-button');
      var copyText = document.getElementById("share-page-link");

      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);

      copyButton.innerHTML = 'Copiato'

      setTimeout(() => {
        copyButton.innerHTML = 'Copia'
      }, 1100);
    },
  },
  mounted() {
    var map = tt.map({
        key: 'S7Di8WQbB2pqxqTH8RYmhO63cZwgtNgp',
        container: 'map',
        dragPan: !isMobileOrTablet(),
        // Longitude and Latitude
        center: [this.data.longitude, this.data.latitude],
        zoom: 13
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
            'url(https://download.tomtom.com/open/manuals/vio/html/en-gb/embassy.png)';
        markerContentElement.appendChild(iconElement);
        // add marker to map
        new tt.Marker({element: markerElement, anchor: 'bottom'})
            .setLngLat(position)
            .addTo(map);
    }
    let is_sponsored = false;
    for (let i = 0; i < this.store.filteredApartments.length; i++) {
      if ( this.store.filteredApartments[i].id === this.data.id ) {
        is_sponsored = true;
      }
    }

    if( is_sponsored === true ) {
        createMarker([this.data.longitude, this.data.latitude], '', ``, 'marker-content-yellow');
    } else {
        createMarker([this.data.longitude, this.data.latitude], '', ``, 'marker-content-red');
    }
  },
  created() {
    // get current path to copy
    this.fullPathUrl = window.location.href;
  }
};
</script>

<style lang="scss" scoped>
.title {
  .apartment-title {
    font-style: italic;
  }
}
.nav-info-apartment {
  .header-info {
    margin-right: 0.375rem;

    .icon {
      margin-right: 0.5rem;
      filter: invert(86%) sepia(26%) saturate(2165%) hue-rotate(357deg)
        brightness(99%) contrast(106%);
    }

    &:not(:first-child) {
      margin-left: 0.375rem;
    }
  }
}

#bigger-image-click {
  position: absolute;
  right: 0;
  top: 0;
  padding: 8px;
  background-color: white;
}
.apartment-share {
  .header-share {
    margin-left: 0.5rem;

    i {
      margin-right: 0.375rem;
    }

    button {
      background-color: transparent;
      border: none;
      padding: 0.25rem 0.75rem;
      border-radius: 0.625rem;

      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  // Custom Share Modal
  .modal {
    top: 20%;
  }

  .btn-close {
    box-shadow: none;
    border: none;
    outline: none;
  }

  .modal-body .icons {
    margin: 15px 0px 20px 0px;
  }

  .modal-body .icons a {
    text-decoration: none;
    border: 1px solid transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    transition: all 0.3s ease-in-out;
  }

  .modal-body .icons a:nth-child(1) {
    color: #1877f2;
    border-color: #b7d4fb;
  }

  .modal-body .icons a:nth-child(1):hover {
    background-color: #1877f2;
    color: #fff;
  }

  .modal-body .icons a:nth-child(2) {
    color: #46c1f6;
    border-color: #b6e7fc;
  }

  .modal-body .icons a:nth-child(2):hover {
    background-color: #46c1f6;
    color: #fff;
  }

  .modal-body .icons a:nth-child(3) {
    color: #e1306c;
    border-color: #f5bccf;
  }

  .modal-body .icons a:nth-child(3):hover {
    background-color: #e1306c;
    color: #fff;
  }

  .modal-body .icons a:nth-child(4) {
    color: #25d366;
    border-color: #bef4d2;
  }

  .modal-body .icons a:nth-child(4):hover {
    background-color: #25d366;
    color: #fff;
  }

  .modal-body .icons a:nth-child(5) {
    color: #0088cc;
    border-color: #b3e6ff;
  }

  .modal-body .icons a:nth-child(5):hover {
    background-color: #0088cc;
    color: #fff;
  }

  .modal-body .icons a:hover {
    border-color: transparent;
  }

  .modal-body .icons a span {
    transition: all 0.09s ease-in-out;
  }

  .modal-body .icons a:hover span {
    transform: scaleX(1.1);
  }

  .modal-body .field {
    margin: 15px 0px -5px 0px;
    height: 45px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    padding: 0 5px;
  }

  .modal-body .field.active {
    border-color: #7d2ae8;
  }

  .field span {
    width: 50px;
    font-size: 1.1rem;
  }

  .field.active span {
    color: #7d2ae8;
  }

  .field input {
    border: none;
    outline: none;
    font-size: 0.89rem;
    width: 100%;
    height: 100%;
  }

  .field button {
    padding: 5px 16px;
    color: #fff;
    background: #7d2ae8;
    border: 2px solid transparent;
    border-radius: 5px;
    font-weight: 500;
  }

  @media (max-width: 330px) {
    .modal-body .icons a {
      margin-right: 15px;
      width: 35px;
      height: 35px;
    }
  }
}

// Immagine
  .images-box {
    margin-top: 0.625rem;
    border-radius: 1rem;
    overflow: hidden;
    width: 100% !important;
    img {
      height: 100%;
      width: 100%;
      border-radius: 2rem;
    }
    .image-box{
        width: 50%;
        height: 100%;
    }
    .map-box {
        width:50%;
    }
    #map, .map {
      position:relative;
      border-radius: 2rem;
      max-width: 100% !important ; 
      width:100%;
    }
  }

// Responsive <= 1440px

</style>
