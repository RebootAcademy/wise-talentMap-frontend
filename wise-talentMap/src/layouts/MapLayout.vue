<template>
  <div class="h-screen w-full">
    <!-- Main header -->
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <p>HEADER LOGOTYPE</p>
      <Button :clickFn="() => console.log('lolo')" class="h-11 text-2xl bg-softGray">ENTORNO VIRTUAL</Button>
    </div>
    <!-- Filters bar -->
    <div
      :class="`bg-white h-20 text-black flex ${searchFocus ? 'gap-7' : 'justify-between '} items-center py-2.5 px-8`">
      <CustomInput icon="pi-search" placeholder="Buscar" :class="`${searchFocus ? 'w-full' : 'w-20'} h-8`"
        v-model="searchParam" :onFocus="onFocus" :onBlur="onBlur" />
      <div class="flex gap-7 items-center">
        <Button v-for="(option, idx) in steam" :key="idx"
          class="flex gap-2 items-center border border-mediumGray rounded-[16px]">
          <Icon :icon="option.icon" />
          <span>{{ option.name }}</span>
        </Button>
      </div>
      <Button class="border rounded-md w-24 gap-2.5">
        <Icon icon="filterSlash" />Filtros
      </Button>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import Button from '@/components/CustomButton.vue'
import CustomInput from '@/components/CustomInput.vue';
import Icon from '@/components/Icon.vue';
import { ref } from 'vue';

const searchParam = ref('')
const searchFocus = ref(false)
const steam = [
  {
    name: 'Science',
    icon: 'science'
  },
  {
    name: 'Technology',
    icon: 'laptop'
  },
  {
    name: 'Engineer',
    icon: 'cog'
  },
  {
    name: 'Art',
    icon: 'paintbrush'
  },
  {
    name: 'Math',
    icon: 'functionMath'
  }
]

const onFocus = () => searchFocus.value = true
const onBlur = () => searchFocus.value = false

</script>
