<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showbutton = ref(true)
const showMenu = ref(false)
const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
  windowWidth.value = window.innerWidth

  if (windowWidth.value >= 1025) {
    showMenu.value = false
    showbutton.value = false
  }
  else if (windowWidth.value >= 669) {
    showbutton.value = true
    showMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
  updateWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <nav v-if="windowWidth >= 1025" class="route-container full-navigation">
    <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
    <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>
    <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
    <router-link :to="{ name: 'links' }" class="route links">Ссылки</router-link>
  </nav>

  <div v-else>
    <div class="navigate">
<button
  v-if="showbutton && windowWidth < 669"
  @click="showMenu = !showMenu"
  class="button button-nav"
>
  <img src="/public/burger.svg" class="navigate-img" />
</button>

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

.navigate-img {
  width: 25px;
  height: 25px;
}


.route {
  color: rgba(0, 0, 0, 1);
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}
.route:hover {
  color: rgba(0, 0, 0, 0.5);
}

.protfolio.router-link-exact-active {
  color: rgba(150, 200, 255);
  font-weight: 600;
}

.main.router-link-exact-active {
  color: rgba(150, 200, 255);
  font-weight: 600;
}

.projects.router-link-exact-active {
  color: rgba(150, 200, 255);
  font-weight: 600;
}

.links.router-link-exact-active {
  color: rgba(150, 200, 255);
  font-weight: 600;
}
/* Адаптивные стили */
@media (max-width: 668px) {
  .medium-navigation {
    display: none;
  }
  .navigate {
  height: auto;
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
