<template>
    <div class="
        flex flex-col gap-2 border-blueGradient rounded-md 
        md:px-10 md:py-12">
        <h4 class="
            font-bebas text-xl
            md:text-xl
            lg:text-2xl">{{ title }}</h4>
        <p>{{ description }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>
