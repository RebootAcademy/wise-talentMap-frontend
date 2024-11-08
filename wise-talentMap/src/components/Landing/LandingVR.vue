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
      <img src="/vr.jpeg" class="
        lg:col-span-7 
        lg:hidden">
      <div class="lg:col-span-7 lg:flex lg:flex-col lg:gap-8">
        <p class="
          text-left text-anthraciteGray
          md:text-xl">
          El entorno virtual ofrece a las profesionales canarias una nueva ventana para mostrar sus experiencias y
          conectar con otras expertas. Con un diseño inmersivo y accesible desde ordenadores, móviles o gafas de
          realidad
          virtual, esta plataforma facilita el networking, la mentoría y la colaboración en proyectos innovadores.
          Además,
          permite la participación en conferencias y talleres, ampliando redes y fortaleciendo la comunidad STEAM en
          Canarias, donde cada interacción tiene el potencial de abrir nuevas oportunidades y empoderar a las mujeres en
          su desarrollo profesional.
        </p>
        <CustomButton isHovered class="
          font-bebas border h-12 py-3 border-deepGray rounded-md self-center
          md:text-2xl" :clickFn="() => $router.push('/talentMap')">IR A LA HERRAMIENTA
        </CustomButton>
      </div>
      <img src="/vr.jpeg" class="hidden lg:block lg:col-span-5">
    </div>
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue'
</script>
