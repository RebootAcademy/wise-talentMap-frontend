<template>
  <div class="card">
    <span class="x" @click="close">X</span>
    <p>{{ props.person.firstName + ' ' + props.person.lastName }}</p>
    <li v-for="(sectors, idx) in props.person.sectors" :key="idx">{{ sectors }}</li>

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close']);

// Función para cerrar el componente
const close = () => {
  emit('close');
};
</script>

<style scoped>
.card {
  position: relative;
  background-color: #f0f0f0;
  color: black;
  padding: 15px;
  padding-right: 48px;
  padding-left: 48px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.x {
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 18px;
  cursor: pointer;
}
</style>