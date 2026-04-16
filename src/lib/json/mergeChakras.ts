import fs from 'fs';
import path from 'path';

// Load data
const data1Path = path.join(__dirname, 'asociatedChakras.json');
const data2Path = path.join(__dirname, 'asociatedChakras2.json');
const outputPath = path.join(__dirname, 'definitiveChakrasAsociados.json');

const data1: Record<string, string[]> = JSON.parse(fs.readFileSync(data1Path, 'utf8'));
const data2: Array<{ plant: string; chakras: string[] }> = JSON.parse(fs.readFileSync(data2Path, 'utf8'));

const chakraNameMap: Record<string, string> = {
  'Root': 'Chakra Raíz',
  'Root Chakra': 'Chakra Raíz',
  'Sacral': 'Chakra Sacro',
  'Sacral Chakra': 'Chakra Sacro',
  'Solar Plexus': 'Chakra del Plexo Solar',
  'Solar Plexus Chakra': 'Chakra del Plexo Solar',
  'Heart': 'Chakra del Corazón',
  'Heart Chakra': 'Chakra del Corazón',
  'Throat': 'Chakra de la Garganta',
  'Throat Chakra': 'Chakra de la Garganta',
  'Third Eye': 'Chakra del Tercer Ojo',
  'Third Eye Chakra': 'Chakra del Tercer Ojo',
  'Crown': 'Chakra Corona',
  'Crown Chakra': 'Chakra Corona',
};

const ALL_CHAKRAS = [
  'Chakra Raíz',
  'Chakra Sacro',
  'Chakra del Plexo Solar',
  'Chakra del Corazón',
  'Chakra de la Garganta',
  'Chakra del Tercer Ojo',
  'Chakra Corona'
];

const CHAKRA_ORDER = {
    'Chakra Raíz': 1,
    'Chakra Sacro': 2,
    'Chakra del Plexo Solar': 3,
    'Chakra del Corazón': 4,
    'Chakra de la Garganta': 5,
    'Chakra del Tercer Ojo': 6,
    'Chakra Corona': 7
};

function normalizeChakras(chakras: string[]): string[] {
  const result = new Set<string>();
  for (const c of chakras) {
    if (c === 'Alignment of all Chakras') {
      ALL_CHAKRAS.forEach(ac => result.add(ac));
    } else {
      const normalized = chakraNameMap[c];
      if (normalized) {
        result.add(normalized);
      } else {
        console.warn(`Unknown chakra: ${c}`);
        result.add(c); // Keep as is if unknown for now
      }
    }
  }
  return Array.from(result).sort((a, b) => (CHAKRA_ORDER[a] || 99) - (CHAKRA_ORDER[b] || 99));
}

const mergedMap = new Map<string, Set<string>>();

// Initial merge from File 1
for (const [plant, chakras] of Object.entries(data1)) {
    mergedMap.set(plant, new Set(normalizeChakras(chakras)));
}

// Merge from File 2
for (const item of data2) {
    const existing = mergedMap.get(item.plant) || new Set<string>();
    const normalized = normalizeChakras(item.chakras);
    normalized.forEach(c => existing.add(c));
    mergedMap.set(item.plant, existing);
}

// Convert to array of objects
const result = Array.from(mergedMap.entries()).map(([plant, chakras]) => ({
    plant,
    chakras: Array.from(chakras).sort((a, b) => (CHAKRA_ORDER[a] || 99) - (CHAKRA_ORDER[b] || 99))
})).sort((a, b) => a.plant.localeCompare(b.plant));

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
console.log(`Merged ${result.length} plants into ${outputPath}`);
