<template>
  <div>
    <div class="relative px-12 py-12">
        <Map v-if="showMap" class="w-full  animate__animated animate__slideInLeft "/>
      <p  class="absolute top-1/2  text-4xl " :class="showMap ? 'left-2 rotate-180' : ' right-2'" @click="changeShowMapStatus">></p>
      <VR v-if="!showMap" class="w-full animate__animated animate__slideInRight" />
    </div>
 <Banner />
  </div>
</template>

<script setup>
import Banner from '../components/Banner.vue'
import {ref, onMounted, computed} from 'vue'
import {useUserStore} from '../stores/user.js'; // Asegúrate de usar la ruta correcta
const userStore = useUserStore()
import {getUsers} from '../services/user.services'
import Map from '@/components/Map.vue'
import VR from '@/components/VR.vue'

const items = computed(() => userStore.getAllUsers )
const showMap = ref(false)


const changeShowMapStatus = () => {
  showMap.value = !showMap.value
window.gtag('event', 'toggle_map', {
    event_category: 'interaction',
    event_label: showMap.value ? 'Map shown' : 'Map hidden',
    value: 1 // Puedes cambiar este valor según tu lógica
  });
}


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

