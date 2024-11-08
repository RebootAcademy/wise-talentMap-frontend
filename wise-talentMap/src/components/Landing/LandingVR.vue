<template>
  <div class="w-full md:p-8 grid grid-cols-6 lg:grid-cols-12">
    <div
      class="lg:mb-0 px-4 py-6 col-span-6 lg:col-span-6 flex flex-col justify-center lg:gap-8 place-items-center gap-4 animate__animated animate__zoomIn">
      <h1 class="font-bebas text-3xl md:text-4xl lg:text-6xl text-center text-anthraciteGray mb-4">
        Entorno Virtual
      </h1>
      <img src="/vr.jpeg" class="lg:hidden">
      <p class="lg:text-2xl text-left text-anthraciteGray">
        El entorno virtual ofrece a las profesionales canarias una nueva ventana para mostrar sus experiencias y
        conectar con otras expertas. Con un diseño inmersivo y accesible desde ordenadores, móviles o gafas de realidad
        virtual, esta plataforma facilita el networking, la mentoría y la colaboración en proyectos innovadores. Además,
        permite la participación en conferencias y talleres, ampliando redes y fortaleciendo la comunidad STEAM en
        Canarias, donde cada interacción tiene el potencial de abrir nuevas oportunidades y empoderar a las mujeres en
        su desarrollo profesional.
      </p>
      <CustomButton isHovered class="font-bebas border h-12 py-3 border-deepGray rounded-md self-center"
        :clickFn="() => $router.push('/talentMap')">IR A LA HERRAMIENTA
      </CustomButton>
    </div>
    <img src="/vr.jpeg" class="hidden lg:block">
  </div>
</template>

<script setup>
import CustomButton from '../CustomButton.vue'
</script>
