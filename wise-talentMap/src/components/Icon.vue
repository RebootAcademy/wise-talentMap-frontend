<template>
  <div>
    <component v-if="!isSvg" :is="iconComponent" aria-hidden="true" />
    <span v-else :class="`pi ${iconComponent}`"></span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FunctionMath from '@/assets/Icons/FunctionMath.vue';
import Laptop from '@/assets/Icons/Laptop.vue';
import Paintbrush from '@/assets/Icons/Paintbrush.vue';
import Science from '@/assets/Icons/Science.vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

const allowedIcons = {
  cog: 'pi-cog',
  closeCircle: 'pi-times-circle',
  filterSlash: 'pi-filter-slash',
  functionMath: FunctionMath,
  laptop: Laptop,
  paintbrush: Paintbrush,
  science: Science,
  search: 'pi-search',
}

const iconComponent = computed(() => {
  return allowedIcons[props.icon] || null
})

const isSvg = computed(() => {
  return typeof iconComponent.value === 'string'
})

const iconComponentContent = computed(() => {
  return isSvg.value ? iconComponent.value : ''
})
</script>
