<template>
  <div class="bg-secondary-white text-anthraciteGray text-md rounded-md w-96 relative">
    <div class="relative bg-gray-300 h-20 rounded-t-md">
      <span class="absolute top-2 right-3 cursor-pointer" @click="close">x</span>
      <!-- <div class="absolute top-2 right-3 cursor-pointer" >
        <Icon icon="close" />
      </div> -->
    </div>
    <img :src="person.image" class="absolute h-20 w-20 top-10 left-4 object-cover rounded-full bg-gray-300" />
    <div class="flex flex-col p-4 px-6 mt-12 gap-2">
      <p class="font-bebas text-3xl mb-2">{{ person.firstName }} {{ person.lastName }}</p>
      <div class="flex gap-2">
        <Icon icon="location" />
        <p>{{ personLocation() }}</p>
      </div>
      <div class="flex gap-2">
        <span>Icono</span>
        <p>{{ person.steam }}</p>
      </div>
      <div class="flex gap-2">
        <Icon icon="job" />
        <p>{{ person.jobPosition }}</p>
      </div>
      <div class="flex gap-2">
        <Icon icon="linkedin" />
        <p>{{ person.linkedin }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useUserStore } from '@/stores/user.js';
import Icon from '../Icon.vue'
const userStore = useUserStore()

console.log(userStore.users)

const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})

console.log(props.person)

const personLocation = () => {
  if (props.person.location.type === "Canarias" ) {
    return props.person.location.municipality + ", " + props.person.location.island
  } else {
    return props.person.location.city + ", " + props.person.location.country
  }
}

const emit = defineEmits(['close']);

// Función para cerrar el componente
const close = () => {
  emit('close');
};
</script>

<style scoped>

</style>