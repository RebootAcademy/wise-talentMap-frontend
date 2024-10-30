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
            <Select v-model="selectedMunicipality" :options="selectableMunicipalities" class="w-56 text-sm"
              placeholder="Selecciona un municipio" @change="(e) => checkSelections('municipality', e.value)"
              optionGroupLabel="island" optionGroupChildren="municipalities">
              <template #optiongroup="slotProps">
                <div>{{ slotProps.municipalities }}</div>
              </template>
            </Select>
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
import { onMounted, ref, watch } from 'vue';
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
const islands = ['Gran Canaria', 'Fuerteventura', 'La Graciosa', 'Lanzarote', 'Tenerife', 'La Gomera', 'La Palma', 'El Hierro']

const municipalities = [
  {
    island: "Tenerife",
    municipalities: [
      "Arafo", "Arico", "Arona", "Buenavista del Norte", "Candelaria", "El Rosario",
      "El Sauzal", "El Tanque", "Fasnia", "Garachico", "Granadilla de Abona", "Güímar",
      "Guía de Isora", "Icod de los Vinos", "La Guancha", "La Matanza de Acentejo",
      "La Orotava", "La Victoria de Acentejo", "Los Realejos", "Los Silos",
      "Puerto de la Cruz", "San Cristóbal de La Laguna", "San Juan de la Rambla",
      "San Miguel de Abona", "Santa Cruz de Tenerife", "Santa Úrsula", "Santiago del Teide",
      "Tacoronte", "Tegueste", "Vilaflor de Chasna"
    ]
  },
  {
    island: "Gran Canaria",
    municipalities: [
      "Agaete", "Agüimes", "Artenara", "Arucas", "Firgas", "Gáldar", "Ingenio",
      "La Aldea de San Nicolás", "Las Palmas de Gran Canaria", "Mogán", "Moya",
      "San Bartolomé de Tirajana", "Santa Brígida", "Santa Lucía de Tirajana",
      "Santa María de Guía de Gran Canaria", "Tejeda", "Telde", "Teror",
      "Valleseco", "Valsequillo de Gran Canaria", "Vega de San Mateo"
    ]
  },
  {
    island: "Lanzarote",
    municipalities: [
      "Arrecife", "Haría", "San Bartolomé", "Teguise", "Tías", "Tinajo", "Yaiza"
    ]
  },
  {
    island: "Fuerteventura",
    municipalities: [
      "Antigua", "Betancuria", "La Oliva", "Pájara", "Puerto del Rosario", "Tuineje"
    ]
  },
  {
    island: "La Palma",
    municipalities: [
      "Barlovento", "Breña Alta", "Breña Baja", "Fuencaliente de la Palma", "Garafía",
      "Los Llanos de Aridane", "Puntagorda", "Puntallana", "San Andrés y Sauces",
      "Santa Cruz de La Palma", "Tazacorte", "Tijarafe", "Villa de Mazo"
    ]
  },
  {
    island: "La Gomera",
    municipalities: [
      "Agulo", "Alajeró", "Hermigua", "San Sebastián de La Gomera", "Valle Gran Rey", "Vallehermoso"
    ]
  },
  {
    island: "El Hierro",
    municipalities: [
      "Frontera", "El Pinar de El Hierro", "Valverde"
    ]
  }
];

const selectedMunicipality = ref('')
const selectedCountry = ref('')
const countries = ref([])
const selectableMunicipalities = ref([])

onMounted(async () => {
  const countriesResponse = await getOutsiders()
  countries.value = countriesResponse
    .map(location => location.country) // Formats to name only
    .filter((location, index, self) => self.indexOf(location) === index) // Delete duplicates
  selectableMunicipalities.value = [...municipalities]
})

const checkSelections = (type, option) => {
  if (type === 'country') {
    store.countryFilter = option
  } else if (type === 'municipality') {
    store.municipalityFilter = option
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
  store.municipalityFilter = ''
}

const separateMunicipalities = () => {
  let selected = []
  for (const island of municipalities) {
    if (store.islandFilter.includes(island.island)) selected.push(island)
  }
  if (!store.islandFilter.length) selected = [...municipalities]
  selectableMunicipalities.value = selected
}

watch(() => store.islandFilter, () => {
  separateMunicipalities()
}, { deep: true })


</script>
