<template>
  <div
    class="custom-scrollbar relative bg-secondary-white border-t overflow-auto mb-5"
   
  >
  <div class="absolute w-full px-8">
    <CustomInput
      :isDisabled="filteredPeople.length === 1 && !store.searchInput"
      class="mt-4 w-full"
       :class="showCard &&' blur-sm'"
      placeholder="Buscar por nombre y/o apellidos"
    />
  </div>
    <Card
      v-if="showCard"
      :person="store.cardPerson"
      class="sticky top-0  z-50"
      @close="showCard = false"
    />
    <div
      class="absolute top-20 h-full w-full grid grid-cols-6 gap-6 px-8 bg-secondary-white z-10"
    >
      <DrawerCard
        v-for="user in filteredPeople"
        :key="user.id"
        :person="user"
        class="col-span-6 lg:col-span-3 2xl:col-span-2 border-2 border-gray-50"
         :class="showCard &&' blur-sm'"
        @click="handleShowCard(user)"
      />
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useUserStore} from '@/stores/user'
import DrawerCard from './DrawerCard.vue'
import Card from '../Map/Card.vue'
import CustomInput from '../CustomInput.vue'
const store = useUserStore()
const showCard = ref(false)
const searchUser = ref(null)

const handleShowCard = (user) => {
  showCard.value = true
  store.handleOpenCard(user)
}

const filteredPeople = computed(() => {
  let filtered = store.selectedUsers
  if (store.searchInput) {
    filtered = store.selectedUsers.filter((person) => {
      return (
        person.firstName
          .toLowerCase()
          .includes(store.searchInput.toLowerCase()) ||
        person.lastName.toLowerCase()
          .includes(store.searchInput.toLowerCase())
      )
    }) 
  }
  return filtered.sort((a, b) => {
    if (a.image && !b.image) {
      return -1
    }
    if (!a.image && b.image) {
      return 1
    }
    if (a.firstName < b.firstName) {
      return -1
    }
    if (a.firstName > b.firstName) {
      return 1
    }
    return 0
  })
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #881bf5;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #881bf5;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #881bf5 #f1f1f100;
}
</style>
