<template>
  <div class="w-full md:p-8 grid grid-cols-6 lg:grid-cols-12">
    <div
      class="lg:mb-0 px-4 py-6 col-span-6 lg:col-span-6 flex flex-col justify-center lg:gap-8 place-items-center gap-4 animate__animated animate__zoomIn">
      <h1 class="font-bebas text-3xl md:text-4xl lg:text-6xl text-center text-anthraciteGray mb-4">
        Mapa interactivo
      </h1>
      <div class="md:hidden flex items-center cursor-pointer" @click="() => $router.push('/talentMap')">
        <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
      </div>
      <p class="lg:text-2xl text-left text-anthraciteGray">
        ¡Descubre el talento femenino en Canarias! Con nuestro mapa interactivo, podrás explorar perfiles destacados de
        mujeres en las áreas STEAM, organizados por especialidad y ubicación. Esta herramienta te permitirá conectar
        fácilmente con profesionales clave y acceder a una red de referentes que promueven una comunidad más inclusiva y
        diversa.
      </p>
      <CustomButton class="font-bebas border h-12 py-3 border-deepGray rounded-md self-center" isHovered
        :clickFn="() => $router.push('/talentMap')">IR A LA HERRAMIENTA
      </CustomButton>
    </div>
    <div class="hidden col-span-6 content-center md:flex items-center cursor-pointer"
      @click="() => $router.push('/talentMap')">
      <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
    </div>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue';
</script>
