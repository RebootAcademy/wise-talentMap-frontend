<template>
  <div class="custom-scrollbar relative bg-secondary-white border-t overflow-auto mb-5">

        <Card
          v-if="showCard"
          :person="store.cardPerson"
          class="sticky top-0 z-50 "
          @close="showCard = false"
        />


    <div class="absolute top-6 h-full grid grid-cols-6 gap-6 px-8 bg-white z-10">
      <DrawerCard
        v-for="user in store.selectedUsers"
        :key="user.id"
        :person="user"
        class="col-span-2 border-2 border-gray-50 max-h-[350px]"
        @click="handleShowCard(user)"
      />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores/user'
import DrawerCard from './DrawerCard.vue'
import Card from '../Map/Card.vue'
const store = useUserStore()
const showCard = ref(false)

const handleShowCard = (user) => {
  showCard.value = true
  store.handleOpenCard(user)
}

console.log(store.selectedUsers.filter((user)=> user.firstName === 'Verity'))
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
