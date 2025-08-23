<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  smallSrc: string
  largeSrc: string
  alt?: string
  smallHeight?: string
  smallWidth?: string
  popupHeight?: string
  poptupWidth?: string
}>()

const showPopup = ref(false)
</script>

<template>
  <div class="image-container">
    <img
      :src="smallSrc"
      :alt="alt"
      :width="smallWidth"
      :height="smallHeight"
      @mouseover="showPopup = true"
      class="preview-image"
    />

    <div v-if="showPopup" class="popup-overlay" @mouseleave="showPopup = false">
      <img
        :src="largeSrc"
        :width="poptupWidth"
        :height="popupHeight"
        :alt="alt"
        class="popup-image"
      />
    </div>
  </div>
</template>

<style scoped>
.preview-image {
  border-radius: 12px;
  position: relative;
  object-fit: cover;
}

.popup-image {
  border-radius: 12px;
  position: absolute;
  top: 0;
  z-index: 2;
  object-fit: cover;
}
</style>
