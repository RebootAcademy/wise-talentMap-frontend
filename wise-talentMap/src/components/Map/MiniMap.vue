<template>
  <div id="mini-map"></div>
</template>

<script setup>
import * as L from 'leaflet';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import "@maptiler/leaflet-maptilersdk";
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const props = defineProps({
  center: {
    type: Array,
    default: () => [28.50291, -15.88168] // Centro por defecto
  },
  zoom: {
    type: Number,
    default: 4 // Nivel de zoom por defecto
  },
  people: {
    type: Array,
    default: () => []
  }
});

const people = ref([])
let markers

function getCustomMarker(sectors) {
  const iconSvg = generateSvgIcon("purple"); // Cambia el color a violeta

  return L.divIcon({
    html: iconSvg, // Usar el SVG como HTML
    className: "custom-icon",
    iconSize: [32, 32], // Tamaño del ícono
    iconAnchor: [16, 32], // Punto de anclaje del ícono
    popupAnchor: [0, -32], // Punto desde donde se abre el popup
  });
}

function generateSvgIcon(color = "black") {
  return `
    <svg width="15" height="35" viewBox="0 0 175 232" fill="none" xmlns="http://www.w3.org/2000/svg">
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

onMounted(() => {
  const miniMap = L.map('mini-map', {
    center: props.center,
    zoom: props.zoom,
    maxZoom: 0,
    zoomControl: false,
    touchZoom: false,
    scrollWheelZoom: false, // Esto desactiva el scroll
    dragging: false, // También desactiva el arrastre del mapal ratón
    keyboard: false,

  });

  const miniMapLayer = new L.MaptilerLayer({
    apiKey: "i5OzUSOgKbWzD2DSP43I",
    style: 'https://api.maptiler.com/maps/f5b7cf32-2b60-40ea-b08b-6e6c919e904a/style.json'
  }).addTo(miniMap);


  let mapTile = document.querySelector('.leaflet-control-container')
  let mapTilerLink = document.querySelector('a[href="https://www.maptiler.com"]');
  if (mapTile && mapTile.lastElementChild) {
    mapTile.removeChild(mapTile.lastElementChild);
  }
  if (mapTilerLink) {
    mapTilerLink.remove();
  }
  const zoomControl = document.querySelector('.maplibregl-ctrl-top-right ');
  if (zoomControl) {
    zoomControl.remove(); // Elimina el contenedor de los controles
  }

  markers = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
      // Obtener el número de marcadores en el cluster
      const count = cluster.getChildCount();

      let size = '40px';
      let color = '#ffe4ff';
      let borderColor = '#d8c1e6';
      let textColor = 'black'
      if (count < 10) {
        size = '30px';
        color = '#d8c1e6';
        borderColor = '#a87db0'

      } else if (count < 20) {
        size = '35px';
        color = '#a87db0';
        borderColor = '#d8c1e6';

      }

      return L.divIcon({
        html: `<div style="background-color: ${color}; width: ${size}; height: ${size}; border: 2px solid ${borderColor} ; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: ${textColor}; font-weight: bold;">${count}</div>`,
        className: 'marker-cluster-custom', // Clase CSS adicional si necesitas
        iconSize: L.point(size.replace('px', ''), size.replace('px', '')), // Tamaño del ícono
      });
    }
  });
  miniMap.addLayer(markers); // Añadir el grupo de marcadores al mapa
});

watch(() => props.people, () => {
  markers.clearLayers()
  people.value = props.people

  people.value.forEach(person => {
    const coords = person.location && person.location.coordinates
    if (
      Array.isArray(coords) &&
      coords.length === 2 &&
      typeof coords[0] === 'number' &&
      typeof coords[1] === 'number'
    ) {
      const customMarker = getCustomMarker(person.sectors);
      const marker = L.marker(coords, { icon: customMarker });
      marker.on('click', () => {
        target.value = {
          id: marker._leaflet_id,
          ...person,
        };
        showCard.value = true;
      });
      markers.addLayer(marker);
    }// Añadir el marcador al grupo de marcadores
  });
})
</script>
