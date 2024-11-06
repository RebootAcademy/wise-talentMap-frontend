<template>
  <div class="w-full flex flex-col gap-8 md:flex-row items-center justify-center p-4 md:p-10 md:h-[570px]">
    <div class="flex flex-col gap-4 md:w-1/2 mb-8 md:mb-0 px-0 animate__animated animate__zoomIn">
      <h1 class="font-bebas text-3xl md:text-4xl lg:text-6xl text-center text-anthraciteGray mb-4">
        Mapa interactivo
      </h1>
      <p class="text-lg lg:text-2xl text-center text-anthraciteGray">
        ¡Descubre el talento femenino en Canarias! Con nuestro mapa interactivo, podrás explorar perfiles destacados de
        mujeres en las áreas STEAM, organizados por especialidad y ubicación. Esta herramienta te permitirá conectar
        fácilmente con profesionales clave y acceder a una red de referentes que promueven una comunidad más inclusiva y
        diversa.
      </p>
      <div class="md:hidden flex items-center">
        <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
      </div>
      <CustomButton class="font-bebas border h-12 border-deepGray rounded-md self-center text-2xl"
        :clickFn="() => $router.push('/talentMap')">IR A LA HERRAMIENTA
      </CustomButton>
    </div>
    <div class="hidden md:w-[40rem] md:h-[28rem] md:flex items-center">
      <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
    </div>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue';
</script>
