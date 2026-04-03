import * as fs from 'fs/promises';
import * as path from 'path';
import { getData } from './getData';
import { EspecimenType } from '../types/especimenTypes';

// --- EXTRACTION LOGIC ---

/**
 * Extracts unique values from specified array properties of an EspecimenType array
 * and saves each Set as a formatted JSON file.
 * * @param data Array of EspecimenType objects
 * @param outputDir The directory where the JSON files will be saved
 */
export async function generatePropertySets(
  data: EspecimenType[], outputDir: string = './output'
): Promise<void> {
  // Define exactly which keys we want to extract to ensure type safety
  const keysToExtract = [
    'propiedadesMedicinales',
    'correspondenciasEnergeticas',
    'malesEmocionales',
    'malesFisicos'
  ] as const;

  // Initialize a dictionary to hold our Sets
  const uniqueValues: Record<typeof keysToExtract[number], Set<string>> = {
    propiedadesMedicinales     : new Set<string>(),
    correspondenciasEnergeticas: new Set<string>(),
    malesEmocionales           : new Set<string>(),
    malesFisicos               : new Set<string>(),
  };

  // Iterate over the specimen data and populate the Sets
  for ( const specimen of data ) {
    for ( const key of keysToExtract ) {
      const propertiesArray = specimen[ key ];

      if ( Array.isArray(
        propertiesArray
      ) ) {
        for ( const value of propertiesArray ) {
          // Trimming ensures "Ansiedad " and "Ansiedad" are treated as the same
          uniqueValues[ key ].add(
            value.trim()
          );
        }
      }
    }
  }

  try {
    // Ensure the output directory exists
    await fs.mkdir(
      outputDir, {
        recursive: true
      }
    );

    // Iterate through our populated Sets, convert them to arrays, sort them, and save
    for ( const key of keysToExtract ) {
      // Convert Set to an alphabetically sorted array for a cleaner JSON output
      const sortedArray = Array.from(
        uniqueValues[ key ]
      )
        .sort(
          (
            a, b
          ) => {
            return a.localeCompare(
              b
            );
          }
        );

      const filePath = path.join(
        outputDir, `${ key }.json`
      );

      // Stringify with an indentation of 2 spaces for readability
      await fs.writeFile(
        filePath, JSON.stringify(
          sortedArray, null, 2
        ), 'utf-8'
      );

      console.log(
        `✅ Successfully saved ${ sortedArray.length } unique items to ${ filePath }`
      );
    }
  } catch ( error ) {
    console.error(
      '❌ Error writing JSON files:', error
    );

    throw error;
  }
}



// Self-executing function to run the script
( async () => {
  console.log(
    'Starting extraction process...'
  );
  const {
    data
  } = await getData();

  if ( data ) {
    await generatePropertySets(
      data, './plant-dictionaries'
    );
  }

  console.log(
    'Process complete.'
  );
} )();