<script setup lang="ts"></script>

<template>
  <header class="header section">
    <div class="header-greetings">
      <div class="greetings-info">
        <h1 class="greetings-title">Добро пожаловать на мой сайт</h1>
        <h2 class="greetings-subtitle">Заметки о коде, дизайне и технологиях</h2>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* title */
.header-greetings {
  display: flex;
  gap: 16px;
}

.greetings-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.greetings-subtitle {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
}

.greetings-title {
  font-size: 32px;
  line-height: 44px;
  font-weight: 800;
  align-self: center;
}
</style>
