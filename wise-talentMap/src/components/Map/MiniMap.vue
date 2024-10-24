<template>
  <div id="mini-map"></div>
</template>

<script setup>
import * as L from 'leaflet';
import { onMounted } from 'vue';
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
  }
});

const people = [
  { firstName: "Mia", lastName: "Doe", location: [28.120058, -15.43], sectors: ["Science", "Technology"] },
  { firstName: "Jane", lastName: "Smith", location: [28.1232, -15.450], sectors: ["Mathematics"] },
  { firstName: "Martha", lastName: "Beam", location: [28.1249, -15.50], sectors: ["Engineering", "Arts", "Science"] },
  { firstName: "John", lastName: "Doe", location: [28.463, -16.270], sectors: ["Arts", "Mathematics"] },
  { firstName: "Tom", lastName: "Brown", location: [28.996, -13.592], sectors: ["Mathematics"] },
  { firstName: "Martha", lastName: "Brown", location: [40.66, 128.65], sectors: ["Mathematics"] }
];
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="16" height="48" viewBox="0 0 256 256"
    xml:space="preserve"
  >
    <defs></defs>
    <g
      style="fill: none; fill-rule: nonzero; opacity: 1;"
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 45 0 C 25.463 0 9.625 15.838 9.625 35.375 c 0 8.722 3.171 16.693 8.404 22.861 L 45 90 l 26.97 -31.765 c 5.233 -6.167 8.404 -14.139 8.404 -22.861 C 80.375 15.838 64.537 0 45 0 z M 45 48.705 c -8.035 0 -14.548 -6.513 -14.548 -14.548 c 0 -8.035 6.513 -14.548 14.548 -14.548 s 14.548 6.513 14.548 14.548 C 59.548 42.192 53.035 48.705 45 48.705 z"
        style="fill: ${color}; stroke: none;"
        transform="matrix(1 0 0 1 0 0)"
        stroke-linecap="round"
      />
    </g>
  </svg>
`;
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
    apiKey: "CNX23CDiEaOjDZ7zvUIS",
    style: 'https://api.maptiler.com/maps/9acac1d3-e6e0-404c-8213-7da3ad245870/style.json'
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

  const markers = L.markerClusterGroup({
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


  people.forEach(person => {
    const customMarker = getCustomMarker(person.sectors);
    const marker = L.marker(person.location, { icon: customMarker });

    const popupContent = `
    <strong>${person.firstName} ${person.lastName}</strong><br>
    Sector: ${person.sectors.join(', ')}
  `;

    //marker.bindPopup(popupContent);
    markers.addLayer(marker); // Añadir el marcador al grupo de marcadores
  });

  miniMap.addLayer(markers); // Añadir el grupo de marcadores al mapa

});
</script>

<style scoped>
#mini-map {
  width: 300px;
  /* Ajusta el ancho del mini mapa */
  height: 300px;
  /* Ajusta la altura del mini mapa */
  border: 4px solid black;
  /* Opcional: añade borde al mini mapa */
  overflow: hidden
}
</style>
