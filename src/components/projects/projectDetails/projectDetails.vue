<script setup lang="ts">
import { defineProps } from 'vue'
import { projects } from '@/data/projectsData'
import { useRouter } from 'vue-router'
const props = defineProps<{ id: string }>()

const project = projects.find((p) => p.id === props.id)
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <button @click="goBack" class="button back">Назад</button>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.stack }}</p>
    <p>{{ project.description }}</p>
  </div>
  <div v-else>
    <p>Проект не найден</p>
  </div>
</template>
