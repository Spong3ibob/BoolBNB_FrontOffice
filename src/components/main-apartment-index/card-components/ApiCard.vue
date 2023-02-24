<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
import { store } from "../../../store";

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      apartments: [],
      store,
    };
  },
  created() {
    axios.get("http://localhost:8000/api/apartments").then((response) => {
      this.apartments = response.data;
      this.store.apartments = response.data;
    });
  },
};
</script>

<template>
  <AppCard v-for="apartment in apartments" :data="apartment" />
</template>

<style lang="scss" scoped></style>
