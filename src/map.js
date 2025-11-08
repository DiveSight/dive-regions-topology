// Map initialization and theming
export function createMap() {
  const map = L.map('map').setView([0, 0], 2);
  const lightTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  });
  const darkTiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>'
  });
  lightTiles.addTo(map);
  return { map, lightTiles, darkTiles };
}

export function setMapTheme(map, lightTiles, darkTiles, theme) {
  if (theme === 'dark') {
    map.removeLayer(lightTiles);
    map.addLayer(darkTiles);
  } else {
    map.removeLayer(darkTiles);
    map.addLayer(lightTiles);
  }
}
