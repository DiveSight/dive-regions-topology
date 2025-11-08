// Controls and region toggles
export function renderRegionToggles(majors) {
  return `
    <button id="all-on" class="region-toggle-btn" style="font-weight:bold;">All On</button>
    <button id="all-off" class="region-toggle-btn" style="font-weight:bold;">All Off</button>
    <div id="region-toggles" style="margin-top:0.7em;">
      ${majors.map(m => `<label class="region-toggle-btn"><input type="checkbox" data-major="${m.id}"> ${m.name}</label>`).join(' ')}
    </div>
  `;
}

export function setupRegionToggleEvents(regionTogglesDiv, markersByMajor, data, findMajorId, map) {
  regionTogglesDiv.addEventListener('change', e => {
    if (!e.target.matches('input[data-major]')) return;
    const majorId = e.target.getAttribute('data-major');
    const show = e.target.checked;
    (markersByMajor[majorId] || []).forEach(marker => {
      if (show) marker.addTo(map); else map.removeLayer(marker);
    });
    e.target.closest('.region-toggle-btn').classList.toggle('selected', show);
  });
  document.getElementById('all-on').addEventListener('click', () => {
    regionTogglesDiv.querySelectorAll('input[data-major]').forEach(cb => {
      if (!cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change', {bubbles:true}));
      }
    });
  });
  document.getElementById('all-off').addEventListener('click', () => {
    regionTogglesDiv.querySelectorAll('input[data-major]').forEach(cb => {
      if (cb.checked) {
        cb.checked = false;
        cb.dispatchEvent(new Event('change', {bubbles:true}));
      }
    });
  });
  regionTogglesDiv.querySelectorAll('input[data-major]').forEach(cb => {
    cb.closest('.region-toggle-btn').classList.toggle('selected', cb.checked);
  });
}
