import * as fs from 'fs';
import * as path from 'path';

// Define minimal types to ensure correctness during conversion
type Taxon = {
  dominio: string | null;
  reino  : string | null;
  filo   : string | null;
  clase  : string | null;
  orden  : string | null;
  familia: string | null;
  genero : string | null;
  especie: string | null;
};

type PreparacionType = {
  uso              : string;
  usoTerapeutico   : string;
  formaDeAplicacion: string;
  ingredientes     : { ingrediente: string; cantidad: string }[];
  pasos            : [number, string][];
};

type EspecimenType = {
  nombreCientifico           : string;
  imageUrl                   : string;
  nombresComunes             : string[];
  propiedadesMedicinales     : string[];
  partesUtiles               : string[];
  esenciasFlorales           : string[];
  correspondenciasEnergeticas: string[];
  malesEmocionales           : string[];
  malesFisicos               : string[];
  nativa                     : boolean;
  taxon                      : Taxon;
  preparaciones              : PreparacionType[];
  elementosAsociados         : string;
  chakrasAsociados           : any[];
  polaridadEnergetica        : string[];
  doshas                     : string[];
};

const inputPath = path.join(
  __dirname, '../json/plants_2.json' 
);
const outputPath = path.join(
  __dirname, '../json/plants_2_converted.json' 
);

const rawData = fs.readFileSync(
  inputPath, 'utf8' 
);
const plants = JSON.parse(
  rawData 
);

const cleanScientificName = (
  name: string 
): string => {
  // Extract first two words (Genus species)
  const match = name.match(
    /^([A-Z][a-z]+)\s+([a-z]+)/ 
  );

  if ( match ) {
    return `${ match[ 1 ] } ${ match[ 2 ] }`;
  }

  return name;
};

const splitList = (
  text: string | null 
): string[] => {
  if ( !text ) {
    return [];
  }

  return text
    .split(
      /[,.;]/ 
    )
    .map(
      s => {
        return s.trim();
      } 
    )
    .filter(
      s => {
        return s.length > 0 && !s.toLowerCase().includes(
          'modo de empleo' 
        );
      } 
    );
};

const determineUso = (
  posologia: string, usos: string 
): string => {
  const text = ( posologia + ' ' + usos ).toLowerCase();

  if ( text.includes(
    'oral' 
  ) || text.includes(
    'infusion' 
  ) || text.includes(
    'beber' 
  ) || text.includes(
    'taza' 
  ) ) {
    return 'Oral';
  }

  if ( text.includes(
    'topico' 
  ) || text.includes(
    'aplicar' 
  ) || text.includes(
    'piel' 
  ) || text.includes(
    'externo' 
  ) ) {
    return 'Tópico';
  }

  if ( text.includes(
    'inhalado' 
  ) || text.includes(
    'vahos' 
  ) ) {
    return 'Inhalado';
  }

  if ( text.includes(
    'enjuague' 
  ) ) {
    return 'Tópico';
  } // mucosal

  return 'Uso Multipropósito';
};

const converted = plants.map(
  (
    p: any 
  ) => {
    const nombreCientifico = cleanScientificName(
      p.nombre_cientifico || '' 
    );
    const [
      genero,
      especie
    ] = nombreCientifico.split(
      ' ' 
    );

    const nombresComunes = Array.from(
      new Set(
        [
          p.nombre_principal,
          ...splitList(
            p.nombres_comunes 
          )
        ] 
      ) 
    ).map(
      n => {
        return n.charAt(
          0 
        ).toUpperCase() + n.slice(
          1 
        ).toLowerCase();
      } 
    );

    const specimen: EspecimenType = {
      nombreCientifico      : nombreCientifico,
      imageUrl              : '',
      nombresComunes        : nombresComunes,
      propiedadesMedicinales: splitList(
        p.usos_tradicionales 
      ),
      partesUtiles: splitList(
        p.parte_utilizada 
      ),
      esenciasFlorales           : [],
      correspondenciasEnergeticas: [],
      malesEmocionales           : [],
      malesFisicos               : splitList(
        p.indicaciones || p.usos_tradicionales 
      ),
      nativa: true,
      taxon : {
        dominio: 'Eukaryota',
        reino  : 'Plantae',
        filo   : 'Magnoliophyta',
        clase  : 'Magnoliopsida',
        orden  : null,
        familia: null,
        genero : genero || null,
        especie: especie || null,
      },
      preparaciones: [
        {
          uso: determineUso(
            p.posologia || '', p.usos_tradicionales || '' 
          ),
          usoTerapeutico   : p.indicaciones || 'Tradicional',
          formaDeAplicacion: p.posologia || 'No especificada',
          ingredientes     : [],
          pasos            : [],
        }
      ],
      elementosAsociados : 'Tierra',
      chakrasAsociados   : [],
      polaridadEnergetica: [
        'Feminine'
      ],
      doshas: [],
    };

    return specimen;
  } 
);

fs.writeFileSync(
  outputPath, JSON.stringify(
    converted, null, 2 
  ) 
);
console.log(
  `Successfully converted ${ converted.length } plants to ${ outputPath }` 
);
