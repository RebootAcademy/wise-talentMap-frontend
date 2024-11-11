<template>
  <div
    class="h-full w-full bg-[url('https://res.cloudinary.com/dcfgavulz/image/upload/v1731316892/NotFound_rtjxr8.jpg')] bg-cover bg-center flex flex-col justify-center items-end text-white font-bebas">
    <div class="absolute inset-0 w-full h-[41rem] top-[5.5rem] bg-black opacity-50"></div>
    <div class="w-full flex flex-col justify-center text-right gap-8 mr-8 lg:mr-36 z-50">
      <h1 class="text-2xl lg:text-5xl md:text-4xl">¡VAYA! PARECE QUE ALGO NO HA SALIDO COMO ESPERÁBAMOS.</h1>
      <p class="text-xl lg:text-3xl md:text-2xl">LA PÁGINA QUE ESTÁS BUSCANDO NO EXISTE</p>
      <CustomButton class="w-fit border border-white text-lg self-end" :clickFn="() => $router.replace('/')">VOLVER
      </CustomButton>
    </div>
    <Footer class="w-full h-40 absolute bottom-0" />
  </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
import Footer from '@/components/Footer.vue';


</script>
