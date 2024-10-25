<template>
  <div>
    <div class="w-full flex flex-col md:flex-row items-center px-24 py-12 gap-12">
      <!--   <Map v-if="showMap" class="w-full  animate__animated animate__slideInLeft "/>
      <p  class="absolute top-1/2  text-4xl " :class="showMap ? 'left-2 rotate-180' : ' right-2'" @click="changeShowMapStatus">></p>
      <VR v-if="!showMap" class="w-full animate__animated animate__slideInRight" /> -->
      <LandingCard class="w-full md:w-1/2 animate__animated animate__slideInLeft"/>
      <LandingCard class="w-full md:w-1/2 animate__animated animate__slideInLeft"/>
    </div>
    <Banner />
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
