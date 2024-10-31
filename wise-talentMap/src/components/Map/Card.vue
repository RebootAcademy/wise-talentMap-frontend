<template>
  <div
    class="flex items-center justify-center h-full bg-black/5"
    @click="close"
  >
    <div
      class="bg-secondary-white text-anthraciteGray text-md rounded-md min-w-[442px] max-w-[450px]  relative"
      @click.stop
    >
      <div class="relative bg-twoColorsBlue h-24 rounded-t-md">
        <Icon
          icon="close"
          class="absolute top-4 right-4 cursor-pointer hover:opacity-40"
          color="white"
          @click="close"
        />
        <!-- <div class="absolute top-2 right-3 cursor-pointer" >
          <Icon icon="close" />
        </div> -->
      </div>
      <img
        :src="person.image"
        class="absolute h-24 w-24 top-12 left-6 object-cover rounded-full bg-gray-300"
      />
      <div class="flex flex-col p-4 py-6 px-6 mt-12 gap-4">
        <p class="font-bebas text-3xl mb-1">
          {{ person.firstName }} {{ person.lastName }}
        </p>

        <div
          class="flex items-center gap-2 text-2xl font-bold bg-gradient-to-b from-primary-pink via-primary-violet to-secondary-blue bg-clip-text text-transparent"
        >
          <Icon
            icon="science"
            size="w-6 h-6"
            :color="
              person.steam.some((steam) => steam.name === 'Ciencia')
                ? 'primary-violet'
                : 'black'
            "
          />
          <Icon
            icon="technology"
            size="w-6 h-6"
            :color="
              person.steam.some((steam) => steam.name === 'Tecnología')
                ? 'primary-violet'
                : 'black'
            "
          />
          <Icon
            icon="engineer"
            extraStyles="22px"
            size=""
            :color="
              person.steam.some((steam) => steam.name === 'Ingeniería')
                ? 'primary-violet'
                : 'black'
            "
          />
          <Icon
            icon="art"
            size="w-5 h-5"
            :color="
              person.steam.some((steam) => steam.name === 'Arte')
                ? 'primary-violet'
                : 'black'
            "
          />
          <Icon
            icon="math"
            size="w-5 h-5"
            :color="
              person.steam.some((steam) => steam.name === 'Matemáticas')
                ? 'primary-violet'
                : 'black'
            "
          />
        </div>
        <div class="flex gap-2">
          <Icon icon="location" />
          <p>{{ personLocation() }}</p>
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
              {{ person.firstName.split(' ').join('')
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
