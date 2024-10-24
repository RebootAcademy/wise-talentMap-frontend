<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user.js';
const userStore = useUserStore()
import Layout from './layouts/Layout.vue'


onMounted(async () => {
  await userStore.fetchUsers();
})
</script>