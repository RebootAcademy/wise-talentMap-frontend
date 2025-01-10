<template>
  <div class="flex items-center justify-center">
    <component v-if="!isSvg" :is="iconComponent" aria-hidden="true" :class="`${size} fill-transparent text-${color}`" />
    <span v-else :class="`pi ${iconComponent} ${size} text-${color} ${isHovered && 'hover:text-primary-violet'}`"
      :style="`font-size: ${extraStyles} `"></span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import FilterSlider from '@/assets/Icons/FilterSlider.vue';
import FunctionMath from '@/assets/Icons/FunctionMath.vue';
import Laptop from '@/assets/Icons/Laptop.vue';
import Paintbrush from '@/assets/Icons/Paintbrush.vue';
import Science from '@/assets/Icons/Science.vue';
import EngineerIcon from '@/assets/Icons/EngineerIcon.vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'w-5 h-5'
  },
  color: {
    type: String,
    default: 'black'
  },
  extraStyles: {
    type: String,
    default: ''
  },
  isHovered: {
    type: Boolean,
    default: false
  }
})

const allowedIcons = {
  burguer: 'pi-bars',
  engineer: EngineerIcon,
  closeCircle: 'pi-times-circle',
  filterSlider: FilterSlider,
  close: 'pi-times',
  filterSlash: 'pi-filter-slash',
  math: FunctionMath,
  technology: Laptop,
  art: Paintbrush,
  science: Science,
  search: 'pi-search',
  linkedin: 'pi-linkedin',
  twitter: 'pi-twitter',
  instagram: 'pi-instagram',
  email: 'pi-envelope',
  location: 'pi-map-marker',
  job: 'pi-briefcase',
  back: 'pi-chevron-left',
  arrowUp: 'pi-arrow-up',
  eye: 'pi-eye',
  lock: 'pi-eye-slash',
  info: 'pi-info-circle'
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
