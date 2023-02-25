<script>
import ListApartments from "./main-apartment-index/ListApartments.vue";

export default {
  name: "AppMain",
  components: {
    ListApartments,
  },
};
</script>

<template>
  <main>
    <div class="debug">
      <!-- <ul>
        <li>
          <router-link :to="{ name: 'apartment-page' }">Appartamento</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'homepage' }">Homepage</router-link>
        </li>
      </ul> -->
    </div>

    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.debug {
  background-color: cyan;
}
</style>
