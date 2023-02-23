<script>
import AppCarosel from "./AppCarosel.vue";
export default {
  name: "AppCard",
  components: {
    AppCarosel,
  },
};
</script>

<template>
  <div class="card">
    <AppCarosel />
    <div class="information">
      <div class="left">
        <h6><b>Luogo,Paese</b></h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p><b>prezzo €</b> notte</p>
      </div>
      <div class="right"><i class="fa-solid fa-star"></i> 4,82</div>
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
