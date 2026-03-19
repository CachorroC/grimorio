import { EspecimenType, PreparacionType, Taxon } from '../types/especimenTypes';

export default class EspecimentModel implements EspecimenType {
  nombreCientífico           : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  correspondenciasEnergeitcas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[];
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];

  constructor ( {
    nombreCientífico,
    nombresComunes,
    propiedadesMedicinales,
    correspondenciasEnergeitcas,
    malesEmocionales,
    malesFisicos,
    taxon, preparaciones
  }: {
    nombreCientífico           : string;
    nombresComunes             : string[];
    propiedadesMedicinales     : string[];
    correspondenciasEnergeitcas: string[];
    malesEmocionales           : string[];
    malesFisicos               : string[];
    taxon                      : Taxon;
    preparaciones              : PreparacionType[]
  } ) {
    this.nombreCientífico = nombreCientífico;
    this.nombresComunes = nombresComunes;
    this.correspondenciasEnergeitcas = correspondenciasEnergeitcas;
    this.propiedadesMedicinales=propiedadesMedicinales;
    this.correspondenciasEnergeitcas=correspondenciasEnergeitcas;
    this.malesEmocionales=malesEmocionales;
    this.malesFisicos=malesFisicos;
    this.taxon = taxon;
    this.preparaciones= preparaciones;
  }


}