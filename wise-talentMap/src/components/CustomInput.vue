<template>
  <div
    class="border rounded-md w-36 h-12 flex items-center gap-2.5 py-2 px-4"
    :class="isDisabled ? 'bg-softGray' : 'bg-transparent'"
  >
    <div v-if="isSearch" class="flex">
      <Icon :icon="icon" :color="isDisabled && 'softGray'" />
      <input
        v-model="store.searchInput"
        class="bg-transparent w-full focus:outline-none"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="onFocus"
        @blur="onBlur"
        :disabled="isDisabled"
      />
    </div>
    <div v-else class="flex items-center">
      <input
        v-model="textParameter"
        :type="typePass ? 'password' : 'text'"
        class="bg-transparent w-full focus:outline-none"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="onFocus"
        @blur="onBlur"
        :disabled="isDisabled"
      />
      <Icon
        v-if="icon"
        :icon="typePass ? 'lock' : 'eye'"
        class="cursor-pointer"
        :color="isDisabled && 'softGray'"
        @click="() => handleChangeType()"
      />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Icon from './Icon.vue'
import {useUserStore} from '@/stores/user'
const store = useUserStore()
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  icon: {
    type: String,
    default: () => ''
  },
  placeholder: {
    type: String,
    default: () => ''
  },
  type: {
    type: String,
    default: 'text'
  },
  onFocus: {
    type: Function,
    default: () => () => {}
  },
  onBlur: {
    type: Function,
    default: () => () => {}
  },
  isDisabled: {
    type: Boolean,
    default: () => false
  },
  isSearch: {
    type: Boolean,
    default: () => false
  }
})

const textParameter = ref('')
const typePass = ref(props.type === 'password')

const handleChangeType = () => {
  typePass.value = !typePass.value
}
const handleInput = (e) => {
  const value = e.target.value.trim()
  if (props.isSearch) {
    store.searchInput = value
  } else {
    textParameter.value = value
    emit('update:modelValue', value)
  }
}
</script>
