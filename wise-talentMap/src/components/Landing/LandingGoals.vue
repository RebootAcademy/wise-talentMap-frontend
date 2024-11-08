<template>
    <div class="
            grid grid-cols-6 gap-8 py-6 px-4 bg-[#C7E1FF] 
            smd:grid-cols-4 
            md:grid-cols-8
            lg:grid-cols-12">
        <h2 class="
                col-span-6 font-bebas text-3xl text-center text-anthraciteGray
                smd:col-span-4 
                md:col-span-8 md:text-6xl
                lg:col-span-12">
            Objectivos específicos</h2>
        <GoalCard v-for="goal in goals" :key="goal.title" :title="goal.title" :description="goal.description" class="
                p-4 col-span-6 
                smd:col-span-2 
                md:col-span-4
                lg:col-span-4" />
    </div>
</template>

<script setup>
import GoalCard from '../GoalCard.vue'

const goals = [
    {
        title: '1. Involucrar a la comunidad',
        description: "Involucrar a la comunidad en el Mapa de Talento WISE C fomenta la colaboración y expandir el impacto de la plataforma, conectando a profesionales y promoviendo la visibilidad del talento femenino en STEAM."
    },
    {
        title: '2. Visibilizar profesionales destacadas',
        description: "Reconocer e identificar a las mujeres que están liderando en STEAM en Canarias, promoviendo su visibilidad para inspirar a futuras generaciones y para que sus logros sean conocidos."
    },
    {
        title: '3. Impulsar el liderazgo femenino',
        description: 'Fomentar el liderazgo de mujeres en áreas STEAM, ofreciendo visibilidad. Este objetivo busca inspirar a nuevas generaciones y fortalecer la representación femenina en roles clave de estos sectores.'
    },
    {
        title: '4. Informar y Sensibilizar',
        description: 'Sensibilizar sobre la brecha de género en áreas STEAM es fundamental para crear conciencia y promover la igualdad. Este objetivo busca educar y motivar el cambio hacia una mayor representación femenina en estos sectores.'
    },
    {
        title: '5. Conectar a las profesionales STEAM',
        description: 'Crear un espacio donde empresas y organizaciones puedan descubrir talento femenino en STEAM, promoviendo conexiones que impulsen la diversidad y la colaboración.'
    },
    {
        title: '6. Fomentar la Igualdad y la Diversidad ',
        description: 'Promover un espacio inclusivo que impulse la igualdad de género en los campos STEAM. Este objetivo busca visibilizar el talento femenino y destacar la importancia de una representación equitativa en estos sectores.'
    }
]

</script>
