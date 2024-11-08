<template>
  <div class="border border-deepGray flex rounded-md w-fit h-8 text-black cursor-pointer">
    <div
      :class="`border-r p-2.5 h-full flex items-center rounded-l-md ${store.filterType === 'canary' && 'bg-blue-300'}`"
      @click="() => store.filterType = 'canary'">
      Canarias
    </div>
    <div :class="`p-2.5 h-full flex items-center rounded-r-md ${store.filterType !== 'canary' && 'bg-blue-300'}`"
      @click="() => store.filterType = 'international'">
      Internacional
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user';

const store = useUserStore()

</script>
