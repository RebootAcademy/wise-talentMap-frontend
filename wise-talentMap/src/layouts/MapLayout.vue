<template>
  <div class="h-screen w-screen">
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <p>HEADER LOGOTYPE</p>
      <Button :clickFn="() => console.log('lolo')" class="h-11 text-2xl bg-softGray">ENTORNO VIRTUAL</Button>
    </div>
    <div class="bg-white h-20 text-black flex justify-between items-center">
      <CustomInput icon="pi-search" placeholder="Buscar" class="w-20 h-8" v-model="searchParam" />
      <Button class="border rounded-md w-24 gap-2.5"><span class="pi pi-filter-slash" />Filtros</Button>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import Button from '@/components/CustomButton.vue'
import CustomInput from '@/components/CustomInput.vue';
import { ref } from 'vue';

const searchParam = ref('')
</script>
