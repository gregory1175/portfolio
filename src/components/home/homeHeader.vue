<script setup lang="ts"></script>

<template>
  <header class="header section">
    <div class="header-greetings">
      <div class="greetings-info">
        <h1 class="greetings-title">Доброго времени суток!</h1>
        <h2 class="greetings-subtitle">Wordory - личный сайт-блог Денисова Григория</h2>
      </div>
    </div>
    <h3 class="info-title">Что здесь можно найти?</h3>
    <div class="header-info">
      <p class="info-text">-> Посмотреть мое <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>, найти ссылки на мои соц сети и не только</p>
      <p class="info-text">-> Ознакомиться с моими проектами и технологиями, которые я использую</p>
      <p class="info-text">-> Связаться со мной для сотрудничества или обсуждения проектов</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
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
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);

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
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
}
</style>
