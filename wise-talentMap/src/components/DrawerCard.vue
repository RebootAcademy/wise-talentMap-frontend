<template>
    <div class="flex flex-col items-center">
        <img :src="person.image" class=" h-20 w-20 top-10 left-4 object-cover rounded-full bg-gray-300" />
        <p class="font-bebas text-3xl">{{ person.firstName }} {{ person.lastName }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    person: {
    type: Object,
    required: true
  }
})
</script>

