<template>
    <div class="h-full grid grid-cols-6 gap-6 px-8 bg-white">
        <DrawerCard
            v-for="user in store.selectedUsers"
            :key="user.id"
            :person="user"
            class="col-span-2 border-2 border-gray-50"
            @click="store.handleOpenCard(user)"
        />

        <Card :person="store.cardPerson"/> 
    </div>
</template>

<script setup>
import {useUserStore} from '@/stores/user'
import DrawerCard from '../DrawerCard.vue'
import Card from '../Map/Card.vue'
const store = useUserStore()


</script>

<style lang="sass" scoped>

</style>