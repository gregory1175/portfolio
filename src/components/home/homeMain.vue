<script setup lang="ts"></script>

<template>
  <main class="main section">
    <section class="about">
      <h2>Обо мне</h2>

      <div class="about-section">
        <div class="about-container">
          <img src="/public/title-img.JPG" alt="Мое фото" class="about-img" />
          <div class="about-info">
            <h3>Моя история</h3>
            <p class="about-text">
              Меня зовут Денисов Григорий, уже три года я занимаюсь веб-разработкой — начинал с
              простых страниц для друзей и первых заказов на фрилансе, а позже прошёл обучение в
              Яндекс.Практикуме. Для меня разработка — это не просто работа, это способ создавать
              удобные и понятные решения, которые делают жизнь людей проще.
            </p>
            <p class="about-text">
              Я верю, что каждый проект — это возможность учиться, расти и оставлять свой след в
              цифровом мире. Каждое решение, каждая строка кода — это шаг к чему-то большему, и мне
              нравится видеть, как идеи превращаются в реальные продукты.
            </p>
          </div>
        </div>

        <div class="about-container">
          <div class="about-info">
            <h3>Мой опыт</h3>
            <p class="about-text">
              Мой профессиональный путь включал проекты разного масштаба. Я интегрировал
              React-фронтенд с WordPress для строительной компании Vevanta, полностью обновил
              верстку, обеспечил адаптивность и кроссбраузерную совместимость интерфейса, а также
              начал миграцию кодовой базы с ванильного JavaScript на React.
            </p>
            <p class="about-text">
              Затем я развивал цифровую платформуProCharity, где занимался архитектурой, созданием
              новых страниц, внедрением админ-панели и документацией в Storybook. Эти проекты дали
              мне ценный опыт командной работы, взаимодействия с заказчиками и понимание, как
              строить продукт от идеи до реального результата, делая его удобным и полезным для
              пользователей.
            </p>
          </div>
          <img src="/public/image2.jpg" alt="Мое фото" class="about-img" />
        </div>

        <div class="about-container">
          <img src="/public/image3.jpg" alt="Мое фото" class="about-img" />
          <div class="about-info">
            <h3>Что я ищу</h3>
            <p class="about-text">
              Сейчас я активно ищу новые возможности как
              <strong>Frontend / Fullstack разработчик</strong> или
              <strong>Product Manager</strong>. Мне интересны проекты, где можно не только писать
              код, но и влиять на продукт: продумывать пользовательский опыт, предлагать улучшения и
              помогать команде становиться сильнее.
            </p>
            <p class="about-text">
              На сайте вы найдёте моё
              <router-link :to="{ name: 'portfolio' }" class="route protfolio"
                >портфолио</router-link
              >, описания проектов, с которыми я работал, и заметки о технологиях, которые мне
              близки.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </section>

    <section class="main-cards"></section>
  </main>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-section {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.about-container {
  display: flex;
  gap: 16px;
}
.about-img {
  min-width: 268px;
  max-width: 360px;
  min-height: 402px;
  max-height: 540px;
  object-fit: cover;
  border: 1px dashed rgba(0, 0, 0, 1);
  border-radius: 8px;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0px;
}

.about-text {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
}
</style>
