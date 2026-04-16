
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import clientPromise from '../connection/mongodb';
import { EspecimenType } from '../types/especimenTypes';

// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

async function upsertPlants() {
  const inputPath = path.join(
    __dirname, 'plants_2_converted.json'
  );

  if ( !fs.existsSync(
    inputPath
  ) ) {
    console.error(
      `Error: Data file not found at ${ inputPath }`
    );

    return;
  }

  const rawData = fs.readFileSync(
    inputPath, 'utf8'
  );
  const specimens: EspecimenType[] = JSON.parse(
    rawData
  );

  console.log(
    `Starting upsert for ${ specimens.length } specimens...`
  );

  try {
    const client = await clientPromise;
    const db = client.db(
      DB_NAME
    );
    const collection = db.collection(
      COLLECTION_NAME
    );

    let createdCount = 0;
    let modifiedCount = 0;

    for ( const specimen of specimens ) {
      const result = await collection.updateOne(
        {
          nombreCientifico: specimen.nombreCientifico
        },
        {
          // Merge arrays by adding unique items
          $addToSet: {
            nombresComunes: {
              $each: specimen.nombresComunes
            },
            propiedadesMedicinales: {
              $each: specimen.propiedadesMedicinales
            },
            partesUtiles: {
              $each: specimen.partesUtiles
            },
            malesFisicos: {
              $each: specimen.malesFisicos
            },
            esenciasFlorales: {
              $each: specimen.esenciasFlorales
            },
            correspondenciasEnergeticas: {
              $each: specimen.correspondenciasEnergeticas
            },
            malesEmocionales: {
              $each: specimen.malesEmocionales
            },
            doshas: {
              $each: specimen.doshas
            },
          },
          // Only set these if the document is being created for the first time
          $setOnInsert: {
            nombreCientifico   : specimen.nombreCientifico,
            imageUrl           : specimen.imageUrl || '',
            nativa             : specimen.nativa ?? false,
            taxon              : specimen.taxon,
            preparaciones      : specimen.preparaciones,
            elementosAsociados : specimen.elementosAsociados || 'Tierra',
            chakrasAsociados   : specimen.chakrasAsociados || [],
            polaridadEnergetica: specimen.polaridadEnergetica || [
              'Feminine'
            ],
          }
        },
        {
          upsert: true
        }
      );

      if ( result.upsertedCount > 0 ) {
        createdCount++;
      } else if ( result.modifiedCount > 0 ) {
        modifiedCount++;
      }
    }

    console.log(
      'Upsert process completed.'
    );
    console.log(
      `- New specimens created: ${ createdCount }`
    );
    console.log(
      `- Existing specimens enriched: ${ modifiedCount }`
    );

  } catch ( error ) {
    console.error(
      'An error occurred during the upsert process:', error
    );
  }
}

// Execute the function
upsertPlants().catch(
  console.error
);