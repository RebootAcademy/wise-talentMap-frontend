<template>
  <div class="cursor-pointer rounded-md py-2 px-4 flex items-center" @click="clickFn">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  clickFn: {
    type: Function,
    default: () => () => { }
  }
})
</script>
