<template>
  <!-- <div>
    <div class="w-full flex flex-col md:flex-row items-center px-12 py-12 gap-12">
      <LandingCard class="w-full md:w-1/2 animate__animated animate__slideInLeft"/>
      <LandingCard class="w-full md:w-1/2 animate__animated animate__slideInLeft"/>
    </div>
    <Banner />
  </div> -->
  <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 px-2 md:px-8 my-8">
    <LandingCard class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-6 animate__animated animate__slideInLeft"/>
    <LandingCard class="col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-6 animate__animated animate__slideInLeft"/>
    <p @click="handleAnimation">Click</p>
  </div>

</template>

<script setup>
import Banner from '../components/Banner.vue'
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '../stores/user.js'; // Asegúrate de usar la ruta correcta
const userStore = useUserStore()
import { getUsers } from '../services/user.services'
import SteamMap from '@/components/Map/SteamMap.vue'
import VR from '@/components/VR.vue'
import LandingCard from '@/components/LandingCard.vue'


const items = computed(() => userStore.getAllUsers)
const showMap = ref(false)


/* const changeShowMapStatus = () => {
  showMap.value = !showMap.value
  window.gtag('event', 'toggle_map', {
    event_category: 'interaction',
    event_label: showMap.value ? 'Map shown' : 'Map hidden',
    value: 1 // Puedes cambiar este valor según tu lógica
  });
} */





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
