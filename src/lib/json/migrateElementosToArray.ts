import clientPromise from '../connection/mongodb';

// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

/**
 * Migration script to convert 'elementosAsociados' from a string to an array of strings.
 * This ensures data consistency after updating the ElementosType to support multiple selections.
 */
export async function migrateElementosToArray(): Promise<void> {
  const client = await clientPromise;

  try {
    console.log(
      'Iniciando migración de elementosAsociados a Array...'
    );

    const db = client.db(
      DB_NAME
    );
    const collection = db.collection(
      COLLECTION_NAME
    );

    // Find all documents
    const cursor = collection.find(
      {}
    );
    const documents = await cursor.toArray();

    let updatedCount = 0;

    for ( const doc of documents ) {
      const currentElementos = doc.elementosAsociados;

      // If it's not an array, we need to convert it
      if ( !Array.isArray(
        currentElementos 
      ) ) {
        const nextElementos = currentElementos
          ? [
              currentElementos
            ]
          : [
              'Sin Elemento Asociado'
            ];

        await collection.updateOne(
          {
            _id: doc._id 
          },
          {
            $set: {
              elementosAsociados: nextElementos 
            } 
          },
        );
        updatedCount++;
      }
    }

    console.log(
      '✅ Migración completada.'
    );
    console.log(
      `- Total documentos: ${ documents.length }`
    );
    console.log(
      `- Documentos actualizados: ${ updatedCount }`
    );

  } catch ( error ) {
    console.error(
      '❌ Error durante la migración de elementos:', error
    );

    throw error;
  }
}

/*
if ( require.main === module ) {
  migrateElementosToArray()
    .then(
      () => {
        return process.exit(
          0
        );
      }
    )
    .catch(
      (
        err
      ) => {
        console.error(
          err
        );
        process.exit(
          1
        );
      }
    );
}
*/
