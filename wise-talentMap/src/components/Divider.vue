<template>
    <div :class="`${customWidth} ${roundedSize} ${customHeight} bg-${type}`"
    ></div>
</template>

<script setup>

const props = defineProps({
    type : {
        type: String,
        required: true,
        default: 'black'
    },
    customWidth: {
        type: String,
        default: 'w-full'
    },
    customHeight: {
        type: String,
        default: 'h-0.5'
    },
    roundedSize:{
        type: String,
        default: 'rounded-lg'
    }
})
</script>

<!-- 
:class="{
        'bg-anthraciteGray h-0.5': type === 'black',
        'bg-darkGray h-0.5': type === 'gray',
        'bg-fourColors h-0.5': type === 'gradient',
    }" -->