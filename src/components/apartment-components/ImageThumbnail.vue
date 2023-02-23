<template>
  <div class="images-box">
    <img src="../../../public/01.jpg" alt="" />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.images-box {
  margin-top: 0.625rem;
  border-radius: 1rem;
  overflow: hidden;
  height: 400px;

  img {
    height: 100%;
    width: 50%;
  }
}
</style>
