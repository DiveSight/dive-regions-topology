// Region data loader
export async function loadAllRegions() {
  const files = [
    'africa.json', 'north-america.json', 'south-america.json', 'australia.json', 'caribbean.json',
    'europe-mediterranean.json', 'indian-ocean.json', 'middle-east.json',
    'new-zealand.json', 'south-pacific.json', 'southeast-asia.json', 'east-asia.json'
  ];
  const regionData = {};
  for (const file of files) {
    const res = await fetch('regions/' + file);
    if (res.ok) {
      const json = await res.json();
      Object.assign(regionData, json);
    }
  }
  return regionData;
}
