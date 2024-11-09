<template>
  <div
    class="bg-white border-b h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8"
  >
    <img
      class="w-28 cursor-pointer"
      @click="() => $router.push('/')"
      src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png"
    />
    <div class="hidden lg:flex gap-2 items-center">
      <a href="https://www.wisecanarias.com" target="_blank">
        <CustomButton
          isHovered
          class="h-11 text-2xl border rounded-md flex items-center border-black"
        >
          WISE CANARIAS
        </CustomButton>
      </a>
      <a
        href="https://whckd25oxu8.typeform.com/to/NxoBBEzg#nombre=xxxxx"
        target="_blank"
      >
        <CustomButton
          isHovered
          class="h-11 text-2xl text-white bg-fourColors rounded-md"
        >
        </CustomButton>
      </a>
    </div>
    <div class="lg:hidden">
      <CustomButton class="w-8 h-8 !p-0" :clickFn="toggleMenu">
        <Icon icon="burguer" size="!items-start" extraStyles="2rem" />
      </CustomButton>
      <Menu ref="showMenu" :model="items" popup />
    </div>
  </div>
</template>

<script setup>
import Menu from 'primevue/menu'
import CustomButton from './CustomButton.vue'
import Icon from './Icon.vue'
import {ref} from 'vue'

const showMenu = ref()

const toggleMenu = (e) => {
  showMenu.value.toggle(e)
}

const items = ref([
  {
    label: 'WISE CANARIAS',
    command: () => {
      window.open('https://www.wisecanarias.com/')
    },
  },
  {
    label: 'ACCESO AL TYPEFORM',
    route: 'https://whckd25oxu8.typeform.com/to/NxoBBEzg#nombre=xxxxx',
  },
])
</script>
