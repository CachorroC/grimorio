import { promises as fs } from 'fs';
import path from 'path';
import clientPromise from '../connection/mongodb';
import { EspecimenType } from '../types/especimenTypes';

// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

export async function getData() {
  // Initialize the MongoDB client
  const client = await clientPromise;

  let response;

  try {
    // 2. Connect to the database server
    console.log('Conectando a MongoDB...');
    await client.connect();
    console.log('✅ Conexión exitosa.');

    // 3. Select the database and strictly type the collection
    const db = client.db(DB_NAME);
    const collection = db.collection<EspecimenType>(COLLECTION_NAME);

    // 4. Query all items from the collection
    console.log('Consultando la base de datos...');
    const allItems = await collection.find({}).toArray();

    const newArray = allItems.map((e) => {
      const { _id, ...restData } = e;
      console.log(_id);

      return restData as EspecimenType;
    });
    console.log(`✅ Se recuperaron ${newArray.length} registros.`);

    // 5. Prepare the JSON file content
    // We strictly stringify the flat array of items
    const fileContent = JSON.stringify(newArray, null, 2);

    const fileContentWithIds = JSON.stringify(allItems, null, 2);

    // 6. Define the output file path and write the file
    const outputPath = path.join(
      process.cwd(),
      'src/lib/json/plantListDB.json', // Updated target filename and extension
    );

    const outPathWithIds = path.join(
      process.cwd(),
      'src/lib/json/plantListDBWithIds.json', // Updated target filename and extension
    );

    console.log(`Escribiendo archivo JSON en: ${outputPath}...`);
    await fs.writeFile(outputPath, fileContent, 'utf-8');

    await fs.writeFile(outPathWithIds, fileContentWithIds, 'utf-8');

    console.log('✅ Archivo .json escrito con éxito.');

    response = {
      success: true,
      data: newArray,
    };
  } catch (error) {
    console.error('❌ Error durante la operación de base de datos:', error);
    response = {
      success: false,
    };
  } finally {
    // 7. Ensure the connection is always closed, even if an error occurs
    await client.close();
    console.log('Conexión a MongoDB cerrada.');
  }

  return response;
}
