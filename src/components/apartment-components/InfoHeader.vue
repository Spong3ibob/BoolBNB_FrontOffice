<template>
  <div>
    <h2 class="title">
      Titolo appartamento:
      <span class="apartment-title"> {{ data.title }} </span>
    </h2>

    <p></p>

    <div class="nav-info-apartment d-flex justify-content-between">
      <div class="apartment-info-header">
        <span class="header-info">Visualizzazioni</span>
        <!-- Divisore Grafico tra le informazioni dell'header -->
        <span class="spacer-dot">·</span>

        <span class="header-info">Recensioni/Messaggi</span>
        <span class="spacer-dot">·</span>
        <span class="header-info">Sponsor</span>
        <span class="spacer-dot">·</span>
        <span class="header-info"
          ><i></i></span
        >
      </div>
      <div class="apartment-share">
        <span class="header-share"
          ><button type="button">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>Condividi
          </button></span
        >
        <span class="header-share"
          ><button type="button">
            <i class="fa-regular fa-heart"></i> Preferiti
          </button></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
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

    &:not(:first-child) {
      margin-left: 0.375rem;
    }
  }
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
}
</style>
