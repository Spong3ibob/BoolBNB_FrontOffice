<script>
import AppCarosel from "./AppCarosel.vue";

export default {
  name: "AppCard",
  components: {
    AppCarosel,
  },
  props: {
      data: Object,
  },
};

</script>

<template>
  <div class="card">
    <AppCarosel />
    <div class="information">
      <div class="left">
        <h6><b>{{ data.title }}</b></h6>
        <p>{{ data.full_address }}</p>
        <p><b>{{ data.price }} €</b> notte</p>
      </div>
      <div class="right"><i class="fa-solid fa-star"></i> 5 </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
  width: 300px;
  height: 480px;

  .information {
    display: flex;
    padding-top: 15px;
    .left {
      width: 80%;
    }
    .right {
      width: 20%;
    }
  }
}
</style>
