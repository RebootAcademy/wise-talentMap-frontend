<template>
  <div
    class="flex flex-col gap-6 md:gap-0 md:flex-row p-5 md:p-0 justify-between items-center bg-black text-secondary-white md:h-24"
  >
    <div class="flex gap-6 md:pl-11">
      <a
        href="https://www.linkedin.com/company/wisecanarias/?trk=public_post_main-feed-card_reshare_feed-actor-name"
        target="_blank"
      >
        <Icon
          icon="linkedin"
          class="cursor-pointer"
          color="white"
          isHovered
          extraStyles="24px"
        />

      </a>
      <a href="https://www.instagram.com/wisecanarias/" target="_blank">
        <Icon icon="instagram" class="cursor-pointer" color="white" isHovered extraStyles="24px" />
      </a>

      <a href="https://twitter.com/wisecanarias" target="_blank">
        <Icon icon="twitter" class="cursor-pointer" color="white" isHovered extraStyles="24px" />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wisecanarias@gmail.com&su=Asunto%20del%20Correo&body=Cuerpo%20del%20correo"
        target="_blank">
        <Icon icon="email" class="cursor-pointer" color="white" isHovered extraStyles="24px" />
      </a>
    </div>
    <div class="flex gap-6 font-bebas text-2xl md:pr-11">

      <a href="" target="_blank">
        <p class="hover:text-primary-violet">Contacto</p>
      </a>
      <a href="" target="_blank">
        <p class="hover:text-primary-violet">Politica de privacidad</p>
      </a>
      <a href="" target="_blank">
        <p class="hover:text-primary-violet">Términos de uso</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'

const isHovered = ref(false)
</script>
