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
    <img :src="data.image" alt="">
    <div class="information">
      <div class="left">
        <h6><b>{{ data.title }}</b></h6>
        <p>Host Privato/Proffessionista</p>
        <p><b>{{ data.price }} €</b> notte</p>
      </div>
      <div class="right"><i class="fa-solid fa-star"></i></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 0;
  width: 300px;
  height: 480px;
  img{
      border-radius: 5%;
      height: 300px;
      width: 300px;
      object-fit: cover;
    }
  .information {
    display: flex;
    padding-top: 15px;
    .left {
      width: 90%;
    }
    .right {
      width: 10%;
    }
  }
  
}
</style>
