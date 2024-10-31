<template>
  <div class="w-full h-full relative !bg-secondary-blue ">
   <div v-if="store.openDrawer" class="absolute flex justify-center items-center border-2 border-primary-violet f top-6 left-6 z-10 bg-secondary-white p-3 rounded-md cursor-pointer"
   @click="store.handleOpenDrawer()"
   >
    <Icon icon='back' color="primary-violet" class="hover:transition hover:ease-in hover:duration-300 hover:animate__animated hover:animate__rotateIn"/>
   </div>
    <div id="map" class="w-full h-full"></div>
    <MiniMap :center="[28.50291, -15.88168]" :zoom="0" class="minimap" :class="{ hidden: store.openDrawer }"
      :people="filteredPeople.length ? filteredPeople : []" />
    <ListComponent v-if="showList" :markers="listData" :visible="showList" @close="showList = false"
      style="position: absolute; top: 10px; right: 10px; z-index: 1000" />
    <Card v-if="showCard" :person="target" @close="showCard = false"
      style="position: absolute; top: 50px; right: 50px; z-index: 1000" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/stores/user'
import * as L from 'leaflet'
import '@maptiler/leaflet-maptilersdk'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import MiniMap from './MiniMap.vue'
import ListComponent from './ListComponent.vue'
import Card from './Card.vue'
import { getUsers } from '@/services/user.services'
import Icon from '../Icon.vue'

const store = useUserStore()

const showList = ref(false)
const showCard = ref(false)
const listData = ref([])
const target = ref({})
const map = ref(null)
const selectedCoordinates = ref([])
const initialZoom = ref(8.4)
const people = ref([])
const markers = ref(null)

const filteredPeople = computed(() => {
  if (
    !store.steamFilter.length &&
    !store.islandFilter.length &&
    !store.countryFilter &&
    !store.municipalityFilter
  )
    return people.value
  else {
    return people.value.filter((person) => {
      const personSteams = person.steam.map((area) => area.name)
      return (
        store.steamFilter.some((filter) => personSteams.includes(filter)) ||
        store.countryFilter.includes(person.location.country) ||
        store.islandFilter.includes(person.location.island) ||
        store.municipalityFilter.includes(person.location.municipality)
      )
    })
  }
})

