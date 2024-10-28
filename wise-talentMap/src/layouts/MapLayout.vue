<template>
  <div class="h-screen w-screen">
    <div class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <p>HEADER LOGOTYPE</p>
      <Button :clickFn="() => console.log('lolo')" class="h-11 text-2xl bg-softGray">ENTORNO VIRTUAL</Button>
    </div>
    <div class="bg-white h-20 text-black">Filters</div>
    <RouterView />
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'


</script>
