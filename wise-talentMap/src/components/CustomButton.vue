<template>
  <div
    class="cursor-pointer rounded-md py-2 px-4 flex items-center "
    :class="isHovered && 'hover:border-2 hover:border-primary-violet hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary-violet to-secondary-turquoise'"
    @click="clickFn"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  clickFn: {
    type: Function,
    default: () => () => {},
  },
  isHovered: {
    type: Boolean,
    default: false
  }
})
</script>
