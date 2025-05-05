<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue'
import { getHello } from './auth'

const message = ref('')

onMounted(async () => {
  const response = await getHello()
  message.value = response.data.message
})
</script>

<template>
  <router-view />
  <h1>{{ message }}</h1>
</template>


