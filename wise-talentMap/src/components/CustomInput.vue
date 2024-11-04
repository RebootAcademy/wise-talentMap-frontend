<template>  
  <div class="border rounded-md w-36 h-12 flex items-center gap-2.5 py-2 px-4 " :class="isDisabled ? 'bg-softGray' : 'bg-transparent'">
    <Icon icon="search" :color="isDisabled && 'softGray'" />
    <input v-model="store.searchInput" class="bg-transparent w-full focus:outline-none " :placeholder="placeholder" @input="handleInput"
      @focus="onFocus" @blur="onBlur" :disabled="isDisabled"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Icon from './Icon.vue';
import { useUserStore } from '@/stores/user';
const store =  useUserStore()
defineProps({
  icon: {
    type: String,
    default: () => ''
  },
  placeholder: {
    type: String,
    default: () => ''
  },
  onFocus: {
    type: Function,
    default: () => () => { }
  },
  onBlur: {
    type: Function,
    default: () => () => { }
  },
  isDisabled: {
    type: Boolean,
    default: () => false
  }
})

const textParameter = ref('')

const handleInput = (e) => {
  store.searchInput = e.target.value.trim()
}

/* const emit = defineEmits(['update:modelValue'])
const updateValue = e => emit('update:modelValue', e.target.value.trim()) */

</script>
