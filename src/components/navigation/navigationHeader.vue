<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showbutton = ref(true)
const showMenu = ref(false)
const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth

  // Автоматически скрываем меню при переходе на большой экран
  if (windowWidth.value >= 1025) {
    showMenu.value = false
    showbutton.value = false
  }
  // Для средних экранов показываем кнопку и скрываем меню
  else if (windowWidth.value >= 669) {
    showbutton.value = true
    showMenu.value = false
  }
  // Для маленьких экранов оставляем текущее состояние
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
  updateWidth() // Инициализируем при монтировании
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <!-- Навигация для больших экранов -->
  <nav v-if="windowWidth >= 1025" class="route-container full-navigation">
    <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
    <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>
    <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
    <router-link :to="{ name: 'links' }" class="route links">Ссылки</router-link>
  </nav>

  <!-- Мобильная навигация -->
  <div v-else>
    <div class="navigate">
      <button
        v-if="showbutton && windowWidth < 669"
        @mousedown="((showbutton = true), (showMenu = false))"
        class="button button-nav"
      >
        <img src="/public/burger.svg" class="navigate-img" />
      </button>

      <!-- Навигация для средних экранов (669-1024) -->
      <nav v-if="windowWidth >= 669 && windowWidth < 1025" class="medium-navigation">
        <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
        <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>
        <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
        <router-link :to="{ name: 'links' }" class="route links">Ссылки</router-link>
      </nav>
    </div>

    <nav v-if="showMenu && windowWidth < 669" class="route-container mobile-menu">
      <button class="button menu-button" @mousedown="((showbutton = true), (showMenu = false))">
        <p class="menu-text">скрыть меню</p>
      </button>
      <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
      <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>
      <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
      <router-link :to="{ name: 'links' }" class="route links">Ссылки</router-link>
    </nav>
  </div>
</template>

<style scoped>
.navigate {
  width: 100vw;
  height: 32px;
  border-bottom: 1px dashed rgba(0, 0, 0, 1);
  position: fixed;
  display: flex;
  gap: 16px;
  padding: 8px;
  background: white;
  z-index: 1000;
}

.route-container {
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  width: 100vw;
  height: 32px;
  border-bottom: 1px dashed rgba(0, 0, 0, 1);
  padding: 8px;
  background: white;
  z-index: 1000;
}

.full-navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.medium-navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.mobile-menu {
  flex-direction: column;
  height: auto;
  min-height: 200px;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding-top: 48px;
}

/* Адаптивные стили */
@media (max-width: 668px) {
  .medium-navigation {
    display: none;
  }
}

@media (min-width: 669px) and (max-width: 1024px) {
  .button-nav {
    display: none;
  }
}

@media (min-width: 1025px) {
  .navigate {
    display: none;
  }
}
</style>
