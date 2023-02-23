<script>
import AppCard from "./AppCard.vue";
import AppMainDebug from "./debug/AppMainDebug.vue";

export default {
  components: {
    AppCard,
    AppMainDebug,
  },
};
</script>

<template>
  <main>
    <ul>
      <li>
        <router-link :to="{ name: 'apartment-page' }">Appartamento</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'main-debug' }"
          >debug/AppCardContainer</router-link
        >
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>
