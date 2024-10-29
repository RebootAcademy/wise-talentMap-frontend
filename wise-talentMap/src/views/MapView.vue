<template>
  <div :class="`h-[83%] flex`">
    <div v-if="store.openDrawer" class="h-full w-full md:w-1/2 bg-white transition ease-in-out duration-500">
      <p>cucu</p>
    </div>
    <div :class="`h-full ${store.openDrawer ? ' md:w-1/2' : 'w-full'}`">
      <SteamMap />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user"
import SteamMap from '@/components/Map/SteamMap.vue';

const store = useUserStore()

</script>
