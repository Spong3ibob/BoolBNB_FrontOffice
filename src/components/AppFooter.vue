<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <Footer>
    <div class="ms-page-container d-flex justify-content-between py-3">
      <div class="footer__left">
        <span class="me-2">© 2023 BoolBnB, Inc </span>
        ·<a class="me-2 ps-3" href="">Privacy</a>
        ·<a class="me-2 ps-3" href="">Termini</a> 
        ·<a class="me-2 ps-3" href="">Mappa del sito</a> 
        ·<a class="me-2 ps-3" href="">Dettagli dell'azienda</a>
      </div>
      <div class="footer__right d-flex align-items-center">
        <div class="ms-4">
          <i class="fa-solid fa-globe"></i> Italiano (IT)
        </div>
        <div class="ms-4">
          <i class="fa-solid fa-euro-sign"></i> EUR
        </div>
        <div class="ms-4">
          Supporto e risorse
        </div>
      </div>
    </div>
  </Footer>
</template>

<style lang="scss" scoped>
  footer {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20px;
    border-top: 1.8px solid #ebebeb;
    & .footer__left a{
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
