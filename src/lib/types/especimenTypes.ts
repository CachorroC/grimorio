export type EspecimenType = {
  //unique identifier for the keys and database primary keys
  nombreCientifico           : string;
  imageUrl                   : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  partesUtiles               : string[];
  esenciasFlorales           : string[];
  correspondenciasEnergeticas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[];
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];
  elementosAsociados         : ElementosType;
  chakrasAsociados           : ChakraType[];
  polaridadEnergetica        : PolaridadEnergeticaType;
  imagenes?                  : PlantDictionary;
};

// 1. Define the base and specific parts
interface PlantBase {
  src: string;
  alt: string;
}

// 1. Define the Object structure
export interface PlantDictionary {
  flor        : PlantBase;                           // Required
  hojas       : PlantBase;
  semillas?   : PlantBase;// Required
  tallo?      : PlantBase;                         // Optional (?)
  preparacion?: PlantBase;          // Optional (?)
}


export type PolaridadEnergeticaType = [
  'Masculine' | 'Feminine',
  ...( 'Masculine' | 'Feminine' )[],
];

export type ElementosType =
  | 'Metal'
  | 'Madera'
  | 'Fuego'
  | 'Tierra'
  | 'Aire'
  | 'Agua';

export type PreparacionType = {
  //responde al para qué se usa este método de preparación, ejemplo "para el dolor del alma preparar: ingredientes, pasos"
  usoTerapeutico   : string;
  formaDeAplicacion: string;
  ingredientes     : IngredientesType[];
  pasos            : PasosTuple[];
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

// 1. Definimos un tipo estricto para cada chakra individualmente
export type ChakraRaiz = {
  nombre         : 'Chakra Raíz';
  nombreSanscrito: 'Muladhara';
  ubicacion      : 'Base de la columna vertebral (coxis)';
  color          : 'Rojo';
  significado    : 'Supervivencia, seguridad, arraigo';
};

export type ChakraSacro = {
  nombre         : 'Chakra Sacro';
  nombreSanscrito: 'Svadhisthana';
  ubicacion      : 'Región pélvica, bajo el ombligo';
  color          : 'Naranja';
  significado    : 'Creatividad, sexualidad, emociones';
};

export type ChakraPlexoSolar = {
  nombre         : 'Chakra del Plexo Solar';
  nombreSanscrito: 'Manipura';
  ubicacion      : 'Entre el diafragma y el ombligo';
  color          : 'Amarillo';
  significado    : 'Poder personal, autoestima, fuerza de voluntad';
};

export type ChakraCorazon = {
  nombre         : 'Chakra del Corazón';
  nombreSanscrito: 'Anahata';
  ubicacion      : 'Centro del pecho';
  color          : 'Verde o rosa';
  significado    : 'Amor, compasión, relaciones';
};

export type ChakraGarganta = {
  nombre         : 'Chakra de la Garganta';
  nombreSanscrito: 'Vishuddha';
  ubicacion      : 'Garganta';
  color          : 'Azul claro';
  significado    : 'Comunicación, autenticidad, expresión verbal';
};

export type ChakraTercerOjo = {
  nombre         : 'Chakra del Tercer Ojo';
  nombreSanscrito: 'Ajna';
  ubicacion      : 'Entrecejo';
  color          : 'Índigo';
  significado    : 'Intuición, percepción espiritual, claridad mental';
};

export type ChakraCorona = {
  nombre         : 'Chakra Corona';
  nombreSanscrito: 'Sahasrara';
  ubicacion      : 'Parte superior de la cabeza';
  color          : 'Blanco o violeta';
  significado    : 'Espiritualidad, conexión con lo divino, sabiduría';
};

// 2. Agrupamos todos en un tipo Unión (Union Type)
export type ChakraType =
  | ChakraRaiz
  | ChakraSacro
  | ChakraPlexoSolar
  | ChakraCorazon
  | ChakraGarganta
  | ChakraTercerOjo
  | ChakraCorona;

// 3. Implementamos la lista usando el tipo estricto
export const listaChakras: ChakraType[] = [
  {
    nombre         : 'Chakra Raíz',
    nombreSanscrito: 'Muladhara',
    ubicacion      : 'Base de la columna vertebral (coxis)',
    color          : 'Rojo',
    significado    : 'Supervivencia, seguridad, arraigo',
  },
  {
    nombre         : 'Chakra Sacro',
    nombreSanscrito: 'Svadhisthana',
    ubicacion      : 'Región pélvica, bajo el ombligo',
    color          : 'Naranja',
    significado    : 'Creatividad, sexualidad, emociones',
  },
  {
    nombre         : 'Chakra del Plexo Solar',
    nombreSanscrito: 'Manipura',
    ubicacion      : 'Entre el diafragma y el ombligo',
    color          : 'Amarillo',
    significado    : 'Poder personal, autoestima, fuerza de voluntad',
  },
  {
    nombre         : 'Chakra del Corazón',
    nombreSanscrito: 'Anahata',
    ubicacion      : 'Centro del pecho',
    color          : 'Verde o rosa',
    significado    : 'Amor, compasión, relaciones',
  },
  {
    nombre         : 'Chakra de la Garganta',
    nombreSanscrito: 'Vishuddha',
    ubicacion      : 'Garganta',
    color          : 'Azul claro',
    significado    : 'Comunicación, autenticidad, expresión verbal',
  },
  {
    nombre         : 'Chakra del Tercer Ojo',
    nombreSanscrito: 'Ajna',
    ubicacion      : 'Entrecejo',
    color          : 'Índigo',
    significado    : 'Intuición, percepción espiritual, claridad mental',
  },
  {
    nombre         : 'Chakra Corona',
    nombreSanscrito: 'Sahasrara',
    ubicacion      : 'Parte superior de la cabeza',
    color          : 'Blanco o violeta',
    significado    : 'Espiritualidad, conexión con lo divino, sabiduría',
  },
];
