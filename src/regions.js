// Region data loader
export async function loadAllRegions() {
  const files = [
    'africa.json',
    'antartica.json',
    'australia.json',
    'caribbean.json',
    'east-asia.json',
    'europe.json',
    'middle-east.json',
    'new-zealand.json',
    'north-america.json',
    'south-america.json',
    'indian-ocean.json',
    'south-pacific.json',
    'southeast-asia.json'
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
