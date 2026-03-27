/* eslint-disable @typescript-eslint/no-explicit-any */
import { Collection, AnyBulkWriteOperation } from 'mongodb';
import { EspecimenType, PreparacionType, Taxon } from '../types/especimenTypes';
import clientPromise from '../connection/mongodb';
import { plantList } from './plantlist';

/**
 * Helper function to merge two arrays of strings and remove duplicates.
 * Trims whitespace and checks case-insensitively to prevent accidental duplicates.
 */
function mergeStringArrays(
  arr1?: string[] | null, arr2?: string[] | null
): string[] {
  const combined = [
    ...( arr1 || [] ),
    ...( arr2 || [] )
  ];

  const uniqueMap = new Map<string, string>();

  for ( const item of combined ) {
    if ( typeof item === 'string' ) {
      // Normalize to prevent whitespace or case mismatches from duplicating
      const normalized = item.trim()
        .toLowerCase();

      if ( !uniqueMap.has(
        normalized
      ) ) {
        // Keep the original casing from the first occurrence, just trimmed
        uniqueMap.set(
          normalized, item.trim()
        );
      }
    }
  }

  return Array.from(
    uniqueMap.values()
  );
}

/**
 * Creates a deterministic string representation of an object to use as a hash.
 * It sorts object keys alphabetically and ignores hidden MongoDB '_id' fields.
 */
function getDeterministicHash(
  obj: any
): string {
  if ( obj === null || obj === undefined ) {
    return String(
      obj
    );
  }

  if ( Array.isArray(
    obj
  ) ) {
    return `[${ obj.map(
      getDeterministicHash
    )
      .join(
        ','
      ) }]`;
  }

  if ( typeof obj === 'object' ) {
    const keys = Object.keys(
      obj
    )
      .filter(
        (
          key
        ) => {
          return key !== '_id';
        }
      ) // Ignore hidden MongoDB ids in subdocuments
      .sort();

    const parts = keys.map(
      (
        key
      ) => {
        return `"${ key }":${ getDeterministicHash(
          obj[ key ]
        ) }`;
      }
    );

    return `{${ parts.join(
      ','
    ) }}`;
  }

  // Convert primitives to strings
  return JSON.stringify(
    obj
  );
}

/**
 * Helper function to merge array of complex objects without exact duplicates.
 * Uses deterministic hashing to ensure identical objects aren't duplicated regardless of key order.
 */
function mergePreparaciones(
  prep1?: PreparacionType[] | null,
  prep2?: PreparacionType[] | null
): PreparacionType[] {
  const combined = [
    ...( prep1 || [] ),
    ...( prep2 || [] )
  ];
  const uniqueMap = new Map<string, PreparacionType>();

  for ( const prep of combined ) {
    const hash = getDeterministicHash(
      prep
    );

    if ( !uniqueMap.has(
      hash
    ) ) {
      uniqueMap.set(
        hash, prep
      );
    }
  }

  return Array.from(
    uniqueMap.values()
  );
}

/**
 * Upserts an array of EspecimenType into MongoDB, merging without deleting existing data.
 * @param collection The MongoDB collection instance.
 * @param nuevosEspecimenes The array of EspecimenType objects to upsert.
 */
