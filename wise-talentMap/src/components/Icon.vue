<template>
  <div>
    <div v-html="iconComponentContent" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

const allowedIcons = {

}

const iconComponent = computed(() => {
  return allowedIcons[props.icon] || null
})

const iconComponentContent = computed(() => {
  return isSvg.value ? iconComponent.value : ''
})
</script>
