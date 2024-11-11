<template>
  <div
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-fourColors rounded-full bottom-5 md:bottom-20 right-5 z-50 cursor-pointer"
  >
    <Icon icon="arrowUp" extraStyles="20px" color="white" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Icon from './Icon.vue';
import { onBeforeUnmount } from 'vue';

const props = defineProps({
  containerSelector: {
    type: String,
    default: 'window', // Por defecto, escucha los eventos de scroll de la ventana
  },
});

const isVisible = ref(false);
let scrollContainer = null;

function scrollToTop() {
  if (scrollContainer === window) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else if (scrollContainer) {
    scrollContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function handleScroll() {
  if (scrollContainer === window) {
    isVisible.value = window.scrollY > 100;
  } else if (scrollContainer) {
    isVisible.value = scrollContainer.scrollTop > 100;
  }
}

onMounted(() => {
  if (props.containerSelector === 'window') {
    scrollContainer = window;
    window.addEventListener('scroll', handleScroll);
  } else {
    scrollContainer = document.querySelector(props.containerSelector);
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
  }
});

onBeforeUnmount(() => {
  if (scrollContainer) {
    scrollContainer.removeEventListener('scroll', handleScroll);
  }
});
</script>

<style scoped>
.fixed {
  transition: opacity 0.3s ease-in-out; /* Transición para mostrar/ocultar suavemente */
}
</style>
