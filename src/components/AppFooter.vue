<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <!-- Footer homepage -->
  <footer id="footer_one" v-if="this.$route.name !== 'apartment-page' && this.$route.name !== 'advance-search'">
    <div class="ms-page-container d-flex justify-content-between py-3">
      <div class="footer__left">
        <div class="d-inline">
          <span class="me-2">© 2023 BoolBnB, Inc </span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Privacy</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Termini</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Mappa del sito</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Dettagli dell'azienda</a></span>
        </div>
      </div>
      <div class="footer__right d-flex align-items-center">
        <div class="ms-4">
          <i class="fa-solid fa-globe"></i> Italiano (IT)
        </div>
        <div class="ms-4 d-none d-sm-inline">
          <i class="fa-solid fa-euro-sign"></i> EUR
        </div>
        <div class="ms-4 d-none d-xl-flex">
          Supporto e risorse
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Single-page-show -->
  <footer id="footer_two" v-else-if="this.$route.name !== 'advance-search'" class="">
    <div class="ms-page-container-small footer-top py-5 d-flex">
      <nav>
        <h3 class="mb-3">Assistenza</h3>
        <ul class="mb-0 p-0">
          <li class="list-unstyled "><a href="">Centro Assistenza</a></li>
          <li class="list-unstyled "><a href="">BoolCover</a></li>
          <li class="list-unstyled "><a href="">Accessibilità per tutti</a></li>
          <li class="list-unstyled "><a href="">Opzioni di cancellazione</a></li>
          <li class="list-unstyled "><a href="">La nostra risposta all'emergenza COVID-19</a></li>
          <li class="list-unstyled "><a href="">Segnala problemi nel quartiere</a></li>
        </ul>
      </nav>

      <nav>
        <h3 class="mb-3">Community</h3>
        <ul class="mb-0 p-0">
          <li class="list-unstyled "><a href="">BoolBnB: un rifugio sicuro</a></li>
          <li class="list-unstyled "><a href="">Contro la discriminazione</a></li>
        </ul>
      </nav>

      <nav>
        <h3 class="mb-3">Ospitare</h3>
        <ul class="mb-0 p-0">
          <li class="list-unstyled "><a href="">Apri un BoolBnB</a></li>
          <li class="list-unstyled "><a href="">BoolCover per gli host</a></li>
          <li class="list-unstyled "><a href="">Esplora le risorse per host</a></li>
          <li class="list-unstyled "><a href="">Vai al forum della community</a></li>
          <li class="list-unstyled "><a href="">Come ospitare responsabilmente</a></li>
        </ul>
      </nav>

      <nav>
        <h3 class="mb-3">BoolBnB</h3>
        <ul class="mb-0 p-0">
          <li class="list-unstyled "><a href="">Newsroom</a></li>
          <li class="list-unstyled "><a href="">Scopri le nuove funzionalità</a></li>
          <li class="list-unstyled "><a href="">Lettera dai nostri fondatori</a></li>
          <li class="list-unstyled "><a href="">Opportunità di lavoro</a></li>
          <li class="list-unstyled "><a href="">Investitori</a></li>
          <li class="list-unstyled "><a href="">Gift card</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-bottom ms-page-container-small d-flex justify-content-between py-3">
      <div class="footer__left">
        <div class="d-inline">
          <span class="me-2">© 2023 BoolBnB, Inc </span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Privacy</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Termini</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">Mappa del sito</a></span>
        </div>
        <div class="d-none d-lg-inline">
          <span class="spacer-dot">·</span>
          <span><a class="me-2 ps-3" href="">MDettagli dell'azienda</a></span>
        </div>
      </div>
      <div class="footer__right d-flex align-items-center">
        <div class="ms-4">
          <i class="fa-solid fa-globe"></i> Italiano (IT)
        </div>
        <div class="ms-4 d-none d-sm-inline">
          <i class="fa-solid fa-euro-sign"></i> EUR
        </div>
        <div class="ms-4 d-none d-xxl-flex">
          <a href="https://www.facebook.com/AirbnbItalia">
            <i class="fa-brands fa-facebook-f fa-fw fa-lg ms-4"></i>
          </a>
          <a href="https://twitter.com/airbnb_it">
            <i class="fa-brands fa-twitter fa-fw fa-lg ms-4"></i>
          </a>
          <a href="https://www.instagram.com/airbnb/">
            <i class="fa-brands fa-instagram fa-fw fa-lg ms-4"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer#footer_one {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    border-top: 1.8px solid #ebebeb;
  }

  footer#footer_two {
    background-color: rgb(247, 247, 247);
    border-top: 1px solid rgb(221, 221, 221);
    & h3 {
      font-size: 18px;
    }
    & nav {
      width: calc(100% / 4);
      & ul li {
        margin-bottom: 16px;
      }
    }
    & a {
      color: rgb(34, 34, 34) !important;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    & .footer-bottom {
      border-top: 1px solid rgb(221, 221, 221) !important;
    }
  }

  .footer__left a{
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
