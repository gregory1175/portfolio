<script setup lang="ts"></script>

<template>
  <header class="header section">
    <div class="header-greetings">
      <div class="greetings-info">
        <h1 class="greetings-title">Добро пожаловать на мой сайт Wordory</h1>
        <h2 class="greetings-subtitle">Wordory - мои заметки о коде, дизайне и технологиях</h2>
      </div>
    </div>
    <h3 class="info-title">Что вы найдете на сайте?</h3>
    <div class="header-info">
      <p class="info-text">
        → Мое
        <router-link :to="{ name: 'portfolio' }" class="route protfolio">портфолио</router-link> и
        ссылки на соцсети
      </p>
      <p class="info-text">→ Описание проектов и технологий, с которыми я работаю</p>
      <p class="info-text">→ Контакты для сотрудничества и общения</p>
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
  color: rgb(255, 255, 255);
}

.greetings-title {
  font-size: 32px;
  line-height: 40px;
  font-weight: 800;
  align-self: center;
}

/* info */
.header-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.protfolio {
  color: rgba(0, 0, 0, 1);
  text-decoration: underline dashed 2px;
  text-underline-offset: 4px;
}
.protfolio:hover {
  color: rgb(255, 255, 255);
}
</style>
