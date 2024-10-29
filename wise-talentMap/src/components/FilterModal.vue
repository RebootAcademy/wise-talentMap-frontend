<template>
  <Dialog :visible="filtersVisible" class="w-[31rem]" modal>
    <template #container>
      <div class="bg-white text-black rounded-md border border-black flex flex-col gap-6">
        <header class="flex items-center justify-center gap-2 relative p-6 font-bebas text-2xl border-b">
          <span>FILTERS</span>
          <Icon icon="closeCircle" class="absolute right-6 cursor-pointer" @click="handleVisibility" />
        </header>
        <div class="px-6 flex flex-col gap-6">
          <section class="flex flex-col gap-6">
            <p class="font-bebas text-xl">ÁREA STEAM</p>
            <div class="flex flex-wrap gap-2 text-deepGray">
              <SteamFilterButtons />
            </div>
          </section>
          <hr>
          <section class="flex flex-col gap-6">
            <p class="font-bebas text-xl">ISLA DE RESIDENCIA</p>
            <div class="flex flex-wrap gap-2 text-deepGray">
              <CustomButton v-for="(island, idx) in islands" :key="idx"
                :class="`${store.islandFilter.includes(island) ? 'border-2 font-bold' : 'border'} rounded-2xl`"
                :clickFn="() => checkSelections('islands', island)">
                {{ island }}
              </CustomButton>
            </div>
            <!-- <Select v-model="selectedMunicipality" :options="municipalities" class="w-56 text-sm"
              placeholder="Selecciona un municipio" /> -->
          </section>
          <hr>
          <section class="flex flex-col gap-6">
            <p class="font-bebas text-xl">PAIS DE RESIDENCIA</p>
            <Select v-model="selectedCountry" :value="selectedCountry" :options="countries" class="w-56"
              placeholder="Selecciona un país" @change="(e) => checkSelections('country', e.value)" />
          </section>
          <hr>
        </div>
        <footer class="font-bebas flex justify-between px-6 pb-6">
          <CustomButton :clickFn="clearFilters">QUITAR FILTROS</CustomButton>
          <CustomButton class="border border-mediumGray rounded-md bg-softGray">ENTORNO VIRTUAL</CustomButton>
        </footer>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Dialog from 'primevue/dialog';
import Select from 'primevue/select'
import Icon from './Icon.vue';
import CustomButton from './CustomButton.vue';
import { useUserStore } from '@/stores/user';
import SteamFilterButtons from './SteamFilterButtons.vue';
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

const store = useUserStore()
const islands = ['Gran Canaria', 'Fuerteventura', 'Lanzarote', 'Tenerife', 'La Gomera', 'La Palma', 'El Hierro']

/* const municipalities = [
  'Agaete', 'Agüimes', 'Alajeró', 'Antigua', 'Arafo', 'Arico', 'Arona', 'Arrecife',
  'Artenara', 'Arucas', 'Barlovento', 'Betancuria', 'Breña Alta', 'Breña Baja', 'Buenavista del Norte',
  'Candelaria', 'El Paso', 'El Pinar de El Hierro', 'El Rosario', 'El Sauzal', 'El Tanque',
  'Fasnia', 'Firgas', 'Fuencaliente de la Palma', 'Garachico', 'Garafía', 'Gáldar', 'Granadilla de Abona',
  'Güímar', 'Guía de Isora', 'Haría', 'Hermigua', 'Icod de los Vinos', 'Ingenio', 'La Guancha',
  'La Matanza de Acentejo', 'La Oliva', 'La Orotava', 'La Victoria de Acentejo', 'Las Palmas de Gran Canaria',
  'Las Rosas', 'Llanos de Aridane', 'Los Realejos', 'Los Silos', 'Mogán', 'Moya', 'Pájara',
  'Puerto de la Cruz', 'Puerto del Rosario', 'Puntagorda', 'Puntallana', 'San Andrés y Sauces',
  'San Bartolomé', 'San Bartolomé de Tirajana', 'San Cristóbal de La Laguna', 'San Juan de la Rambla',
  'San Miguel de Abona', 'Santa Brígida', 'Santa Cruz de La Palma', 'Santa Cruz de Tenerife',
  'Santa Lucía de Tirajana', 'Santa María de Guía de Gran Canaria', 'Santiago del Teide', 'Sauzal',
  'Tacoronte', 'Tegueste', 'Teguise', 'Tejeda', 'Telde', 'Teror', 'Tijarafe', 'Tinajo',
  'Tuineje', 'Valle Gran Rey', 'Vallehermoso', 'Valleseco', 'Valsequillo de Gran Canaria', 'Valverde',
  'Vega de San Mateo', 'Vilaflor de Chasna', 'Villa de Mazo', 'Yaiza'
] */

const selectedMunicipality = ref('')
const selectedCountry = ref('')
const countries = ref([])

onMounted(async () => {
  const countriesResponse = await getOutsiders()
  countries.value = countriesResponse
    .map(location => location.country) // Formats to name only
    .filter((location, index, self) => self.indexOf(location) === index) // Delete duplicates
})

const checkSelections = (type, option) => {
  if (type === 'country') {
    store.countryFilter = option
  } else {
    if (store.islandFilter.includes(option)) {
      const index = store.islandFilter.indexOf(option)
      store.islandFilter.splice(index, 1)
    } else {
      store.islandFilter.push(option)
    }
  }
}

const clearFilters = () => {
  store.steamFilter = []
  store.countryFilter = ''
  store.islandFilter = []
}


</script>
