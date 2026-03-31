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

  try {
    // 2. Connect to the database server
    console.log(
      'Conectando a MongoDB...'
    );
    await client.connect();
    console.log(
      '✅ Conexión exitosa.'
    );

    // 3. Select the database and strictly type the collection
    const db = client.db(
      DB_NAME
    );
    const collection = db.collection<EspecimenType>(
      COLLECTION_NAME
    );

    // 4. Query all items from the collection
    console.log(
      'Consultando la base de datos...'
    );
    const allItems = await collection.find(
      {}
    )
      .toArray();
    console.log(
      `✅ Se recuperaron ${ allItems.length } registros.`
    );

    // 5. Chunk the array into arrays of 20 items each for pagination
    const chunkSize = 20;
    const paginatedItems: EspecimenType[][] = [];

    for ( let i = 0; i < allItems.length; i += chunkSize ) {
      paginatedItems.push(
        allItems.slice(
          i, i + chunkSize
        )
      );
    }

    console.log(
      `✅ Datos divididos en ${ paginatedItems.length } páginas de hasta ${ chunkSize } ítems.`,
    );

    // 6. Prepare the TypeScript file content
    // Note: The exported type is now EspecimenType[][]
    const fileContent = `import { EspecimenType } from '../types/especimenTypes';\n\nexport const plantList: EspecimenType[][] = ${ JSON.stringify(
      paginatedItems,
      null,
      2,
    ) };\n`;

    // 7. Define the output file path and write the file
    const outputPath = path.join(
      process.cwd(),
      'src/lib/json/exportedEspecimenes.ts',
    );

    console.log(
      `Escribiendo archivo en: ${ outputPath }...`
    );
    await fs.writeFile(
      outputPath, fileContent, 'utf-8'
    );
    console.log(
      '✅ Archivo .ts escrito con éxito.'
    );
  } catch ( error ) {
    console.error(
      '❌ Error durante la operación de base de datos:', error
    );
  } finally {
    // 8. Ensure the connection is always closed, even if an error occurs
    await client.close();
    console.log(
      'Conexión a MongoDB cerrada.'
    );
  }
}

getData();
