import 'dotenv/config';
import clientPromise from '../connection/mongodb';
import fs from 'fs';
import path from 'path';
import { ChakraType, listaChakras } from '../types/especimenTypes';


// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

const CHAKRA_SIN_ASOCIAR: ChakraType = {
  nombre         : 'Sin Chakra Asociado',
  nombreSanscrito: 'Sin Chakra Asociado',
  ubicacion      : 'Sin Chakra Asociado',
  color          : 'gris',
  significado    : 'Sin Chakra Asociado',
};

const chakraMap: Record<string, ChakraType> = {
  'Root'        : listaChakras[0],
  'Sacral'      : listaChakras[1],
  'Solar Plexus': listaChakras[2],
  'Heart'       : listaChakras[3],
  'Throat'      : listaChakras[4],
  'Third Eye'   : listaChakras[5],
  'Crown'       : listaChakras[6],
};

/**
 * Migration function to update associated chakras for plants in the database.
 */
export async function migrateChakras(): Promise<void> {
  let client;
  try {
    client = await clientPromise;
    const db = client.db( DB_NAME );
    const collection = db.collection( COLLECTION_NAME );

    // Path to the JSON data
    const jsonPath = path.join(
      process.cwd(), 'src/lib/json/asociatedChakras.json' 
    );
    
    if ( !fs.existsSync(
      jsonPath 
    ) ) {
      throw new Error(
        `File not found: ${ jsonPath }` 
      );
    }

    const fileContent = fs.readFileSync(
      jsonPath, 'utf8' 
    );
    const chakraData: Record<string, string[]> = JSON.parse(
      fileContent 
    );

    const listedScientificNames = Object.keys(
      chakraData 
    );

    console.log(
      `🚀 Iniciando migración de chakras para ${ listedScientificNames.length } plantas especificadas...` 
    );

    let updatedCount = 0;
    let notFoundCount = 0;

    // 1. Pass: Update plants explicitly listed in JSON
    for ( const [
      scientificName, chakras 
    ] of Object.entries(
      chakraData 
    ) ) {
      const mappedChakras = chakras
        .map(
          (
            c 
          ) => {
            return chakraMap[c];
          } 
        )
        .filter(
          (
            c 
          ): c is ChakraType => {
            return !!c;
          } 
        );

      if ( mappedChakras.length === 0 ) {
        console.warn(
          `⚠️ No se pudieron mapear los chakras para "${ scientificName }": ${ chakras.join(
            ', ' 
          ) }` 
        );
        continue;
      }

      const result = await collection.updateOne(
        {
          nombreCientifico: scientificName 
        },
        {
          $set: {
            chakrasAsociados: mappedChakras 
          } 
        }
      );

      if ( result.matchedCount > 0 ) {
        updatedCount++;
      } else {
        console.warn(
          `⚠️ [MISMATCH] No se encontró en DB: "${ scientificName }"` 
        );
        notFoundCount++;
      }
    }

    // 2. Pass: Update native plants NOT in the list
    console.log(
      '🔄 Actualizando plantas nativas no listadas a "Sin Chakra Asociado"...' 
    );
    const nativeResult = await collection.updateMany(
      {
        nombreCientifico: {
          $nin: listedScientificNames 
        },
        nativa: true,
      },
      {
        $set: {
          chakrasAsociados: [
            CHAKRA_SIN_ASOCIAR
          ] 
        } 
      }
    );

    console.log(
      '----------------------------------------' 
    );
    console.log(
      '✅ Proceso de migración terminado con éxito.' 
    );
    console.log(
      `- Específicos actualizados: ${ updatedCount }` 
    );
    console.log(
      `- Específicos no encontrados: ${ notFoundCount }` 
    );
    console.log(
      `- Nativas actualizadas a fallback: ${ nativeResult.modifiedCount }` 
    );

  } catch ( error ) {
    console.error(
      '❌ Error crítico durante la migración:', error 
    );
    throw error;
  }
}

// Self-execution block
const isMain = process.argv[1]?.replace(
  /\\/g, '/' 
).endsWith(
  'src/lib/json/migrateChakras.ts' 
);

if ( isMain ) {
  migrateChakras()
    .then(
      () => {
        process.exit(
          0 
        );
      } 
    )
    .catch(
      () => {
        process.exit(
          1 
        );
      } 
    );
}
