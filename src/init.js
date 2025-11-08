(function setupTabsAndMarineLife() {
  const tabRegion = document.getElementById('tab-region');
  const tabMarine = document.getElementById('tab-marine-life');
  const tabRegionTree = document.getElementById('tab-region-tree');
  const contentRegion = document.getElementById('tab-content-region');
  const contentMarine = document.getElementById('tab-content-marine-life');
  const contentRegionTree = document.getElementById('tab-content-region-tree');
  if (!tabRegion || !tabMarine || !tabRegionTree || !contentRegion || !contentMarine || !contentRegionTree) return;
  function selectTab(tab) {
    tabRegion.classList.remove('selected');
    tabMarine.classList.remove('selected');
    tabRegionTree.classList.remove('selected');
    contentRegion.style.display = 'none';
    contentMarine.style.display = 'none';
    contentRegionTree.style.display = 'none';
    if (tab === 'region') {
      tabRegion.classList.add('selected');
      contentRegion.style.display = '';
    } else if (tab === 'marine') {
      tabMarine.classList.add('selected');
      contentMarine.style.display = '';
    } else if (tab === 'region-tree') {
      tabRegionTree.classList.add('selected');
      contentRegionTree.style.display = '';
    }
  }
  tabRegion.addEventListener('click', () => selectTab('region'));
  tabMarine.addEventListener('click', () => selectTab('marine'));
  tabRegionTree.addEventListener('click', () => selectTab('region-tree'));

  // Render marine life categories with images
  import('./../marine-life/marine-life.js').then(mod => {
    const { categories } = mod;
    const container = document.getElementById('marine-life-browser');
    if (!container) return;
    function renderCategory(cat, level = 0, parentKey = '') {
      const key = (parentKey ? parentKey + '-' : '') + cat.id;
      const hasChildren = cat.children && Object.keys(cat.children).length > 0;
      let html = `<div class="ml-cat" data-key="${key}" style="margin-left:${level * 1.5}em; margin-bottom:1.2em;">
        <div style="display:flex;align-items:center;gap:1em;">
          ${hasChildren ? `<button class="ml-fold" data-key="${key}" aria-label="Toggle fold" style="width:1.7em;height:1.7em;font-size:1.2em;border:none;background:none;cursor:pointer;">&#9654;</button>` : '<span style="display:inline-block;width:1.7em;"></span>'}
          ${cat.image ? `<img src="${cat.image}" alt="${cat.name}" style="width:70px;height:55px;object-fit:cover;border-radius:0.5em;box-shadow:0 2px 8px #0002;">` : ''}
          <div>
            <div style="font-size:1.2em;font-weight:bold;">${cat.name}</div>
            <div style="font-size:0.98em;color:#666;">${cat.description || ''}</div>
          </div>
        </div>`;
      if (hasChildren) {
        html += `<div class="ml-children" data-parent="${key}" style="margin-top:0.5em;display:none;">`;
        for (const childKey in cat.children) {
          html += renderCategory(cat.children[childKey], level + 1, key);
        }
        html += '</div>';
      }
      html += '</div>';
      return html;
    }
    let html = '';
    for (const key in categories) {
      html += renderCategory(categories[key], 0);
    }
    container.innerHTML = html;

    // Folding logic
    container.addEventListener('click', e => {
      const btn = e.target.closest('.ml-fold');
      if (!btn) return;
      const key = btn.getAttribute('data-key');
      const childrenDiv = container.querySelector(`.ml-children[data-parent="${key}"]`);
      if (!childrenDiv) return;
      const isOpen = childrenDiv.style.display !== 'none';
      childrenDiv.style.display = isOpen ? 'none' : '';
      btn.innerHTML = isOpen ? '&#9654;' : '&#9660;';
    });
  });
})();
import { createMap, setMapTheme } from './map.js';
import { renderRegionToggles, setupRegionToggleEvents } from './controls.js';
import { setupSearch } from './search.js';
import { buildTree, renderTree } from './tree.js';
import * as marineLifeMod from '../marine-life/marine-life.js';
let marineLifeLookup = null;
function buildMarineLifeLookup() {
  if (marineLifeLookup) return marineLifeLookup;
  marineLifeLookup = {};
  function walk(obj) {
    if (!obj) return;
    if (obj.id && obj.name) marineLifeLookup[obj.id.toLowerCase()] = obj;
    if (obj.name) marineLifeLookup[obj.name.toLowerCase()] = obj;
    if (obj.children) {
      for (const key in obj.children) walk(obj.children[key]);
    }
  }
  for (const key in marineLifeMod.categories) walk(marineLifeMod.categories[key]);
  for (const key in marineLifeMod.species) {
    const s = marineLifeMod.species[key];
    marineLifeLookup[s.id.toLowerCase()] = s;
    marineLifeLookup[s.name.toLowerCase()] = s;
    if (s.commonNames) for (const n of s.commonNames) marineLifeLookup[n.toLowerCase()] = s;
  }
  return marineLifeLookup;
}
  // --- Region Tree Browser ---
  function renderFoldableTree(nodes, level = 0, parentKey = '') {
    let html = '<ul style="margin-left:' + (level * 1.2) + 'em">';
    const marineLife = buildMarineLifeLookup();
    for (const node of nodes) {
      const key = (parentKey ? parentKey + '-' : '') + node.id;
      const hasChildren = node.children && node.children.length > 0;
      let floraFaunaStr = '';
      if (node.floraFauna && Array.isArray(node.floraFauna) && node.floraFauna.length) {
        floraFaunaStr = ' <span style="color:#888;font-size:0.95em;">[';
        floraFaunaStr += node.floraFauna.map(item => {
          let match = marineLife[item.toLowerCase()];
          if (!match) {
            // Try fuzzy: singular/plural, remove spaces, dashes, etc.
            const norm = item.toLowerCase().replace(/\s|\-/g, '');
            match = Object.values(marineLife).find(m => m.id && m.id.replace(/\s|\-/g, '') === norm || m.name && m.name.replace(/\s|\-/g, '').toLowerCase() === norm);
          }
          if (match) {
            const img = match.image ? `<img src="${match.image}" alt="${match.name}" style="width:32px;height:24px;object-fit:cover;border-radius:0.3em;margin-right:0.3em;vertical-align:middle;">` : '';
            return `<span class="ml-hover" style="cursor:pointer;position:relative;">
              ${img}<span style="text-decoration:underline dotted;">${match.name}</span>
              <span class="ml-popup" style="display:none;position:absolute;z-index:10;left:0;top:1.5em;background:#fff;color:#222;padding:0.7em 1em;border-radius:0.5em;box-shadow:0 2px 12px #0003;min-width:220px;max-width:320px;">
                <b>${match.name}</b><br>${match.description || ''}
                ${match.image ? `<div style=\"margin-top:0.5em;text-align:center;\"><img src=\"${match.image}\" alt=\"${match.name}\" style=\"width:120px;height:90px;object-fit:cover;border-radius:0.5em;box-shadow:0 2px 8px #0002;\"></div>` : ''}
              </span>
            </span>`;
          } else {
            return `<span style="text-decoration:underline dotted;">${item}</span>`;
          }
        }).join(', ') + ']</span>';
      }
      html += `<li class="${node.type}" data-key="${key}">`;
      html += hasChildren
        ? `<button class="tree-fold" data-key="${key}" aria-label="Toggle fold" style="width:1.5em;height:1.5em;font-size:1.1em;border:none;background:none;cursor:pointer;">&#9654;</button>`
        : '<span style="display:inline-block;width:1.5em;"></span>';
      html += `<span>${node.name}${floraFaunaStr}</span>`;
      if (hasChildren) {
        html += `<div class="tree-children" data-parent="${key}" style="display:none;">`;
        html += renderFoldableTree(node.children, level + 1, key);
        html += '</div>';
      }
      html += '</li>';
    }
    html += '</ul>';
    return html;
  }
import { getColor, getRadius, findMajorId } from './utils.js';
import { loadAllRegions } from './regions.js';

const markersByMajor = {};
(async function() {
  const data = await loadAllRegions();
  // Map
  const { map, lightTiles, darkTiles } = createMap();
  // Controls
  const majors = Object.values(data).filter(r => r.type === 'major');
  const controlsDiv = document.getElementById('controls');
  controlsDiv.innerHTML = renderRegionToggles(majors);
  const regionTogglesDiv = document.getElementById('region-toggles');
  // Markers
  for (const region of Object.values(data)) {
    if (!region.coordinates) continue;
    const color = getColor(region.type);
    const radius = getRadius(region.type);
    const marker = L.circleMarker(region.coordinates, {
      color,
      fillColor: color,
      fillOpacity: 0.7,
      radius
    });
    marker.bindPopup(`<b>${region.name}</b><br>${region.description || ''}`);
    marker.bindTooltip(`<b>${region.name}</b><br>${region.description || ''}`, {sticky: true, direction: 'top', offset: [0, -radius]});
    const majorId = findMajorId(region, data);
    if (!markersByMajor[majorId]) markersByMajor[majorId] = [];
    markersByMajor[majorId].push(marker);
  }
  setupRegionToggleEvents(regionTogglesDiv, markersByMajor, data, findMajorId, map);
  // Theme toggle
  const darkBtn = document.getElementById('toggle-dark');
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    setMapTheme(map, lightTiles, darkTiles, theme);
  }
  setTheme('light');
  darkBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
  // Search
  setupSearch(data, map, markersByMajor, findMajorId);
  // Region Tree Browser (foldable, in new tab)
  const tree = buildTree(data);
  const regionTreeBrowser = document.getElementById('region-tree-browser');
  if (regionTreeBrowser) {
    regionTreeBrowser.innerHTML = renderFoldableTree(tree);
    // Folding logic
    regionTreeBrowser.addEventListener('click', e => {
      const btn = e.target.closest('.tree-fold');
      if (!btn) return;
      const key = btn.getAttribute('data-key');
      const childrenDiv = regionTreeBrowser.querySelector(`.tree-children[data-parent="${key}"]`);
      if (!childrenDiv) return;
      const isOpen = childrenDiv.style.display !== 'none';
      childrenDiv.style.display = isOpen ? 'none' : '';
      btn.innerHTML = isOpen ? '&#9654;' : '&#9660;';
    });
    // Hover popup logic for marine life
    regionTreeBrowser.addEventListener('mouseover', e => {
      const hover = e.target.closest('.ml-hover');
      if (hover) {
        const popup = hover.querySelector('.ml-popup');
        if (popup) popup.style.display = 'block';
      }
    });
    regionTreeBrowser.addEventListener('mouseout', e => {
      const hover = e.target.closest('.ml-hover');
      if (hover) {
        const popup = hover.querySelector('.ml-popup');
        if (popup) popup.style.display = 'none';
      }
    });
  }
})();
