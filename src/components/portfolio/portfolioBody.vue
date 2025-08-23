<script setup lang="ts">
import '@styles/sectionStyles/local.css'
</script>

<template>
  <main class="main section">
    <div class="main-containers">
      <h2 class="main-title">Опыт</h2>
      <div class="main-card">
        <div class="card-header">
          <h3 class="card-title">
            <a href="https://procharity.ru/" target="_blank" class="card-title-link">Procharity</a>
          </h3>
          <span>1 год</span>
        </div>
        <p>
          Цифровая платформа для волонтерства и благотворительности, которая соединяет НКО с
          добровольцами и донорами. Сервис предоставляет инструменты для организации мероприятий,
          сбора пожертвований и управления волонтерской деятельностью.
        </p>
        <p>
          В рамках разработки я занимался созданием новых страниц, улучшением архитектуры по
          методологии FSD, внедрением админ-панели, постановкой задач команде и написанием
          документации в Storybook.
        </p>
        <p>
          Подробнее с проектом можно ознакомится вот здесь -
          <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
        </p>
      </div>
      <div class="main-card">
        <div class="card-header">
          <h3 class="card-title">
            <a href="https://vevanta.net/" target="_blank" class="card-title-link">Veventa</a>
          </h3>
          <span>1 год</span>
        </div>
        <p>
          Сайт строительной компании Vevanta, которая специализируется на проектировании и
          строительстве домов комфорт- и бизнес-класса в Москве и области. Компания предлагает
          полный цикл услуг: от подбора участка и индивидуального проектирования до строительства
          под ключ и оформления ипотеки.
        </p>
        <p>
          В рамках проекта я интегрировал React-фронтенд с WordPress бэкендом, внедрил компонентный
          подход для улучшения масштабируемости системы. Полностью обновил верстку, обеспечив
          адаптивность и кроссбраузерную совместимость интерфейса, а также начал миграцию кодовой
          базы с ванильного JavaScript на React.
        </p>

        <p>
          Подробнее с проектом можно ознакомится вот здесь -
          <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.main-containers {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.main-title {
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
}

.main-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
}

.card-header {
  display: flex;
  gap: 16px;
}

.card-title {
  display: flex;
  font-size: 16px;
  line-height: 24px;
  font-weight: 800;
  color: rgba(0, 0, 0, 1);
}

.card-title-link {
  color: inherit;
  text-decoration: underline dashed 1px black;
  text-underline-offset: 6px;
}
.card-title-link:hover {
  opacity: 0.5;
}
</style>
