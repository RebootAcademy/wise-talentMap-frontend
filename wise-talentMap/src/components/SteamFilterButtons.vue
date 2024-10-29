<template>
  <CustomButton v-for="(option, idx) in store.steam" :key="idx"
    :class="`flex gap-2 items-center ${checkSelection(option.filterValue) ? 'border-2 font-bold' : 'border'} border-mediumGray rounded-2xl`"
    :clickFn="() => checkSteamFilter(option.filterValue)">
    <Icon :icon="option.icon" />
    <span>{{ option.name }}</span>
  </CustomButton>
</template>

<script setup>
import { useUserStore } from '@/stores/user';
import CustomButton from './CustomButton.vue';
import Icon from './Icon.vue';

const store = useUserStore()

const checkSelection = (param) => store.steamFilter.includes(param)

const checkSteamFilter = (option) => {
  if (checkSelection(option)) {
    const index = store.steamFilter.indexOf(option)
    store.steamFilter.splice(index, 1)
  } else {
    store.steamFilter.push(option)
  }
}
</script>
