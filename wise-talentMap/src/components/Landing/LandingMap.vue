<template>
  <div class="w-full flex flex-col md:flex-row items-center justify-center p-4 md:h-[570px] bg-[#CBA4FF]">
    <div class="flex flex-col gap-4 md:w-1/2 mb-8 md:mb-0 px-12 animate__animated animate__zoomIn">
      <h1 class="font-bebas text-4xl lg:text-6xl text-center text-anthraciteGray mb-4">
        Mapa interactivo
      </h1>
      <p class="text-lg lg:text-2xl text-center text-anthraciteGray">
        ¡Descubre el talento femenino en Canarias! Con nuestro mapa interactivo, podrás explorar perfiles destacados de
        mujeres en las áreas STEAM, organizados por especialidad y ubicación. Esta herramienta te permitirá conectar
        fácilmente con profesionales clave y acceder a una red de referentes que promueven una comunidad más inclusiva y
        diversa.
      </p>
      <CustomButton class="font-bebas border h-12 border-deepGray rounded-md self-center text-2xl"
        :clickFn="() => $router.push('/talentMap')">IR A LA HERRAMIENTA
      </CustomButton>
    </div>
    <!-- <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730806498/gifMapaTalento_dpvgka.gif"
      class="md:w-1/2 h-[250px] md:h-[300px] lg:h-[450px] px-12" /> -->
    <iframe src="https://www.youtube.com/embed/ls_Eue1xUtY?autoplay=1&mute=1&controls=0" title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="md:w-1/2 h-[250px] md:h-[300px] lg:h-[450px] px-12" frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue';
</script>