const renderIcon = () => {
  const iconSvg = generateSvgIcon('purple')
  return L.divIcon({
    html: iconSvg,
    className: 'custom-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

const updateMarkers = (people) => {
  markers.value.clearLayers()
  people.forEach((person) => {
    const coords = person.location && person.location.coordinates
    if (
      Array.isArray(coords) &&
      coords.length === 2 &&
      typeof coords[0] === 'number' &&
      typeof coords[1] === 'number'
    ) {
      const customIcon = renderIcon()
      const marker = L.marker(coords, { icon: customIcon })
      marker.on('click', () => {
        target.value = {
          id: marker._leaflet_id,
          ...person,
        }
      })
      markers.value.addLayer(marker)
    }
  })
}

function generateSvgIcon(color = 'black') {
  return `
    <svg width="30" height="30" viewBox="0 0 175 232" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M174.951 139.447C171.931 144.791 168.398 149.807 164.423 154.431L164.5 154.5L93 232L22.5 154.5L22.5762 154.43C8.50488 138.065 0 116.775 0 93.5C0 41.8613 41.8613 0 93.5 0C127.003 0 156.39 17.6211 172.899 44.1006L131.416 61.6768C122.336 50.8691 108.72 44 93.5 44C66.1621 44 44 66.1621 44 93.5C44 120.838 66.1621 143 93.5 143C110.219 143 125.001 134.711 133.963 122.02L174.951 139.447Z" fill="url(#paint0_linear_82_92)"/>
        <defs>
            <linearGradient id="paint0_linear_82_92" x1="4.50001" y1="241" x2="173.852" y2="7.12159" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FC00FF"/>
                <stop offset="0.39" stop-color="#881BF5"/>
                <stop offset="1" stop-color="#17E4CE"/>
            </linearGradient>
        </defs>
    </svg>
`
}

onMounted(async () => {
  people.value = await getUsers()
  if (window.innerWidth < 500) {
    initialZoom.value = 6.4
  } else if (window.innerWidth < 765 || window.innerHeight < 500) {
    initialZoom.value = 7
  } else if (window.innerWidth < 800) {
    initialZoom.value = 7.4
  } else {
    initialZoom.value = 8.4
  }

  map.value = L.map('map', {
    center: L.latLng(28.50291, -15.88168),
    zoomControl: false,
    zoom: initialZoom.value,
    zoomAnimation: false,
    maxZoom: 13,
    minZoom: 2,
    scrollWheelZoom: true,
    maxBounds: [
      [-85, -180],
      [85, 180],
    ],
    maxBoundsViscosity: 1.0,
  })

  const zoomControl = L.control.zoom()
  map.value.removeControl(zoomControl)
  zoomControl.options.position = 'topright'
  zoomControl.addTo(map.value)
  //
  const mtLayer = new L.MaptilerLayer({
    apiKey: 'i5OzUSOgKbWzD2DSP43I',
    style:
      'https://api.maptiler.com/maps/f5b7cf32-2b60-40ea-b08b-6e6c919e904a/style.json',
    noWrap: true,
  }).addTo(map.value)

  let mapTile = document.querySelector('.leaflet-control-container')
  let mapTilerLink = document.querySelector(
    'a[href="https://www.maptiler.com"]'
  )

  if (mapTile && mapTile.lastElementChild) {
    mapTile.removeChild(mapTile.lastElementChild)
  }
  if (mapTilerLink) {
    mapTilerLink.remove()
  }

  markers.value = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
      const count = cluster.getChildCount()
      const size = count < 10 ? '30px' : count < 20 ? '35px' : '40px'
      const color = count < 10 ? '#d8c1e6' : count < 20 ? '#a87db0' : '#ffe4ff'
      const borderColor =
        count < 10 ? '#a87db0' : count < 20 ? '#d8c1e6' : '#d8c1e6'

      return L.divIcon({
        html: `<div style="background-color: ${color}; width: ${size}; height: ${size}; border: 2px solid ${borderColor}; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold;">${count}</div>`,
        className: 'marker-cluster-custom',
        iconSize: L.point(size.replace('px', ''), size.replace('px', '')),
      })
    },
    zoomToBoundsOnClick: false,
  })

  markers.value.on('clusterclick', function (event) {
    console.log(event)
    event.originalEvent.stopPropagation()
    store.handleOpenDrawer()

    selectedCoordinates.value = [event.latlng.lat, event.latlng.lng]
    const childMarkers = event.layer.getAllChildMarkers()
    listData.value = childMarkers.flatMap((marker) => {
      return people.value.filter(
        (p) =>
          p.location.coordinates[0] === marker.getLatLng().lat &&
          p.location.coordinates[1] === marker.getLatLng().lng
      )
    })

    // Eliminar duplicados basados en el email
    listData.value = [
      ...new Map(listData.value.map((item) => [item.email, item])).values(),
    ]
    console.log(listData.value)
    store.setSelectedUsers(listData.value)
  })
  updateMarkers(filteredPeople.value)
  map.value.addLayer(markers.value)

  const zoomContainer = document.querySelector('.leaflet-touch .leaflet-bar')
  zoomContainer.setAttribute('style', 'border-radius: 8px;outline: 1px solid #881BF5;outline-offset: -1px;background-color: transparent;box-shadow: inset 0 0 0 1000px white;')
  const zoomEl = document.querySelectorAll('.leaflet-bar > a')
  zoomEl[0].setAttribute('style', 'color: #881BF5; border-bottom: 1px solid #881BF5;')
  zoomEl[1].setAttribute('style', 'color: #881BF5;')
})

watch(
  () => filteredPeople.value,
  (newPeople) => {
    updateMarkers(newPeople)
  },
  { deep: true }
)

watch(
  () => store.openDrawer,
  (isOpen) => {
    if (isOpen && map.value) {
      map.value.invalidateSize()
      map.value.setView(selectedCoordinates.value, 8.5)
    } else {
      map.value.invalidateSize()
      map.value.setView(selectedCoordinates.value, 7.5)
    }
  }
)
</script>

<style scoped>
.minimap {
  width: 16rem;
  height: 10rem;
  position: absolute;
  bottom: 0;
  right: 0;
}

.leaflet-container {
  z-index: 1 !important;
}

#zoom-controls {
  color: #881BF5 !important;
}
</style>
