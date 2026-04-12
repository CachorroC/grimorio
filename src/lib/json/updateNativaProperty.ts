import { EspecimenType } from '../types/especimenTypes';
import clientPromise from '../connection/mongodb';

// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

/**
 * Updates all items in the database to have the property 'nativa' set to true.
 * This is a one-off operation for plants currently in the database (Colombia native plants).
 */
export async function updateNativaProperty(): Promise<void> {
  const client = await clientPromise;

  try {
    console.log(
      'Iniciando actualización de propiedad nativa...'
    );

    const db = client.db(
      DB_NAME
    );
    const collection = db.collection<EspecimenType>(
      COLLECTION_NAME
    );

    // Update all documents in the collection
    const result = await collection.updateMany(
      {}, // filter - match all
      {
        $set: {
          nativa: true
        }
      } // update - set nativa to true
    );

    console.log(
      '✅ Actualización completada.'
    );
    console.log(
      `- Documentos encontrados: ${ result.matchedCount }`
    );
    console.log(
      `- Documentos modificados: ${ result.modifiedCount }`
    );

  } catch ( error ) {
    console.error(
      '❌ Error durante la actualización de la base de datos:', error
    );

    throw error;
  }
}
/*
if ( require.main === module ) {
  updateNativaProperty()
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