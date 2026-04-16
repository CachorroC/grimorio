import { promises as fs } from 'fs';
import path from 'path';
import clientPromise from '../connection/mongodb';
import { EspecimenType } from '../types/especimenTypes';

// Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

/**
 * Queries the database for items where:
 * - polaridadEnergetica contains 'Feminine'
 * - elementosAsociados is 'Tierra'
 * Writes their names into 'mismatchedData.json'.
 */
export async function getMismatchedData() {
  const client = await clientPromise;

  try {
    console.log('Conectando a MongoDB para buscar registros con polaridad Feminine y elemento Tierra...');
    await client.connect();

    const db = client.db(DB_NAME);
    const collection = db.collection<EspecimenType>(COLLECTION_NAME);

    // Query for Feminine polarity and Tierra element
    // MongoDB's equality on an array field matches if the value is in the array.
    const allItems = await collection
      .find(
        {
          polaridadEnergetica: 'Feminine',
          elementosAsociados : 'Tierra',
        },
        { projection: { nombreCientifico: 1, _id: 0 } }
      )
      .toArray();

    // Extract the names
    const mismatchedNames = allItems
      .map((item) => item.nombreCientifico)
      .filter((name): name is string => !!name);

    console.log(`✅ Se encontraron ${mismatchedNames.length} registros que coinciden con los criterios.`);

    // Write the output to a JSON file in the same directory
    const outputPath = path.join(process.cwd(), 'src/lib/json/mismatchedData.json');
    const fileContent = JSON.stringify(mismatchedNames, null, 2);

    console.log(`Escribiendo archivo JSON en: ${outputPath}...`);
    await fs.writeFile(outputPath, fileContent, 'utf-8');

    console.log('✅ Archivo mismatchedData.json escrito con éxito.');

    return mismatchedNames;
  } catch (error) {
    console.error('❌ Error durante la búsqueda de datos:', error);
    throw error;
  } finally {
    await client.close();
  }
}

// If this script is run directly, execute the function
if (require.main === module) {
  getMismatchedData()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
