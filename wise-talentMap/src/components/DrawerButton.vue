<template>
  <div
    @click="closeDrawer"
  >
    <Icon
      icon="back"
      color="primary-violet"
      :class="[
        'transform transition-transform duration-300',
        store.openDrawer ? 'scale-x-100' : 'scale-x-[-1]',
      ]"
    />
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import Icon from './Icon.vue';

const store = useUserStore()

const closeDrawer = () => {
  store.handleOpenDrawer(store.openDrawer ? false : true)
}
</script>
