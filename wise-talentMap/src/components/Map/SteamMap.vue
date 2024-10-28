<template>
    <div class="w-full h-full relative !bg-green-400">
        <div id="map" class="w-full h-full"></div>
        <MiniMap :center="[28.50291, -15.88168]" :zoom="0" class="minimap" />
        <ListComponent v-if="showList" :markers="listData" :visible="showList" @close="showList = false"
            style="position: absolute; top: 10px; right: 10px; z-index: 1000" />
        <Card v-if="showCard" :person=target @close="showCard = false"
            style="position: absolute; top: 50px; right: 50px; z-index: 1000" />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useUserStore } from "@/stores/user"
import * as L from "leaflet";
import "@maptiler/leaflet-maptilersdk";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster";
import MiniMap from "./MiniMap.vue";
import ListComponent from "./ListComponent.vue";
import Card from './Card.vue'

const store = useUserStore()

const showList = ref(false);
const showCard = ref(false);
const listData = ref([]);
const target = ref({})
const map = ref(null)
const selectedCoordinates = ref([])

const renderIcon = () => {
    const iconSvg = generateSvgIcon("purple");
    return L.divIcon({
        html: iconSvg,
        className: "custom-icon",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
};

function generateSvgIcon(color = "black") {
    return `
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="32" height="32" viewBox="0 0 256 256"
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

const people = [
    {
        firstName: "Mia",
        lastName: "Doe",
        location: [28.120058, -15.43],
        sectors: ["Science", "Technology"],
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        location: [28.1232, -15.45],
        sectors: ["Mathematics"],
    },
    {
        firstName: "Martha",
        lastName: "Beam",
        location: [28.1249, -15.5],
        sectors: ["Engineering", "Arts", "Science"],
    },
    {
        firstName: "John",
        lastName: "Doe",
        location: [28.463, -16.27],
        sectors: ["Arts", "Mathematics"],
    },
    {
        firstName: "Tom",
        lastName: "Brown",
        location: [28.996, -13.592],
        sectors: ["Mathematics"],
    },
    {
        firstName: "Martha",
        lastName: "Brown",
        location: [40.66, 128.65],
        sectors: ["Mathematics"]
    }
];

onMounted(() => {
    map.value = L.map("map", {
        center: L.latLng(28.50291, -15.88168),
        zoomControl: false,
        zoom: 8.4,
        maxZoom: 13,
        minZoom: 2,
        scrollWheelZoom: false,
        maxBounds: [
            [-85, -180],
            [85, 180]
        ],
        maxBoundsViscosity: 1.0,
    })

    const zoomControl = L.control.zoom()
    map.value.removeControl(zoomControl)
    zoomControl.options.position = 'topright'
    zoomControl.addTo(map.value)

    const mtLayer = new L.MaptilerLayer({
        apiKey: "CNX23CDiEaOjDZ7zvUIS",
        style:
            "https://api.maptiler.com/maps/9acac1d3-e6e0-404c-8213-7da3ad245870/style.json",
        noWrap: true,
    }).addTo(map.value);

    let mapTile = document.querySelector(".leaflet-control-container");
    let mapTilerLink = document.querySelector(
        'a[href="https://www.maptiler.com"]'
    );

    if (mapTile && mapTile.lastElementChild) {
        mapTile.removeChild(mapTile.lastElementChild);
    }
    if (mapTilerLink) {
        mapTilerLink.remove();
    }

    const markers = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            const count = cluster.getChildCount();
            const size = count < 10 ? "30px" : count < 20 ? "35px" : "40px";
            const color = count < 10 ? "#d8c1e6" : count < 20 ? "#a87db0" : "#ffe4ff";
            const borderColor =
                count < 10 ? "#a87db0" : count < 20 ? "#d8c1e6" : "#d8c1e6";

            return L.divIcon({
                html: `<div style="background-color: ${color}; width: ${size}; height: ${size}; border: 2px solid ${borderColor}; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: black; font-weight: bold;">${count}</div>`,
                className: "marker-cluster-custom",
                iconSize: L.point(size.replace("px", ""), size.replace("px", "")),
            });
        },
        zoomToBoundsOnClick: false
    });
    markers.on("clusterclick", function (event) {
        console.log(event)
        event.originalEvent.stopPropagation()
        showCard.value = false
        store.handleOpenDrawer()
        selectedCoordinates.value = [event.latlng.lat, event.latlng.lng]
        const childMarkers = event.layer.getAllChildMarkers();
        listData.value = childMarkers.map((marker) => {
            const person = people.find(
                (p) =>
                    p.location[0] === marker.getLatLng().lat &&
                    p.location[1] === marker.getLatLng().lng
            );
            return {
                id: marker._leaflet_id,
                ...person
            };
        });
    });

    people.forEach((person) => {
        const customIcon = renderIcon();
        const marker = L.marker(person.location, { icon: customIcon });
        marker.on("click", () => {
            target.value =
            {
                id: marker._leaflet_id,
                ...person
            }
            showCard.value = true
        });
        markers.addLayer(marker)
    });
    map.value.addLayer(markers)
});

watch(() => store.openDrawer, (isOpen) => {
    if (isOpen && map.value) {
        map.value.invalidateSize()
        map.value.setView(selectedCoordinates.value, 8.5)
    } else {
        map.value.invalidateSize()
        map.value.setView(selectedCoordinates.value, 7.5)
    }
})
</script>

<style scoped>
.minimap {
    width: 16rem;
    height: 10rem;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>