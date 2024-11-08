<template>
  <div>
    <CookiesBanner />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user.js';
const userStore = useUserStore()
import Layout from './layouts/Layout.vue'
import CookiesBanner from './components/CookiesBanner.vue'



onMounted(async () => {
  await userStore.fetchUsers();
})
</script>