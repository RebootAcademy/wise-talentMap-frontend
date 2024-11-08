<template>
  <div class="bg-white text-deepGray h-full rounded-md flex flex-col justify-between gap-1">

    <header class="flex items-center justify-center gap-2 sm:h-3 relative p-6 font-bebas text-2xl border-b">
      <span>FILTROS</span>
      <Icon icon="close" class="absolute right-6 cursor-pointer" size="w-3 h-3" @click="handleVisibility" />
    </header>

    <div class="px-6 w-full h-full flex gap-6 py-6">

      <section class="flex flex-col gap-6 w-1/2 ">
        <p class="font-bebas text-xl">ÁREA STEAM</p>
        <div class="flex flex-wrap gap-2">
          <CustomButton v-for="(option, idx) in store.steam" :key="idx"
            :class="`flex gap-2 font-lato lg:text-xl items-center border border-deepGray !rounded-full ${isFilterActive(option.filterValue) && 'border-blueGradient-rounded'}`"
            :clickFn="() => toggleSteamFilter(option.filterValue)">
            <Icon :icon="option.icon" :color="isFilterActive(option.filterValue) ? 'primary-violet' : 'deepGray'" />
            <span :class="isFilterActive(option.filterValue) && 'bg-twoColorsBlue bg-clip-text text-transparent'">
              {{ option.name }}
            </span>
          </CustomButton>
        </div>
      </section>

      <section class="custom-scrollbar flex flex-col gap-6 w-1/2 h-32 overflow-auto">

        <div class="flex items-center gap-2">
          <p class="font-bebas text-xl">Localizacion</p>
          <Tabs class="h-8" />
        </div>

        <div v-if="store.filterType === 'canary'" class="flex flex-wrap gap-2 text-deepGray">
          <CustomButton v-for="(island, idx) in islands" :key="idx"
            :class="`${islandFilter.includes(island) ? 'bg-twoColorsBlue bg-clip-text text-transparent border-blueGradient-rounded' : 'border border-deepGray'} h-8 text-xs !rounded-full`"
            :clickFn="() => checkSelections('islands', island)">
            {{ island }}
          </CustomButton>
        </div>

        <section v-else class="flex flex-col gap-2.5">
          <Select v-model="selectedCountry" :value="selectedCountry" :options="countries" class="w-56 text-sm"
            placeholder="Selecciona un país" @change="(e) => checkSelections('country', e.value)" />
        </section>

        <Select v-if="islandFilter.length" v-model="selectedMunicipality" :options="selectableMunicipalities"
          class="w-56 text-sm" placeholder="Selecciona un municipio"
          @change="(e) => checkSelections('municipality', e.value)" optionGroupLabel="island"
          optionGroupChildren="municipalities">
          <template #optiongroup="slotProps">
            <div>{{ slotProps.municipalities }}</div>
          </template>
        </Select>

      </section>

      <hr>
    </div>

    <footer class="font-bebas flex justify-center gap-6 border-t py-1">
      <CustomButton isHovered class="border py-2 px-4 border-black " :clickFn="clearFilters">QUITAR FILTROS
      </CustomButton>
      <CustomButton isHovered :clickFn="applyFilters"
        class="border border-mediumGray rounded-md text-secondary-white bg-twoColorsBlue">APLICAR
      </CustomButton>
    </footer>

  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useUserStore } from '@/stores/user';
import { getOutsiders } from '@/services/location.services';
import Select from 'primevue/select'
import Icon from './Icon.vue';
import Tabs from './Tabs.vue'
import CustomButton from './CustomButton.vue';
import Divider from './Divider.vue';

const islands = ['Gran Canaria', 'Fuerteventura', 'La Graciosa', 'Lanzarote', 'Tenerife', 'La Gomera', 'La Palma', 'El Hierro']
const store = useUserStore()
const steamFilter = ref([])
const countryFilter = ref('')
const islandFilter = ref([])
const municipalityFilter = ref('')
const selectedMunicipality = ref('')
const selectedCountry = ref('')
const countries = ref([])
const selectableMunicipalities = ref([])

const props = defineProps({
  handleVisibility: {
    type: Function,
    default: () => () => { }
  }
})

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
    console.log(option)
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
  steamFilter.value = []
  countryFilter.value = ''
  islandFilter.value = []
  municipalityFilter.value = ''
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

watch(() => store.steamFilter, () => {
  steamFilter.value = [...store.steamFilter]
}, { immediate: true })

watch(() => store.filterType, () => {
  if (store.filterType === 'canary') {
    countryFilter.value = ''
  } else {
    municipalityFilter.value = ''
    islandFilter.value = []
  }
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
