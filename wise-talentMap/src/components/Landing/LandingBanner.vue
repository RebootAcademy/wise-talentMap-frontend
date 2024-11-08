<template>
    <div class="bg-cover bg-right grid grid-cols-6"
        style="background-image: url('https://talentmap.wisecanarias.com/homePageBanner.webp?auto=format')">
        <div
            class="col-span-6 flex md:flex-row-reverse justify-center items-center md:min-h-[655px] bg-threeColorsBanner">
            <div class="col-span-6 px-0 md:px-12 lg:px-16 py-12">
                <h1 class="font-bebas text-3xl text-center text-secondary-white mb-4">¿Qué es el Mapa de Talento de
                    Mujeres STEAM en Canarias?</h1>
                <p class="md:text-2xl text-center text-secondary-white" :class="{ 'expanded': isExpanded }"
                    @click="toggleExpand">
                    {{ isExpanded ? fullText : truncatedText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const isExpanded = ref(false);
const fullText = ref(`Es una plataforma interactiva diseñada para visibilizar y conectar el talento femenino en Ciencia, Tecnología, Ingeniería, Arte y Matemáticas. Este mapa destaca las contribuciones de mujeres profesionales en sectores clave, fomenta la colaboración y crea una red de mentoras que inspira a nuevas generaciones. Conectamos el talento y empoderamos a las mujeres. Nuestra misión es construir un futuro más inclusivo y diverso, donde cada historia de éxito sirva como modelo a seguir. ¡Únete a nosotros y sé parte del cambio!`);
const truncatedText = 'Es una plataforma interactiva está diseñada para visibilizar y conectar el talento femenino. Estas herramientas destacan las contribuciones de mujeres profesionales en sectores clave, fomenta la colaboración y crea una red de mentoras que inspira a nuevas generaciones.¡Únete a nosotros y sé parte del cambio!';

const toggleExpand = () => {
    isExpanded.value = true;
};

const backgroundStyle = computed(() => {
    return {
        backgroundImage: "url('https://talentmap.wisecanarias.com/homePageBanner.webp?auto=format')",
    }
})

watch(() => window.innerWidth, () => {
    if (window.innerWidth > 768) isExpanded.value = true
}, { immediate: true })
</script>
