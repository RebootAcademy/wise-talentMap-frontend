<template>
  <div
    class="flex flex-col items-center bg-secondary-white gap-6 px-4 min-w-[210px] max-w-[300px] min-h-[330px] max-h-[350px] rounded-md cursor-pointer"
    :class="
      isSelectedPerson
        ? 'border-2 border-primary-violet'
        : 'border border-blueGradient'
    "
  >
  <div class="pt-6 mb-2">
      <img
        :src="person.image"
        class="h-32 w-32 top-10 left-4 object-cover rounded-full border border-secondary-turquoise"
      />
  </div>
    <div class="flex flex-col gap-4 pb-6 w-full h-full ">
      <p class="font-bebas text-xl">
        {{ person.firstName }} {{ person.lastName }}
      </p>
      <div class="flex flex-col gap-4 mt-4 h-full justify-end ">
        <SteamIcons :steams="person.steam" />
        <div class="flex gap-2">
          <Icon icon="job" />
          <p class="card-title text-sm">{{ person.jobPosition }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue'
import Icon from '../Icon.vue'
import SteamIcons from '../SteamIcons.vue'
import {useUserStore} from '@/stores/user'
const store = useUserStore()

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
</script>

<style scoped>
.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
