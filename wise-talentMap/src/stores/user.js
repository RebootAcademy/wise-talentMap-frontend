import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getUsers } from '@/services/user.services'
import { login } from '@/services/auth.services'

export const useUserStore = defineStore('user', {
  // Estado
  state: () => ({
    users: [], // Almacena la lista de usuarios
    selectedUsers: [],
    adminUser: {},
    cardPerson: null,
    searchInput: '',
    loader: true,
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
        let users = await getUsers() 
        this.users = users?.filter((user) => user.role !== 'admin')
        if (!this.selectedUsers.length) {
          
          this.selectedUsers = this.users
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error)
      }
    },

    async login(email, password) {
      try {
        console.log('email', email)
        const user = await login(email, password)
        console.log('user', user)
        localStorage.setItem('token', user.result.token)
        this.adminUser = user.result.user
        if (user.success) {
          return true
        } else {
          return false
        }
      } catch (error) {
        console.log(error.message)
        throw new Error(error)
      }
    },

    handleOpenDrawer(state) {
      this.openDrawer = state
    },

    setSelectedUsers(users) {
      this.selectedUsers = users
    },

    handleOpenCard(person) {
      this.cardPerson = person
    },
  },
})

