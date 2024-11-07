<template>
  <div
    class="flex items-center smd:items-start md:items-center lg:items-center justify-center h-full bg-anthraciteGray/5 "
    @click="close">
    <div
      class="bg-secondary-white text-anthraciteGray text-md rounded-md min-w-[24rem] max-w-[30rem] h-fit md:max-h-[75vh] lg:h-auto relative  border-blueGradient"
      @click.stop>
      <div class="relative bg-twoColorsBlue h-16 lg:h-24 rounded-t-md">
        <Icon icon="close" class="absolute top-4 right-4 cursor-pointer hover:opacity-40" extraStyles="16px"
          color="white" @click="close" />
        <!-- <div class="absolute top-2 right-3 cursor-pointer" >
          <Icon icon="close" />
        </div> -->
      </div>
      <img :src="person.image ? person.image : '/defaultImg.png'"
        class="absolute w-20 h-20 lg:h-28 lg:w-28 top-6 lg:top-10 left-6 object-cover border border-secondary-turquoise rounded-full bg-gray-300" />
      <div class="flex flex-col py-2 lg:py-6 px-6 mt-10 lg:mt-14 gap-2 lg:gap-4">
        <p class="font-bebas text-xl lg:text-3xl lg:mb-1">
          {{ person.firstName }} {{ person.lastName }}
        </p>
        <div class="flex flex-row justify-between">
          <SteamIcons :steams="person.steam" />
          <div class="flex gap-2 lg:hidden">
            <a :href="person.linkedin" target="_blank"
              class="flex gap-2 text-sm items-center text-primary-violet hover:text-primary-violet/70">
              Ver perfil
              <Icon icon="linkedin" extraStyles="1rem" />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap lg:flex-col">
          <div class="flex gap-2">
            <Icon icon="location" />
            <p>{{ personLocation() }}</p>
          </div>
          <div class="flex gap-2">
            <Icon icon="job" />
            <p class="card-title">{{ person.jobPosition }}</p>
          </div>
          <div class="hidden lg:flex gap-2">
            <Icon icon="linkedin" />
            <a :href="person.linkedin" target="_blank" class="text-primary-violet hover:text-primary-violet/70">
              <p>
                {{ person.firstName.split(' ').join('')
                }}{{ person.lastName.split(' ').join('').toLocaleLowerCase() }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useUserStore } from '@/stores/user.js'
import Icon from '../Icon.vue'
import { switchEnglishSteamName } from '@/utils'
import SteamIcons from '../SteamIcons.vue'
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
      props.person.location.island + ', ' + props.person.location.municipality
    )
  } else {
    return props.person.location?.country + ', ' + props.person.location?.city
  }
}

const emit = defineEmits(['close'])

// Función para cerrar el componente
const close = () => {
  userStore.cardPerson = null
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
