<template>
  <div class="w-full flex flex-col-reverse items-center justify-center py-8 lg:mx-10 lg:h-[34rem] lg:flex-row">
    <iframe src="https://www.youtube.com/embed/ls_Eue1xUtY?autoplay=1&mute=1&controls=0" title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      class="hidden lg:block lg:w-1/2 h-[250px] lg:h-[450px] lg:px-12" frameborder="0"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <div class="flex flex-col gap-4 lg:w-1/2 px-4 lg:px-12 mb-8 lg:mb-0">
      <h1 class="font-bebas text-4xl lg:text-6xl text-center text-anthraciteGray mb-4">
        Entorno Virtual
      </h1>
      <p class="md:text-2xl text-lg text-center text-anthraciteGray">
        El entorno virtual ofrece a las profesionales canarias una nueva ventana para mostrar sus experiencias y
        conectar con otras expertas. Con un diseño inmersivo y accesible desde ordenadores, móviles o gafas de realidad
        virtual, esta plataforma facilita el networking, la mentoría y la colaboración en proyectos innovadores. Además,
        permite la participación en conferencias y talleres, ampliando redes y fortaleciendo la comunidad STEAM en
        Canarias, donde cada interacción tiene el potencial de abrir nuevas oportunidades y empoderar a las mujeres en
        su desarrollo profesional.
      </p>
      <iframe src="https://www.youtube.com/embed/ls_Eue1xUtY?autoplay=1&mute=1&controls=0" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        class="md:hidden md:w-1/2 h-[250px] lg:h-[450px] md:h-[300px] md:px-12" frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <CustomButton
        class="font-bebas border h-12 flex items-center border-deepGray rounded-md self-center text-2xl px-4 py-2"
        :clickFn="() => console.log('Ir a entorno virtual')">IR A LA HERRAMIENTA
      </CustomButton>
    </div>
  </div>
</template>

<script setup></script>
