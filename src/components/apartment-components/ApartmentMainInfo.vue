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
      Con Bool Cover Otterai un Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Illo iusto vero atque ut ullam tenetur maiores quasi,
      magnam autem voluptas assumenda repellendus, dolor excepturi qui. Illum
      labore aliquam temporibus ea? Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Laudantium quisquam quos quam facilis vitae magnam
      distinctio magni voluptatibus amet cum, animi aliquid similique, nam
      dolorum illum deserunt consequatur quaerat eos.
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
        data-bs-target="#exampleModal"
      >
        <span class="show-more">Mostra Altro</span>
        <i class="fa-solid fa-chevron-right"></i>
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
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
