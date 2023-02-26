<template>
  <section class="title-section line-space-divider">
    <div>
      <h4>
        Nome Alloggio: {{ info.title }} - Host: {{ info.user.name }}
      </h4>
      <span>{{ info.rooms_num }} camere da letto</span>
      <span class="spacer-dot">·</span>
      <span>{{ info.beds_num }} letti</span>
      <span class="spacer-dot">·</span>
      <span>{{ info.baths_num }} bagni</span>
    </div>
  </section>
  <section class="descrizione line-space-divider">
    <div v-if="info.description.length <= 200">
      <p>
        {{ info.description }}
      </p>
    </div>
    <div v-else>
      <p>{{ info.description.substring(0, 200) }} ...</p>
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
                {{ info.description }}
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
  props: {
    info: Object,
  },
};
</script>

<style lang="scss" scoped></style>
