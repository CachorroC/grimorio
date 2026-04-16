import 'dotenv/config';
import clientPromise from '../connection/mongodb';
import fs from 'fs';
import path from 'path';
import { PolaridadEnergeticaType, ElementosType, TridoshasType } from '../types/especimenTypes';


// 1. Database Configuration
const DB_NAME = 'botany_db';
const COLLECTION_NAME = 'plantas_medicinales';

/**
 * Migration function to update energetic data (polarity, elements, doshas) 
 * for plants in the database using fixed data from a JSON file.
 */
export async function migrateEnergeticData(): Promise<void> {
  let client;
  try {
    client = await clientPromise;
    const db = client.db( DB_NAME );
    const collection = db.collection( COLLECTION_NAME );

    // Path to the JSON data
    const jsonPath = path.join(
      process.cwd(), 'src/lib/json/fixedPolarities.json' 
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
    const data = JSON.parse(
      fileContent 
    );

    console.log(
      `🚀 Iniciando migración de datos energéticos para ${ data.length } plantas...` 
    );

    let updatedCount = 0;
    let notFoundCount = 0;

    for ( const item of data ) {
      const { plant_name, energetic_polarity, associated_elements, doshas } = item;

      // 1. Map Polaridad (to English as per EspecimenTypes)
      let polaridad: PolaridadEnergeticaType = [
        'Neutral'
      ];
      if ( energetic_polarity === 'Masculina' ) {
        polaridad = [
          'Masculine'
        ];
      } else if ( energetic_polarity === 'Femenina' ) {
        polaridad = [
          'Feminine'
        ];
      }

      // 2. Map Elementos (Keep as is, fallback if empty)
      const elementos: ElementosType[] = associated_elements && associated_elements.length > 0
        ? associated_elements
        : [
          'Sin Elemento Asociado'
        ];

      // 3. Map Doshas (Extract Vata, Pitta, Kapha)
      const mappedDoshas: TridoshasType[] = [];
      if ( doshas && Array.isArray(
        doshas 
      ) ) {
        if ( doshas.some(
          (
            d: string 
          ) => {
            return d.toLowerCase().includes(
              'vata' 
            );
          } 
        ) ) mappedDoshas.push(
          'Vata' 
        );
        if ( doshas.some(
          (
            d: string 
          ) => {
            return d.toLowerCase().includes(
              'pitta' 
            );
          } 
        ) ) mappedDoshas.push(
          'Pitta' 
        );
        if ( doshas.some(
          (
            d: string 
          ) => {
            return d.toLowerCase().includes(
              'kapha' 
            );
          } 
        ) ) mappedDoshas.push(
          'Kapha' 
        );
      }

      // 4. Update Database
      const result = await collection.updateOne(
        {
          nombreCientifico: plant_name 
        },
        {
          $set: {
            polaridadEnergetica: polaridad,
            elementosAsociados : elementos,
            doshas             : mappedDoshas,
          } 
        },
      );

      if ( result.matchedCount > 0 ) {
        updatedCount++;
      } else {
        console.warn(
          `⚠️ [MIMATCHED] No se encontró en DB: "${ plant_name }"` 
        );
        notFoundCount++;
      }
    }

    console.log(
      '----------------------------------------' 
    );
    console.log(
      '✅ Proceso de migración terminado con éxito.' 
    );
    console.log(
      `- Total en JSON: ${ data.length }` 
    );
    console.log(
      `- Actualizados en DB: ${ updatedCount }` 
    );
    console.log(
      `- No encontrados (Nombres científicos): ${ notFoundCount }` 
    );

  } catch ( error ) {
    console.error(
      '❌ Error crítico durante la migración:', error 
    );
    throw error;
  }
}

// Self-execution block for running with tsx
const isMain = process.argv[1]?.endsWith(
  'migrateEnergeticData.ts' 
);
if ( isMain ) {
  migrateEnergeticData()
    .then(
      () => {
        console.log(
          'Cerrando proceso...' 
        );
        process.exit(
          0 
        );
      } 
    )
    .catch(
      () => {
        return process.exit(
          1 
        );
      } 
    );
}