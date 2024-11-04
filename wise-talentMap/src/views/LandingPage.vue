<template>
  <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 ">
    <LandingBanner class="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-12"/>
    <LandingMap class="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-12 animate__animated animate__slideInLeft"/>
    <LandingVR class="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-12 animate__animated animate__slideInRight"/>
    <LandingGoals class="col-span-4 sm:col-span-4 md:col-span-6 lg:col-span-12 animate__animated animate__slideInLeft"/>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import LandingBanner from '../components/Landing/LandingBanner.vue'
import LandingMap from '@/components/Landing/LandingMap.vue';
import LandingVR from '@/components/Landing/LandingVR.vue'
import LandingGoals from '@/components/Landing/LandingGoals.vue'
import { useUserStore } from '../stores/user.js'; // Asegúrate de usar la ruta correcta
const userStore = useUserStore()
import { getUsers } from '../services/user.services'
import { useRouter } from 'vue-router'
const router = useRouter()

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
