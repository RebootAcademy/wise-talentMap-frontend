<template>
  <Dialog :visible="filtersVisible" class="w-full md:static lg:h-fit lg:w-[31rem] overflow-auto"
    style="border: 1px solid #881BF5" modal dismissableMask>
    <template #container>
      <FiltersHorizontal v-if="checkWidth" :handleVisibility="handleVisibility" />
      <FiltersVertical v-else :handleVisibility="handleVisibility" />
    </template>
  </Dialog>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import FiltersHorizontal from './FiltersHorizontal.vue';
import FiltersVertical from './FiltersVertical.vue';

import { useUserStore } from '@/stores/user';
import { getOutsiders } from '@/services/location.services';

const props = defineProps({
  handleVisibility: {
    type: Function,
    default: () => () => { }
  },
  filtersVisible: {
    type: Boolean,
    default: () => false
  }
})

const userAgent = navigator.userAgent || navigator.vendor || window.opera
const checkWidth = ref(window.matchMedia("(orientation: landscape)").matches && /android|iPhone|iPad|iPod/i.test(userAgent))

</script>
