<template>
  <div class="ms-page-container-small my-5" v-if="this.apartment !== null">
    <InfoHeader :data="this.apartment" />
    <SectionAparmentDescription :data="this.apartment" />
  </div>
  <div
    class="ms-page-container-small spinner-container d-flex align-items-center justify-content-center"
    v-else
  >
    <div class="spinner-border" style="width: 3rem; height: 3rem" role="status">
      <span class="visually-hidden text-dark">Loading...</span>
    </div>
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components-show/InfoHeader.vue";
import SectionAparmentDescription from "../components/apartment-components-show/SectionApartmentDescription.vue";
import axios from "axios";
import { store } from "../store";

export default {
  components: {
    InfoHeader,
    SectionAparmentDescription,
  },
  data() {
    return {
      store,
      apartment: null,
    };
  },
  created() {
    axios
      .get(`${this.store.backendUrl}/apartment/show/${this.$route.params.slug}`)
      .then((res) => {
        this.apartment = res.data;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.$router.push({ name: "page-404" });
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.spinner-container {
  height: calc(100vh - 222.34px);
}
</style>
