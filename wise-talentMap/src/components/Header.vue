<template>
  <div
    class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8"
  >
    <img
      class="w-28 cursor-pointer"
      @click="() => $router.push('/')"
      src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png"
    />
    <div class="flex gap-2 items-center">
      <a href="https://www.wisecanarias.com" target="_blank">
        <CustomButton
        isHovered
          class="h-11 text-2xl border rounded-md flex items-center border-black"
        >
          WISE CANARIAS
        </CustomButton>
      </a>
      <a href="https://www.wisecanarias.com" target="_blank">
        <CustomButton
        isHovered
          class="h-11 text-2xl text-white bg-fourColors  rounded-md "
        >
          ACCESO AL TYPEFORM
        </CustomButton>
      </a>
    </div>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue'
</script>
