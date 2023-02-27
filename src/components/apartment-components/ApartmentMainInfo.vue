<template>
  <!-- Informazioni Principali -->
  <section class="title-section line-space-divider">
    <div>
      <h4>Nome Alloggio: {{ info.title }} - Host: {{ info.user.name }}</h4>
      <span>{{ info.rooms_num }} camere da letto</span>
      <span class="spacer-dot">·</span>
      <span>{{ info.beds_num }} letti</span>
      <span class="spacer-dot">·</span>
      <span>{{ info.baths_num }} bagni</span>
    </div>
  </section>

  <section class="bool-cover line-space-divider">
    <h3><span class="red">bool</span>cover</h3>
    <p>
      Ogni prenotazione include una protezione gratuita in caso di cancellazione da parte dell'host, di inesattezze dell'annuncio e di altri problemi come le difficoltà in fase di check-in.
    </p>
  </section>

  <!-- Descrizione Appartamento -->
  <section class="description line-space-divider">
    <div v-if="info.description.length <= 200">
      <p>
        {{ info.description }}
      </p>
    </div>
    <div v-else>
      <p>{{ info.description.substring(0, 400) }} <br />...</p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="show-more-button"
        data-bs-toggle="modal"
        data-bs-target="#textModal"
      >
        <span class="show-more">Mostra Altro</span>
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="textModal"
        tabindex="-1"
        aria-labelledby="textModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="mb-0">Informazioni su questo spazio</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                {{ info.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Servizi -->
  <section class="services line-space-divider">
    <h4>Cosa Troverai</h4>

    <div class="row flex-wrap">
      <div class="d-flex w-33 service" v-for="service in info.services">
        <div class="fa-lg fa-fw" v-html="service.icon"></div>
        <span class="service-name">{{ service.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped>
.bool-cover {
  h3 {
    font-weight: 900;
    font-size: 34px;

    .red {
      color: var(--red-color);
    }
  }
}

// Mostra Altro
.show-more-button {
  border: none;
  background-color: transparent;
  text-decoration: underline;

  padding-left: 0;

  .show-more {
    font-size: 1.125rem;
    font-weight: bold;
  }

  i {
    padding-left: 0.5rem;
  }
}

// Servizi
.services {
  h4 {
    padding-bottom: 1rem;
  }

  .w-33 {
    width: 33.33%;
  }
  .service {
    align-items: center;
    padding-bottom: 0.625rem;
    .service-name {
      padding-left: 0.625rem;
      font-size: 1.125rem;
    }
  }
}
</style>
