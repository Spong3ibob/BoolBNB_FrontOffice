<script>
import ApiCard from '../ApiCard.vue';
import { store } from '../../store';
import AppCard from '../AppCard.vue';

export default {
  components: {
    ApiCard,
    AppCard
  },
  data() {
    return {
      store
    }
  }
};
</script>


<template>
  <div v-for="filteredApartment in this.store.filteredApartments">
    <AppCard :data="filteredApartment"/>
  </div>
</template>



<style lang="scss" scoped>
.container-card {
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}
</style>
