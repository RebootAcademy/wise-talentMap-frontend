<template>
  <div class="h-screen w-full">
    <!-- Main header -->
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <p>HEADER LOGOTYPE</p>
      <CustomButton :clickFn="() => console.log('lolo')" class="h-11 text-2xl bg-softGray">ENTORNO VIRTUAL
      </CustomButton>
    </div>
    <!-- Filters bar -->
    <div
      :class="`bg-white h-20 text-black flex ${searchFocus ? 'gap-7' : 'justify-between '} items-center py-2.5 px-8`">
      <CustomInput icon="pi-search" placeholder="Buscar" :class="`${searchFocus ? 'w-full' : 'w-20'} h-8`"
        v-model="searchParam" :onFocus="onFocus" :onBlur="onBlur" />
      <div class="flex gap-7 items-center">
        <CustomButton v-for="(option, idx) in store.steam" :key="idx"
          class="flex gap-2 items-center border border-mediumGray rounded-2xl">
          <Icon :icon="option.icon" />
          <span>{{ option.name }}</span>
        </CustomButton>
      </div>
      <CustomButton class="border rounded-md w-24 gap-2.5" :clickFn="handleOpenModal">
        <Icon icon="filterSlash" />Filtros
      </CustomButton>
    </div>
    <RouterView />
    <FilterModal :filtersVisible="filtersVisible" :handleVisibility="handleOpenModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomButton from '@/components/CustomButton.vue'
import CustomInput from '@/components/CustomInput.vue';
import FilterModal from '@/components/FilterModal.vue';
import Icon from '@/components/Icon.vue';
import { useUserStore } from '@/stores/user';

const store = useUserStore()
const searchParam = ref('')
const searchFocus = ref(false)
const filtersVisible = ref(false)

const handleOpenModal = () => filtersVisible.value = !filtersVisible.value
const onFocus = () => searchFocus.value = true
const onBlur = () => searchFocus.value = false

</script>
