<template>
  <div class="w-full grid grid-cols-6 md:p-8 md:grid md:grid-cols-8">
    <div
      class="px-4 py-6 col-span-6 flex flex-col justify-center place-items-center gap-4 animate__animated animate__zoomIn md:col-span-8 lg:mb-0 lg:grid lg:grid-cols-12 lg:gap-8">
      <h1
        class="font-bebas text-3xl text-center text-anthraciteGray mb-4 smd:text-4xl md:text-5xl lg:text-6xl lg:col-span-12">
        Mapa interactivo
      </h1>
      <div class="flex items-center cursor-pointer md:col-span-4 lg:col-span-6 xl:hidden"
        @click="handleClick">
        <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
      </div>
      <div class="
        col-span-4 flex flex-col gap-4
        lg:col-span-6 lg:flex lg:flex-col lg:gap-0 
        xl:gap-6">
        <p class="text-left text-anthraciteGray md:text-xl xl:text-2xl">
          ¡Descubre el talento femenino en Canarias! Con nuestro mapa
          interactivo, podrás explorar perfiles destacados de mujeres en las
          áreas STEAM, organizados por especialidad y ubicación. Esta
          herramienta te permitirá conectar fácilmente con profesionales clave y
          acceder a una red de referentes que promueven una comunidad más
          inclusiva y diversa.
        </p>
        <CustomButton class="font-bebas border h-12 py-3 mt-4 border-deepGray rounded-md self-center md:text-2xl"
          isHovered :clickFn="handleClick">
          <span class="text-center w-full">IR A LA HERRAMIENTA</span>
        </CustomButton>
      </div>
      <div class="hidden xl:flex col-span-6 content-center  items-center cursor-pointer"
        @click=" handleClick">
        <img src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730823755/mapPreview_riwwxn.gif" />
      </div>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import CustomButton from '../CustomButton.vue'

const handleClick = () => {
  router.push('/talentMap')
  if (localStorage.getItem('cookiesAccepted') && window.gtag) {
    window.gtag('event', 'map_access', {
      event_category: 'map',
      event_label: 'Map Access',
      value: 1,
    })
  }
}
</script>
