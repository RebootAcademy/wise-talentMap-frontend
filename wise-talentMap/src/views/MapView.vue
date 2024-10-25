<template>
  <div :class="`h-[83%] grid grid-cols-12`">
    <div v-if="store.openDrawer" class="h-full col-span-6 bg-white transition ease-in-out duration-500">
      <p>cucu</p>
    </div>
    <div :class="`h-full ${store.openDrawer ? 'col-span-6' : 'col-span-12'}`">
      <SteamMap />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user"
import SteamMap from '@/components/Map/SteamMap.vue';

const store = useUserStore()

</script>
