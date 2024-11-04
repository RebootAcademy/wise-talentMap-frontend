<template>
  <Dialog :visible="filtersVisible" class="w-[31rem]" modal dismissableMask>
    <template #container>
      <div class="bg-white text-black rounded-md border border-black flex flex-col gap-6" @blur="handleVisibility">
        <header class="flex items-center justify-center gap-2 relative p-6 font-bebas text-2xl border-b">
          <span>FILTERS</span>
          <Icon icon="closeCircle" class="absolute right-6 cursor-pointer" @click="handleVisibility" />
        </header>
        <div class="px-6 flex flex-col gap-6">
          <section class="flex flex-col gap-6">
            <p class="font-bebas text-xl">ÁREA STEAM</p>
            <div class="flex flex-wrap gap-2 text-deepGray">
              <CustomButton v-for="(option, idx) in store.steam" :key="idx"
                :class="`flex gap-2 font-bebas text-xl items-center border border-deepGray !rounded-full ${isFilterActive(option.filterValue) && 'border-blueGradient-rounded'}`"
                :clickFn="() => toggleSteamFilter(option.filterValue)">
                <Icon :icon="option.icon" :color="isFilterActive(option.filterValue) ? 'primary-violet' : 'black'" />
                <span
                  :class="isFilterActive(option.filterValue) ? 'bg-twoColorsBlue bg-clip-text text-transparent' : 'text-black'">
                  {{ option.name }}
                </span>
              </CustomButton>
            </div>
          </section>
          <hr>
          <section class="flex flex-col gap-6">
            <p class="font-bebas text-xl">ISLA DE RESIDENCIA</p>
            <div class="flex flex-wrap gap-2 text-deepGray">
              <CustomButton v-for="(island, idx) in islands" :key="idx"
                :class="`${islandFilter.includes(island) ? 'border-2 font-bold' : 'border'} rounded-2xl`"
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
          <CustomButton :clickFn="applyFilters"
            class="border border-mediumGray rounded-md text-secondary-white bg-twoColorsBlue">APLICAR
          </CustomButton>
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
const steamFilter = ref([])
const countryFilter = ref('')
const islandFilter = ref([])
const municipalityFilter = ref('')

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

const isFilterActive = (param) => steamFilter.value.includes(param)

const toggleSteamFilter = (option) => {
  if (isFilterActive(option)) {
    const index = steamFilter.value.indexOf(option);
    steamFilter.value.splice(index, 1);
  } else {
    steamFilter.value.push(option);
  }
}

const applyFilters = () => {
  store.steamFilter = [...steamFilter.value]
  store.countryFilter = countryFilter.value
  store.islandFilter = [...islandFilter.value]
  store.municipalityFilter = municipalityFilter.value
  props.handleVisibility()
}

onMounted(async () => {
  const countriesResponse = await getOutsiders()
  countries.value = countriesResponse
    .map(location => location.country) // Formats to name only
    .filter((location, index, self) => self.indexOf(location) === index) // Delete duplicates
  selectableMunicipalities.value = [...municipalities]
})

const checkSelections = (type, option) => {
  if (type === 'country') {
    countryFilter.value = option
  } else if (type === 'municipality') {
    municipalityFilter.value = option
  } else {
    if (islandFilter.value.includes(option)) {
      const index = islandFilter.value.indexOf(option)
      islandFilter.value.splice(index, 1)
    } else {
      islandFilter.value.push(option)
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
    if (islandFilter.value.includes(island.island)) selected.push(island)
  }
  if (!islandFilter.value.length) selected = [...municipalities]
  selectableMunicipalities.value = selected
}

watch(() => islandFilter.value, () => {
  separateMunicipalities()
}, { deep: true })


</script>