export async function upsertEspecimenesConMerge(
  collection: Collection<EspecimenType>,
  nuevosEspecimenes: EspecimenType[]
): Promise<void> {
  if ( !nuevosEspecimenes || nuevosEspecimenes.length === 0 ) {
    return;
  }

  // 1. Extract all primary keys to check for existing documents
  const nombresCientificos = nuevosEspecimenes.map(
    (
      e
    ) => {
      return e.nombreCientifico;
    }
  );

  // 2. Fetch existing documents from the database in a single query
  const existingDocs = await collection
    .find(
      {
        nombreCientifico: {
          $in: nombresCientificos
        }
      }
    )
    .toArray();

  // 3. Create a lookup map for instant access to existing documents
  const existingMap = new Map<string, EspecimenType>();

  for ( const doc of existingDocs ) {
    existingMap.set(
      doc.nombreCientifico, doc
    );
  }

  // 4. Prepare the BulkWrite operations array
  const operations: AnyBulkWriteOperation<EspecimenType>[] = nuevosEspecimenes.map(
    (
      incoming
    ) => {
      const existing = existingMap.get(
        incoming.nombreCientifico
      );

      if ( existing ) {
      // --- SAFE MERGE LOGIC ---

        // Merge Taxon specifically to avoid overwriting populated fields with nulls
        const mergedTaxon: Taxon = {
          dominio: existing.taxon?.dominio || incoming.taxon?.dominio || null,
          reino  : existing.taxon?.reino   || incoming.taxon?.reino   || null,
          filo   : existing.taxon?.filo    || incoming.taxon?.filo    || null,
          clase  : existing.taxon?.clase   || incoming.taxon?.clase   || null,
          orden  : existing.taxon?.orden   || incoming.taxon?.orden   || null,
          familia: existing.taxon?.familia || incoming.taxon?.familia || null,
          genero : existing.taxon?.genero  || incoming.taxon?.genero  || null,
          especie: existing.taxon?.especie || incoming.taxon?.especie || null,
          clados : mergeStringArrays(
            existing.taxon?.clados, incoming.taxon?.clados
          )
        };

        // Construct the deeply merged document
        const mergedDoc: EspecimenType = {
          nombreCientifico: incoming.nombreCientifico,
          // Keep existing image if it exists, otherwise use incoming
          imageUrl        : existing.imageUrl || incoming.imageUrl,

          // Merge string arrays (Union)
          nombresComunes: mergeStringArrays(
            existing.nombresComunes, incoming.nombresComunes
          ),
          propiedadesMedicinales: mergeStringArrays(
            existing.propiedadesMedicinales, incoming.propiedadesMedicinales
          ),
          partesUtiles: mergeStringArrays(
            existing.partesUtiles, incoming.partesUtiles
          ),
          esenciasFlorales: mergeStringArrays(
            existing.esenciasFlorales, incoming.esenciasFlorales
          ),
          correspondenciasEnergeticas: mergeStringArrays(
            existing.correspondenciasEnergeticas, incoming.correspondenciasEnergeticas
          ),
          malesEmocionales: mergeStringArrays(
            existing.malesEmocionales, incoming.malesEmocionales
          ),
          malesFisicos: mergeStringArrays(
            existing.malesFisicos, incoming.malesFisicos
          ),

          taxon        : mergedTaxon,
          preparaciones: mergePreparaciones(
            existing.preparaciones, incoming.preparaciones
          )
        };

        return {
          replaceOne: {
            filter: {
              nombreCientifico: incoming.nombreCientifico
            },
            replacement: mergedDoc,
            upsert     : true
          }
        };
      }

      // --- INSERT LOGIC ---
      // Document doesn't exist, insert the incoming document as-is
      return {
        replaceOne: {
          filter: {
            nombreCientifico: incoming.nombreCientifico
          },
          replacement: incoming,
          upsert     : true
        }
      };
    }
  );

  // 5. Execute the bulk operation
  await collection.bulkWrite(
    operations
  );
}


// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

export async function executeUpsert() {
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

    // 4. Prepare your incoming data payload
    const dataEntrante = plantList;

    // 5. Execute the bulk upsert and merge
    console.log(
      `Iniciando el procesamiento de ${ dataEntrante.length } registros...`
    );

    await upsertEspecimenesConMerge(
      collection, dataEntrante
    );

    console.log(
      '✅ Upsert y merge completados con éxito.'
    );

  } catch ( error ) {
    console.error(
      '❌ Error durante la operación de base de datos:', error
    );
  } finally {
    // 6. Ensure the connection is always closed, even if an error occurs
    await client.close();
    console.log(
      'Conexión a MongoDB cerrada.'
    );
  }
}
