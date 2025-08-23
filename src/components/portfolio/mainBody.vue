<script setup lang="ts">
import '@styles/sectionStyles/local.css'
</script>

<template>
  <main class="section">
    <div class="main-containers">
      <h2 class="main-title">Опыт</h2>
      <div class="main-card">
        <p>
          Procharity — это цифровая платформа для волонтерства и благотворительности, которая
          соединяет НКО с добровольцами и донорами. Сервис предоставляет инструменты для организации
          мероприятий, сбора пожертвований и управления волонтерской деятельностью.
          <br />
          <br />
          В рамках разработки я занимался созданием новых страниц, улучшением архитектуры по
          методологии FSD, внедрением админ-панели, постановкой задач команде и написанием
          документации в Storybook.
        </p>
      </div>
      <div class="main-card">
        <h2>фриланс</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar elit. Nam
          eget turpis nisl. Proin elementum turpis ut quam laoreet, ac consequat elit hendrerit.
          Curabitur velit nulla, maximus sed purus et, laoreet commodo felis. Nunc et ligula
          posuere, finibus est quis, vestibulum metus. Mauris at ante ut metus convallis molestie in
          et dolor. Fusce consequat, dui id auctor elementum, massa orci semper odio, sit amet
          fringilla enim tortor sed lacus. Etiam ante lectus, ultricies ac vestibulum vitae,
          facilisis quis justo. Maecenas porta, sem sed ultrices scelerisque, justo massa commodo
          purus, ut suscipit mi lorem eget sapien. Nunc ornare lacus eu erat finibus aliquet. Nunc
          rhoncus sem felis, et pulvinar arcu gravida eu. Vestibulum vitae ex dolor. Pellentesque
          tristique, diam fermentum placerat tempor, massa eros auctor ipsum, eget tristique lacus
          ligula in nunc. Donec eleifend efficitur lorem. Curabitur viverra condimentum nunc, eu
          finibus nibh rutrum ac.
        </p>
      </div>

        <h2 class="main-title">Личные проекты</h2>
    </div>

  </main>
</template>

<style scoped>
.main-containers {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.main-card {
  box-shadow: 2px 0px 0px 1px rgba(126, 126, 126, 0.4);
  padding: 8px;
}
</style>
