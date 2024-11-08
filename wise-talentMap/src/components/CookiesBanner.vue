<template>
  <div class="fixed inset-x-0 bottom-0 right-0 z-50">
    <div class="sticky inset-0 flex items-end justify-end z-50">
      <div
        v-if="cookiesAccepted === null"
        class="bg-secondary-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md relative z-50 p-8 m-5 max-w-md w-full font-body"
      >
        <div class="relative flex flex-col gap-2 items-center">
          <img src="../assets/cookies.webp" class="w-20" alt="Cookies" />
          <!--             <img src="/logocorto.ico" class="w-12 absolute left-48 top-0" alt="Cookies" />
 -->
          <p
            class="font-bold text-deepGray text-center font-bebas text-3xl md:text-size-sub-title-md mt-4"
          >
            Nuestra web usa cookies
          </p>
          <p class="px-8 text-darkGray text-center mb-4">
            En Wise Canarias, utilizamos cookies u otras tecnologías similares,
            tanto propias como de terceros, que permiten que nuestra web
            funcione correctamente y pueden almacenar y recuperar información
            del usuario durante la navegación. Puedes ver aquí nuestra
            <a
              class="text-primary-violet hover:text-secondary-blue cursor-pointer"
              >Política de Cookies</a
            >.
          </p>
          <button
            @click="acceptCookies"
            class="h-11 text-2xl text-white font-bebas bg-fourColors rounded-md w-full hover:border-2 hover:border-primary-violet hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-primary-violet to-secondary-turquoise"
          >
            Aceptar
          </button>
          <button
            @click="declineCookies"
            class="underline font-lato text-xl hover:text-primary-violet"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const cookiesAccepted = ref(null) // null indica que el usuario aún no ha elegido

// Verifica si el usuario ya ha aceptado o rechazado las cookies
onMounted(() => {
  const savedPreference = localStorage.getItem('cookiesAccepted')
  cookiesAccepted.value = savedPreference ? JSON.parse(savedPreference) : null

  if (cookiesAccepted.value === true) {
    loadGoogleAnalytics()
  }
})

// Función para cargar Google Analytics
function loadGoogleAnalytics() {
  if (!window.gtag) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=TU_ID_DE_ANALYTICS`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // Inicializamos gtag solo después de que el script haya cargado
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', 'TU_ID_DE_ANALYTICS', {anonymize_ip: true})
    }

    script.onerror = (error) => {
      console.error('Error al cargar el script de Google Analytics', error)
    }
  }
}

// Función para aceptar cookies
function acceptCookies() {
  console.log('true')
  localStorage.setItem('cookiesAccepted', JSON.stringify(true))
  cookiesAccepted.value = true
  loadGoogleAnalytics()
}

// Función para rechazar cookies
function declineCookies() {
  console.log('false')

  localStorage.setItem('cookiesAccepted', JSON.stringify(false))
  cookiesAccepted.value = false
}
</script>

<style>
.cookie-banner {
  position: fixed;
  height: 200px;
  bottom: 10px;
  background-color: #fafafa;
  color: #212121;
  text-align: center;
}
.cookie-banner button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  margin: 0 5px;
}
.cookie-banner button:last-child {
  background-color: #f44336; /* Color para el botón de Rechazar */
}
</style>
