<template>
  <div class="border rounded-md w-36 h-12 flex items-center gap-2.5 py-2 px-4">
    <Icon icon="search" />
    <input v-model="textParameter" class="bg-white w-full" :placeholder="placeholder" @input="updateValue" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon from './Icon.vue';

defineProps({
  icon: {
    type: String,
    default: () => ''
  },
  placeholder: {
    type: String,
    default: () => ''
  }
})

const textParameter = ref('')

const emit = defineEmits(['update:modelValue'])
const updateValue = e => emit('update:modelValue', e.target.value.trim())

</script>
