<template>
  <div
    class="relative flex flex-col items-center bg-secondary-white gap-6 px-4 min-w-full max-w-[300px] xl:min-h-[350px] 2xl:min-h-[330px] max-h-[350px] rounded-md cursor-pointer"
    @mouseover="handleMouseOver"
    @mouseleave="isHovered = false"
    :class="
      isSelectedPerson || isHovered
        ? 'border-2 border-primary-violet'
        : 'border border-blueGradient'
    "
  >
    <Divider
      type="fourColors"
      customWidth="w-[80%]"
      class="absolute top-20 z-10 origin-center transition-transform duration-300 ease-in-out"
      :class="isHovered ? 'scale-x-100' : 'scale-x-0'"
    />

    <div class="pt-6 mb-2 z-20">
      <img
        :src="person.image  ? person.image : '/defaultImg.png'"
        class="h-24 w-24 md:h-32 md:w-32 top-10 left-4 object-cover rounded-full border border-secondary-turquoise"
      />
    </div>

    <div class="flex flex-col gap-4 pb-6 w-full h-full">
      <p class="font-bebas md:text-xl">
        {{ person.firstName }} {{ person.lastName }}
      </p>
      <div class="flex flex-col gap-4 h-full  ">
        <SteamIcons :steams="person.steam" />
        <div class="flex gap-2">
          <Icon icon="job" />
          <p class="card-title text-xs md:text-sm">{{ person.jobPosition }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed, ref} from 'vue'
import Icon from '../Icon.vue'
import SteamIcons from '../SteamIcons.vue'
import Divider from '../Divider.vue'
import {useUserStore} from '@/stores/user'
const store = useUserStore()
const isHovered = ref(false)

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const isSelectedPerson = computed(() => {
  if (!store.cardPerson) {
    return false
  }
  return store.cardPerson.email === props.person.email
})

const handleMouseOver = () => {
  isHovered.value = true
}
</script>

<style scoped>
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
