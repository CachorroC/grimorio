/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectId } from 'mongodb';
import clientPromise from '../connection/mongodb';
import { EspecimenType, PreparacionType, Taxon } from '../types/especimenTypes';
import { connection } from 'next/server';

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
  _id                        : string | undefined;

  constructor(
    {
      nombreCientifico,
      nombresComunes,
      propiedadesMedicinales,
      correspondenciasEnergeticas,
      malesEmocionales,
      malesFisicos,
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
  }

  static async getPlantaMedicinalByNombreCientifico (
    {
      nombreCientifico
    }: { nombreCientifico: string; }
  ) {

    try {

      const client = await clientPromise;
      const database = client.db(
        'botany_db'
      ); // Replace with your actual database name
      const plantasMedicinalesCollection = database.collection<EspecimenType>(
        'plantas_medicinales',
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
  static async upsertPlantaMedicinal(
    {
      data
    }: { data: EspecimenType }
  ) {
    try {
      const client = await clientPromise;
      const database = client.db(
        'botany_db'
      ); // Replace with your actual database name
      const plantasMedicinalesCollection = database.collection<EspecimenType>(
        'plantas_medicinales',
      );
      const {
        _id, ...updateData
      } = data as any;
      const query = _id
        ? {
            _id: new ObjectId(
              _id
            ),
          }
        : {
            nombreCientifico: data.nombreCientifico,
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
        error:
          error instanceof Error
            ? error.message
            : 'Unknown database error',
      };
    }
  }
  static async getPlantasMedicinales () {
    const client = await clientPromise;
    const database = client.db(
      'botany_db'
    ); // Replace with your actual database name
    const plantasMedicinalesCollection = database.collection<EspecimenType>(
      'plantas_medicinales',
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
