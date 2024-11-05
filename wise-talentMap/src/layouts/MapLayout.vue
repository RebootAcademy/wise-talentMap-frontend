<template>
  <div class="h-screen w-full">
    <!-- Main header -->
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <img class="w-28 cursor-pointer" src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png" @click="() => router.push('/')">
      <div class="flex gap-2">
        <CustomButton :clickFn="() => console.log('Wise')" class="h-11 text-2xl border border-black">
          WISE CANARIAS
        </CustomButton>
        <CustomButton :clickFn="() => console.log('VR')" class="h-11 text-2xl text-white bg-fourColors">
          ENTORNO VIRTUAL
        </CustomButton>
      </div>
    </div>
    <!-- Filters bar -->
    <div
      :class="`bg-white h-20 text-black flex ${searchFocus ? 'gap-7' : 'justify-between '} items-center py-2.5 px-8`">
      <div class="w-full flex gap-7 items-center justify-center">
        <SteamFilterButtons />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomButton from '@/components/CustomButton.vue'
import CustomInput from '@/components/CustomInput.vue';
import SteamFilterButtons from '@/components/SteamFilterButtons.vue';
import router from '@/router'

const searchParam = ref('')
const searchFocus = ref(false)
const filtersVisible = ref(false)

const handleOpenModal = () => filtersVisible.value = !filtersVisible.value
const onFocus = () => searchFocus.value = true
const onBlur = () => searchFocus.value = false

</script>
