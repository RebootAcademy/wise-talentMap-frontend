<template>
  <div
    class="flex items-center gap-2 text-2xl font-bold bg-gradient-to-b from-primary-pink via-primary-violet to-secondary-blue bg-clip-text text-transparent">
    <Icon v-tooltip.top="{ value: 'Science', showDelay: 300, hideDelay: 300 }" icon="science" size="h-4 w-4 sm:w-6 sm:h-6" :color="steams.some((steam) => steam.name === 'Ciencia')
      ? 'primary-violet'
      : 'black'
      " />
    <Icon v-tooltip.top="{ value: 'Technology', showDelay: 300, hideDelay: 300 }" icon="technology" size="h-4 w-4 sm:w-6 sm:h-6"
      :color="steams.some((steam) => steam.name === 'Tecnología')
        ? 'primary-violet'
        : 'black'
        " />
    <Icon v-tooltip.top="{ value: 'Engineer', showDelay: 300, hideDelay: 300 }" icon="engineer" size="h-4 w-4 sm:w-6 sm:h-6"
      :color="steams.some((steam) => steam.name === 'Ingeniería')
        ? 'primary-violet'
        : 'black'
        " />
    <Icon v-tooltip.top="{ value: 'Art', showDelay: 300, hideDelay: 300 }" icon="art" size="w-3 h-3 sm:w-5 sm:h-5" :color="steams.some((steam) => steam.name === 'Arte')
      ? 'primary-violet'
      : 'black'
      " />
    <Icon v-tooltip.top="{ value: 'Math', showDelay: 300, hideDelay: 300 }" icon="math" size="w-3 h-3 sm:w-5 sm:h-5" :color="steams.some((steam) => steam.name === 'Matemáticas')
      ? 'primary-violet'
      : 'black'
      " />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Icon from './Icon.vue';
const props = defineProps({
  steams: {
    type: Array,
    required: true
  }
})
</script>
