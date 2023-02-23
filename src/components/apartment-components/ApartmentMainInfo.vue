<template>
  <section class="title-section line-space-divider">
    <div>
      <h4>Nome Alloggio: {} - Host: {}</h4>
      <span>{} camere da letto</span>
      <span class="spacer-dot">·</span>
      <span>{} letti</span>
      <span class="spacer-dot">·</span>
      <span>{} bagni</span>
    </div>
  </section>
  <section class="descrizione line-space-divider">
    <div v-if="p < 400">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
        necessitatibus dolorum, adipisci amet hic optio esse est aliquid
        reprehenderit quia totam fugiat quidem ipsa odio numquam expedita
        corporis vel laudantium.
      </p>
    </div>
    <div v-else>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Mostra Altro
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, unde quidem? Expedita accusantium, asperiores illo
                possimus in libero commodi quia! Facere culpa enim fugiat nam,
                excepturi quam iusto quos natus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
