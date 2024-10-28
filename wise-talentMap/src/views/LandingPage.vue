<template>
  <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 px-2 md:px-8 my-8">
    <LandingCard class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-6 animate__animated animate__slideInLeft"/>
    <LandingCard class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-6 animate__animated animate__slideInLeft"/>
    <Banner class="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-12"/>
  </div>
</template>

<script setup>
import Banner from '../components/Banner.vue'
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '../stores/user.js'; // Asegúrate de usar la ruta correcta
const userStore = useUserStore()
import { getUsers } from '../services/user.services'
import LandingCard from '@/components/LandingCard.vue'


const items = computed(() => userStore.getAllUsers)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
