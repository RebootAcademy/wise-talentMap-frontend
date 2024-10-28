<template>
    <div class="w-full rounded-lg"
    :class="{
        'bg-anthraciteGray h-0.5': type === 'black',
        'bg-darkGray h-0.5': type === 'gray',
        'bg-fourColors h-0.5': type === 'gradient',
    }"></div>
</template>

<script setup>
const props = defineProps({
    type : {
        type: String,
        required: true,
        default: 'black'
    }
})
</script>
