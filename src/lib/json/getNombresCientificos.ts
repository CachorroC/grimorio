import { promises as fs } from 'fs';
import path from 'path';
import clientPromise from '../connection/mongodb';
import { EspecimenType } from '../types/especimenTypes';

// Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

/**
 * Queries all existing items on the MongoDB database and returns
 * only the 'nombreCientifico' property in an array.
 * Also writes the output to 'nombresCientificos.json' in the same directory.
 */
export async function getNombresCientificos() {
  const client = await clientPromise;

  try {
    console.log('Conectando a MongoDB para extraer nombres científicos...');
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection<EspecimenType>(COLLECTION_NAME);

    // Query only the nombreCientifico field for all items
    const allItems = await collection
      .find({}, { projection: { nombreCientifico: 1, _id: 0 } })
      .toArray();

    // Extract the names into a flat array of strings
    const scientificNames = allItems
      .map((item) => item.nombreCientifico)
      .filter((name): name is string => !!name);

    console.log(`✅ Se encontraron ${scientificNames.length} nombres científicos.`);

    // Write the output to a JSON file in the same directory
    const outputPath = path.join(process.cwd(), 'src/lib/json/nombresCientificos.json');
    const fileContent = JSON.stringify(scientificNames, null, 2);

    console.log(`Escribiendo archivo JSON en: ${outputPath}...`);
    await fs.writeFile(outputPath, fileContent, 'utf-8');

    console.log('✅ Archivo nombresCientificos.json escrito con éxito.');

    return scientificNames;
  } catch (error) {
    console.error('❌ Error durante la extracción de nombres científicos:', error);
    throw error;
  } finally {
    await client.close();
  }
}

// If this script is run directly, execute the function
if (require.main === module) {
  getNombresCientificos()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
