<template>
  <div
    class="flex items-center justify-center w-full h-full bg-black/5"
    @click="close"
  >
    <div
      class="bg-secondary-white text-anthraciteGray text-md rounded-md w-96 relative"
      @click.stop
    >
      <div class="relative bg-gray-300 h-20 rounded-t-md">
        <Icon
          icon="closeCircle"
          class="absolute top-3 right-3 opacity-60 cursor-pointer hover:opacity-100"
          color="primary-violet"
          @click="close"
        />
        <!-- <div class="absolute top-2 right-3 cursor-pointer" >
          <Icon icon="close" />
        </div> -->
      </div>
      <img
        :src="person.image"
        class="absolute h-20 w-20 top-10 left-4 object-cover rounded-full bg-gray-300"
      />
      <div class="flex flex-col p-4 px-6 mt-12 gap-2">
        <p class="font-bebas text-3xl mb-2">
          {{ person.firstName }} {{ person.lastName }}
        </p>
        <div class="flex gap-2">
          <Icon icon="location" />
          <p>{{ personLocation() }}</p>
        </div>
        <!-- <div v-for="steam in person.steam" :key="steam" class="flex gap-2">
          <Icon :icon="switchEnglishSteamName(steam.name).toLocaleLowerCase()" />
          <p>{{steam.name }}</p>
        </div> -->
        <div
          class="flex gap-2 ml-7 text-2xl font-bold bg-gradient-to-b from-primary-pink via-primary-violet to-secondary-blue bg-clip-text text-transparent"
        >
          <span
            :class="
              !person.steam.some((steam) => steam.name === 'Ciencia') &&
              'text-white'
            "
            >S</span
          >
          <span
            :class="
              !person.steam.some((steam) => steam.name === 'Tecnología') &&
              'text-white'
            "
            >T</span
          >
          <span
            :class="
              !person.steam.some((steam) => steam.name === 'Ingeniería') &&
              'text-white'
            "
            >E</span
          >
          <span
            :class="
              !person.steam.some((steam) => steam.name === 'Arte') &&
              'text-white'
            "
            >A</span
          >
          <span
            :class="
              !person.steam.some((steam) => steam.name === 'Matemáticas') &&
              'text-white'
            "
            >M</span
          >
        </div>
        <div class="flex gap-2">
          <Icon icon="job" />
          <p>{{ person.jobPosition }}</p>
        </div>
        <div class="flex gap-2">
          <Icon icon="linkedin" />
          <a
            :href="person.linkedin"
            target="_blank"
            class="text-primary-violet hover:text-primary-violet/70"
            ><p>
              /{{ person.firstName.toLocaleLowerCase()
              }}{{ person.lastName.split(' ').join('').toLocaleLowerCase() }}
            </p></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'
import {useUserStore} from '@/stores/user.js'
import Icon from '../Icon.vue'
import {switchEnglishSteamName} from '@/utils'
const userStore = useUserStore()

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const personLocation = () => {
  if (props.person.location?.type === 'Canarias') {
    return (
      props.person.location.municipality + ', ' + props.person.location.island
    )
  } else {
    return props.person.location?.city + ', ' + props.person.location?.country
  }
}

const emit = defineEmits(['close'])

// Función para cerrar el componente
const close = () => {
  emit('close')
}
</script>

<style scoped>
span {
  font-weight: 700;
  -webkit-text-stroke: 0.5px #881bf5;
  transition: 0.5s;
}
</style>
