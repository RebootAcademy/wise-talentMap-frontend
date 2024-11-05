<template>
    <div class="flex flex-col gap-2 border-blueGradient rounded-md px-10 py-12">
        <h4 class="font-bebas text-2xl">{{ title }}</h4>
        <p class="text-lg ">{{ description }}</p>
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

<style lang="scss" scoped>

</style>