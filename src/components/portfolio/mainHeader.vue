<script setup lang="ts">
import '@styles/sectionStyles/local.css'
</script>

<template>
  <header class="header section">
    <div class="header-container">
      <div class="header-info">
        <h1 class="header-title">Портфолио</h1>
        <h2 class="header-subtitle">Денисов Григорий</h2>
      </div>
    </div>
    <div class="header-infobar">
      <p class="header-text">fullstack-разработчик</p>
      <p class="header-text">продуктовый-менеджер</p>
      <p class="header-text">фрилансер</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.header-container {
  display: grid;
  gap: 16px;
}

.header-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
}

.header-title {
  font-size: 24px;
  line-height: 36px;
  font-weight: 900;
}

.header-subtitle {
  font-size: 36px;
  line-height: 48px;
  font-weight: 400;
}

.header-infobar {
  display: flex;
  gap: 24px;
}

.header-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(126, 126, 126, 1);
  opacity: 0.4;
}
</style>
