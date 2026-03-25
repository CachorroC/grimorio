/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from 'mongodb';
import clientPromise from '../connection/mongodb';
import { EspecimenType, PreparacionType, Taxon } from '../types/especimenTypes';

/**
 * @class EspecimenModel
 * @description Model class for interacting with the 'plantas_medicinales' collection in MongoDB.
 * Implements the EspecimenType interface to ensure data consistency.
 */
export default class EspecimenModel implements EspecimenType {
  nombreCientifico           : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  correspondenciasEnergeticas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[];
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];
  imageUrl                   : string;
  partesUtiles               : string[];
  esenciasFlorales           : string[];
  _id                        : string | undefined;

  constructor(
    {
      nombreCientifico,
      nombresComunes,
      propiedadesMedicinales,
      correspondenciasEnergeticas,
      malesEmocionales,
      malesFisicos,
      esenciasFlorales,
      taxon,
      preparaciones,
      imageUrl,
      partesUtiles
    }: {
      nombreCientifico           : string;
      imageUrl                   : string;
      nombresComunes             : string[];
      propiedadesMedicinales     : string[];
      correspondenciasEnergeticas: string[];
      esenciasFlorales           : string[];
      malesEmocionales           : string[];
      partesUtiles               : string[]
      malesFisicos               : string[];
      taxon                      : Taxon;
      preparaciones              : PreparacionType[];
    }
  ) {
    this.nombreCientifico = nombreCientifico;
    this.nombresComunes = nombresComunes;
    this.correspondenciasEnergeticas = correspondenciasEnergeticas;
    this.propiedadesMedicinales = propiedadesMedicinales;
    this.malesEmocionales = malesEmocionales;
    this.malesFisicos = malesFisicos;
    this.taxon = taxon;
    this.preparaciones = preparaciones;
    this.imageUrl = imageUrl;
    this.partesUtiles = partesUtiles;
    this.esenciasFlorales = esenciasFlorales;
  }

  /**
   * Retrieves a single medicinal plant document by its scientific name.
   * Opts out of Next.js static caching to ensure fresh data.
   * * @param {Object} params - The search parameters.
   * @param {string} params.nombreCientifico - The scientific name to search for.
   * @returns {Promise<{success: boolean, data?: EspecimenType, error?: unknown}>}
   */
  static async getPlantaMedicinalByNombreCientifico (
    {
      nombreCientifico
    }: { nombreCientifico: string; }
  ) {
    // Opt out of static rendering for this dynamic DB call

    try {
      const client = await clientPromise;
      const database = client.db(
        'botany_db'
      );
      const plantasMedicinalesCollection = database.collection<EspecimenType>(
        'plantas_medicinales'
      );

      const especimenByNombre = await plantasMedicinalesCollection.findOne(
        {
          nombreCientifico: nombreCientifico,
        }
      );

      if ( !especimenByNombre ) {
        throw new Error(
          `No specimen found with nombreCientifico: ${ nombreCientifico }`
        );
      }

      return {
        success: true,
        data   : {
          ...especimenByNombre,
          _id: especimenByNombre._id.toString(),
        },
      };
    } catch ( error ) {
      console.error(
        'Database Error:', error
      );

      return {
        success: false,
        error
      };
    }
  }

  /**
   * Updates an existing medicinal plant document or creates a new one if it doesn't exist.
   * Matches against `_id` if provided, otherwise falls back to `nombreCientifico`.
   * * @param {Object} params - The upsert parameters.
   * @param {EspecimenType} params.data - The complete specimen data to save.
   * @returns {Promise<{success: boolean, data?: EspecimenType, error?: string}>}
   */
  static async upsertPlantaMedicinal(
    {
      data
    }: { data: EspecimenType }
  ) {
    try {
      const client = await clientPromise;
      const database = client.db(
        'botany_db'
      );
      const plantasMedicinalesCollection = database.collection<EspecimenType>(
        'plantas_medicinales'
      );

      const {
        _id, ...updateData
      } = data as any;

      const query = _id
        ? {
            _id: new ObjectId(
              _id
            )
          }
        : {
            nombreCientifico: data.nombreCientifico
          };

      const result = await plantasMedicinalesCollection.findOneAndUpdate(
        query,
        {
          $set: updateData,
        },
        {
          returnDocument: 'after',
          upsert        : true,
        },
      );

      if ( !result ) {
        throw new Error(
          'Failed to update or create document in MongoDB.'
        );
      }

      return {
        success: true,
        data   : {
          ...result,
          _id: result._id.toString(),
        },
      };
    } catch ( error ) {
      console.error(
        'Database Error:', error
      );

      return {
        success: false,
        error  : error instanceof Error
          ? error.message
          : 'Unknown database error',
      };
    }
  }

  /**
   * Retrieves all medicinal plant documents from the database.
   * Opts out of Next.js static caching to prevent the `new Date()` prerender error.
   * * @returns {Promise<EspecimenType[]>} Array of all medicinal plants.
   */
  static async getPlantasMedicinales () {
    // Opt out of static rendering for this dynamic DB call

    const client = await clientPromise;
    const database = client.db(
      'botany_db'
    );
    const plantasMedicinalesCollection = database.collection<EspecimenType>(
      'plantas_medicinales'
    );

    const data = await plantasMedicinalesCollection.find(
      {}
    )
      .toArray();

    return data.map(
      (
        item
      ) => {
        return {
          ...item,
          _id: item._id.toString(),
        };
      }
    );
  }
}