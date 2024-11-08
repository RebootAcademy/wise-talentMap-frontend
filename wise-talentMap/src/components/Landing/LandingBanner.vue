<template>
    <div class="bg-cover bg-right" style="background-image: url('https://talentmap.wisecanarias.com/homePageBanner.webp?auto=format')">
        <div
            class="flex md:flex-row-reverse justify-center md:justify-start items-center md:min-h-[655px] bg-threeColorsBanner">
            <div class="md:w-1/2 px-0 md:px-12 lg:px-16 md:mr-12 py-12">
                <h1 class="font-bebas text-5xl text-center text-secondary-white mb-4">¿Qué es el Mapa de Talento de
                    Mujeres STEAM en Canarias?</h1>
                <p class="text-lg md:text-2xl text-center text-secondary-white clamped-text"
                    :class="{ 'expanded': isExpanded }" @click="toggleExpand">
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
const truncatedText = ref(fullText.value.slice(0, 150) + '...');

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

<style scoped>
.clamped-text {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    /* Show 3 lines by default */
    -webkit-box-orient: vertical;
    mask-image: linear-gradient(180deg, black 60%, transparent);
    /* Fade out text */
    -webkit-mask-image: linear-gradient(180deg, black 60%, transparent);
}

.expanded {
    -webkit-line-clamp: unset;
    overflow: visible;
    mask-image: none;
    -webkit-mask-image: none;
    cursor: auto;
}

button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
}
</style>
