<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      class="flex flex-col gap-4 border border-blueGradient p-4 px-24 py-12 rounded-sm"
    >
      <h1 class="text-center font-bebas text-4xl">Login</h1>
      <CustomInput
        v-model="email"
        icon=""
        type="email"
        placeholder="Introduce tu email"
        class="w-full"
      />
      <CustomInput
        v-model="password"
        icon="eye"
        type="password"
        placeholder="Introduce tu contraseña"
        class="w-full"
      />
        <div v-if="errors" class="flex gap-2 items-center ">
                <Icon icon="info" color="red" extraStyles="10px" size="w-3 h-3" />
            <p class="text-red text-sm ">{{ errors }}</p>
        </div>
      <CustomButton
        class="font-bebas text-xl border-2 border-transparent bg-primary-violet text-white hover:text-primary-violet"
        isHovered
        :clickFn="() => loginAdmin()"
      >
        <p class="text-center w-full">Iniciar Sesión</p>
      </CustomButton>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import CustomInput from '@/components/CustomInput.vue'
import CustomButton from '@/components/CustomButton.vue'
import Icon from '@/components/Icon.vue';
import { useUserStore } from '../../stores/user';
const userStore = useUserStore()
const password = ref('')
const email = ref('')
const errors = ref('')


const loginAdmin = async () => {
  if (!email.value || !password.value) {
    errors.value = 'Por favor, rellena todos los campos'
    return alert('Por favor, rellena todos los campos')
  }

  const response = await userStore.login(email.value, password.value)
  if (response) {
    alert('molón')
  } else {
    errors.value = 'Credenciales incorrectas'
  }

}
</script>

<style scoped></style>
