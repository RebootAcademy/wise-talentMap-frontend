<template>
  <div :class="`h-[80.9%] flex relative`">
    <Drawer v-if="store.openDrawer" class="w-full md:w-1/2 transition ease-in-out duration-500" />
    <div :class="`h-full ${store.openDrawer ? ' md:w-1/2' : 'w-full'}`">
      <SteamMap />
    </div>
  </div>
</template>

<script setup>
import Drawer from '@/components/Drawer/Drawer.vue'
import { useUserStore } from '@/stores/user'
import SteamMap from '@/components/Map/SteamMap.vue'

const store = useUserStore()
</script>
