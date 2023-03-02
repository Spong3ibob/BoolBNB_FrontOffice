<template>
  <!-- Informazioni Principali -->
  <section class="title-section line-space-divider">
    <div>
      <h4>Host: {{ info.user.name }}</h4>
      <!-- Logica stanze < 1 -->
      <span>{{ info.rooms_num }} <span v-if="info.rooms_num <= '1'"> camera da letto</span> <span v-else> camere da letto </span></span>
      <span class="spacer-dot">·</span>
      <span>{{ info.beds_num }} <span v-if="info.beds_num <= '1'"> letto</span> <span v-else>letti</span></span>
      <span class="spacer-dot">·</span>
      <span>{{ info.baths_num }} <span v-if="info.baths_num <= '1'"> bagno</span> <span v-else> bagni</span></span>
    </div>
  </section>

  <section class="bool-cover line-space-divider">
    <h3><span class="red">bool</span>cover</h3>
    <p>
      Ogni prenotazione include una protezione gratuita in caso di cancellazione
      da parte dell'host, di inesattezze dell'annuncio e di altri problemi come
      le difficoltà in fase di check-in.
    </p>
    <!-- Bottone Modal -->
    <button
      type="button"
      class="show-more-button"
      data-bs-toggle="modal"
      data-bs-target="#coverModal"
    >
      <span class="show-more">Per saperne di più</span>
      <i class="fa-solid fa-chevron-right"></i>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="coverModal"
      tabindex="-1"
      aria-labelledby="coverModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header d-flex flex-column align-items-start">
            <button
              type="button"
              class="btn-close m-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <!-- Titolo Modal -->
            <div>
              <h3 class="mt-3 mb-0"><span class="red">bool</span>cover</h3>
              <p class="mt-3">
                BoolCover è una protezione completa, inclusa gratuitamente in
                ogni prenotazione.
              </p>
            </div>
          </div>
          <div class="modal-body">
            <div class="row mb-5">
              <div class="col-6">
                <h5>Garanzia di prenotazione</h5>
                <p class="modal-text">
                  Nell'improbabile eventualità che un host debba cancellare la
                  tua prenotazione entro 30 giorni dal check-in, ti troveremo un
                  alloggio simile o migliore, oppure ti rimborseremo.
                </p>
              </div>
              <div class="col-6">
                <h5>Garanzia di check-in</h5>
                <p class="modal-text">
                  Se non riesci a effettuare il check-in presso l'alloggio e
                  l'host non risolve il problema, ti troveremo una sistemazione
                  simile o migliore per la durata del tuo soggiorno originario,
                  oppure ti rimborseremo.
                </p>
              </div>
            </div>
            <div class="row mb-5">
              <div class="col-6">
                <h5>Garanzia di conformità</h5>
                <p class="modal-text">
                  Se in qualsiasi momento durante il soggiorno ti rendi conto
                  che l'alloggio non corrisponde alla descrizione presente
                  nell'annuncio, ad esempio se il frigorifero smette di
                  funzionare e l'host non può ripararlo facilmente, o se
                  l'alloggio dispone di un numero di camere da letto inferiore
                  rispetto a quello indicato, avrai 3 giorni di tempo per
                  inviare una segnalazione: ti troveremo una sistemazione simile
                  o migliore, oppure emetteremo un rimborso a tuo favore.
                </p>
              </div>
              <div class="col-6">
                <h5>Supporto sicurezza H24</h5>
                <p class="modal-text">
                  Nell'improbabile eventualità che un host debba cancellare la
                  tua prenotazione entro 30 giorni dal check-in, ti troveremo un
                  alloggio simile o migliore, oppure ti rimborseremo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header d-flex flex-column align-items-start">
              <button
                type="button"
                class="btn-close m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div>
                <h3 class="mt-3 mb-0">Informazioni su questo spazio</h3>
              </div>
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
.modal-header {
  border-bottom: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 96%;
    bottom: 4px;
  }
  .btn-close:active,
  .btn-close:focus {
    outline: none !important;
    box-shadow: none;
    background-color: rgba($color: #000000, $alpha: 0.05);

    border-radius: 50%;
  }
}

.modal-text {
  color: rgb(99, 99, 99);
}
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
