<template>
  <div class="h-screen w-full fixed">
    <!-- Main header -->
    <div
      class="bg-white border-b h-16 lg:h-24 flex items-center justify-between font-bebas text-3xl text-black py-2.5 px-8">
      <img class="w-20 lg:w-28 cursor-pointer"
        src="https://res.cloudinary.com/dcfgavulz/image/upload/v1730735936/logoTalentMap_vsxcz2.png"
        @click="() => router.push('/')" />
      <div class="hidden lg:flex gap-2">
        <a href="https://www.wisecanarias.com" target="_blank">
          <CustomButton isHovered class="h-11 text-2xl border border-black">
            WISE CANARIAS
          </CustomButton>
        </a>
        <CustomButton isHovered class="h-11 text-2xl text-white bg-fourColors" :clickFn="redirectToVR">
          ENTORNO VIRTUAL
        </CustomButton>
      </div>
      <div class="lg:hidden">
        <CustomButton class="w-8 h-8 !p-0" :clickFn="toggleMenu">
          <Icon icon="burguer" size="!items-start" extraStyles="2rem" />
        </CustomButton>
        <Menu ref="showMenu" :model="items" popup />
      </div>
    </div>
    <!-- Filters bar -->
    <div :class="`hidden sm:flex bg-white h-20 text-black  ${searchFocus ? 'gap-7' : 'justify-between '
      } items-center py-2.5 px-8`">
      <div class="w-full flex gap-7 items-center justify-center">
        <SteamFilterButtons />
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'
import SteamFilterButtons from '@/components/SteamFilterButtons.vue'
import router from '@/router'
import Menu from 'primevue/menu'
import Icon from '@/components/Icon.vue'

const searchFocus = ref(false)
const filtersVisible = ref(false)
const showMenu = ref()
const checkWidth = ref(window.innerWidth >= 728)

const handleOpenModal = () => (filtersVisible.value = !filtersVisible.value)
const toggleMenu = (e) => {
  showMenu.value.toggle(e)
}
const onFocus = () => (searchFocus.value = true)
const onBlur = () => (searchFocus.value = false)

const redirectToVR = () => {
  window.location.href = 'https://www.spatial.io/s/MAPA-DE-TALENTOS-WISE-CANARIAS-6728b32e13a2ce7da7b3a85a?share=1006082582040945292'
  if (localStorage.getItem('cookiesAccepted') && window.gtag) {
    window.gtag('event', 'access_vr', {
      event_category: 'vr',
      event_label: 'Vr Access',
      value: 1
    })
  }
}

const items = ref([
  {
    label: 'WISE CANARIAS',
    command: () => {
      window.open('https://www.wisecanarias.com/')
    },
  },
  {
    label: 'ENTORNO VIRTUAL',
    route: '',
  },
])
</script>
