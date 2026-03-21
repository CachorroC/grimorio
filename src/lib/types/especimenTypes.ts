export type EspecimenType = {
  //unique identifier for the keys and database primary keys
  nombreCientifico           : string;
  imageUrl                   : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  correspondenciasEnergeticas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[];
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];
};

export type PreparacionType = {
  //responde al para qué se usa este método de preparación, ejemplo "para el dolor del alma preparar: ingredientes, pasos"
  usoTerapeutico: string;
  ingredientes  : IngredientesType[];
  pasos         : PasosTuple[];
};

export type IngredientesType = { ingrediente: string; cantidad: string };

export type PasosTuple = [pasoNumero: number, instruccion: string];

/**
 * Represents the standard 8 principal taxonomic ranks used in modern biology.
 */
export type Taxon = {
  dominio: string | null;
  reino  : string | null;
  filo   : string | null; // Note: Equivalent to 'División' in botany
  clase  : string | null;
  orden  : string | null;
  familia: string | null;
  genero : string | null;
  especie: string | null;
  /**
   * Optional: Modern botanical systems (APG IV) heavily utilize unranked clades.
   * Useful for storing genetic grouping (e.g., ["Angiosperms", "Eudicots", "Asterids"]).
   */
  clados?: string[] | null;
};
