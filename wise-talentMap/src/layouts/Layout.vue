<template>
  <div class="flex flex-col w-full min-h-screen bg-secondary-white text-anthraciteGray overflow-x-hidden">
    <Header />
    <RouterView/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { onMounted } from 'vue';

onMounted(() => {
  
  window.gtag('event', 'user_connected', {
    event_category: 'user',
    event_label: 'User Connected',
    value: 1
  });
});
</script>
