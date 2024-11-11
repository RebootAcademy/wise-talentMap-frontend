<template>
  <div class="
    w-full grid grid-cols-6
    md:p-8  md:grid md:grid-cols-8">
    <div class="
        px-4 py-6 col-span-6 flex flex-col justify-center  place-items-center gap-4 animate__animated animate__zoomIn
        md:col-span-8
        lg:mb-0 lg:grid lg:grid-cols-12 lg:gap-8">
      <h1 class="
        font-bebas text-3xl text-center text-anthraciteGray mb-4 
        smd:text-4xl
        md:text-5xl 
        lg:text-6xl lg:col-span-12">
        Entorno Virtual
      </h1>

      <img src="./../../assets/vrCorto.gif" class="
        w-full
        lg:col-span-7
        xl:col-span-6">
      <div class="
        flex flex-col gap-4
        lg:col-span-5 lg:flex lg:flex-col lg:gap-0
        xl:col-span-6 xl:gap-6">
        <p class="
          text-left text-anthraciteGray
          md:text-xl
          xl:text-2xl">
          El entorno virtual ofrece a las profesionales canarias una nueva ventana para mostrar sus experiencias y
          conectar con otras expertas. Con un diseño inmersivo y accesible desde ordenadores, móviles o gafas de
          realidad
          virtual, esta plataforma facilita el networking, la mentoría y la colaboración en proyectos innovadores.
        </p>
        <CustomButton isHovered class="
          font-bebas border h-12 py-3 mt-4 border-deepGray rounded-md self-center w-fit
          md:text-2xl" :clickFn="() => $router.push('/talentMap')">
          <span class="text-center w-full">IR A LA HERRAMIENTA</span>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue'
</script>
