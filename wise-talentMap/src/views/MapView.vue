<template>
  <div class="h-full lg:h-[80.9%] flex relative">
    <Drawer v-if="store.openDrawer" class="w-full lg:w-1/2 transition ease-in-out duration-500" />
    <div :class="`h-full ${store.openDrawer ? 'md:w-1/2' : 'w-full'}`">
      <SteamMap />
    </div>
    <div v-if="store.loader" class="absolute h-full w-full z-[1002]"
      :class="`${!store.loader && 'animate_animated animate_zoomOut'} `">
      <Loader />
    </div>
  </div>
</template>

<script setup>
import Drawer from '@/components/Drawer/Drawer.vue'
import { useUserStore } from '@/stores/user'
import SteamMap from '@/components/Map/SteamMap.vue'
import Loader from '@/components/Loader.vue'

const store = useUserStore()
</script>
