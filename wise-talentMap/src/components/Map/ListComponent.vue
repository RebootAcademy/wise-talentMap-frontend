<template>
  <div v-if="visible" class="list-component">
    <h3>Lista de Marcadores</h3>
    <ul>
      <li v-for="marker in props.markers" :key="marker.id"> {{ marker.firstName }} {{ marker.lastName }}</li>
    </ul>
    <button @click="close">Cerrar</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Definimos las propiedades
const props = defineProps({
  markers: {
    type: Array,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

// Definimos los eventos
const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.list-component {
  position: fixed;
  top: 50px;
  right: 50px;
  background: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
