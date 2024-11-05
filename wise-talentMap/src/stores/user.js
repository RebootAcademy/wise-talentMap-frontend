import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getUsers } from '@/services/user.services'

export const useUserStore = defineStore('user', {
  // Estado
  state: () => ({
    users: [], // Almacena la lista de usuarios
    selectedUsers: [],
    cardPerson: null,
    searchInput: '',
    openDrawer: false,
    steam: [
      {
        name: 'Science',
        filterValue: 'Ciencia',
        icon: 'science',
      },
      {
        name: 'Technology',
        filterValue: 'Tecnología',
        icon: 'technology',
      },
      {
        name: 'Engineer',
        filterValue: 'Ingeniería',
        icon: 'engineer',
      },
      {
        name: 'Art',
        filterValue: 'Arte',
        icon: 'art',
      },
      {
        name: 'Math',
        filterValue: 'Matemáticas',
        icon: 'math',
      },
    ],
    filterType: 'canary',
    steamFilter: [],
    islandFilter: [],
    municipalityFilter: '',
    countryFilter: '',
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
        if (!this.selectedUsers.length) {
          this.selectedUsers = this.users
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error)
      }
    },
    handleOpenDrawer(state) {
      this.openDrawer = state
      console.log(this.openDrawer, 'openDrawer')
    },

    setSelectedUsers(users) {
      this.selectedUsers = users
    },

    handleOpenCard(person) {
      this.cardPerson = person
    },
  },
})

