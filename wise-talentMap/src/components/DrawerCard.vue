<template>
    <div class="flex flex-col justify-between bg-lightGray text-anthraciteGray items-center min-h-[250px] max-h-[300px] gap-4 p-4 py-8 rounded-md cursor-pointer">
        <img :src="person.image" class=" h-24 w-24 left-4 object-cover rounded-full bg-gray-300" />
        <!-- <p class="font-bebas text-3xl">{{ person.firstName }} {{ person.lastName }}</p> -->
         <p class="font-bebas text-3xl">NOMBRE Y APELLIDO</p>
         <Icon icon="location" class=""/>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Icon from './Icon.vue'

const props = defineProps({
    person: {
    type: Object,
    required: true
  }
})
</script>

