<template>
  <div class="container">
    <h2>Titolo appartamento 1</h2>

    <div class="nav-info-apartment d-flex justify-content-between">
      <div class="apartment-info-header">
        <span class="header-info">Visualizzazioni</span>
        <!-- Divisore Grafico tra le informazioni dell'header -->
        <span class="spacer-dot">·</span>
        <span class="header-info">Recensioni/Messaggi</span>
        <span class="spacer-dot">·</span>
        <span class="header-info">Sponsor</span>
        <span class="spacer-dot">·</span>
        <span class="header-info">Indirizzo</span>
      </div>
      <div class="apartment-share"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-info-apartment {
  .header-info {
    margin-right: 0.5rem;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
  .header-info {
  }
  .spacer-dot {
    color: rgb(113, 113, 113);
    font-size: 1.125rem;
    font-weight: 400 !important;
    margin: 0.5rem 0.5rem 0rem;
  }
}
.apartment-share {
}
</style>
