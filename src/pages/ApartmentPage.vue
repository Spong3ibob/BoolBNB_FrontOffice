<template>
  <div class="container" v-if="apartment !== null">
    <InfoHeader :data="this.apartment" />
    <SectionAparmentDescription :data="this.apartment" />
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components/InfoHeader.vue";
import SectionAparmentDescription from "../components/apartment-components/SectionApartmentDescription.vue";
import axios from "axios";
import { store } from '../store';

export default {
  components: {
    InfoHeader,
    SectionAparmentDescription,
  },
  data() {
    return {
      store,
      apartment: null
    }
  },
  created() {
    axios.get(`${this.store.backendUrl}/apartment/show/${this.$route.params.slug}`)
    .then( (res) => {
        this.apartment = res.data;
    })
    .catch( (err) => {
        if ( err.response.status === 404 ) {
            this.$router.push({ name: 'page-404' })
        }
    });
  }
};
</script>

<style lang="scss" scoped></style>
