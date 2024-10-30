<template>
    <div class="flex flex-col items-center bg-lightGray justify-between gap-4 px-4 py-6 text-center ">
        <img :src="person.image" class=" h-20 w-20 top-10 left-4 object-cover rounded-full bg-gray-300" />
        <p class="font-bebas text-3xl">{{ person.firstName }} {{ person.lastName }}</p>
        <div class=" font-lato font-light p-2 bg-none text-primary-violet border-2 border-primary-violet rounded-lg px-4 cursor-pointer hover:bg-twoColorsBlue hover:border-2 hover:text-secondary-white ">
            SEE MORE
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Icon from '../Icon.vue'

const props = defineProps({
    person: {
    type: Object,
    required: true
  }
})
</script>

