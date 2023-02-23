<script>
import ApiCard from '../ApiCard.vue';

export default {
  components: {
    ApiCard,
  },
  setup() {
    return {};
  },
};
</script>


<template>
  <div>
    <div class="container-card">
      <ApiCard />
    </div>
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
