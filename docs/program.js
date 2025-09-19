var map = L.map('map').setView([4.628063362852504, -74.06589315072523], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('map.geojson')
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data).addTo(map);
    });