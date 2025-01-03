let mapInitialized = false;

function initMap() {
    if (mapInitialized) {
        console.warn("Map is already initialized. Skipping...");
        return;
    }
    console.log("Initializing map");

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 2,
        maxZoom: 15,
        minZoom:4.5, 
        scrollwheel: true,
    });

    mapInitialized = true;
}

window.onload = initMap;