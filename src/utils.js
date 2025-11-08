// Utility functions
export function getColor(type) {
  if (type === 'major') return '#e74c3c';
  if (type === 'country') return '#2980b9';
  if (type === 'area') return '#27ae60';
  if (type === 'subarea') return '#f39c12';
  return '#888';
}

export function getRadius(type) {
  if (type === 'major') return 22;
  if (type === 'country') return 16;
  if (type === 'area') return 11;
  if (type === 'subarea') return 7;
  return 5;
}

export function findMajorId(region, data) {
  let current = region;
  while (current && current.parent) {
    current = data[current.parent];
  }
  return current ? current.id : region.id;
}
