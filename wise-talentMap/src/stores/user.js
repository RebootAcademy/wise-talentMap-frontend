import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getUsers } from '@/services/user.services'

export const useUserStore = defineStore('user', {
  // Estado
  state: () => ({
    users: [], // Almacena la lista de usuarios
    openDrawer: false,
    steam: [
      {
        name: 'Science',
        filterValue: 'Ciencia',
        icon: 'science'
      },
      {
        name: 'Technology',
        filterValue: 'Tecnología',
        icon: 'laptop'
      },
      {
        name: 'Engineer',
        filterValue: 'Ingeniería',
        icon: 'cog'
      },
      {
        name: 'Art',
        filterValue: 'Arte',
        icon: 'paintbrush'
      },
      {
        name: 'Math',
        filterValue: 'Matemáticas',
        icon: 'functionMath'
      }
    ],
    steamFilter: []
  }),

  // Getters
  getters: {
    getAllUsers(state) {
      // Definido como un getter que recibe el estado
      return state.users // Devuelve la lista de usuarios
    },
  },

  // Acciones
  actions: {
    async fetchUsers() {
      try {
        // Llama a la API para obtener usuarios
        this.users = await getUsers()
      } catch (error) {
        console.error('Error al obtener usuarios:', error)
      }
    },
    handleOpenDrawer() {
      this.openDrawer = !this.openDrawer
    }
  },
})

