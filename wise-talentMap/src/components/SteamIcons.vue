<template>
  <div
    class="flex items-center gap-2 text-2xl font-bold bg-gradient-to-b from-primary-pink via-primary-violet to-secondary-blue bg-clip-text text-transparent"
  >
    <Icon
      icon="science"
      size="w-6 h-6"
      :color="
        steams.some((steam) => steam.name === 'Ciencia')
          ? 'primary-violet'
          : 'black'
      "
    />
    <Icon
      icon="technology"
      size="w-6 h-6"
      :color="
        steams.some((steam) => steam.name === 'Tecnología')
          ? 'primary-violet'
          : 'black'
      "
    />
    <Icon
      icon="engineer"
      extraStyles="22px"
      size=""
      :color="
        steams.some((steam) => steam.name === 'Ingeniería')
          ? 'primary-violet'
          : 'black'
      "
    />
    <Icon
      icon="art"
      size="w-5 h-5"
      :color="
        steams.some((steam) => steam.name === 'Arte')
          ? 'primary-violet'
          : 'black'
      "
    />
    <Icon
      icon="math"
      size="w-5 h-5"
      :color="
        steams.some((steam) => steam.name === 'Matemáticas')
          ? 'primary-violet'
          : 'black'
      "
    />
  </div>
</template>

<script setup>
import Icon from './Icon.vue';
import { defineProps } from 'vue';
const props = defineProps({
  steams: {
    type: Array,
    required: true
  }
})
</script>
