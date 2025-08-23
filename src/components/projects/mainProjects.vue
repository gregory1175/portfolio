<script setup lang="ts"></script>

<template>
  <main class="main projectSection">
    <section>
      <div>
        <div>
          <h2>Frontend case</h2>
        </div>
        <div>
          <h3>Procharity</h3>
          <p>TypeScript, React, Redux, Scss, Moleculer, Redis, Chromatic, Storybook, Jest</p>
        </div>
        <div>
          <p>
            Цифровая платформа для волонтерства и благотворительности, которая соединяет НКО с
            добровольцами и донорами. Сервис предоставляет инструменты для организации мероприятий,
            сбора пожертвований и управления волонтерской деятельностью. В рамках разработки я
            занимался созданием новых страниц, улучшением архитектуры по методологии FSD, внедрением
            админ-панели, постановкой задач команде и написанием документации в Storybook.
          </p>
          <router-link
            :to="{ name: 'projectDetail', params: { id: 'procharity' } }"
            class="route projects"
          >
            Подробнее
          </router-link>
        </div>
      </div>

      <div>
        <div>
          <h2>Fullstack case</h2>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div>
          <p></p>
          <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
        </div>
      </div>

      <div>
        <div>
          <h2>Product manager case</h2>
          <div>
            <h3></h3>
            <p></p>
          </div>
        </div>
        <div>
          <p></p>
          <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
