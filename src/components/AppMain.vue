<script>
import AppCard from './AppCard.vue';


export default {
  components: {
    AppCard,
  },
};

</script>

<template>
  <main>
    <div class="container-card">
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
      <AppCard />
    </div>
  </main>
</template>



<style lang="scss" scoped>

.container-card{
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}
</style>
