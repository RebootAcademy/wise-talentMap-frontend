<template>
    <div class="
            bg-cover bg-right grid grid-cols-6
            smd:grid-cols-4
            md:grid-cols-8
            lg:grid-cols-12"
        style="background-image: url('/homePageBanner2.webp')">
        <div class="
                col-span-6 flex justify-center items-center bg-threeColorsBanner 
                smd:col-span-4
                md:col-span-8 md:grid md:grid-cols-8
                lg:col-span-12 lg:grid lg:grid-cols-12">
            <div class="
                    px-0 py-12
                    md:px-12 md:col-start-2 md:col-end-8 md:gap-8
                    lg:px-16 lg:col-start-2 lg:col-end-12 lg:gap-8">
                <h1 class="
                        font-bebas text-3xl text-center text-secondary-white mb-4
                        md:text-4xl
                        lg:text-5xl">
                    ¿Que es el mapa de talento wise c?
                </h1>
                <p class="
                        text-center text-secondary-white
                        lg:text-xl
                        xl:text-2xl" :class="{ 'expanded': isExpanded }" @click="toggleExpand">
                    {{ isExpanded ? fullText : truncatedText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const isExpanded = ref(false);
const fullText = ref(`Es una plataforma interactiva diseñada para visibilizar y conectar el talento femenino en Ciencia, Tecnología, Ingeniería, Arte y Matemáticas. Este mapa destaca las contribuciones de mujeres profesionales en sectores clave, fomenta la colaboración y crea una red de mentoras que inspira a nuevas generaciones. Conectamos el talento y empoderamos a las mujeres.
Nuestra misión es construir un futuro más inclusivo y diverso, donde cada historia de éxito sirva como modelo a seguir. ¡Únete a nosotros y sé parte del cambio!`);
const truncatedText = `Es una plataforma interactiva está diseñada para visibilizar y conectar el talento femenino. Estas herramientas destacan las contribuciones de mujeres profesionales en sectores clave, fomenta la colaboración y crea una red de mentoras que inspira a nuevas generaciones.¡Únete a nosotros y sé parte del cambio!`;

const toggleExpand = () => {
    isExpanded.value = true;
};



watch(() => window.innerWidth, () => {
    if (window.innerWidth > 768) isExpanded.value = true
}, { immediate: true })
</script>
