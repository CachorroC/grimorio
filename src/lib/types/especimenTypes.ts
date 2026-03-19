export type EspecimenType = {
  //unique identifier for the keys and database primary keys
  nombreCientífico           : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  correspondenciasEnergeitcas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[]
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];
}

export type PreparacionType = {
  //responde al para qué se usa este método de preparación, ejemplo "para el dolor del alma preparar: ingredientes, pasos"
  usoTerapeutico: string;
  ingredientes  : { ingrediente: string;  cantidad: string}[]
  pasos         : PasosTuple[]
}

export type PasosTuple = [pasoNumero: string, instruccion: string]

export type Taxon = {
  domain : string | null;
  kingdom: string | null;
  phylum : string | null;
  class  : string | null;
  order  : string | null;
  family : string | null;
  genus  : string | null;
  species: string | null
}