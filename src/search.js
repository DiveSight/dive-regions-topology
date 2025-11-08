// Search logic for regions/sites
export function setupSearch(data, map, markersByMajor, findMajorId) {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchable = Object.values(data).filter(r => r.coordinates && r.name);
  searchInput.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (!q) {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
      return;
    }
    const matches = searchable.filter(r => r.name.toLowerCase().includes(q));
    if (matches.length === 0) {
      searchResults.innerHTML = '<div style="padding:0.7em;">No results</div>';
      searchResults.style.display = 'block';
      return;
    }
    searchResults.innerHTML = matches.slice(0, 10).map(r =>
      `<div class="search-result" style="padding:0.7em; cursor:pointer; border-bottom:1px solid #eee;" data-id="${r.id}"><b>${r.name}</b><br><span style="font-size:0.95em; color:#888;">${r.description || ''}</span></div>`
    ).join('');
    searchResults.style.display = 'block';
  });
  searchInput.addEventListener('blur', () => setTimeout(() => { searchResults.style.display = 'none'; }, 200));
  searchResults.addEventListener('click', e => {
    const div = e.target.closest('.search-result');
    if (!div) return;
    const id = div.getAttribute('data-id');
    const region = data[id];
    if (region && region.coordinates) {
      map.setView(region.coordinates, 7);
      const majorId = findMajorId(region, data);
      const marker = (markersByMajor[majorId] || []).find(m => {
        const latlng = m.getLatLng();
        return Math.abs(latlng.lat - region.coordinates[0]) < 0.0001 && Math.abs(latlng.lng - region.coordinates[1]) < 0.0001;
      });
      if (marker) marker.openPopup();
    }
    searchResults.style.display = 'none';
    searchInput.value = '';
  });
}
