<template>
  <div class="container">
    <InfoHeader />
    <ImageThumbnail />
  </div>
</template>

<script>
import InfoHeader from "../components/apartment-components/InfoHeader.vue";
import ImageThumbnail from "../components/apartment-components/ImageThumbnail.vue";

export default {
  components: {
    InfoHeader,
    ImageThumbnail,
  },
};
</script>

<style lang="scss" scoped></style>
