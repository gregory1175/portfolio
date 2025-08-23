<script setup lang="ts">
import { ref, watch } from 'vue'

const showbutton = ref(true)
const showMenu = ref(false)

const paddingValue = ref('8px')

watch(showMenu, (newVal) => {
  paddingValue.value = newVal ? '0' : '8px'
})
</script>

<template>
  <div class="navigate" :style="{ padding: paddingValue }">
    <button
      v-if="showbutton"
      @mousedown="((showbutton = false), (showMenu = true))"
      class="button button-nav"
    >
      <img src="/public/burger.svg" class="navigate-img" />
    </button>
    <h3
      v-if="showbutton"
      @mousedown="((showbutton = false), (showMenu = true))"
      class="navigate-title"
    >
      Навигация
    </h3>
  </div>
  <nav v-if="showMenu" class="route-container">
    <button class="button menu-button" @mousedown="((showbutton = true), (showMenu = false))">
      <p class="menu-text">скрыть меню</p>
    </button>
    <router-link :to="{ name: 'main' }" class="main route">Главная</router-link>
    <router-link :to="{ name: 'portfolio' }" class="route protfolio">Портфолио</router-link>
    <router-link :to="{ name: 'projects' }" class="route projects">Проекты</router-link>
    <!-- <router-link :to="{ name: 'links' }" class="route">Проекты</router-link>
    <router-link :to="{ name: 'links' }" class="route">Статьи</router-link> -->
    <router-link :to="{ name: 'links' }" class="route links">Ссылки</router-link>
  </nav>
</template>

<style scoped>
.navigate {
  display: flex;
  gap: 8px;
  position: fixed;
  left: 16px;
  top: 32px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 1);
  border: 1px dashed rgba(126, 126, 126, 0.4);
}

@media screen and (width <= 1068px) {
  .navigate {
    left: auto;
    right: 16px;
  }
}

.navigate-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
}

@media screen and (width <= 1068px) {
  .navigate-title {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
}

.navigate-title:hover {
  opacity: 0.5;
}

.navigate-img {
  width: 24px;
  height: 24px;
}

.navigate-img:hover {
  opacity: 0.5;
}

.button {
  border: none;
  background: none;
  text-align: start;
  padding: 0;
  margin: 0;
}

.menu-text {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
}

.button:hover {
  color: rgba(0, 0, 0, 0.5);
}

.button-nav {
  cursor: pointer;
}

.menu-button {
  cursor: pointer;
}
.route-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: fixed;
  left: 16px;
  top: 32px;
  border: 1px dashed rgba(126, 126, 126, 0.4);
  border-radius: 4px;
  padding: 12px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 1);
}

@media screen and (width <= 1068px) {
  .route-container {
    left: auto;
    right: 16px;
  }
}
.main {
  font-size: 16px !important;
  line-height: 24px !important;
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
</style>
