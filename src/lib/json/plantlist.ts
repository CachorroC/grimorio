import { EspecimenType } from '../types/especimenTypes';

export const plantList: EspecimenType[] = [
  {
    nombreCientifico: 'Salvia rosmarinus',
    imageUrl        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKN62Z67ri2NUtWJmCODzbEx-TcSH0bW_Hfg&s',
    nombresComunes  : [
      'romero'
    ],
    propiedadesMedicinales: [
      'antioxidante',
      'antiinflamatorio',
      'digestiva',
      'antimicrobiana',
      'cicatrizante',
      'estimula la circulacion',
    ],
    correspondenciasEnergeticas: [
      'proteccion',
      'limpieza energetica',
      'purificacion',
    ],
    malesEmocionales: [
      'conexión mente - cuerpo',
      'falta de calidez',
      'falta de memoria',
      'arraigo terrenal',
    ],
    malesFisicos: [
      'dolores articulares',
      'dolores musculares',
      'artritis',
      'reumatismo',
      'digestion',
      'gases',
      'pesadez',
      'problemas de la piel',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Lamiales',
      familia: 'Lamiaceae',
      genero : 'Salvia',
      especie: 'Salvia rosmarinus',
      clados : [
        'Angiospermas',
        'Edicotiledoneas',
        'Astreidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico: 'Dolor de estomago ',
        ingredientes  : [
          {
            ingrediente: 'Romero en polvo',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'agua',
            cantidad   : '100 ml',
          },
        ],
        pasos: [
          [
            1,
            'Echar el romero en un recipiente vacio'
          ],
          [
            2,
            'echar el agua encima del romero en el recipiente'
          ],
          [
            3,
            'batir fuertemente'
          ],
          [
            4,
            'colar el liquido '
          ],
        ],
        formaDeAplicacion: ''
      },
      {
        usoTerapeutico: 'dolor del higado',
        ingredientes  : [
          {
            ingrediente: 'romero seco',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'aceite vegetal (aceite de oliva, aceite de coco, etc)',
            cantidad   : '100ml',
          },
        ],
        pasos: [
          [
            1,
            'colocar el romero en un recipiente'
          ],
          [
            2,
            'echar el aceite vegetal'
          ],
          [
            3,
            'dejar reposar por 20 días en un entorno oscuro y sin luz'
          ],
          [
            4,
            'sinecesitas la cocción inmediatamente, poner a baño de maría en fuego lento por 2 horas',
          ],
        ],
        formaDeAplicacion: ''
      },
    ],
    partesUtiles    : [],
    esenciasFlorales: []
  },
  {
    nombreCientifico: 'Cannabis sativa',
    imageUrl        : 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Cannabis_sativa_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-026.jpg',
    nombresComunes  : [
      'Marihuana',
      'La mata que mata',
      'weed',
      'corinto',
      'sativa',
      'indica',
    ],
    propiedadesMedicinales: [
      'THC',
      'CBD',
      'Cannabinoides'
    ],
    correspondenciasEnergeticas: [],
    malesEmocionales           : [],
    malesFisicos               : [
      'Dolores crónicos',
      'Nauseas por quimioterapia',
      'Espasticidad por esclerosis multiple',
      'epilepsia',
    ],
    taxon: {
      dominio: '',
      reino  : '',
      filo   : '',
      clase  : '',
      orden  : '',
      familia: '',
      genero : '',
      especie: '',
      clados : [],
    },
    preparaciones: [
      {
        usoTerapeutico: 'Aceite de dolor',
        ingredientes  : [
          {
            ingrediente: 'flor de cannabis sativa',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'aceite vegetal (aceite de coco, aceite de oliva, aceite de risino)',
            cantidad   : '100 ml',
          },
        ],
        pasos: [
          [
            1,
            'Se tritura la flor hasta que quede un polvo fino'
          ],
          [
            2,
            'se coloca la marihuana en un recipiente '
          ],
          [
            3,
            'se coloca el aceite vegetal hasta cubrir completamente la flor ',
          ],
          [
            4,
            ''
          ],
        ],
        formaDeAplicacion: ''
      },
    ],
    partesUtiles    : [],
    esenciasFlorales: []
  },
  {
    nombreCientifico: 'Artemisia absinthium',
    imageUrl        : 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Artemisia_absinthium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-164.jpg',
    partesUtiles    : [
      'flor',
      'hojas'
    ],
    nombresComunes: [
      'Ajenjo',
      'Asensio',
      'Hierba Santa',
      'Ajenjo mayor'
    ],
    propiedadesMedicinales: [
      'tónico estomacal',
      'control de parásitos oxiuriasis',
      'febrífugo',
      'Calma el sistema nervioso',
      'estimula la produccion de bilis',
      'antiparasitario',
      'Efecto expectorante',
    ],
    correspondenciasEnergeticas: [
      'limpieza de energias negativas',
      'combate el mal de ojo ',
    ],
    malesEmocionales: [
      'Estrés',
      'Ansiedad',
      'Fatiga mental',
      'Melancolía',
      'Corjaes o rabia',
      'Agotamiento fisico-emocional',
    ],
    malesFisicos: [
      'Pezades estomacal',
      'indigestion',
      'gases',
      'falta de apetito',
      'Acidez',
      'Flatulencias',
      'colicos',
      'calambres pélvicos ',
      'dolores menstruales',
      'dolores articulares o musculares',
      'fiebres',
      'resfriados',
      'bronquitis',
      'compresas o aceites para tratar quemaduras',
      'compresas o aceites para lesiones cutáneas',
      'compresas o aceites para picaduras o dolores ',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Magnoliophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Artemisia',
      especie: 'Artemisia absinthium',
      clados : [],
    },
    preparaciones: [
      {
        usoTerapeutico: 'Compresas de Ajenjo',
        ingredientes  : [
          {
            ingrediente: 'agua',
            cantidad   : '300 ml',
          },
          {
            ingrediente: 'hojas y flores secas de ajenjo',
            cantidad   : '1 o 2 cucharadas',
          },
        ],
        pasos: [
          [
            1,
            'hervir 300ml de agua'
          ],
          [
            2,
            'añadir 1 o 2 cucharadas de hojas y flores secas de ajenjo'
          ],
          [
            3,
            'tapar y dejar reposar durante 10 minutos'
          ],
          [
            4,
            'colar la mezcla y dejar entibiar'
          ],
          [
            5,
            'empapar un paño limpio o gasa de infusión'
          ],
          [
            6,
            'escurrir ligeramente y aplicar sobre la zona afectada durante 15-20 minutos ',
          ],
        ],
        formaDeAplicacion: ''
      },
      {
        usoTerapeutico: 'Aceite de Ajenjo',
        ingredientes  : [
          {
            ingrediente: 'Frasco de vidrio esterilizado',
            cantidad   : '1 frasco',
          },
          {
            ingrediente: 'planta seca, hojas y flores',
            cantidad   : 'mitad del frasco',
          },
          {
            ingrediente: 'Aceite portador ',
            cantidad   : 'oliva, almendras o coco ',
          },
        ],
        pasos: [
          [
            1,
            'Llenar un frasco de vidrio esterilizado con la planta seca (hojas y flores) hasta la mitad o tres cuartas partes',
          ],
          [
            2,
            'Cubrir la planta por completo con un aceite portador (oliva, almendras dulces o coco)',
          ],
          [
            3,
            'cerrar el frasco y dejar macerar en un lugar cálido y oscuro durante 30 a 40 días, agitando diariamente',
          ],
          [
            4,
            'colar el aceite con una tela fina y guardarlo en un frasco de vidrio oscuro ',
          ],
        ],
        formaDeAplicacion: ''
      },
    ],
    esenciasFlorales: []
  },
  {
    nombreCientifico: 'Baccharis bogotensis',
    imageUrl:
      'https://i.pinimg.com/736x/60/17/c2/6017c25b9ec598512873f4e1cdd0d36a.jpg',
    partesUtiles  : [],
    nombresComunes: [
      'Ciro',
      'Chilca'
    ],
    propiedadesMedicinales: [
      'Antiinflamatoria',
      'Analgésica'
    ],
    esenciasFlorales           : [],
    correspondenciasEnergeticas: [],
    malesEmocionales           : [],
    malesFisicos               : [],
    taxon                      : {
      dominio: '',
      reino  : '',
      filo   : '',
      clase  : '',
      orden  : '',
      familia: '',
      genero : '',
      especie: '',
      clados : [],
    },
    preparaciones: [
      {
        usoTerapeutico   : 'Cataplasmas',
        formaDeAplicacion: '',
        ingredientes     : [],
        pasos            : [],
      },
    ],
  },
  {
    nombreCientifico: 'Quercus humboldtii',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJt8_Rt78kA-vjyLNoxTcb9CyqzhTM4w0KQ&s',
    nombresComunes: [
      'Roble colombiano',
      'Roble Andino',
      'Roble negro'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Cicatrizante',
      'Hemostático',
      'Antiinflamatorio',
      'Antiséptico',
    ],
    partesUtiles: [
      'Corteza',
      'Hojas',
      'Bellotas'
    ],
    esenciasFlorales: [
      'Aporta fuerza y estructura',
      'Ayuda a superar el agotamiento profundo',
      'Fomenta el enraizamiento y la perseverancia',
    ],
    correspondenciasEnergeticas: [
      'Símbolo de fuerza y longevidad',
      'Conexión con el elemento Tierra',
      'Protección energética de espacios',
      'Estabilidad y anclaje espiritual',
    ],
    malesEmocionales: [
      'Desánimo crónico',
      'Falta de voluntad',
      'Sensación de desarraigo o inestabilidad',
      'Agotamiento mental extremo',
    ],
    malesFisicos: [
      'Diarrea severa',
      'Hemorragias leves',
      'Inflamación de encías (gingivitis)',
      'Heridas cutáneas y úlceras',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fagales',
      familia: 'Fagaceae',
      genero : 'Quercus',
      especie: 'humboldtii',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar la diarrea aguda y calmar inflamaciones bucales o de garganta',
        formaDeAplicacion:
          'Beber 1 taza de decocción 2 veces al día, o usar como gargarismo/enjuague bucal 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Corteza de roble seca y triturada',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua filtrada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Llevar el agua a ebullición en un recipiente que no sea de aluminio.',
          ],
          [
            2,
            'Añadir la corteza de roble al agua hirviendo.'
          ],
          [
            3,
            'Reducir el fuego y dejar hervir a fuego lento durante 15 minutos para extraer los taninos.',
          ],
          [
            4,
            'Retirar del fuego, tapar y dejar reposar por 10 minutos.'
          ],
          [
            5,
            'Colar la preparación y dejar entibiar antes de su uso.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Drimys granadensis',
    imageUrl        : 'https://www.google.com/search?q=Drimys+granadensis&tbm=isch',
    nombresComunes  : [
      'Ají de páramo',
      'Canelo de Páramo',
      'Palo de ají'
    ],
    propiedadesMedicinales: [
      'Estimulante digestivo',
      'Carminativo',
      'Antiescorbútico (alto en vitamina C)',
      'Analgésico leve',
      'Antibacteriano',
    ],
    partesUtiles: [
      'Corteza',
      'Hojas'
    ],
    esenciasFlorales: [
      'Estimula el fuego interior',
      'Disuelve la apatía',
      'Fomenta la valentía para enfrentar cambios',
    ],
    correspondenciasEnergeticas: [
      'Elemento Fuego',
      'Limpieza de energías estancadas',
      'Reactivación del flujo vital (Chi/Prana)',
      'Protección contra el frío espiritual',
    ],
    malesEmocionales: [
      'Apatía',
      'Estados de letargo emocional',
      'Melancolía asociada al aislamiento',
    ],
    malesFisicos: [
      'Cólicos estomacales',
      'Indigestión',
      'Escorbuto',
      'Dolores reumáticos (uso externo)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Canellales',
      familia: 'Winteraceae',
      genero : 'Drimys',
      especie: 'granadensis',
      clados : [
        'Angiospermas',
        'Magnolíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar cólicos digestivos, pesadez estomacal y activar el metabolismo',
        formaDeAplicacion:
          'Beber como infusión caliente después de comidas pesadas, máximo 2 tazas al día.',
        ingredientes: [
          {
            ingrediente:
              'Hojas secas o fragmentos pequeños de corteza de canelo',
            cantidad: '5 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las hojas o la corteza en una taza de cerámica.'
          ],
          [
            2,
            'Verter el agua hirviendo directamente sobre la planta.'
          ],
          [
            3,
            'Tapar la taza inmediatamente para evitar que los aceites esenciales volátiles escapen.',
          ],
          [
            4,
            'Dejar infundir entre 5 y 8 minutos.'
          ],
          [
            5,
            'Colar y consumir mientras aún está caliente.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Baccharis latifolia',
    imageUrl        : 'https://www.google.com/search?q=Baccharis+latifolia&tbm=isch',
    nombresComunes  : [
      'Chilco común',
      'Chilco',
      'Chilca'
    ],
    propiedadesMedicinales: [
      'Antiinflamatorio potente',
      'Antirreumático',
      'Cicatrizante',
      'Antiséptico',
      'Febrífugo',
    ],
    partesUtiles: [
      'Hojas',
      'Tallos tiernos'
    ],
    esenciasFlorales: [
      'Flexibilidad mental',
      'Ayuda a soltar la rigidez en los pensamientos',
      'Favorece la adaptación a nuevos entornos',
    ],
    correspondenciasEnergeticas: [
      'Limpieza de campos áuricos',
      'Baños de despojo en medicina tradicional andina',
      'Restauración del equilibrio después de un trauma',
    ],
    malesEmocionales: [
      'Terquedad extrema',
      'Estrés por resistencia al cambio',
      'Tensión emocional acumulada en el cuerpo físico',
    ],
    malesFisicos: [
      'Artritis',
      'Dolores musculares y articulares',
      'Golpes y contusiones',
      'Fiebre',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Baccharis',
      especie: 'latifolia',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para desinflamar articulaciones con artritis, reumatismo o tratar golpes fuertes',
        formaDeAplicacion:
          'Aplicar el cataplasma caliente directamente sobre la zona afectada 2 veces al día y vendar.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de chilco',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'Agua o alcohol de fricción',
            cantidad   : '20 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar bien las hojas frescas de chilco.'
          ],
          [
            2,
            'Macerar o machacar las hojas en un mortero hasta obtener una pasta.',
          ],
          [
            3,
            'Agregar un poco de agua caliente o alcohol para humedecer y activar la pasta.',
          ],
          [
            4,
            'Calentar ligeramente la mezcla a baño maría (sin hervir).'
          ],
          [
            5,
            'Aplicar la pasta tibia sobre una gasa y colocar sobre la articulación dolorida.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Alnus acuminata',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Alnus_acuminata_1.jpg/250px-Alnus_acuminata_1.jpg',
    nombresComunes: [
      'Aliso',
      'Aliso andino',
      'Cerezo (en algunas regiones)'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Antiséptico',
      'Antirreumático',
      'Cicatrizante cutáneo',
    ],
    partesUtiles: [
      'Hojas',
      'Corteza'
    ],
    esenciasFlorales: [
      'Aceptación de la propia sombra',
      'Fluidez emocional',
      'Alivio de la sensación de impureza',
    ],
    correspondenciasEnergeticas: [
      'Elemento Agua y Tierra (crece cerca a ríos)',
      'Protección de cuencas energéticas',
      'Símbolo de regeneración (fija nitrógeno en el suelo)',
    ],
    malesEmocionales: [
      'Sentimientos de culpa',
      'Rigidez emocional',
      'Estancamiento vital',
    ],
    malesFisicos: [
      'Afecciones de la piel (llagas, sabañones)',
      'Dolores reumáticos',
      'Amigdalitis (gargarismos)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fagales',
      familia: 'Betulaceae',
      genero : 'Alnus',
      especie: 'acuminata',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para limpiar heridas, tratar llagas en la piel o aliviar reumatismo local',
        formaDeAplicacion:
          'Lavar la zona afectada con la decocción fría o aplicar compresas empapadas durante 20 minutos.',
        ingredientes: [
          {
            ingrediente: 'Corteza de aliso triturada',
            cantidad   : '20 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Hervir el litro de agua.'
          ],
          [
            2,
            'Agregar la corteza de aliso triturada.'
          ],
          [
            3,
            'Dejar hervir a fuego medio durante 15 minutos.'
          ],
          [
            4,
            'Dejar enfriar completamente y colar.'
          ],
          [
            5,
            'Empapar un paño limpio en el líquido y aplicar sobre la piel.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Phytolacca bogotensis',
    imageUrl        : 'https://google.com/search?q=Phytolacca+bogotensis',
    nombresComunes  : [
      'Guaba',
      'Jaboncillo',
      'Altamisa (erróneamente en algunas zonas)',
    ],
    propiedadesMedicinales: [
      'Antimicótico',
      'Antiparasitario externo',
      'Antiinflamatorio (uso tópico estricto)',
      'Saponificante superficial',
    ],
    partesUtiles: [
      'Raíz',
      'Hojas',
      'Frutos (Tóxicos si se ingieren)'
    ],
    esenciasFlorales: [
      'Purificación profunda',
      'Ayuda a soltar toxicidad en relaciones',
      'Renovación del entorno personal',
    ],
    correspondenciasEnergeticas: [
      'Planta de purga física y espiritual',
      'Limpieza de espacios cargados de negatividad',
      'Magia de destierro',
    ],
    malesEmocionales: [
      'Apego a relaciones tóxicas',
      'Pensamientos obsesivos repetitivos',
      'Sensación de estar contaminado energéticamente',
    ],
    malesFisicos: [
      'Infecciones por hongos en la piel',
      'Sarna (escabiosis)',
      'Inflamaciones glandulares externas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Caryophyllales',
      familia: 'Phytolaccaceae',
      genero : 'Phytolacca',
      especie: 'bogotensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para tratar hongos en la piel, tiña o como jabón antiparasitario (ADVERTENCIA: NO INGERIR)',
        formaDeAplicacion:
          'Usar el extracto acuoso para lavar la piel afectada 1 vez al día. Enjuagar con agua limpia después.',
        ingredientes: [
          {
            ingrediente: 'Raíz o bayas maceradas de guaba',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua tibia',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Utilizar guantes para manipular la raíz o las bayas.'
          ],
          [
            2,
            'Macerar (machacar) bien el material vegetal hasta exponer sus jugos ricos en saponinas.',
          ],
          [
            3,
            'Mezclar fuertemente con el agua tibia hasta que genere un poco de espuma.',
          ],
          [
            4,
            'Filtrar el líquido resultante.'
          ],
          [
            5,
            'Aplicar externamente sobre la piel afectada, dejar actuar 5 minutos y enjuagar profundamente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Passiflora mixta',
    imageUrl        : 'https://www.google.com/search?q=Passiflora+mixta&tbm=isch',
    nombresComunes  : [
      'Curuba de monte',
      'Curuba india',
      'Tumbo'
    ],
    propiedadesMedicinales: [
      'Sedante nervioso',
      'Ansiolítico leve',
      'Antiespasmódico',
      'Hipotensor',
    ],
    partesUtiles: [
      'Hojas',
      'Flores',
      'Fruto (alimenticio)'
    ],
    esenciasFlorales: [
      'Paz interior',
      'Asimilación espiritual',
      'Calma para mentes hiperactivas',
    ],
    correspondenciasEnergeticas: [
      'Conexión con el chakra corona',
      'Inducción de sueños lúcidos y reparadores',
      'Relajación del cuerpo etérico',
    ],
    malesEmocionales: [
      'Insomnio por ansiedad',
      'Cuadros de pánico leves',
      'Estrés agudo',
      'Hiperactividad mental',
    ],
    malesFisicos: [
      'Espasmos musculares por tensión',
      'Hipertensión leve (nerviosa)',
      'Cefaleas tensionales',
      'Dificultad para conciliar el sueño',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Passifloraceae',
      genero : 'Passiflora',
      especie: 'mixta',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para calmar el sistema nervioso, reducir la ansiedad e inducir un sueño reparador',
        formaDeAplicacion:
          'Beber 1 taza de infusión 30 minutos antes de dormir.',
        ingredientes: [
          {
            ingrediente: 'Hojas y flores secas de curuba de monte',
            cantidad   : '2 cucharaditas (aprox 4g)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las hojas y flores en el fondo de una taza.'
          ],
          [
            2,
            'Verter el agua hirviendo.'
          ],
          [
            3,
            'Tapar y dejar en infusión durante 10 a 15 minutos.'
          ],
          [
            4,
            'Colar y beber lentamente. Se puede endulzar con miel para potenciar la relajación.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Erythrina edulis',
    imageUrl        : 'https://www.google.com/search?q=Erythrina+edulis&tbm=isch',
    nombresComunes  : [
      'Chachafruto',
      'Balú',
      'Frijol nupal'
    ],
    propiedadesMedicinales: [
      'Diurético',
      'Hipotensor',
      'Nutracéutico (alto en proteínas)',
      'Galactagogo (estimula la leche materna)',
    ],
    partesUtiles: [
      'Semillas (cocidas)',
      'Hojas',
      'Flores'
    ],
    esenciasFlorales: [
      'Nutrición maternal',
      'Abundancia y generosidad',
      'Soporte en épocas de carencia emocional',
    ],
    correspondenciasEnergeticas: [
      'Árbol de la providencia andina',
      'Fecundidad y sustento',
      'Conexión con el arquetipo de la Madre Nutricia',
    ],
    malesEmocionales: [
      'Sensación de vacío afectivo',
      'Miedo a la escasez',
      'Agotamiento maternal',
    ],
    malesFisicos: [
      'Retención de líquidos',
      'Desnutrición o debilidad convaleciente',
      'Baja producción de leche materna',
      'Presión arterial alta leve',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Erythrina',
      especie: 'edulis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para nutrir el cuerpo, mejorar la energía vital y aumentar la producción de leche en lactancia',
        formaDeAplicacion:
          'Consumir las semillas cocidas como alimento en sopas, purés o guisos regularmente.',
        ingredientes: [
          {
            ingrediente: 'Semillas de chachafruto (vainas frescas)',
            cantidad   : '250 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
          {
            ingrediente: 'Sal o especias',
            cantidad   : 'Al gusto',
          },
        ],
        pasos: [
          [
            1,
            'Extraer las semillas de las vainas grandes del balú.'
          ],
          [
            2,
            'Lavar las semillas y retirar la cutícula externa si se desea un puré más fino.',
          ],
          [
            3,
            'Hervir en agua con sal durante 45 minutos a 1 hora hasta que estén muy suaves.',
          ],
          [
            4,
            'Escurrir y procesar para hacer puré, o añadir directamente a una sopa.',
          ],
          [
            5,
            'Consumir caliente. (NUNCA consumir crudo debido a antinutrientes que se destruyen con calor).',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Cedrela montana',
    imageUrl:
      'https://catalogofloravalleaburra.eia.edu.co/storage/images/5937e15ea21a329476b6ff6a39cbb81df1520f16.jpg',
    nombresComunes: [
      'Cedro de altura',
      'Cedro rosado',
      'Cedro cebollo'
    ],
    propiedadesMedicinales: [
      'Febrífugo',
      'Tónico amargo',
      'Astringente',
      'Antiséptico',
    ],
    partesUtiles: [
      'Corteza',
      'Madera (aserrín/viruta)'
    ],
    esenciasFlorales: [
      'Estructura moral',
      'Limpieza de pensamientos parasitarios',
      'Fortaleza del carácter',
    ],
    correspondenciasEnergeticas: [
      'Protección chamánica contra ataques psíquicos',
      'Elevación de la vibración del hogar (madera)',
      'Conexión con la sabiduría ancestral masculina',
    ],
    malesEmocionales: [
      'Debilidad de carácter',
      'Influenciabilidad extrema',
      'Pensamientos confusos o delirantes (simbólico de fiebres)',
    ],
    malesFisicos: [
      'Fiebres intermitentes',
      'Malaria (uso ancestral)',
      'Infecciones estomacales severas',
      'Agotamiento crónico',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Sapindales',
      familia: 'Meliaceae',
      genero : 'Cedrela',
      especie: 'montana',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para bajar fiebres fuertes y tratar infecciones estomacales a través de su acción tónico-amarga',
        formaDeAplicacion:
          'Beber 1 taza de decocción al día, repartida en sorbos espaciados.',
        ingredientes: [
          {
            ingrediente: 'Corteza de cedro de altura',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '600 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar la corteza para retirar impurezas.'
          ],
          [
            2,
            'Colocar la corteza en el agua fría y llevar a fuego.'
          ],
          [
            3,
            'Hervir a fuego muy lento hasta que el líquido se reduzca a unos 400ml.',
          ],
          [
            4,
            'Dejar reposar, colar y embotellar.'
          ],
          [
            5,
            'Tomar en dosis pequeñas debido a su fuerte sabor amargo y potencia astringente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Morella parvifolia',
    imageUrl:
      'https://plantasdecolombia.com/wp-content/uploads/2011/10/morella-parvifolia1.jpg',
    nombresComunes: [
      'Laurel de cera',
      'Laurel de Olivo',
      'Árbol de cera'
    ],
    propiedadesMedicinales: [
      'Cicatrizante',
      'Emoliente (la cera)',
      'Anticatarral',
      'Astringente leve',
    ],
    partesUtiles: [
      'Frutos (cera)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Iluminación interior',
      'Claridad en momentos de oscuridad mental',
      'Suaviza el temperamento rígido',
    ],
    correspondenciasEnergeticas: [
      'Fabricación de velas votivas ancestrales',
      'Elemento Fuego y Aire',
      'Rituales de iluminación y apertura de caminos',
    ],
    malesEmocionales: [
      'Pesimismo',
      'Dureza de corazón',
      'Confusión vital'
    ],
    malesFisicos: [
      'Resequedad severa en la piel',
      'Congestión nasal (inhalaciones)',
      'Grietas en manos y pies',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fagales',
      familia: 'Myricaceae',
      genero : 'Morella',
      especie: 'parvifolia',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para curar grietas profundas en la piel y lubricar zonas resecas con cera natural emoliente',
        formaDeAplicacion:
          'Aplicar la pomada (ungüento) sobre la piel limpia y seca 2 o 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Cera extraída de los frutos del laurel',
            cantidad   : '30 gramos',
          },
          {
            ingrediente: 'Aceite vegetal (ej. oliva o almendras)',
            cantidad   : '20 ml',
          },
        ],
        pasos: [
          [
            1,
            'Fundir la cera de los frutos al baño maría a fuego muy bajo.'
          ],
          [
            2,
            'Una vez líquida, incorporar el aceite vegetal y remover suavemente para integrar.',
          ],
          [
            3,
            'Retirar del fuego antes de que humee.'
          ],
          [
            4,
            'Verter en un recipiente de vidrio estéril y dejar solidificar a temperatura ambiente.',
          ],
          [
            5,
            'Tomar pequeñas porciones con los dedos y masajear sobre las grietas cutáneas.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Lupinus bogotensis',
    imageUrl        : 'https://www.google.com/search?q=Lupinus+bogotensis&tbm=isch',
    nombresComunes  : [
      'Chocho',
      'Chochito',
      'Altramuz de Bogotá'
    ],
    propiedadesMedicinales: [
      'Desparasitante (altamente tóxico si no se procesa)',
      'Ectoparasiticida (uso veterinario/externo)',
      'Fertilizante natural (abono verde)',
    ],
    partesUtiles: [
      'Semillas (estrictamente lavadas/desamargadas para consumo humano)',
      'Hojas (uso externo)',
    ],
    esenciasFlorales: [
      'Purga de pensamientos negativos',
      'Limpieza de toxinas mentales',
      'Transformación del enojo',
    ],
    correspondenciasEnergeticas: [
      'Alquimia (transformación del veneno en alimento mediante el agua)',
      'Ciclo de muerte y renacimiento de la tierra',
      'Protección de cultivos agrícolas',
    ],
    malesEmocionales: [
      'Ira reprimida',
      'Aislamiento defensivo',
      'Auto-intoxicación emocional',
    ],
    malesFisicos: [
      'Parásitos intestinales',
      'Piojos y liendres (uso capilar externo)',
      'Déficit nutricional (solo tras un lavado exhaustivo de alcaloides)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Lupinus',
      especie: 'bogotensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Como ectoparasiticida externo para eliminar piojos y liendres (NO INGERIR LA PREPARACIÓN)',
        formaDeAplicacion:
          'Lavar el cabello con la decocción, dejar actuar con gorro de baño 20 minutos y enjuagar. Evitar contacto con los ojos.',
        ingredientes: [
          {
            ingrediente:
              'Semillas de chocho sin desamargar (crudas y machacadas)',
            cantidad: '50 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Triturar las semillas amargas de chocho en un mortero.'
          ],
          [
            2,
            'Hervir el agua y añadir las semillas trituradas.'
          ],
          [
            3,
            'Dejar hervir por 20 minutos para extraer los alcaloides tóxicos al agua.',
          ],
          [
            4,
            'Retirar del calor, dejar enfriar completamente y filtrar a través de una tela fina.',
          ],
          [
            5,
            'Aplicar el líquido resultante únicamente sobre el cuero cabelludo.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Weinmannia tomentosa',
    imageUrl:
      'https://inaturalist-open-data.s3.amazonaws.com/photos/54317988/large.jpeg',
    nombresComunes: [
      'Encenillo',
      'Encenillo de páramo'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Hemostático',
      'Cicatrizante',
      'Antiséptico',
    ],
    partesUtiles: [
      'Corteza',
      'Hojas'
    ],
    esenciasFlorales: [
      'Anclaje a la realidad',
      'Protección del campo áurico',
      'Soporte para personalidades dispersas',
    ],
    correspondenciasEnergeticas: [
      'Árbol protector de los bosques de niebla',
      'Conexión con los espíritus del aire y la humedad',
      'Símbolo de resistencia y adaptabilidad',
    ],
    malesEmocionales: [
      'Desconexión del momento presente',
      'Falta de concentración',
      'Miedos infundados o terrores nocturnos',
    ],
    malesFisicos: [
      'Hemorragias superficiales',
      'Úlceras cutáneas',
      'Diarreas leves',
      'Inflamación de garganta',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Oxalidales',
      familia: 'Cunoniaceae',
      genero : 'Weinmannia',
      especie: 'tomentosa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener sangrados leves, limpiar heridas y favorecer la cicatrización',
        formaDeAplicacion:
          'Lavar la herida con la decocción fría 2 veces al día o aplicar compresas.',
        ingredientes: [
          {
            ingrediente: 'Corteza triturada de encenillo',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Hervir el agua en un recipiente limpio.'
          ],
          [
            2,
            'Añadir la corteza de encenillo y mantener a fuego lento por 10 minutos.',
          ],
          [
            3,
            'Apagar y dejar reposar tapado hasta que alcance temperatura ambiente.',
          ],
          [
            4,
            'Colar con un filtro fino para retirar cualquier astilla.'
          ],
          [
            5,
            'Empapar una gasa estéril y aplicar sobre la zona afectada.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Clusia multiflora',
    imageUrl:
      'https://plantasdecolombia.com/wp-content/uploads/2018/07/2017-07-18-15-01-49.jpg',
    nombresComunes: [
      'Gaque',
      'Chagualo',
      'Cucharo'
    ],
    propiedadesMedicinales: [
      'Cicatrizante potente (látex)',
      'Analgésico local',
      'Antirreumático',
      'Antimicrobiano',
    ],
    partesUtiles: [
      'Látex (resina amarilla o blanca)',
      'Hojas',
      'Flores'
    ],
    esenciasFlorales: [
      'Apertura del chakra del corazón',
      'Sanación de heridas afectivas profundas',
      'Fomento de la confianza en uno mismo',
    ],
    correspondenciasEnergeticas: [
      'Planta de sellado energético',
      'Uso ancestral para cerrar el cuerpo a malas energías',
      'Conexión solar (por sus flores y resina)',
    ],
    malesEmocionales: [
      'Corazón cerrado por traumas',
      'Desconfianza crónica',
      'Sensación de vulnerabilidad extrema',
    ],
    malesFisicos: [
      'Fracturas (uso tradicional para inmovilizar y desinflamar)',
      'Dolores articulares intensos',
      'Heridas de difícil cicatrización',
      'Verrugas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Clusiaceae',
      genero : 'Clusia',
      especie: 'multiflora',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores articulares fuertes o sellar heridas superficiales (uso externo)',
        formaDeAplicacion:
          'Aplicar el emplasto de resina directamente sobre la zona adolorida o cubrir con una hoja tibia.',
        ingredientes: [
          {
            ingrediente: 'Látex/resina fresca de gaque',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Hojas grandes de la misma planta',
            cantidad   : '2 unidades',
          },
        ],
        pasos: [
          [
            1,
            'Hacer pequeñas incisiones en el tallo o arrancar una hoja para recolectar las gotas de látex.',
          ],
          [
            2,
            'Limpiar la zona de la piel donde hay dolor o la herida menor.'
          ],
          [
            3,
            'Untar el látex directamente sobre la piel.'
          ],
          [
            4,
            'Calentar ligeramente una hoja de gaque al fuego (sin quemarla) para ablandarla.',
          ],
          [
            5,
            'Colocar la hoja tibia sobre el látex a modo de parche natural y fijar con una venda.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Vallea stipularis',
    imageUrl:
      'https://www.picturethisai.com/wiki-image/1080/357136825710116864.jpeg',
    nombresComunes: [
      'Raque',
      'Palo de cruz'
    ],
    propiedadesMedicinales: [
      'Antiinflamatorio',
      'Febrífugo',
      'Astringente leve',
    ],
    partesUtiles: [
      'Hojas',
      'Flores',
      'Corteza tierna'
    ],
    esenciasFlorales: [
      'Fomenta la alegría de vivir',
      'Alivia el pesimismo',
      'Conexión con la inocencia interior',
    ],
    correspondenciasEnergeticas: [
      'Asociado a la celebración y el florecimiento',
      'Renovación de ciclos',
      'Limpieza de espacios pesados',
    ],
    malesEmocionales: [
      'Tristeza profunda',
      'Falta de motivación',
      'Apatía estacional',
    ],
    malesFisicos: [
      'Estados febriles leves',
      'Inflamaciones gástricas',
      'Irritación de la piel',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Oxalidales',
      familia: 'Elaeocarpaceae',
      genero : 'Vallea',
      especie: 'stipularis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reducir la fiebre y calmar el malestar estomacal leve',
        formaDeAplicacion:
          'Beber 1 taza de infusión tibia hasta 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas y flores frescas de raque',
            cantidad   : '1 cucharada',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Calentar el agua hasta el punto de ebullición.'
          ],
          [
            2,
            'Agregar las hojas y las flores campanuladas rojas del raque.'
          ],
          [
            3,
            'Apagar el fuego, tapar y dejar infundir por 8 minutos.'
          ],
          [
            4,
            'Colar la infusión.'
          ],
          [
            5,
            'Tomar a sorbos lentos mientras aún está tibia.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Oreopanax bogotensis',
    imageUrl:
      'https://bs.plantnet.org/image/o/081392eacd408487213af3cc9f02db55759f1416',
    nombresComunes: [
      'Mano de oso',
      'Pate danta'
    ],
    propiedadesMedicinales: [
      'Expectorante',
      'Antitusivo (Béquico)',
      'Vulnerario (cura heridas)',
      'Emoliente',
    ],
    partesUtiles: [
      'Hojas',
      'Brotes tiernos'
    ],
    esenciasFlorales: [
      'Otorga protección y contención',
      'Ayuda a establecer límites personales',
      'Abrazo energético en momentos de soledad',
    ],
    correspondenciasEnergeticas: [
      'Símbolo de fuerza protectora (como la pata de un oso)',
      'Medicina del totem del Oso Andino',
      'Guardián de los límites del bosque y el páramo',
    ],
    malesEmocionales: [
      'Sensación de desprotección',
      'Dificultad para decir no',
      'Soledad dolorosa',
    ],
    malesFisicos: [
      'Tos seca y persistente',
      'Bronquitis leve',
      'Congestión pulmonar',
      'Golpes y magulladuras',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Apiales',
      familia: 'Araliaceae',
      genero : 'Oreopanax',
      especie: 'bogotensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar la tos persistente, soltar la flema y suavizar las vías respiratorias',
        formaDeAplicacion:
          'Beber 1 taza de decocción caliente endulzada con miel, 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas limpias de mano de oso (preferiblemente secas)',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
          {
            ingrediente: 'Miel de abejas',
            cantidad   : '1 cucharadita',
          },
        ],
        pasos: [
          [
            1,
            'Lavar cuidadosamente las hojas para retirar las pubescencias (pelitos) si son muy frescas.',
          ],
          [
            2,
            'Hervir el agua y añadir las hojas fragmentadas.'
          ],
          [
            3,
            'Dejar hervir por 5 minutos y luego apagar el fuego.'
          ],
          [
            4,
            'Dejar reposar tapado por 10 minutos y colar muy bien.'
          ],
          [
            5,
            'Servir caliente, agregar la miel, remover y consumir.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Myrsine dependens',
    imageUrl        : 'https://www.google.com/search?q=Myrsine+dependens&tbm=isch',
    nombresComunes  : [
      'Cucharo de páramo',
      'Cucharito',
      'Sanalo todo'
    ],
    propiedadesMedicinales: [
      'Antimicrobiano',
      'Digestivo',
      'Antidiarreico',
      'Depurativo sanguíneo',
    ],
    partesUtiles: [
      'Hojas',
      'Frutos (pequeñas drupas)'
    ],
    esenciasFlorales: [
      'Limpieza de resentimientos',
      'Favorece el perdón',
      'Claridad mental para asimilar experiencias duras',
    ],
    correspondenciasEnergeticas: [
      'Planta de purificación',
      'Equilibrio de líquidos corporales y emocionales',
      'Conexión con la sabiduría del agua subterránea',
    ],
    malesEmocionales: [
      'Amargura crónica',
      'Resentimiento acumulado',
      'Estancamiento emocional',
    ],
    malesFisicos: [
      'Digestiones pesadas',
      'Diarrea',
      'Infecciones estomacales leves',
      'Afecciones hepáticas (uso tradicional)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Primulaceae',
      genero : 'Myrsine',
      especie: 'dependens',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener la diarrea, calmar el estómago y ayudar en la digestión lenta',
        formaDeAplicacion:
          'Tomar 1 taza de infusión después de las comidas principales.',
        ingredientes: [
          {
            ingrediente: 'Hojas secas de cucharo de páramo',
            cantidad   : '1 cucharadita (5g)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las hojas secas en un recipiente o tetera.'
          ],
          [
            2,
            'Verter el agua hirviendo sobre las hojas.'
          ],
          [
            3,
            'Tapar y dejar infundir por 10 minutos para extraer los principios activos.',
          ],
          [
            4,
            'Colar la preparación.'
          ],
          [
            5,
            'Beber lentamente sin añadir azúcar para no alterar su efecto digestivo.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Solanum ovalifolium',
    imageUrl        : 'https://www.google.com/search?q=Solanum+ovalifolium&tbm=isch',
    nombresComunes  : [
      'Cucubo',
      'Tomatillo',
      'Falso lulo'
    ],
    propiedadesMedicinales: [
      'Desinfectante externo',
      'Cicatrizante',
      'Resolutivo (ayuda a madurar abscesos)',
      'Antimicótico tópico',
    ],
    partesUtiles: [
      'Hojas (uso estrictamente externo)',
      'Tallo'
    ],
    esenciasFlorales: [
      'Aceptación de la propia sombra',
      'Transmutación de la vergüenza',
      'Integración de partes rechazadas del ser',
    ],
    correspondenciasEnergeticas: [
      'Planta de la familia de las solanáceas (asociadas a la magia profunda)',
      'Extracción de energías parasitarias',
      'Limpieza de espacios con presencias densas',
    ],
    malesEmocionales: [
      'Sentimientos de culpa o vergüenza profundos',
      'Miedo a mostrarse tal cual se es',
      'Sensación de impureza espiritual',
    ],
    malesFisicos: [
      'Abscesos o forúnculos (nacidos)',
      'Infecciones cutáneas',
      'Heridas infectadas',
      'Hongos en la piel',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Solanales',
      familia: 'Solanaceae',
      genero : 'Solanum',
      especie: 'ovalifolium',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para madurar abscesos (nacidos), desinfectar la piel y extraer pus (NO INGERIR)',
        formaDeAplicacion:
          'Aplicar el cataplasma caliente sobre el forúnculo 2 veces al día hasta que drene.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de cucubo',
            cantidad   : '5 hojas grandes',
          },
          {
            ingrediente: 'Aceite de ricino o de oliva',
            cantidad   : '1 cucharadita',
          },
        ],
        pasos: [
          [
            1,
            'Lavar muy bien las hojas frescas.'
          ],
          [
            2,
            'Machacar las hojas en un mortero hasta formar una pasta verde oscuro.',
          ],
          [
            3,
            'Mezclar la pasta con un poco de aceite de ricino o de oliva.'
          ],
          [
            4,
            'Calentar la mezcla muy ligeramente al fuego (que sea soportable al tacto).',
          ],
          [
            5,
            'Colocar la pasta tibia sobre el absceso, cubrir con una gasa y fijar con esparadrapo.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Croton bogotanus',
    imageUrl        : 'https://www.google.com/search?q=Croton+bogotanus&tbm=isch',
    nombresComunes  : [
      'Sangregado',
      'Sangre de drago (variante andina)',
      'Mosquero',
    ],
    propiedadesMedicinales: [
      'Cicatrizante altamente potente',
      'Antiséptico',
      'Hemostático',
      'Antiulceroso',
    ],
    partesUtiles: [
      'Látex rojo (savia)',
      'Corteza'
    ],
    esenciasFlorales: [
      'Regeneración vital',
      'Cura de heridas en el alma',
      'Restauración de la fuerza vital tras eventos traumáticos',
    ],
    correspondenciasEnergeticas: [
      'Elemento Fuego y Sangre',
      'Medicina del linaje guerrero andino',
      'Sello de protección astral',
    ],
    malesEmocionales: [
      'Traumas agudos',
      'Pérdida de energía vital',
      'Sensación de estar desangrándose emocionalmente',
    ],
    malesFisicos: [
      'Heridas abiertas y cortes',
      'Úlceras gástricas (uso interno regulado de la resina)',
      'Afecciones bucales (aftas, gingivitis)',
      'Picaduras de insectos infectadas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Euphorbiaceae',
      genero : 'Croton',
      especie: 'bogotanus',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para sellar cortes, detener el sangrado inmediatamente y cicatrizar heridas rápidamente',
        formaDeAplicacion:
          'Aplicar unas gotas del látex directamente sobre la herida limpia 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Látex fresco de sangregado (resina roja)',
            cantidad   : '3 a 5 gotas',
          },
        ],
        pasos: [
          [
            1,
            'Lavar muy bien la herida o corte con agua y jabón neutro.'
          ],
          [
            2,
            'Secar suavemente la zona afectada.'
          ],
          [
            3,
            'Extraer el látex de la corteza del árbol haciendo un pequeño corte (si se tiene acceso directo) o usar tintura de resina comercial.',
          ],
          [
            4,
            'Dejar caer las gotas directamente sobre la herida.'
          ],
          [
            5,
            'Dejar secar al aire libre; el látex formará una película protectora rojiza similar a una costra artificial.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Smallanthus pyramidalis',
    imageUrl:
      'https://www.google.com/search?q=Smallanthus+pyramidalis&tbm=isch',
    nombresComunes: [
      'Arboloco',
      'Palo bobo',
      'Falso girasol'
    ],
    propiedadesMedicinales: [
      'Antiinflamatorio articular',
      'Emoliente',
      'Analgésico externo',
      'Vulnerario',
    ],
    partesUtiles: [
      'Hojas grandes',
      'Médula del tallo (esponjosa)'
    ],
    esenciasFlorales: [
      'Orden mental',
      'Estabilidad en tiempos de crecimiento rápido y caótico',
      'Enraizamiento',
    ],
    correspondenciasEnergeticas: [
      'Especie pionera y restauradora de suelos',
      'Magia de crecimiento rápido y expansión',
      'Sanación de la tierra',
    ],
    malesEmocionales: [
      'Caos mental',
      'Crecimiento personal desordenado o abrumador',
      'Inestabilidad',
    ],
    malesFisicos: [
      'Reumatismo',
      'Inflamación de rodillas y codos',
      'Torceduras',
      'Piel irritada',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Smallanthus',
      especie: 'pyramidalis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para desinflamar articulaciones severamente afectadas por artritis, reumatismo o golpes',
        formaDeAplicacion:
          'Envolver la articulación con las hojas calientes y dejar actuar toda la noche.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas y enteras de arboloco',
            cantidad   : '2 a 3 hojas grandes',
          },
          {
            ingrediente: 'Aceite para masaje (opcional)',
            cantidad   : 'Unas gotas',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas grandes y vellosas del arboloco.'
          ],
          [
            2,
            'Pasar las hojas rápidamente por una fuente de calor (comal o llama baja) para marchitarlas un poco y activar sus aceites, cuidando de no quemarlas.',
          ],
          [
            3,
            'Aplicar un poco de aceite de masaje sobre la articulación dolorida (opcional).',
          ],
          [
            4,
            'Envolver la rodilla, codo o tobillo con las hojas calientes.'
          ],
          [
            5,
            'Fijar con una venda elástica y dejar el emplasto durante toda la noche.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Vaccinium floribundum',
    imageUrl        : 'https://www.google.com/search?q=Vaccinium+floribundum&tbm=isch',
    nombresComunes  : [
      'Mortiño',
      'Agráz',
      'Mortiño de páramo'
    ],
    propiedadesMedicinales: [
      'Antioxidante de altísimo espectro',
      'Hipoglucemiante (regula el azúcar)',
      'Protector capilar y cardiovascular',
      'Antiséptico urinario',
    ],
    partesUtiles: [
      'Frutos (bayas)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Claridad de visión (física y mental)',
      'Vitalidad y rejuvenecimiento',
      'Dulce aceptación del fluir de la vida',
    ],
    correspondenciasEnergeticas: [
      'Sangre de la tierra (por su color oscuro)',
      'Vitalidad ancestral',
      'Conexión con la energía de la eterna juventud y la memoria',
    ],
    malesEmocionales: [
      'Envejecimiento prematuro (sentirse viejo por dentro)',
      'Falta de dulzura en la vida diaria',
      'Pesadumbre crónica',
    ],
    malesFisicos: [
      'Diabetes (coadyuvante)',
      'Infecciones urinarias crónicas',
      'Problemas de visión y microcirculación',
      'Estrés oxidativo',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Ericaceae',
      genero : 'Vaccinium',
      especie: 'floribundum',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para regular los niveles de glucosa en sangre y prevenir/tratar infecciones urinarias leves',
        formaDeAplicacion:
          'Beber 1 taza de infusión de hojas en la mañana, o consumir el jugo de los frutos frescos.',
        ingredientes: [
          {
            ingrediente:
              'Hojas secas de mortiño (para regular azúcar) o 1 taza de frutos frescos (para antioxidante/vías urinarias)',
            cantidad: '1 cucharada de hojas o 1 taza de bayas',
          },
          {
            ingrediente: 'Agua hirviendo (para hojas) o agua fría (para jugo)',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Para infusión hipoglucemiante: colocar la cucharada de hojas secas en una taza.',
          ],
          [
            2,
            'Añadir el agua hirviendo, tapar y dejar reposar 10 minutos.'
          ],
          [
            3,
            'Colar y beber sin azúcar.'
          ],
          [
            4,
            'Para el jugo (antioxidante/urinario): Lavar muy bien los frutos frescos del agraz/mortiño.',
          ],
          [
            5,
            'Licuar las bayas con un poco de agua fría, no colar (para aprovechar la fibra) y consumir inmediatamente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Gaultheria anastomosans',
    imageUrl:
      'https://www.google.com/search?q=Gaultheria+anastomosans&tbm=isch',
    nombresComunes: [
      'Reventadera',
      'Uva de monte',
      'Baya de perdiz (variante)',
    ],
    propiedadesMedicinales: [
      'Analgésico potente (alto contenido natural de salicilato de metilo)',
      'Antiespasmódico muscular',
      'Antirreumático externo',
      'Rubefaciente',
    ],
    partesUtiles: [
      'Hojas',
      'Frutos (consumo muy moderado)'
    ],
    esenciasFlorales: [
      'Liberación de tensión extrema',
      'Ruptura de patrones de estrés crónico',
      'Relajación profunda',
    ],
    correspondenciasEnergeticas: [
      'Ruptura de bloqueos (Reventadera)',
      'Destrucción de obstáculos',
      'Descompresión de energías densas acumuladas en el cuerpo',
    ],
    malesEmocionales: [
      'Estrés paralizante',
      'Tensión nerviosa acumulada a punto de estallar',
      'Rigidez de pensamientos por presión externa',
    ],
    malesFisicos: [
      'Dolores musculares intensos',
      'Reumatismo crónico',
      'Lumbago y ciática',
      'Dolor de cabeza tensional (frotación)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Ericaceae',
      genero : 'Gaultheria',
      especie: 'anastomosans',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores reumáticos, ciática, lumbago o contracturas musculares severas',
        formaDeAplicacion:
          'Usar como fricción o masaje vigoroso sobre la zona adolorida, 2 a 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de reventadera',
            cantidad   : '50 gramos',
          },
          {
            ingrediente: 'Alcohol etílico al 70% o alcohol de fricción',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar y secar bien las hojas frescas.'
          ],
          [
            2,
            'Triturar ligeramente las hojas con las manos para romper sus glándulas y liberar el aroma característico a mentol/salicilato.',
          ],
          [
            3,
            'Colocar las hojas en un frasco de vidrio oscuro.'
          ],
          [
            4,
            'Cubrir completamente con el alcohol, cerrar bien y dejar macerar en un lugar oscuro durante 15 días, agitando a diario.',
          ],
          [
            5,
            'Filtrar el alcohol y usarlo para masajear las zonas con dolor muscular o articular.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Myrcianthes leucoxyla',
    imageUrl:
      'https://www.reddearboles.org/nwlib6/includes/phpthumb/phpThumb.php?src=/imagenes/nwproject5.forms.f_productoscatalogo/1/myrcianthesleucoxylass23.jpg&w=550&f=webp',
    nombresComunes: [
      'Arrayán blanco',
      'Arrayán',
      'Guayabillo'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Antiséptico bucal',
      'Antidiarreico',
      'Tónico estomacal',
    ],
    partesUtiles: [
      'Hojas',
      'Frutos'
    ],
    esenciasFlorales: [
      'Limpieza de apegos del pasado',
      'Frescura y renovación mental',
      'Ayuda a superar duelos prolongados',
    ],
    correspondenciasEnergeticas: [
      'Árbol de purificación hídrica (crece cerca de nacederos)',
      'Símbolo de hospitalidad y paz',
      'Limpieza de campos áuricos densos',
    ],
    malesEmocionales: [
      'Nostalgia paralizante',
      'Atascamiento en el pasado',
      'Sensación de impureza espiritual',
    ],
    malesFisicos: [
      'Gingivitis y llagas bucales',
      'Diarrea leve',
      'Indigestión crónica',
      'Infecciones de garganta',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Myrtales',
      familia: 'Myrtaceae',
      genero : 'Myrcianthes',
      especie: 'leucoxyla',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para curar la gingivitis, desinflamar encías y combatir el mal aliento',
        formaDeAplicacion:
          'Realizar enjuagues bucales (gargarismos) con la decocción tibia 3 veces al día después del cepillado.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas o secas de arrayán',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas de arrayán.'
          ],
          [
            2,
            'Hervir el agua y añadir las hojas.'
          ],
          [
            3,
            'Mantener a fuego lento por 8 minutos para extraer los taninos.'
          ],
          [
            4,
            'Apagar, tapar y dejar enfriar hasta que esté tibio.'
          ],
          [
            5,
            'Colar y almacenar en un frasco limpio. No ingerir el enjuague.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Macleania rupestris',
    imageUrl        : 'https://www.google.com/search?q=Macleania+rupestris&tbm=isch',
    nombresComunes  : [
      'Uva camarona',
      'Camarona',
      'Joyapa'
    ],
    propiedadesMedicinales: [
      'Antioxidante',
      'Vitamínico (alto en Vitamina C y antocianinas)',
      'Astringente leve',
      'Expectorante suave',
    ],
    partesUtiles: [
      'Frutos (bayas carnosas)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Apertura a la dulzura de la vida',
      'Nutrición del niño interior',
      'Alivio de la aridez emocional',
    ],
    correspondenciasEnergeticas: [
      'Abundancia en entornos hostiles (crece en rocas y subpáramos)',
      'Regalo de la Madre Tierra',
      'Vitalidad y fuego interno',
    ],
    malesEmocionales: [
      'Sensación de escasez afectiva',
      'Amargura',
      'Desconexión con el placer y el disfrute',
    ],
    malesFisicos: [
      'Escorbuto o deficiencia de vitamina C',
      'Resfriados y catarros crónicos',
      'Fatiga y agotamiento',
      'Envejecimiento celular prematuro',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Ericaceae',
      genero : 'Macleania',
      especie: 'rupestris',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Como tónico vitamínico y antioxidante para fortalecer el sistema inmune frente a resfriados',
        formaDeAplicacion:
          'Consumir el extracto o jugo de los frutos diariamente en las mañanas.',
        ingredientes: [
          {
            ingrediente: 'Frutos maduros de uva camarona',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '200 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar cuidadosamente las bayas, retirando cualquier pedúnculo.'
          ],
          [
            2,
            'Licuar las bayas con el agua purificada.'
          ],
          [
            3,
            'Pasar por un colador para retirar las pequeñas semillas si se desea una textura más suave.',
          ],
          [
            4,
            'Consumir inmediatamente para aprovechar al máximo las vitaminas hidrosolubles.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Tibouchina lepidota',
    imageUrl        : 'https://www.google.com/search?q=Tibouchina+lepidota&tbm=isch',
    nombresComunes  : [
      'Sietecueros',
      'Flor de mayo'
    ],
    propiedadesMedicinales: [
      'Hemostático (detiene sangrados)',
      'Cicatrizante',
      'Vulnerario',
      'Astringente',
    ],
    partesUtiles: [
      'Corteza (se desprende en escamas o cueros)',
      'Hojas',
      'Flores',
    ],
    esenciasFlorales: [
      'Transformación profunda',
      'Ayuda a mudar viejas pieles o identidades',
      'Renacimiento después de periodos oscuros',
    ],
    correspondenciasEnergeticas: [
      'Símbolo de regeneración constante',
      'Transmutación espiritual (flores violetas)',
      'Protección durante cambios drásticos de vida',
    ],
    malesEmocionales: [
      'Apego a versiones pasadas de uno mismo',
      'Miedo al cambio y a la transformación',
      'Dificultad para cerrar ciclos',
    ],
    malesFisicos: [
      'Hemorragias externas',
      'Heridas sangrantes',
      'Quemaduras leves',
      'Inflamaciones cutáneas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Myrtales',
      familia: 'Melastomataceae',
      genero : 'Tibouchina',
      especie: 'lepidota',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener el sangrado de cortes superficiales y favorecer la cicatrización',
        formaDeAplicacion:
          'Lavar la herida con la decocción fría y aplicar la corteza triturada como cataplasma.',
        ingredientes: [
          {
            ingrediente: 'Corteza suelta (cueros) del sietecueros',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar las láminas secas de corteza que se desprenden naturalmente del tronco.',
          ],
          [
            2,
            'Hervir el agua y añadir la corteza.'
          ],
          [
            3,
            'Dejar en ebullición por 10 minutos.'
          ],
          [
            4,
            'Retirar del fuego y dejar enfriar completamente.'
          ],
          [
            5,
            'Filtrar el líquido para lavar la herida y utilizar parte de la corteza ablandada sobre el corte.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Escallonia myrtilloides',
    imageUrl:
      'https://www.google.com/search?q=Escallonia+myrtilloides&tbm=isch',
    nombresComunes: [
      'Rodamonte',
      'Tibar (en algunas zonas)'
    ],
    propiedadesMedicinales: [
      'Antirreumático',
      'Béquico (para la tos)',
      'Febrífugo',
      'Astringente',
    ],
    partesUtiles: [
      'Hojas',
      'Ramas tiernas'
    ],
    esenciasFlorales: [
      'Resistencia extrema',
      'Paciencia ante las adversidades prolongadas',
      'Firmeza de propósito',
    ],
    correspondenciasEnergeticas: [
      'Guardián de los vientos helados',
      'Fortaleza interior indoblegable',
      'Protección contra envidias y energías punzantes',
    ],
    malesEmocionales: [
      'Agotamiento ante pruebas largas',
      'Falta de resiliencia',
      'Sensación de fragilidad emocional',
    ],
    malesFisicos: [
      'Dolores reumáticos agravados por el frío',
      'Afecciones bronquiales por clima extremo',
      'Fiebre',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Escalloniales',
      familia: 'Escalloniaceae',
      genero : 'Escallonia',
      especie: 'myrtilloides',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores articulares y óseos causados por el frío intenso y la humedad',
        formaDeAplicacion:
          'Realizar baños de inmersión tibios con la decocción de las ramas y hojas 1 vez al día.',
        ingredientes: [
          {
            ingrediente: 'Ramas y hojas frescas de rodamonte',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '2 litros',
          },
        ],
        pasos: [
          [
            1,
            'Trocear las ramas y hojas del rodamonte.'
          ],
          [
            2,
            'Poner a hervir los 2 litros de agua en una olla grande.'
          ],
          [
            3,
            'Añadir la planta y hervir a fuego fuerte durante 15 minutos.'
          ],
          [
            4,
            'Apagar el fuego y dejar reposar 10 minutos.'
          ],
          [
            5,
            'Verter la preparación, sin colar, en una tina de baño o usar en compresas muy calientes sobre las articulaciones.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Miconia squamulosa',
    imageUrl        : 'https://www.google.com/search?q=Miconia+squamulosa&tbm=isch',
    nombresComunes  : [
      'Tuno esmeraldo',
      'Tuno',
      'Pava'
    ],
    propiedadesMedicinales: [
      'Cicatrizante',
      'Astringente',
      'Colorante natural (uso tradicional para la piel)',
    ],
    partesUtiles: [
      'Hojas',
      'Frutos'
    ],
    esenciasFlorales: [
      'Limpieza de la propia imagen',
      'Aceptación de la belleza única',
      'Integración social',
    ],
    correspondenciasEnergeticas: [
      'Asociado a las aves del bosque andino',
      'Colorido y magnetismo',
      'Protección del aura',
    ],
    malesEmocionales: [
      'Baja autoestima física',
      'Timidez excesiva',
      'Aislamiento social',
    ],
    malesFisicos: [
      'Erupciones cutáneas leves',
      'Raspones',
      'Diarrea leve'
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Myrtales',
      familia: 'Melastomataceae',
      genero : 'Miconia',
      especie: 'squamulosa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para secar erupciones de la piel y ayudar a cicatrizar raspones superficiales',
        formaDeAplicacion:
          'Lavar la piel afectada con la infusión a temperatura ambiente 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas de tuno esmeraldo',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas del tuno.'
          ],
          [
            2,
            'Colocar las hojas en un recipiente de cerámica.'
          ],
          [
            3,
            'Verter el agua hirviendo y tapar inmediatamente.'
          ],
          [
            4,
            'Dejar infundir hasta que el líquido se enfríe.'
          ],
          [
            5,
            'Colar y usar el líquido para limpiar suavemente la piel.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Bucquetia glutinosa',
    imageUrl        : 'https://www.google.com/search?q=Bucquetia+glutinosa&tbm=isch',
    nombresComunes  : [
      'Saltón',
      'Charne',
      'Tuno pegajoso'
    ],
    propiedadesMedicinales: [
      'Vulnerario (cura heridas)',
      'Emoliente tópico (resina/exudado)',
      'Antiinflamatorio local',
    ],
    partesUtiles: [
      'Hojas tiernas y resinosas',
      'Flores'
    ],
    esenciasFlorales: [
      'Cohesión en las relaciones',
      'Ayuda a reparar vínculos rotos',
      'Fomenta la adaptabilidad',
    ],
    correspondenciasEnergeticas: [
      'Planta de pegamento energético',
      'Reparación de fracturas en el cuerpo etérico',
      'Atracción de energías positivas',
    ],
    malesEmocionales: [
      'Sensación de estar roto por dentro',
      'Desconexión emocional con la pareja o familia',
      'Rigidez de carácter',
    ],
    malesFisicos: [
      'Heridas abiertas de difícil cierre',
      'Inflamaciones superficiales',
      'Piel agrietada y seca',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Myrtales',
      familia: 'Melastomataceae',
      genero : 'Bucquetia',
      especie: 'glutinosa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para proteger heridas abiertas, crear una barrera física y promover la regeneración de tejidos',
        formaDeAplicacion:
          'Aplicar un cataplasma de las hojas pegajosas sobre la zona afectada y cubrir con una venda limpia.',
        ingredientes: [
          {
            ingrediente: 'Hojas jóvenes y glutinosas (pegajosas) de charne',
            cantidad   : '5 a 10 hojas',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar las hojas más jóvenes, que contienen la mayor cantidad de exudado resinoso.',
          ],
          [
            2,
            'Limpiar cuidadosamente la herida a tratar.'
          ],
          [
            3,
            'Macerar levemente las hojas para aumentar la liberación de la resina.',
          ],
          [
            4,
            'Colocar las hojas directamente sobre la herida o inflamación a modo de parche natural.',
          ],
          [
            5,
            'Fijar con una venda y dejar actuar por varias horas, cambiando el emplasto a diario.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Baccharis bogotensis',
    imageUrl        : 'https://www.google.com/search?q=Baccharis+bogotensis&tbm=isch',
    nombresComunes  : [
      'Ciro',
      'Chilca blanca'
    ],
    propiedadesMedicinales: [
      'Digestivo',
      'Carminativo (alivia gases)',
      'Antiespasmódico',
      'Febrífugo leve',
    ],
    partesUtiles: [
      'Hojas',
      'Sumidades floridas'
    ],
    esenciasFlorales: [
      'Digestión de emociones difíciles',
      'Ligereza de espíritu',
      'Desintoxicación mental',
    ],
    correspondenciasEnergeticas: [
      'Limpieza de espacios mediante sahumerios',
      'Elemento Aire',
      'Dispersa la pesadez mental y las energías estancadas',
    ],
    malesEmocionales: [
      'Rumia mental (pensamientos obsesivos)',
      'Incapacidad para digerir una mala noticia',
      'Pesadez emocional',
    ],
    malesFisicos: [
      'Indigestión severa',
      'Cólicos por gases (meteorismo)',
      'Dolor de estómago por nervios',
      'Fiebre leve',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Baccharis',
      especie: 'bogotensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores de estómago crónicos, gases e indigestión nerviosa',
        formaDeAplicacion:
          'Beber 1 taza de infusión después de comidas pesadas o cuando haya dolor.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas o secas de ciro',
            cantidad   : '1 cucharadita (3g)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las hojas de ciro en una taza.'
          ],
          [
            2,
            'Agregar el agua hirviendo.'
          ],
          [
            3,
            'Tapar inmediatamente para no perder los aceites esenciales volátiles responsables de su acción digestiva.',
          ],
          [
            4,
            'Dejar infundir por 5 a 7 minutos.'
          ],
          [
            5,
            'Colar y beber lentamente mientras esté caliente.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Diplostephium rosmarinifolium',
    imageUrl:
      'https://www.google.com/search?q=Diplostephium+rosmarinifolium&tbm=isch',
    nombresComunes: [
      'Romero blanco',
      'Romero de páramo',
      'Romero andino'
    ],
    propiedadesMedicinales: [
      'Rubefaciente (calienta la piel y músculos)',
      'Antirreumático',
      'Estimulante circulatorio tópico',
      'Anticatarral',
    ],
    partesUtiles: [
      'Ramas foliosas',
      'Hojas'
    ],
    esenciasFlorales: [
      'Recuperación de la memoria vital',
      'Despierta el letargo espiritual',
      'Claridad de propósito',
    ],
    correspondenciasEnergeticas: [
      'Planta sagrada para sahumerios de alta vibración',
      'Ahuyenta entidades de baja frecuencia',
      'Medicina del fuego blanco y la purificación',
    ],
    malesEmocionales: [
      'Depresión invernal o por frío',
      'Falta de claridad vital',
      'Apatía extrema y letargo',
    ],
    malesFisicos: [
      'Dolores articulares crónicos por frío',
      'Mala circulación periférica',
      'Afecciones respiratorias severas (inhalaciones)',
      'Fatiga física general',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Diplostephium',
      especie: 'rosmarinifolium',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reactivar la circulación, calentar el cuerpo y tratar dolores articulares o reumáticos',
        formaDeAplicacion:
          'Friccionar la piel con la tintura alcohólica sobre las zonas frías o adoloridas 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de romero de páramo',
            cantidad   : '50 gramos',
          },
          {
            ingrediente: 'Alcohol etílico o aguardiente blanco',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar y secar muy bien las hojas de romero de páramo.'
          ],
          [
            2,
            'Introducirlas en un frasco de vidrio oscuro y esterilizado.'
          ],
          [
            3,
            'Cubrir completamente con el alcohol.'
          ],
          [
            4,
            'Cerrar herméticamente y dejar macerar en un lugar fresco y oscuro durante 21 días, agitando cada 2 días.',
          ],
          [
            5,
            'Filtrar la tintura y usarla para realizar masajes vigorosos en articulaciones y extremidades frías.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Symplocos theiformis',
    imageUrl        : 'https://www.google.com/search?q=Symplocos+theiformis&tbm=isch',
    nombresComunes  : [
      'Té de Bogotá'
    ],
    propiedadesMedicinales: [
      'Estimulante del sistema nervioso central leve',
      'Digestivo',
      'Diurético suave',
      'Tónico general',
    ],
    partesUtiles: [
      'Hojas'
    ],
    esenciasFlorales: [
      'Agudeza mental',
      'Enfoque y concentración',
      'Despierta la mente intuitiva',
    ],
    correspondenciasEnergeticas: [
      'Clarividencia',
      'Limpieza del chakra del tercer ojo',
      'Compañero para largas jornadas de estudio o meditación',
    ],
    malesEmocionales: [
      'Niebla mental',
      'Falta de atención',
      'Somnolencia crónica diurna',
      'Desmotivación intelectual',
    ],
    malesFisicos: [
      'Digestiones pesadas',
      'Retención de líquidos leve',
      'Agotamiento mental e intelectual',
      'Dolores de cabeza por cansancio',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Symplocaceae',
      genero : 'Symplocos',
      especie: 'theiformis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para estimular la mente, mejorar la digestión y reducir el cansancio intelectual',
        formaDeAplicacion:
          'Beber 1 a 2 tazas de infusión al día, preferiblemente en la mañana o media tarde (no en la noche).',
        ingredientes: [
          {
            ingrediente: 'Hojas secas de té de Bogotá',
            cantidad   : '1 cucharada rasa',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Calentar la tetera o taza previamente con un poco de agua caliente y desecharla.',
          ],
          [
            2,
            'Colocar las hojas secas en el recipiente caliente.'
          ],
          [
            3,
            'Verter los 250ml de agua a punto de ebullición sobre las hojas.',
          ],
          [
            4,
            'Tapar y dejar reposar entre 3 y 5 minutos (más tiempo puede amargar la bebida).',
          ],
          [
            5,
            'Colar y consumir, puede endulzarse ligeramente si se desea.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Berberis rigidifolia',
    imageUrl        : 'https://www.google.com/search?q=Berberis+rigidifolia&tbm=isch',
    nombresComunes  : [
      'Espino',
      'Uña de gato andina (erróneamente por las espinas)',
    ],
    propiedadesMedicinales: [
      'Colagogo (estimula flujo biliar)',
      'Hepatoprotector',
      'Antimicrobiano (alto contenido de berberina)',
      'Antiparasitario intestinal',
    ],
    partesUtiles: [
      'Raíz',
      'Corteza del tallo (parte amarilla interior)'
    ],
    esenciasFlorales: [
      'Definición de límites personales',
      'Protección contra invasiones energéticas',
      'Sanación del resentimiento biliar',
    ],
    correspondenciasEnergeticas: [
      'Magia defensiva (espinas)',
      'Purificación profunda a través del elemento Fuego y el hígado',
      'Corte de lazos tóxicos',
    ],
    malesEmocionales: [
      'Ira explosiva o reprimida',
      'Incapacidad para defenderse de agresiones verbales',
      'Toxicidad en las relaciones',
    ],
    malesFisicos: [
      'Afecciones del hígado y la vesícula biliar',
      'Infecciones intestinales bacterianas',
      'Parásitos',
      'Ictericia (coloración amarilla de la piel)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ranunculales',
      familia: 'Berberidaceae',
      genero : 'Berberis',
      especie: 'rigidifolia',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para depurar el hígado, estimular la vesícula biliar y tratar infecciones gastrointestinales',
        formaDeAplicacion:
          'Beber 1 taza pequeña de decocción en ayunas durante un máximo de 9 días consecutivos.',
        ingredientes: [
          {
            ingrediente: 'Corteza de la raíz de espino (interior amarillo)',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar muy bien la raíz o la corteza obtenida.'
          ],
          [
            2,
            'Colocar la corteza en el agua fría en un recipiente que no sea de aluminio.',
          ],
          [
            3,
            'Llevar a fuego y hervir lentamente durante 15 minutos para extraer la berberina (el líquido se tornará amarillento).',
          ],
          [
            4,
            'Dejar reposar, colar y desechar la corteza.'
          ],
          [
            5,
            'Beber la decocción amarga. Precaución: Está contraindicado en mujeres embarazadas.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Espeletia grandiflora',
    imageUrl        : 'https://www.google.com/search?q=Espeletia+grandiflora&tbm=isch',
    nombresComunes  : [
      'Frailejón gigante',
      'Frailejón Mayor',
      'Frailejón'
    ],
    propiedadesMedicinales: [
      'Antiasmático',
      'Béquico (alivia la tos)',
      'Antiinflamatorio respiratorio',
      'Hipotensor leve',
    ],
    partesUtiles: [
      'Hojas secas',
      'Resina (exudado del tallo)'
    ],
    esenciasFlorales: [
      'Sabiduría ancestral',
      'Paciencia infinita',
      'Conexión cósmica y espiritual',
      'Ayuda a sostenerse en la adversidad',
    ],
    correspondenciasEnergeticas: [
      'Antenas captadoras de agua y energía pránica',
      'Guardianes espirituales del páramo',
      'Elemento Agua y Éter',
    ],
    malesEmocionales: [
      'Soledad profunda',
      'Impaciencia frente a los procesos de la vida',
      'Desconexión espiritual o existencial',
    ],
    malesFisicos: [
      'Asma bronquial',
      'Bronquitis crónica',
      'Reumatismo (uso externo de la resina)',
      'Tos por frío extremo',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Espeletia',
      especie: 'grandiflora',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar crisis asmáticas, abrir las vías respiratorias y calmar la tos de páramo',
        formaDeAplicacion:
          'Beber 1 taza de decocción caliente endulzada con miel, o realizar vahos (inhalaciones) con la misma.',
        ingredientes: [
          {
            ingrediente: 'Hojas secas (marrones) de frailejón',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar únicamente las hojas secas que cuelgan del tallo, nunca arrancar el cogollo vivo.',
          ],
          [
            2,
            'Hervir el agua en un recipiente con tapa.'
          ],
          [
            3,
            'Añadir las hojas y dejar hervir a fuego muy lento por 5 minutos para extraer la resina atrapada en la pubescencia.',
          ],
          [
            4,
            'Retirar del fuego y respirar el vapor con cuidado (vahos).'
          ],
          [
            5,
            'Colar pasándolo por un filtro de tela fina (para evitar los pelillos), endulzar y beber caliente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Espeletiopsis rabanalensis',
    imageUrl        : 'https://static.inaturalist.org/photos/39748543/large.jpg',
    nombresComunes  : [
      'Frailejón de Rabanal'
    ],
    propiedadesMedicinales: [
      'Expectorante',
      'Antiespasmódico bronquial',
      'Emoliente (suaviza mucosas)',
    ],
    partesUtiles: [
      'Hojas maduras',
      'Resina'
    ],
    esenciasFlorales: [
      'Resiliencia extrema ante la pérdida',
      'Adaptabilidad a entornos hostiles',
      'Consuelo en duelos ecológicos o personales',
    ],
    correspondenciasEnergeticas: [
      'Guardián de humedales altoandinos',
      'Equilibrio del flujo hídrico',
      'Símbolo de resistencia (especie en peligro)',
    ],
    malesEmocionales: [
      'Melancolía y tristeza profunda',
      'Dolor por la pérdida del arraigo o el hogar',
      'Agotamiento ante la lucha constante',
    ],
    malesFisicos: [
      'Congestión pulmonar',
      'Tos seca irritativa',
      'Resfriados prolongados',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Espeletiopsis',
      especie: 'rabanalensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Como expectorante para soltar flemas adheridas y calmar la irritación de la garganta',
        formaDeAplicacion:
          'Tomar 1 cucharada del jarabe artesanal 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas de frailejón limpias y troceadas',
            cantidad   : '50 gramos',
          },
          {
            ingrediente: 'Panela (chancaca) o miel',
            cantidad   : '250 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Hervir el agua junto con la panela hasta formar un melado o almíbar ligero.',
          ],
          [
            2,
            'Añadir las hojas de frailejón al almíbar hirviendo.'
          ],
          [
            3,
            'Bajar el fuego al mínimo y cocinar tapado durante 20 minutos para que la resina se integre con el azúcar.',
          ],
          [
            4,
            'Apagar el fuego y dejar reposar hasta que esté tibio.'
          ],
          [
            5,
            'Colar a través de una manta o filtro fino para retirar todos los pelos foliares y envasar en vidrio oscuro.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Polylepis quadrijuga',
    imageUrl        : 'https://www.google.com/search?q=Polylepis+quadrijuga&tbm=isch',
    nombresComunes  : [
      'Coloradito',
      'Siete Cueros de páramo',
      'Colorado'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Hemostático',
      'Cicatrizante',
      'Tónico respiratorio',
    ],
    partesUtiles: [
      'Corteza exfoliante (las láminas rojas)'
    ],
    esenciasFlorales: [
      'Despojarse del dolor pasado',
      'Abrigo emocional en la frialdad',
      'Protección de la propia vulnerabilidad',
    ],
    correspondenciasEnergeticas: [
      'Fuego que no quema (por el color de su corteza)',
      'Abrigo de la montaña',
      'Renovación cíclica de las capas del alma',
    ],
    malesEmocionales: [
      'Sensación de vulnerabilidad o desnudez emocional',
      'Frialdad afectiva',
      'Apego a traumas antiguos',
    ],
    malesFisicos: [
      'Hemorragias menores',
      'Afecciones respiratorias por frío extremo',
      'Diarreas',
      'Heridas que tardan en cerrar',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Rosales',
      familia: 'Rosaceae',
      genero : 'Polylepis',
      especie: 'quadrijuga',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener sangrados, limpiar heridas y reducir inflamaciones cutáneas',
        formaDeAplicacion:
          'Lavar la zona afectada con la decocción fría 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Láminas de corteza roja de coloradito',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Desprender suavemente las láminas de corteza suelta del árbol sin dañar el tronco interior.',
          ],
          [
            2,
            'Lavar la corteza para retirar polvo o musgo.'
          ],
          [
            3,
            'Hervir en el agua durante 15 minutos.'
          ],
          [
            4,
            'Dejar reposar y enfriar completamente.'
          ],
          [
            5,
            'Filtrar el líquido, el cual tendrá un tono rojizo/ambarino rico en taninos, y aplicar sobre la piel.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Chusquea tessellata',
    imageUrl        : 'https://www.google.com/search?q=Chusquea+tessellata&tbm=isch',
    nombresComunes  : [
      'Chusque',
      'Bambú de páramo',
      'Carrizo'
    ],
    propiedadesMedicinales: [
      'Diurético suave',
      'Depurativo',
      'Estructural (uso en ferulización tradicional de fracturas)',
    ],
    partesUtiles: [
      'Hojas tiernas',
      'Tallos (cañas para uso externo/estructural)',
    ],
    esenciasFlorales: [
      'Flexibilidad inquebrantable',
      'Fluidez ante las tormentas de la vida',
      'Resiliencia comunitaria',
    ],
    correspondenciasEnergeticas: [
      'Canalización de energía vital (forma tubular)',
      'Elemento Viento',
      'Danza y adaptabilidad',
    ],
    malesEmocionales: [
      'Rigidez mental extrema',
      'Miedo a ceder el control',
      'Tensión nerviosa por estrés',
    ],
    malesFisicos: [
      'Retención de líquidos',
      'Problemas urinarios leves',
      'Fracturas óseas (como entablillado externo)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Poales',
      familia: 'Poaceae',
      genero : 'Chusquea',
      especie: 'tessellata',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para ayudar a eliminar líquidos retenidos y limpiar las vías urinarias',
        formaDeAplicacion:
          'Beber 1 taza de infusión de hojas tiernas, 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas y tiernas de chusque',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas tiernas (brotes) del chusque.'
          ],
          [
            2,
            'Trozar las hojas finamente con las manos o tijeras.'
          ],
          [
            3,
            'Colocar en una taza y verter el agua hirviendo.'
          ],
          [
            4,
            'Tapar y dejar infundir por 10 minutos.'
          ],
          [
            5,
            'Colar y consumir la bebida (tiene un sabor muy neutro, ligeramente a pasto fresco).',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Calamagrostis effusa',
    imageUrl        : 'https://www.google.com/search?q=Calamagrostis+effusa&tbm=isch',
    nombresComunes  : [
      'Paja de páramo',
      'Pajonal',
      'Paja maciega'
    ],
    propiedadesMedicinales: [
      'Termorregulador (aislante térmico uso externo)',
      'Antiinflamatorio leve (en baños)',
      'Relajante muscular (hidroterapia)',
    ],
    partesUtiles: [
      'Tallos y hojas secas'
    ],
    esenciasFlorales: [
      'Sentido de comunidad',
      'Humildad y servicio',
      'Sostén de la red de la vida',
    ],
    correspondenciasEnergeticas: [
      'Manto protector de la Madre Tierra',
      'Retención de la memoria del agua',
      'Acumulación pasiva de energía solar',
    ],
    malesEmocionales: [
      'Individualismo exacerbado',
      'Aislamiento emocional',
      'Sentimiento de insignificancia',
    ],
    malesFisicos: [
      'Enfriamiento corporal agudo',
      'Espasmos musculares por frío',
      'Dolores articulares generalizados',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Poales',
      familia: 'Poaceae',
      genero : 'Calamagrostis',
      especie: 'effusa',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reactivar el calor corporal, relajar músculos tensos por el frío y aliviar dolores generalizados',
        formaDeAplicacion:
          'Realizar un baño de inmersión caliente (hidroterapia andina) durante 15-20 minutos.',
        ingredientes: [
          {
            ingrediente: 'Manojo grande de paja de páramo seca',
            cantidad   : '500 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '5 litros (para preparar concentrado)',
          },
        ],
        pasos: [
          [
            1,
            'Lavar la paja para retirar tierra superficial.'
          ],
          [
            2,
            'Hervir los 5 litros de agua en una olla grande.'
          ],
          [
            3,
            'Introducir la paja y dejar hervir a fuego fuerte durante 20 minutos para extraer sus sílices y aceites suaves.',
          ],
          [
            4,
            'Verter la decocción (con todo y pajas si se desea) en una tina con agua caliente suficiente para inmersión.',
          ],
          [
            5,
            'Sumergirse en el baño termal artesanal hasta que el cuerpo recupere su temperatura natural.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Puya nitida',
    imageUrl        : 'https://www.google.com/search?q=Puya+nitida&tbm=isch',
    nombresComunes  : [
      'Puya',
      'Cardón',
      'Piña de páramo'
    ],
    propiedadesMedicinales: [
      'Purgante fuerte (uso ancestral muy restringido)',
      'Vulnerario (uso externo)',
      'Antiinflamatorio tópico',
    ],
    partesUtiles: [
      'Corazón (médula carnosa)',
      'Raíz'
    ],
    esenciasFlorales: [
      'Protección feroz del mundo interior',
      'Revelación de la belleza oculta',
      'Defensa del espacio personal',
    ],
    correspondenciasEnergeticas: [
      'Fuego solar en medio de la niebla',
      'Custodia de los secretos de la montaña',
      'Magia de protección y de repeler enemigos (por sus espinas)',
    ],
    malesEmocionales: [
      'Exceso de barreras defensivas',
      'Miedo profundo a la intimidad',
      'Agresividad como mecanismo de defensa',
    ],
    malesFisicos: [
      'Estreñimiento crónico severo (requiere supervisión por toxicidad)',
      'Contusiones fuertes',
      'Hinchazón articular',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Poales',
      familia: 'Bromeliaceae',
      genero : 'Puya',
      especie: 'nitida',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para bajar la inflamación de contusiones y golpes fuertes a nivel tópico (externo)',
        formaDeAplicacion:
          'Aplicar la pulpa fresca sobre el golpe y envolver con una venda, dejar actuar 2 horas.',
        ingredientes: [
          {
            ingrediente: 'Médula o corazón carnoso de las hojas de la puya',
            cantidad   : '50 gramos',
          },
        ],
        pasos: [
          [
            1,
            'Con mucho cuidado y guantes gruesos, extraer una de las hojas desde la base.',
          ],
          [
            2,
            'Pelar las espinas laterales y la cutícula exterior dura.'
          ],
          [
            3,
            'Extraer el interior blanco, mucilaginoso y carnoso (similar al aloe vera).',
          ],
          [
            4,
            'Macerar esta pulpa hasta formar un gel espeso.'
          ],
          [
            5,
            'Aplicar directamente sobre el hematoma o la inflamación.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Aragoa cleefii',
    imageUrl        : 'https://www.google.com/search?q=Aragoa+cleefii&tbm=isch',
    nombresComunes  : [
      'Pino de páramo',
      'Pinito'
    ],
    propiedadesMedicinales: [
      'Antiséptico respiratorio',
      'Expectorante pulmonar',
      'Balsámico',
      'Rubefaciente',
    ],
    partesUtiles: [
      'Ramas tiernas',
      'Hojas aciculares (agujas)'
    ],
    esenciasFlorales: [
      'Elevación del pensamiento',
      'Visión superior y perspectiva',
      'Limpieza de la mente saturada',
    ],
    correspondenciasEnergeticas: [
      'Conexión vertical (Cielo-Tierra)',
      'Purificación del aire y del prana',
      'Protección de los vientos gélidos espirituales',
    ],
    malesEmocionales: [
      'Confusión mental',
      'Pensamientos densos y recurrentes',
      'Falta de propósito superior',
    ],
    malesFisicos: [
      'Sinusitis aguda',
      'Congestión nasal severa',
      'Bronquitis',
      'Dolores musculares de pecho',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Lamiales',
      familia: 'Plantaginaceae',
      genero : 'Aragoa',
      especie: 'cleefii',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para descongestionar las vías respiratorias superiores, tratar sinusitis y limpiar los pulmones',
        formaDeAplicacion:
          'Realizar inhalaciones profundas (vahos) cubriendo la cabeza con una toalla, durante 10 minutos.',
        ingredientes: [
          {
            ingrediente: 'Ramitas frescas de pino de páramo',
            cantidad   : '1 puñado (aprox 30g)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las ramitas de pino de páramo en un bol o recipiente amplio que soporte calor.',
          ],
          [
            2,
            'Verter el litro de agua hirviendo sobre las plantas.'
          ],
          [
            3,
            'Inmediatamente, inclinar el rostro sobre el recipiente a una distancia segura para no quemarse.',
          ],
          [
            4,
            'Cubrir la cabeza y el recipiente con una toalla grande para crear una carpa de vapor.',
          ],
          [
            5,
            'Respirar profunda y calmadamente por la nariz y exhalar por la boca para absorber los aceites balsámicos.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Halenia asclepiadea',
    imageUrl        : 'https://www.google.com/search?q=Halenia+asclepiadea&tbm=isch',
    nombresComunes  : [
      'Cachitos',
      'Flor de cuernos'
    ],
    propiedadesMedicinales: [
      'Tónico amargo intenso',
      'Colagogo (estimula la liberación de bilis)',
      'Digestivo estomacal',
      'Estimulante del apetito',
    ],
    partesUtiles: [
      'Flores',
      'Hojas superiores'
    ],
    esenciasFlorales: [
      'Digestión de la amargura de la vida',
      'Apertura a la magia y al asombro',
      'Canalización de energías sutiles',
    ],
    correspondenciasEnergeticas: [
      'Geometría sagrada (forma de sus espolones)',
      'Receptáculos de rocío cósmico',
      'Sintonización con frecuencias celestiales',
    ],
    malesEmocionales: [
      'Resentimiento crónico',
      'Amargura emocional proyectada hacia otros',
      'Pérdida de la capacidad de asombro',
    ],
    malesFisicos: [
      'Indigestión crónica y pesadez',
      'Hígado perezoso',
      'Falta de apetito (anorexia temporal)',
      'Dificultad para digerir grasas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Gentianales',
      familia: 'Gentianaceae',
      genero : 'Halenia',
      especie: 'asclepiadea',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para activar los jugos gástricos, estimular el apetito y vaciar la vesícula biliar antes de comer',
        formaDeAplicacion:
          'Beber media taza de infusión 15 minutos antes de la comida principal.',
        ingredientes: [
          {
            ingrediente: 'Flores secas y hojas de cachitos',
            cantidad   : '1 cucharadita (2g)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '150 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar la planta seca en una taza pequeña.'
          ],
          [
            2,
            'Verter el agua caliente.'
          ],
          [
            3,
            'Tapar y dejar reposar brevemente, solo entre 3 a 5 minutos (es extremadamente amarga).',
          ],
          [
            4,
            'Colar la bebida.'
          ],
          [
            5,
            'Tomar a pequeños sorbos. NUNCA endulzar, ya que el sabor amargo en la lengua es el que desencadena el reflejo digestivo y hepático.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Hesperomeles goudotiana',
    imageUrl:
      'https://www.google.com/search?q=Hesperomeles+goudotiana&tbm=isch',
    nombresComunes: [
      'Cerote',
      'Mortiño (en algunas zonas de Cundinamarca)',
      'Manzano de páramo',
    ],
    propiedadesMedicinales: [
      'Antidiarreico',
      'Astringente',
      'Antioxidante nutritivo',
      'Tónico capilar (raíz)',
    ],
    partesUtiles: [
      'Frutos (pequeñas drupas)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Nutrición afectiva',
      'Firmeza y enraizamiento',
      'Fortaleza para sostener proyectos a largo plazo',
    ],
    correspondenciasEnergeticas: [
      'Alimento de supervivencia andina',
      'Resistencia y longevidad',
      'Madera dura, voluntad de hierro',
    ],
    malesEmocionales: [
      'Debilidad de carácter',
      'Desnutrición espiritual o falta de propósito',
      'Inestabilidad emocional',
    ],
    malesFisicos: [
      'Diarreas crónicas o disentería',
      'Fatiga y falta de vitalidad',
      'Caída del cabello (uso tópico)',
      'Afecciones estomacales',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Rosales',
      familia: 'Rosaceae',
      genero : 'Hesperomeles',
      especie: 'goudotiana',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener cuadros de diarrea y regularizar la mucosa intestinal',
        formaDeAplicacion:
          'Tomar 1 taza de decocción de hojas y frutos 3 veces al día hasta que cesen los síntomas.',
        ingredientes: [
          {
            ingrediente: 'Hojas de cerote y algunos frutos secos',
            cantidad   : '1 cucharada colmada',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar los frutos y las hojas gruesas del cerote.'
          ],
          [
            2,
            'Colocarlos en el agua fría en una olla pequeña.'
          ],
          [
            3,
            'Llevar a punto de ebullición y dejar hervir a fuego medio por 10 a 15 minutos.',
          ],
          [
            4,
            'Retirar del fuego y dejar enfriar hasta que esté tibio.'
          ],
          [
            5,
            'Colar presionando los frutos para extraer sus taninos, y beber el líquido astringente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Hypericum juniperinum',
    imageUrl        : 'https://www.google.com/search?q=Hypericum+juniperinum&tbm=isch',
    nombresComunes  : [
      'Chite',
      'Guardarocío',
      'Hierba de San Juan andina'
    ],
    propiedadesMedicinales: [
      'Antidepresivo natural',
      'Vulnerario (cura heridas y quemaduras)',
      'Antiviral (tópico)',
      'Analgésico nervioso (neuralgias)',
    ],
    partesUtiles: [
      'Sumidades floridas (flores amarillas)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Luz interior',
      'Ahuyenta las sombras y la melancolía',
      'Restauración de la fe y el optimismo',
    ],
    correspondenciasEnergeticas: [
      'Planta solar de altísima vibración',
      'Protector contra entidades oscuras (malos aires)',
      'Atrae la luz dorada al aura',
    ],
    malesEmocionales: [
      'Depresión estacional o leve',
      'Terrores nocturnos',
      'Desesperanza',
      'Apatía crónica',
    ],
    malesFisicos: [
      'Dolor de nervio ciático o neuralgias',
      'Quemaduras menores y heridas',
      'Herpes (uso tópico)',
      'Insomnio por ansiedad',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Hypericaceae',
      genero : 'Hypericum',
      especie: 'juniperinum',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para tratar el dolor nervioso (ciática, neuralgias), quemaduras y cicatrizar heridas rápidamente',
        formaDeAplicacion:
          'Aplicar el aceite (oleato) sobre la zona afectada mediante un suave masaje, 2 a 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Flores frescas de chite',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'Aceite de oliva virgen extra',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar las flores amarillas preferiblemente al mediodía cuando hay sol.',
          ],
          [
            2,
            'Colocar las flores ligeramente machacadas en un frasco de vidrio transparente.',
          ],
          [
            3,
            'Cubrir completamente con el aceite de oliva.'
          ],
          [
            4,
            'Cerrar el frasco y dejar macerar bajo la luz directa del sol durante 40 días (el aceite se tornará rojo sangre gracias a la hipericina).',
          ],
          [
            5,
            'Filtrar a través de una tela de algodón, envasar en frasco oscuro y usar tópicamente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Espeletia argentea',
    imageUrl        : 'https://www.google.com/search?q=Espeletia+argentea&tbm=isch',
    nombresComunes  : [
      'Frailejón plateado',
      'Frailejón blanco'
    ],
    propiedadesMedicinales: [
      'Antiinflamatorio respiratorio',
      'Antitusivo',
      'Expectorante',
      'Cicatrizante',
    ],
    partesUtiles: [
      'Hojas secas',
      'Resina',
      'Pelusa (pubescencia)'
    ],
    esenciasFlorales: [
      'Purificación del campo astral',
      'Elevación de la conciencia',
      'Claridad en el propósito de vida',
    ],
    correspondenciasEnergeticas: [
      'Conexión lunar (por su color plateado)',
      'Elemento Agua',
      'Símbolo de sabiduría antigua y contemplación',
    ],
    malesEmocionales: [
      'Confusión existencial',
      'Falta de claridad vital',
      'Pesadez energética o contaminación psíquica',
    ],
    malesFisicos: [
      'Afecciones pulmonares',
      'Asma',
      'Tos crónica',
      'Dolores articulares por frío interno',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Espeletia',
      especie: 'argentea',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para calmar la tos crónica y desinflamar vías respiratorias en climas fríos',
        formaDeAplicacion: 'Tomar 1 taza de decocción caliente 2 veces al día.',
        ingredientes     : [
          {
            ingrediente: 'Hojas secas de frailejón plateado',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Llevar el agua a punto de ebullición.'
          ],
          [
            2,
            'Añadir las hojas (nunca verdes, siempre las secas de la base) y cocinar a fuego lento 5 minutos.',
          ],
          [
            3,
            'Apagar el fuego, tapar y dejar reposar 10 minutos.'
          ],
          [
            4,
            'Filtrar la infusión muy bien, preferiblemente con un colador de tela fina para retirar los pelos microscópicos de la planta.',
          ],
          [
            5,
            'Beber la preparación lo más caliente que se tolere.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Espeletia corymbosa',
    imageUrl        : 'https://www.google.com/search?q=Espeletia+corymbosa&tbm=isch',
    nombresComunes  : [
      'Frailejón liso',
      'Frailejón de flores agrupadas'
    ],
    propiedadesMedicinales: [
      'Emoliente de mucosas',
      'Béquico (calma la tos)',
      'Antiespasmódico respiratorio',
    ],
    partesUtiles: [
      'Hojas maduras',
      'Resina (trementina de páramo)'
    ],
    esenciasFlorales: [
      'Suavidad en la palabra',
      'Ayuda a la comunicación compasiva',
      'Calma la ansiedad social',
    ],
    correspondenciasEnergeticas: [
      'Armonización de grupos (crece en colonias densas)',
      'Conexión con el chakra garganta',
      'Elemento Aire y Éter',
    ],
    malesEmocionales: [
      'Comunicación agresiva o reactiva',
      'Ansiedad social extrema',
      'Miedo a expresarse y ser escuchado',
    ],
    malesFisicos: [
      'Irritación de garganta severa',
      'Espasmos bronquiales',
      'Resequedad de mucosas por vientos fríos',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Espeletia',
      especie: 'corymbosa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar la irritación de garganta y calmar los espasmos respiratorios secos',
        formaDeAplicacion:
          'Hacer gargarismos o beber lentamente la infusión tibia, 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas maduras de frailejón liso',
            cantidad   : '8 gramos',
          },
          {
            ingrediente: 'Miel de abejas',
            cantidad   : '1 cucharada',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Llevar el agua a ebullición en una olla de acero o cerámica.'
          ],
          [
            2,
            'Añadir las hojas, tapar inmediatamente y retirar del fuego.'
          ],
          [
            3,
            'Dejar en infusión por 10 minutos para extraer los principios emolientes.',
          ],
          [
            4,
            'Colar con filtro muy fino.'
          ],
          [
            5,
            'Añadir la cucharada de miel, remover bien y consumir.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Bejaria resinosa',
    imageUrl        : 'https://www.google.com/search?q=Bejaria+resinosa&tbm=isch',
    nombresComunes  : [
      'Pegamosco',
      'Rosa de los Andes',
      'Azalea andina'
    ],
    propiedadesMedicinales: [
      'Purgante fuerte (uso ancestral muy restringido)',
      'Antiséptico externo',
      'Vulnerario tópico',
    ],
    partesUtiles: [
      'Flores resinosas',
      'Hojas'
    ],
    esenciasFlorales: [
      'Atrapasueños energético',
      'Retención de las experiencias positivas',
      'Ayuda a fijar la atención en el presente',
    ],
    correspondenciasEnergeticas: [
      'Atracción energética',
      'Magia de amarre o fijación de propósitos (por su resina pegajosa)',
      'Limpieza de insectos astrales (parasitismo energético)',
    ],
    malesEmocionales: [
      'Dispersión mental aguda',
      'Incapacidad para retener aprendizajes vitales',
      'Falta de enfoque en las metas',
    ],
    malesFisicos: [
      'Infecciones cutáneas persistentes',
      'Heridas menores',
      'Estreñimiento severo (uso ancestral, actualmente desaconsejado por toxicidad)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Ericaceae',
      genero : 'Bejaria',
      especie: 'resinosa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para limpiar y desinfectar heridas, úlceras o raspones en la piel (ADVERTENCIA: NO INGERIR)',
        formaDeAplicacion:
          'Aplicar el lavado herbal sobre la piel afectada con una gasa 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Flores y hojas pegajosas de pegamosco',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Calentar el agua sin dejar que llegue a ebullición fuerte.'
          ],
          [
            2,
            'Agregar las flores y las hojas ricas en resina.'
          ],
          [
            3,
            'Dejar reposar tapado hasta que el agua extraiga las resinas y alcance temperatura ambiente.',
          ],
          [
            4,
            'Filtrar el líquido para retirar el material vegetal.'
          ],
          [
            5,
            'Lavar la herida meticulosamente con la preparación fría.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Puya goudotiana',
    imageUrl        : 'https://www.google.com/search?q=Puya+goudotiana&tbm=isch',
    nombresComunes  : [
      'Cardón',
      'Puya',
      'Piñuela de páramo'
    ],
    propiedadesMedicinales: [
      'Antiinflamatorio tópico',
      'Emoliente',
      'Cicatrizante',
    ],
    partesUtiles: [
      'Base carnosa de las hojas (médula blanca)'
    ],
    esenciasFlorales: [
      'Defensa de la propia vulnerabilidad',
      'Fuerza para sostener el espacio vital',
      'Coraje ante la intimidación',
    ],
    correspondenciasEnergeticas: [
      'Protector de las aguas subterráneas',
      'Escudo astral espinoso',
      'Símbolo de resistencia inquebrantable en ambientes áridos y fríos',
    ],
    malesEmocionales: [
      'Miedo a ser invadido emocionalmente',
      'Debilidad o sumisión ante figuras de autoridad',
      'Sentimiento de desprotección e indefensión',
    ],
    malesFisicos: [
      'Inflamaciones articulares locales',
      'Quemaduras leves (como sustituto de sábila)',
      'Golpes y hematomas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Poales',
      familia: 'Bromeliaceae',
      genero : 'Puya',
      especie: 'goudotiana',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para refrescar y desinflamar quemaduras leves, roces o golpes cerrados',
        formaDeAplicacion:
          'Aplicar la pulpa fresca y fría sobre la zona afectada a modo de cataplasma.',
        ingredientes: [
          {
            ingrediente: 'Bases carnosas de las hojas de puya',
            cantidad   : '3 o 4 piezas de hojas anchas',
          },
        ],
        pasos: [
          [
            1,
            'Con guantes protectores, cortar las bases de las hojas evitando las espinas de los bordes.',
          ],
          [
            2,
            'Retirar la cutícula dura exterior con un cuchillo limpio.'
          ],
          [
            3,
            'Extraer la pulpa o gel interior, que tiene una textura muy mucilaginosa.',
          ],
          [
            4,
            'Macerar o triturar un poco la pulpa blanca hasta lograr una consistencia manejable.',
          ],
          [
            5,
            'Colocar directamente sobre el golpe o la quemadura y fijar con un vendaje ligero.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Lupinus alopecuroides',
    imageUrl        : 'https://www.google.com/search?q=Lupinus+alopecuroides&tbm=isch',
    nombresComunes  : [
      'Chocho de páramo',
      'Lupino lanudo'
    ],
    propiedadesMedicinales: [
      'Ectoparasiticida externo potente',
      'Antifúngico',
      'Tóxico (contiene alcaloides quinolizidínicos, letal si se ingiere sin procesamiento riguroso)',
    ],
    partesUtiles: [
      'Semillas (uso externo)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Calor de hogar interior',
      'Aceptación de la propia rareza o diferencia',
      'Suaviza las actitudes permanentemente a la defensiva',
    ],
    correspondenciasEnergeticas: [
      'Abrigo espiritual (reflejado en sus hojas lanudas)',
      'Transmutación de venenos en medicinas',
      'Protección chamánica contra el frío del alma',
    ],
    malesEmocionales: [
      'Sensación de aislamiento crónico',
      'Dureza emocional autoimpuesta',
      'Aislamiento por sentirse inadaptado o diferente',
    ],
    malesFisicos: [
      'Sarna (escabiosis)',
      'Infestación de piojos (pediculosis)',
      'Hongos persistentes en la piel',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Lupinus',
      especie: 'alopecuroides',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para eliminar piojos, liendres o tratar ácaros de sarna (ÚNICAMENTE USO EXTERNO Y VETERINARIO)',
        formaDeAplicacion:
          'Lavar la zona afectada o el cuero cabelludo, dejar actuar 15 minutos y enjuagar. Evitar rigurosamente el contacto con ojos y boca.',
        ingredientes: [
          {
            ingrediente: 'Semillas de chocho crudas y trituradas',
            cantidad   : '30 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Macerar las semillas crudas y amargas en un mortero profundo.'
          ],
          [
            2,
            'Hervir el agua y añadir las semillas trituradas.'
          ],
          [
            3,
            'Cocinar a fuego vivo por 20 a 30 minutos para forzar la extracción de los alcaloides tóxicos hacia el agua.',
          ],
          [
            4,
            'Dejar enfriar completamente y colar con un paño para evitar residuos.',
          ],
          [
            5,
            'Aplicar el líquido como loción tópica de forma sumamente cuidadosa y lavar las manos después del uso.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Pentacalia pulchella',
    imageUrl        : 'https://www.google.com/search?q=Pentacalia+pulchella&tbm=isch',
    nombresComunes  : [
      'Arnica de monte',
      'Margarita amarilla de páramo'
    ],
    propiedadesMedicinales: [
      'Analgésico tópico',
      'Antiinflamatorio articular y muscular',
      'Vulnerario (traumatismos cerrados)',
    ],
    partesUtiles: [
      'Flores',
      'Hojas tiernas'
    ],
    esenciasFlorales: [
      'Consuelo en el trauma agudo',
      'Recuperación de choques emocionales',
      'Reintegración energética del cuerpo sutil tras un accidente',
    ],
    correspondenciasEnergeticas: [
      'Sello de fisuras en el aura causadas por eventos traumáticos',
      'Luz solar condensada',
      'Recuperación del aliento vital en estados de shock',
    ],
    malesEmocionales: [
      'Shock postraumático emocional',
      'Susto crónico (pérdida del alma en la tradición chamánica)',
      'Dolor emocional sordo por separaciones abruptas',
    ],
    malesFisicos: [
      'Esguinces y luxaciones',
      'Golpes cerrados sin herida abierta',
      'Hematomas y moretones graves',
      'Dolores musculares por sobreesfuerzo agudo',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Pentacalia',
      especie: 'pulchella',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reducir el dolor punzante y la inflamación de esguinces, torceduras o golpes contundentes',
        formaDeAplicacion:
          'Aplicar mediante fricción o masaje suave la tintura alcohólica sobre la zona (no usar en piel rota), 2 a 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Flores y hojas frescas de árnica de monte',
            cantidad   : '20 gramos',
          },
          {
            ingrediente: 'Alcohol antiséptico al 70%',
            cantidad   : '200 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar y secar meticulosamente las flores y hojas amarillas.'
          ],
          [
            2,
            'Trozarlas con las manos y colocarlas en un frasco de vidrio oscuro.',
          ],
          [
            3,
            'Cubrir completamente el material vegetal con el alcohol.'
          ],
          [
            4,
            'Dejar macerar en un lugar oscuro y fresco por 15 a 21 días, agitando el frasco cada 2 días.',
          ],
          [
            5,
            'Colar el líquido amarillento y guardarlo en un gotero o rociador para uso externo como linimento.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Gaiadendron punctatum',
    imageUrl        : 'https://www.google.com/search?q=Gaiadendron+punctatum&tbm=isch',
    nombresComunes  : [
      'Tagua',
      'Fosforito',
      'Matapalo de tierra'
    ],
    propiedadesMedicinales: [
      'Antimicrobiano',
      'Astringente',
      'Potencial antitumoral y modulador (bajo estudio por ser hemiparásita radical)',
    ],
    partesUtiles: [
      'Hojas',
      'Flores amarillas tubulares'
    ],
    esenciasFlorales: [
      'Simbiosis equilibrada',
      'Independencia emocional',
      'Sanación de la codependencia',
    ],
    correspondenciasEnergeticas: [
      'Intercambio energético profundo (por extraer savia de las raíces de otros árboles)',
      'Equilibrio entre dar y recibir',
      'Fuego telúrico',
    ],
    malesEmocionales: [
      'Codependencia en relaciones tóxicas',
      'Vampirismo energético (sea en rol de víctima o perpetrador)',
      'Falta de autonomía vital y dependencia absoluta',
    ],
    malesFisicos: [
      'Infecciones leves de la piel',
      'Úlceras varicosas (limpieza externa)',
      'Hemorragias superficiales',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Santalales',
      familia: 'Loranthaceae',
      genero : 'Gaiadendron',
      especie: 'punctatum',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para limpiar úlceras tórpidas, lavar heridas y detener sangrados superficiales',
        formaDeAplicacion:
          'Lavar la herida o aplicar compresas empapadas con la decocción fría, 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas secas de fosforito',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Llevar el medio litro de agua a ebullición.'
          ],
          [
            2,
            'Añadir las hojas de la planta hemiparásita y cocinar a fuego lento por 10 minutos.',
          ],
          [
            3,
            'Retirar del fuego, tapar y dejar enfriar a temperatura ambiente.',
          ],
          [
            4,
            'Filtrar cuidadosamente usando un colador o tela limpia.'
          ],
          [
            5,
            'Usar el líquido exclusivamente para asepsia tópica en zonas afectadas.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Clethra fimbriata',
    imageUrl        : 'https://www.google.com/search?q=Clethra+fimbriata&tbm=isch',
    nombresComunes  : [
      'Tíbar',
      'Jabonero',
      'Cucharo blanco'
    ],
    propiedadesMedicinales: [
      'Depurativo sanguíneo',
      'Diurético',
      'Antirreumático',
      'Saponificante externo (jabón natural)',
    ],
    partesUtiles: [
      'Corteza interna',
      'Hojas'
    ],
    esenciasFlorales: [
      'Limpieza de culpa',
      'Apertura a nuevas oportunidades vitales',
      'Desapego del pasado oscuro y pesado',
    ],
    correspondenciasEnergeticas: [
      'Purificación por agua y espuma (por sus saponinas)',
      'Lavado de deudas kármicas',
      'Apertura de caminos obstruidos',
    ],
    malesEmocionales: [
      'Sentimientos persistentes de culpa y remordimiento',
      'Obsesión paralizante con errores del pasado',
      'Sensación de impureza moral o estancamiento vital',
    ],
    malesFisicos: [
      'Retención crónica de líquidos',
      'Dolores articulares causados por acumulación de toxinas (como el ácido úrico)',
      'Afecciones cutáneas recurrentes por impurezas en la sangre',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Clethraceae',
      genero : 'Clethra',
      especie: 'fimbriata',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para estimular la diuresis, eliminar líquidos retenidos y purificar toxinas de la sangre',
        formaDeAplicacion:
          'Tomar 1 taza de infusión de hojas en ayunas, por un máximo de 7 a 9 días seguidos.',
        ingredientes: [
          {
            ingrediente: 'Hojas secas de tíbar',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las hojas secas en el fondo de una taza grande de cerámica.',
          ],
          [
            2,
            'Verter el agua caliente recién hervida.'
          ],
          [
            3,
            'Tapar la taza para no perder los aceites volátiles y dejar infundir por 5 a 7 minutos.',
          ],
          [
            4,
            'Colar para retirar el material vegetal.'
          ],
          [
            5,
            'Beber la infusión sin añadir azúcares para no alterar su efecto depurativo sobre el riñón y el hígado.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Paepalanthus alpinus',
    imageUrl        : 'https://www.google.com/search?q=Paepalanthus+alpinus&tbm=isch',
    nombresComunes  : [
      'Estrella de páramo',
      'Botoncillo',
      'Pajilla blanca'
    ],
    propiedadesMedicinales: [
      'Diurético suave',
      'Antiinflamatorio de vías urinarias',
      'Relajante nervioso leve (uso en aromaterapia andina)',
    ],
    partesUtiles: [
      'Inflorescencias (cabezuelas florales secas)'
    ],
    esenciasFlorales: [
      'Geometría sagrada interior',
      'Encuentro con la luz divina en medio de la oscuridad',
      'Orientación espiritual en momentos de pérdida de fe',
    ],
    correspondenciasEnergeticas: [
      'Microcosmos solar manifestado en la tierra',
      'Conexión estelar y extraterrestre (en cosmología ancestral)',
      'Guía y faro en el mundo de los sueños (para viajes astrales conscientes)',
    ],
    malesEmocionales: [
      'Sensación de estar perdido, a la deriva o sin rumbo vital',
      'Desconexión total con la intuición y el ser interior',
      'Pérdida de la fe y falta de esperanza',
    ],
    malesFisicos: [
      'Infecciones urinarias bajas (cistitis leve)',
      'Inflamación o retención de líquidos generalizada',
      'Insomnio leve por desconexión espiritual',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Poales',
      familia: 'Eriocaulaceae',
      genero : 'Paepalanthus',
      especie: 'alpinus',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para calmar la inflamación y el ardor en las vías urinarias, promover diuresis y relajar antes de dormir',
        formaDeAplicacion:
          'Tomar 1 taza de infusión de las cabezuelas en la noche o durante el malestar urinario.',
        ingredientes: [
          {
            ingrediente: 'Inflorescencias (estrellas) secas',
            cantidad   : '1 cucharadita (aprox 2g)',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Calentar el agua hasta alcanzar el punto de ebullición.'
          ],
          [
            2,
            'Añadir las pequeñas flores secas blanquecinas en forma de botón estrellado.',
          ],
          [
            3,
            'Apagar el fuego, tapar el recipiente y dejar infundir durante 8 a 10 minutos.',
          ],
          [
            4,
            'Colar la bebida (las cabezuelas se pueden compostar).'
          ],
          [
            5,
            'Beber lentamente; si se toma para el insomnio, se puede endulzar con una pizca de miel.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Pernettya prostrata',
    imageUrl        : 'https://www.google.com/search?q=Pernettya+prostrata&tbm=isch',
    nombresComunes  : [
      'Reventadera',
      'Ericácea',
      'Borrachera de páramo'
    ],
    propiedadesMedicinales: [
      'Tóxico narcótico (afecta severamente el SNC si se ingiere, produciendo embriaguez o delirio)',
      'Analgésico articular externo potente (por aceites volátiles)',
      'Rubefaciente',
    ],
    partesUtiles: [
      'Hojas (uso tópico estricto)',
      'Frutos (altamente embriagantes, uso prohibido salvo por expertos tradicionales)',
    ],
    esenciasFlorales: [
      'Despertar y ruptura de ilusiones engañosas',
      'Enraizamiento extremo frente a la disociación mental',
      'Devuelve la sobriedad mental ante ideas delirantes',
    ],
    correspondenciasEnergeticas: [
      'Plantas de poder (estados alterados de conciencia en chamanismo para inducir trances)',
      'Magia de ocultamiento y sombras',
      'Liberación forzosa de bloqueos energéticos profundos (reventar)',
    ],
    malesEmocionales: [
      'Autoengaño crónico y vida de fantasía tóxica',
      'Evasión extrema de la realidad (tendencia a las adicciones o psicosis)',
      'Locura transitoria inducida por estrés masivo',
    ],
    malesFisicos: [
      'Dolores musculares y contracturas severas por tensión nerviosa',
      'Reumatismo articular frío',
      'Intoxicación severa (como efecto secundario indeseable de su ingesta accidental)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ericales',
      familia: 'Ericaceae',
      genero : 'Pernettya',
      especie: 'prostrata',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores musculares o articulares profundos por medio de fricciones calientes locales (ESTRICTO USO EXTERNO, NO INGERIR)',
        formaDeAplicacion:
          'Friccionar la tintura o alcoholado sobre la piel sin heridas, 2 veces al día para generar calor.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de reventadera',
            cantidad   : '30 gramos',
          },
          {
            ingrediente: 'Alcohol de fricción o aguardiente blanco',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas pequeñas de la planta.'
          ],
          [
            2,
            'Machacarlas en un mortero levemente para romper las células vegetales y liberar los compuestos analgésicos.',
          ],
          [
            3,
            'Colocar las hojas machacadas en un envase de vidrio limpio con tapa hermética y añadir el alcohol.',
          ],
          [
            4,
            'Dejar macerar por 2 semanas en un armario o lugar oscuro, agitando un poco el frasco a diario.',
          ],
          [
            5,
            'Filtrar todo el líquido y usar exclusivamente para realizar masajes externos en músculos o articulaciones con dolor.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Arcytophyllum nitidum',
    imageUrl        : 'https://www.google.com/search?q=Arcytophyllum+nitidum&tbm=isch',
    nombresComunes  : [
      'Piquito',
      'Mortiño',
      'Huesito'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Diurético suave',
      'Antiséptico de vías urinarias',
    ],
    partesUtiles: [
      'Hojas pequeñas',
      'Ramas tiernas'
    ],
    esenciasFlorales: [
      'Firmeza en las decisiones',
      'Establecimiento de límites saludables',
      'Concentración de la energía dispersa',
    ],
    correspondenciasEnergeticas: [
      'Consolidación de la voluntad',
      'Elemento Tierra',
      'Cierre de fugas energéticas en el aura',
    ],
    malesEmocionales: [
      'Falta de voluntad',
      'Incapacidad para decir no',
      'Desgaste energético por complacer a otros',
    ],
    malesFisicos: [
      'Infecciones urinarias leves',
      'Diarreas crónicas',
      'Debilidad física general',
      'Retención de líquidos',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Gentianales',
      familia: 'Rubiaceae',
      genero : 'Arcytophyllum',
      especie: 'nitidum',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para limpiar las vías urinarias, reducir la retención de líquidos y tratar diarreas leves',
        formaDeAplicacion:
          'Beber 1 taza de infusión de las hojas 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas y ramas finas de piquito',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las ramas finas de la planta.'
          ],
          [
            2,
            'Trozar las ramas y hojas e introducirlas en una tetera.'
          ],
          [
            3,
            'Verter el agua a punto de ebullición sobre la planta.'
          ],
          [
            4,
            'Tapar y dejar infundir por 10 minutos para extraer los compuestos astringentes.',
          ],
          [
            5,
            'Colar y consumir tibio sin endulzar.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Tibouchina grossa',
    imageUrl        : 'https://www.google.com/search?q=Tibouchina+grossa&tbm=isch',
    nombresComunes  : [
      'Tuno roso',
      'Mayo',
      'Sietecueros rojo'
    ],
    propiedadesMedicinales: [
      'Cicatrizante',
      'Hemostático (detiene sangrados)',
      'Antioxidante',
    ],
    partesUtiles: [
      'Flores rojas',
      'Hojas',
      'Corteza escamosa'
    ],
    esenciasFlorales: [
      'Pasión por la vida',
      'Reactivación del fuego interior',
      'Sanación de heridas emocionales profundas',
    ],
    correspondenciasEnergeticas: [
      'Asociado a la sangre y la vitalidad',
      'Elemento Fuego',
      'Renovación cíclica (como su corteza que se desprende)',
    ],
    malesEmocionales: [
      'Apatía',
      'Falta de deseo de vivir',
      'Dolor por traiciones afectivas (heridas del corazón)',
    ],
    malesFisicos: [
      'Hemorragias superficiales',
      'Úlceras cutáneas',
      'Fatiga crónica',
      'Quemaduras menores',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Myrtales',
      familia: 'Melastomataceae',
      genero : 'Tibouchina',
      especie: 'grossa',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener el sangrado, limpiar heridas y promover una rápida cicatrización de la piel',
        formaDeAplicacion:
          'Lavar la herida con la decocción fría 2 veces al día y aplicar cataplasma de la corteza.',
        ingredientes: [
          {
            ingrediente: 'Corteza y hojas de tuno roso',
            cantidad   : '20 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Extraer con cuidado las escamas de corteza suelta del árbol.'
          ],
          [
            2,
            'Lavar la corteza y las hojas frescas.'
          ],
          [
            3,
            'Hervir en el agua durante 15 minutos para liberar sus taninos hemostáticos.',
          ],
          [
            4,
            'Retirar del fuego y dejar enfriar completamente.'
          ],
          [
            5,
            'Filtrar el líquido para el lavado de la herida, aplicando luego los restos blandos de la decocción sobre el corte.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Oreopanax incisus',
    imageUrl        : 'https://google.com/search?q=Oreopanax+incisus',
    nombresComunes  : [
      'Mano de Oso',
      'Pate danta'
    ],
    propiedadesMedicinales: [
      'Expectorante profundo',
      'Antitusivo',
      'Vulnerario (reparación de tejidos)',
    ],
    partesUtiles: [
      'Hojas lobuladas',
      'Brotes tiernos'
    ],
    esenciasFlorales: [
      'Sensación de abrazo materno/paterno',
      'Sostén durante crisis de pánico',
      'Restauración de la confianza en la providencia',
    ],
    correspondenciasEnergeticas: [
      'Fuerza protectora del bosque andino',
      'Símbolo de contención',
      'Aliado chamánico para viajes al inframundo',
    ],
    malesEmocionales: [
      'Ataques de pánico',
      'Desamparo profundo',
      'Orfandad emocional',
    ],
    malesFisicos: [
      'Bronquitis',
      'Tos ferina',
      'Congestión de pecho',
      'Fracturas menores (uso en entablillados tradicionales)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Apiales',
      familia: 'Araliaceae',
      genero : 'Oreopanax',
      especie: 'incisus',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar crisis de tos, facilitar la expulsión de flemas y proteger las vías respiratorias',
        formaDeAplicacion:
          'Beber 1 taza de decocción caliente, preferiblemente en la noche antes de dormir.',
        ingredientes: [
          {
            ingrediente: 'Hojas grandes y limpias de mano de oso',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '400 ml',
          },
          {
            ingrediente: 'Miel de eucalipto',
            cantidad   : '1 cucharada',
          },
        ],
        pasos: [
          [
            1,
            'Lavar minuciosamente las hojas para eliminar polvillo y pelusas naturales de la planta.',
          ],
          [
            2,
            'Trozar las hojas y colocarlas en el agua fría.'
          ],
          [
            3,
            'Hervir a fuego medio durante 10 minutos.'
          ],
          [
            4,
            'Tapar la olla y dejar reposar 5 minutos más.'
          ],
          [
            5,
            'Colar con filtro fino, añadir la miel y beber mientras emana vapor.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Salvia rufula',
    imageUrl        : 'https://google.com/search?q=Salvia+rufula',
    nombresComunes  : [
      'Salvia roja',
      'Salvia de páramo'
    ],
    propiedadesMedicinales: [
      'Emenagogo (regula el ciclo menstrual)',
      'Digestivo',
      'Tónico circulatorio',
      'Antimicrobiano',
    ],
    partesUtiles: [
      'Sumidades floridas',
      'Hojas'
    ],
    esenciasFlorales: [
      'Sabiduría femenina ancestral',
      'Purificación de linajes familiares',
      'Aceptación del propio poder creador',
    ],
    correspondenciasEnergeticas: [
      'Planta sagrada de purificación',
      'Elemento Fuego y Sangre',
      'Sahumerio para cortar lazos energéticos densos',
    ],
    malesEmocionales: [
      'Rechazo a la feminidad o ciclos naturales',
      'Pesadez mental por influencias externas',
      'Dificultad para perdonar ancestros',
    ],
    malesFisicos: [
      'Cólicos menstruales fuertes',
      'Mala circulación',
      'Indigestión nerviosa',
      'Congestión hepática leve',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Lamiales',
      familia: 'Lamiaceae',
      genero : 'Salvia',
      especie: 'rufula',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para regularizar el ciclo menstrual, aliviar cólicos fuertes y mejorar la digestión pesada',
        formaDeAplicacion:
          'Tomar 1 taza de infusión caliente 2 veces al día durante los días de molestia.',
        ingredientes: [
          {
            ingrediente: 'Flores rojas y hojas frescas de salvia',
            cantidad   : '1 cucharada',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar la salvia roja en una taza resistente al calor.'
          ],
          [
            2,
            'Verter el agua hirviendo y tapar herméticamente (los aceites esenciales son muy volátiles).',
          ],
          [
            3,
            'Dejar infundir durante 8 minutos.'
          ],
          [
            4,
            'Destapar y respirar profundamente el aroma medicinal antes de colar.',
          ],
          [
            5,
            'Colar y consumir inmediatamente.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Espeletia chocontana',
    imageUrl        : 'https://www.google.com/search?q=Espeletia+chocontana&tbm=isch',
    nombresComunes  : [
      'Frailejón de Chocontá'
    ],
    propiedadesMedicinales: [
      'Antiasmático',
      'Expectorante de vías bajas',
      'Antiinflamatorio de vías respiratorias',
    ],
    partesUtiles: [
      'Hojas secas (necromasa foliar)',
      'Resina'
    ],
    esenciasFlorales: [
      'Arraigo territorial',
      'Sentido de pertenencia',
      'Soporte emocional en procesos de desplazamiento o mudanza',
    ],
    correspondenciasEnergeticas: [
      'Conexión con los ancestros del territorio Muisca',
      'Guardián de las nieblas de la sabana norte',
      'Elemento Agua y Tierra',
    ],
    malesEmocionales: [
      'Desarraigo profundo',
      'Pérdida de identidad territorial',
      'Tristeza crónica por migración',
    ],
    malesFisicos: [
      'Asma endémica por clima frío',
      'Tos productiva crónica',
      'Reumatismo frío',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Espeletia',
      especie: 'chocontana',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para tratar el asma causada por frío y humedad, dilatando los bronquios',
        formaDeAplicacion:
          'Realizar vahos (inhalaciones) y posteriormente beber media taza de la decocción endulzada.',
        ingredientes: [
          {
            ingrediente: 'Hojas secas de la base del frailejón de Chocontá',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Llevar el agua a punto de ebullición en una olla grande.'
          ],
          [
            2,
            'Añadir las hojas secas maduras.'
          ],
          [
            3,
            'Hervir a fuego lento por 10 minutos para liberar las resinas.'
          ],
          [
            4,
            'Retirar del fuego, cubrir la cabeza con una toalla sobre la olla y aspirar los vapores calientes por 10 minutos.',
          ],
          [
            5,
            'Colar muy bien una pequeña porción del líquido restante, endulzar con miel y beber tibio.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Aragoa cupressina',
    imageUrl        : 'https://www.google.com/search?q=Aragoa+cupressina&tbm=isch',
    nombresComunes  : [
      'Romero de Páramo',
      'Pinito'
    ],
    propiedadesMedicinales: [
      'Balsámico',
      'Anticatarral',
      'Rubefaciente (calienta el cuerpo)',
      'Analgésico articular',
    ],
    partesUtiles: [
      'Ramas tiernas',
      'Hojas aciculares'
    ],
    esenciasFlorales: [
      'Claridad mental cristalina',
      'Corteza espiritual contra malas influencias',
      'Enfoque y determinación',
    ],
    correspondenciasEnergeticas: [
      'Protección contra mal de ojo y entidades parásitas',
      'Elemento Aire',
      'Purificación del prana en el hogar',
    ],
    malesEmocionales: [
      'Aturdimiento',
      'Falta de foco y dispersión extrema',
      'Pesadillas recurrentes',
    ],
    malesFisicos: [
      'Sinusitis',
      'Gripe y catarro',
      'Dolor articular por frío intenso',
      'Sabañones (lesiones por frío en la piel)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Lamiales',
      familia: 'Plantaginaceae',
      genero : 'Aragoa',
      especie: 'cupressina',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reactivar la circulación periférica, curar sabañones y aliviar dolores articulares por frío',
        formaDeAplicacion:
          'Friccionar vigorosamente la piel afectada con el alcoholado 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Ramas de romero de páramo',
            cantidad   : '40 gramos',
          },
          {
            ingrediente: 'Alcohol etílico al 70%',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar y secar muy bien las ramas del romero de páramo.'
          ],
          [
            2,
            'Macerarlas o golpearlas suavemente para liberar sus aceites esenciales resinosos.',
          ],
          [
            3,
            'Introducirlas en un recipiente de vidrio.'
          ],
          [
            4,
            'Añadir el alcohol, sellar y dejar macerar en la oscuridad durante 15 días.',
          ],
          [
            5,
            'Usar el líquido filtrado directamente sobre la piel para generar calor local.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Aetanthus mutisii',
    imageUrl        : 'https://www.google.com/search?q=Aetanthus+mutisii&tbm=isch',
    nombresComunes  : [
      'Matapalo',
      'Injerto',
      'Muérdago andino'
    ],
    propiedadesMedicinales: [
      'Hipotensor (baja la presión arterial, requiere dosificación experta)',
      'Antiespasmódico nervioso',
      'Cicatrizante externo',
    ],
    partesUtiles: [
      'Hojas',
      'Flores rojas tubulares'
    ],
    esenciasFlorales: [
      'Independencia vital',
      'Ruptura de lazos de vampirismo energético',
      'Asimilación de la propia fuerza',
    ],
    correspondenciasEnergeticas: [
      'Magia de transferencia (absorbe propiedades del árbol huésped)',
      'Conexión con los mundos sutiles (al no tocar la tierra)',
      'Ritos de paso y transición',
    ],
    malesEmocionales: [
      'Apego parasitario a una pareja o familiar',
      'Sensación de ahogo en relaciones absorbentes',
      'Falta de energía propia',
    ],
    malesFisicos: [
      'Hipertensión nerviosa',
      'Espasmos musculares involuntarios',
      'Heridas tórpidas de difícil curación',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Santalales',
      familia: 'Loranthaceae',
      genero : 'Aetanthus',
      especie: 'mutisii',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para bajar la presión arterial originada por nervios o estrés severo (Bajo estricta supervisión)',
        formaDeAplicacion: 'Beber 1 taza de infusión débil al día.',
        ingredientes     : [
          {
            ingrediente: 'Hojas secas de matapalo',
            cantidad   : '3 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar las hojas del injerto (es importante saber de qué árbol huésped proviene).',
          ],
          [
            2,
            'Pesar exactamente la planta, ya que es potente y no debe sobredosificarse.',
          ],
          [
            3,
            'Colocar en una taza y verter el agua caliente.'
          ],
          [
            4,
            'Infundir tapado por solo 5 minutos.'
          ],
          [
            5,
            'Colar y consumir. (En la medicina tradicional andina esta preparación es supervisada por sabedores).',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Passiflora bogotensis',
    imageUrl        : 'https://www.google.com/search?q=Passiflora+bogotensis&tbm=isch',
    nombresComunes  : [
      'Curuba de monte',
      'Curuba silvestre'
    ],
    propiedadesMedicinales: [
      'Sedante fuerte',
      'Ansiolítico',
      'Antiespasmódico',
      'Hipotensor leve',
    ],
    partesUtiles: [
      'Hojas',
      'Zarcillos',
      'Flores'
    ],
    esenciasFlorales: [
      'Paz espiritual absoluta',
      'Trascendencia del sufrimiento',
      'Calma para el agotamiento nervioso extremo',
    ],
    correspondenciasEnergeticas: [
      'Geometría sagrada (flor de la pasión)',
      'Conexión crística y compasión',
      'Apertura del chakra corona',
    ],
    malesEmocionales: [
      'Insomnio severo',
      'Ataques de pánico nocturnos',
      'Agotamiento por hipervigilancia',
      'Nerviosismo crónico',
    ],
    malesFisicos: [
      'Insomnio de conciliación y mantenimiento',
      'Palpitaciones nerviosas',
      'Espasmos gastrointestinales por estrés',
      'Hipertensión ligada a ansiedad',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Passifloraceae',
      genero : 'Passiflora',
      especie: 'bogotensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para inducir un sueño profundo, combatir el insomnio crónico y apaciguar ataques de ansiedad',
        formaDeAplicacion:
          'Beber 1 taza de infusión concentrada 45 minutos antes de dormir.',
        ingredientes: [
          {
            ingrediente: 'Hojas, flores y zarcillos secos de curuba de monte',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar la planta seca y troceada en una tetera.'
          ],
          [
            2,
            'Añadir el agua hirviendo inmediatamente.'
          ],
          [
            3,
            'Tapar y dejar reposar durante 15 minutos para extraer los alcaloides y flavonoides sedantes.',
          ],
          [
            4,
            'Colar finamente.'
          ],
          [
            5,
            'Beber en sorbos lentos en un ambiente ya oscuro y relajado.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Mutisia clematis',
    imageUrl        : 'https://www.google.com/search?q=Mutisia+clematis&tbm=isch',
    nombresComunes  : [
      'Clavellino',
      'Bejuco',
      'Flor de Mutis'
    ],
    propiedadesMedicinales: [
      'Tónico cardiaco (uso ancestral)',
      'Béquico (para tos persistente)',
      'Antidepresivo natural',
      'Estimulante digestivo',
    ],
    partesUtiles: [
      'Flores (péndulas y rojas)',
      'Hojas'
    ],
    esenciasFlorales: [
      'Apertura del corazón a la alegría',
      'Expansión y asimilación de experiencias hermosas',
      'Elevación de la frecuencia vibratoria frente a la depresión',
    ],
    correspondenciasEnergeticas: [
      'Asociado a la belleza y el asombro del mundo natural',
      'Fuego que asciende (hábito trepador y flores rojas)',
      'Expansión del campo áurico',
    ],
    malesEmocionales: [
      'Depresión profunda',
      'Corazón cerrado por duelo prolongado',
      'Pérdida de la alegría vital',
    ],
    malesFisicos: [
      'Tos nerviosa o ferina',
      'Arritmias leves por ansiedad',
      'Agotamiento cardiovascular y físico general',
      'Falta de apetito',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Asteraceae',
      genero : 'Mutisia',
      especie: 'clematis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar la tos seca persistente, mejorar el ánimo y tonificar el sistema cardiovascular',
        formaDeAplicacion:
          'Tomar 1 taza de infusión floral al día, preferiblemente en la mañana.',
        ingredientes: [
          {
            ingrediente: 'Flores secas de clavellino',
            cantidad   : '5 gramos (aprox 3 flores)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Seleccionar las flores rojas del clavellino y retirarles el polvo.',
          ],
          [
            2,
            'Depositarlas en una taza de porcelana o vidrio templado.'
          ],
          [
            3,
            'Verter el agua hirviendo suavemente sobre los pétalos.'
          ],
          [
            4,
            'Tapar y dejar infundir por 7 minutos, el agua tomará un color ámbar-rojizo.',
          ],
          [
            5,
            'Colar y consumir lentamente para revitalizar el cuerpo y la mente.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Masdevallia coccinea',
    imageUrl        : 'https://www.google.com/search?q=Masdevallia+coccinea&tbm=isch',
    nombresComunes  : [
      'Orquídea Banderita',
      'Banderita colombiana',
      'Orquídea de sangre',
    ],
    propiedadesMedicinales: [
      'Febrífugo (enfriador del cuerpo en la medicina tradicional antigua)',
      'Equilibrante del sistema nervioso',
      'Emoliente suave',
    ],
    partesUtiles: [
      'Seudobulbos y hojas (histórico/muy restringido por conservación)',
      'Esencia floral (método no extractivo de la flor)',
    ],
    esenciasFlorales: [
      'Elevación espiritual',
      'Conexión con los maestros ascendidos',
      'Canalización de energías telúricas hacia los chakras superiores',
      'Transmutación de la agresividad',
    ],
    correspondenciasEnergeticas: [
      'Máxima expresión de la geometría y evolución vegetal',
      'Vibración de alta frecuencia',
      'Símbolo de lo sagrado, lo intocable y lo sublime',
    ],
    malesEmocionales: [
      'Materialismo extremo y desconexión espiritual',
      'Ira ciega',
      'Incapacidad para ver la belleza en el entorno',
      'Desequilibrios de polaridad energética',
    ],
    malesFisicos: [
      'Fiebres altas (uso histórico)',
      'Agotamiento nervioso',
      'Hiperactividad y estrés sistémico',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Asparagales',
      familia: 'Orchidaceae',
      genero : 'Masdevallia',
      especie: 'coccinea',
      clados : [
        'Angiospermas',
        'Monocotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para equilibrar el campo emocional, elevar la vibración espiritual y apaciguar la mente sin dañar la planta',
        formaDeAplicacion:
          'Tomar 4 gotas sublinguales de la esencia floral preparada, 4 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Agua de manantial purificada',
            cantidad   : '1 bol de cristal',
          },
          {
            ingrediente: 'Orquídea Banderita viva (sin cortarla)',
            cantidad   : '1 flor intacta',
          },
          {
            ingrediente: 'Brandy o coñac (como conservante)',
            cantidad   : '50% de la botella final',
          },
        ],
        pasos: [
          [
            1,
            'Método del Dr. Bach modificado: No cortar la flor debido a su estado de amenaza (En peligro EN).',
          ],
          [
            2,
            'Colocar el bol de cristal con agua de manantial de manera que la flor viva quede sumergida o rozando la superficie del agua.',
          ],
          [
            3,
            'Dejar expuesta la flor y el bol a la luz del sol matutino durante 3 a 4 horas para transferir la firma vibracional de la orquídea al agua.',
          ],
          [
            4,
            'Retirar el bol con cuidado de no dañar la planta.'
          ],
          [
            5,
            'Mezclar el agua activada con brandy a partes iguales para crear la Tintura Madre, y diluir posteriormente para el uso en frascos goteros.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Viburnum suratense',
    imageUrl        : 'https://www.google.com/search?q=Viburnum+suratense&tbm=isch',
    nombresComunes  : [
      'Garrocho',
      'Pela'
    ],
    propiedadesMedicinales: [
      'Antiespasmódico',
      'Astringente',
      'Antiinflamatorio tópico',
    ],
    partesUtiles: [
      'Hojas',
      'Corteza'
    ],
    esenciasFlorales: [
      'Relajación de la tensión extrema',
      'Ayuda a soltar el control',
      'Flexibilidad mental ante situaciones imprevistas',
    ],
    correspondenciasEnergeticas: [
      'Liberación de nudos energéticos',
      'Elemento Tierra',
      'Protección contra la rigidez del espíritu',
    ],
    malesEmocionales: [
      'Terquedad',
      'Tensión nerviosa acumulada en el cuerpo',
      'Incapacidad para fluir con los cambios',
    ],
    malesFisicos: [
      'Calambres musculares',
      'Espasmos estomacales leves',
      'Inflamaciones locales por golpes',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Dipsacales',
      familia: 'Adoxaceae',
      genero : 'Viburnum',
      especie: 'suratense',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar calambres, espasmos musculares y reducir inflamaciones locales',
        formaDeAplicacion:
          'Aplicar compresas calientes con la decocción sobre la zona tensa durante 20 minutos.',
        ingredientes: [
          {
            ingrediente: 'Hojas y corteza de garrocho',
            cantidad   : '20 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas y la corteza cuidadosamente.'
          ],
          [
            2,
            'Hervir el agua en una olla grande.'
          ],
          [
            3,
            'Añadir el material vegetal y dejar hervir a fuego medio durante 15 minutos.',
          ],
          [
            4,
            'Retirar del fuego y dejar reposar 5 minutos.'
          ],
          [
            5,
            'Sumergir un paño limpio en el líquido caliente (soportable al tacto) y colocar sobre el músculo contraído.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Ceroxylon vogelianum',
    imageUrl        : 'https://www.google.com/search?q=Ceroxylon+vogelianum&tbm=isch',
    nombresComunes  : [
      'Palma de Cera',
      'Palma de ramo'
    ],
    propiedadesMedicinales: [
      'Cicatrizante (cera)',
      'Emoliente cutáneo',
      'Protector dérmico',
    ],
    partesUtiles: [
      'Cera del tronco (recolección no destructiva)'
    ],
    esenciasFlorales: [
      'Elevación del espíritu',
      'Conexión Cielo-Tierra',
      'Majestuosidad y dignidad interior',
    ],
    correspondenciasEnergeticas: [
      'Antena cósmica',
      'Símbolo de paz y resurrección (históricamente usada en Semana Santa)',
      'Resistencia ante los embates del tiempo',
    ],
    malesEmocionales: [
      'Sentimiento de inferioridad',
      'Desconexión espiritual profunda',
      'Falta de propósito elevado',
    ],
    malesFisicos: [
      'Resequedad extrema en la piel',
      'Grietas en manos y pies (campesinos)',
      'Raspones superficiales',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Liliopsida',
      orden  : 'Arecales',
      familia: 'Arecaceae',
      genero : 'Ceroxylon',
      especie: 'vogelianum',
      clados : [
        'Angiospermas',
        'Monocotiledóneas',
        'Comelínidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para curar grietas profundas en la piel y proteger raspones del frío del páramo',
        formaDeAplicacion:
          'Fundir y aplicar la cera a modo de ungüento sobre la piel afectada 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Cera raspada del tronco (sin lastimar la palma)',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Aceite de almendras o de oliva',
            cantidad   : '10 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar el polvillo ceroso que recubre el estípite (tronco) de la palma con mucho cuidado.',
          ],
          [
            2,
            'Colocar la cera en un recipiente de vidrio resistente al calor.',
          ],
          [
            3,
            'Fundir al baño maría junto con el aceite de almendras hasta que se integren por completo.',
          ],
          [
            4,
            'Retirar del fuego y dejar enfriar hasta que solidifique como una pomada.',
          ],
          [
            5,
            'Tomar una pequeña cantidad y frotar sobre las áreas resecas o agrietadas.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Centropogon granulosus',
    imageUrl        : 'https://www.google.com/search?q=Centropogon+granulosus&tbm=isch',
    nombresComunes  : [
      'Campanilla',
      'Bocado de puerco'
    ],
    propiedadesMedicinales: [
      'Vulnerario',
      'Antimicótico tópico (látex)',
      'Tóxico (uso interno estrictamente prohibido)',
    ],
    partesUtiles: [
      'Látex blanco',
      'Hojas maceradas'
    ],
    esenciasFlorales: [
      'Aceptación de la propia intuición',
      'Despierta la voz interior',
      'Limpieza de ilusiones auditivas',
    ],
    correspondenciasEnergeticas: [
      'Asociado a elementales del bosque (forma de campana)',
      'Magia de advertencia y límites',
      'Elemento Éter',
    ],
    malesEmocionales: [
      'Sordera emocional ante consejos de otros',
      'Dificultad para escuchar el propio cuerpo',
      'Desorientación vital',
    ],
    malesFisicos: [
      'Infecciones fúngicas rebeldes (hongos)',
      'Verrugas cutáneas',
      'Úlceras externas de difícil cicatrización',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Asterales',
      familia: 'Campanulaceae',
      genero : 'Centropogon',
      especie: 'granulosus',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para quemar verrugas y combatir hongos localizados en la piel (SOLO USO TÓPICO)',
        formaDeAplicacion:
          'Aplicar una gota de látex directamente sobre la verruga u hongo, evitando la piel sana, 1 vez al día.',
        ingredientes: [
          {
            ingrediente: 'Látex fresco de campanilla',
            cantidad   : '2 a 3 gotas',
          },
        ],
        pasos: [
          [
            1,
            'Quebrar cuidadosamente un tallo u hoja fresca para liberar el látex blanco (usar guantes para no irritar las manos).',
          ],
          [
            2,
            'Proteger la piel sana alrededor de la verruga con vaselina.'
          ],
          [
            3,
            'Aplicar la gota de látex directamente sobre la lesión.'
          ],
          [
            4,
            'Dejar secar al aire libre.'
          ],
          [
            5,
            'Lavar bien las manos después de la aplicación y evitar cualquier contacto con los ojos o la boca.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Hypericum goyanesii',
    imageUrl        : 'https://www.google.com/search?q=Hypericum+goyanesii&tbm=isch',
    nombresComunes  : [
      'Chite',
      'San Juanito de páramo'
    ],
    propiedadesMedicinales: [
      'Antidepresivo',
      'Vulnerario (excelente cicatrizante)',
      'Antiespasmódico',
      'Antiséptico',
    ],
    partesUtiles: [
      'Flores',
      'Hojas'
    ],
    esenciasFlorales: [
      'Optimismo y vitalidad',
      'Disuelve la melancolía profunda',
      'Integra la luz en los procesos de sombra',
    ],
    correspondenciasEnergeticas: [
      'Rayo amarillo de sabiduría',
      'Protección contra energías densas',
      'Portador del fuego solar en el páramo',
    ],
    malesEmocionales: [
      'Depresión clínica leve a moderada',
      'Desesperanza',
      'Tristeza sin causa aparente',
    ],
    malesFisicos: [
      'Heridas e incisiones quirúrgicas (para cicatrizar sin marca)',
      'Quemaduras solares',
      'Neuralgias',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Hypericaceae',
      genero : 'Hypericum',
      especie: 'goyanesii',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar estados depresivos leves y calmar los nervios',
        formaDeAplicacion:
          'Beber 1 taza de infusión en la mañana y otra en la tarde (evitar exposición solar intensa durante su uso prolongado).',
        ingredientes: [
          {
            ingrediente: 'Sumidades floridas secas de chite',
            cantidad   : '1 cucharadita (3 gramos)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Colocar las flores secas en una taza.'
          ],
          [
            2,
            'Verter el agua recién hervida sobre las flores.'
          ],
          [
            3,
            'Tapar y dejar en infusión por 8 minutos.'
          ],
          [
            4,
            'Colar para retirar los restos de la planta.'
          ],
          [
            5,
            'Consumir tibio. Precaución: puede interactuar con medicamentos antidepresivos convencionales.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Buddleja bullata',
    imageUrl        : 'https://www.google.com/search?q=Buddleja+bullata&tbm=isch',
    nombresComunes  : [
      'Salvia de Páramo',
      'Lengua de vaca'
    ],
    propiedadesMedicinales: [
      'Vulnerario (lava y sella heridas)',
      'Antiinflamatorio tópico',
      'Febrífugo (en baños)',
    ],
    partesUtiles: [
      'Hojas'
    ],
    esenciasFlorales: [
      'Comunicación pacífica',
      'Enfriamiento de la ira',
      'Consuelo en la soledad extrema',
    ],
    correspondenciasEnergeticas: [
      'Limpieza de miasmas (energías residuales en espacios)',
      'Baños de despojo',
      'Equilibrio térmico espiritual',
    ],
    malesEmocionales: [
      'Ira ardiente',
      'Frustración desbordada',
      'Dificultad para perdonar ofensas',
    ],
    malesFisicos: [
      'Fiebre alta',
      'Heridas infectadas',
      'Hinchazón por golpes'
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Lamiales',
      familia: 'Scrophulariaceae',
      genero : 'Buddleja',
      especie: 'bullata',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para lavar heridas sucias, desinfectar cortes y bajar la fiebre mediante baños',
        formaDeAplicacion:
          'Realizar lavados externos sobre la herida o aplicar como baño general para la fiebre.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de salvia de páramo',
            cantidad   : '30 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas, que suelen ser afelpadas.'
          ],
          [
            2,
            'Hervir el agua e introducir las hojas trituradas.'
          ],
          [
            3,
            'Dejar hervir por 10 minutos para una correcta extracción.'
          ],
          [
            4,
            'Retirar del fuego y dejar enfriar a temperatura ambiente.'
          ],
          [
            5,
            'Filtrar el líquido y usar en compresas sobre la frente para fiebre o como lavado para desinfectar.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Hedyosmum bonplandianum',
    imageUrl:
      'https://www.google.com/search?q=Hedyosmum+bonplandianum&tbm=isch',
    nombresComunes: [
      'Granizo',
      'Silbador',
      'Bebedero'
    ],
    propiedadesMedicinales: [
      'Antiespasmódico estomacal',
      'Analgésico articular (planta caliente)',
      'Diurético',
      'Anticatarral',
    ],
    partesUtiles: [
      'Hojas (muy aromáticas)',
      'Tallos tiernos'
    ],
    esenciasFlorales: [
      'Recuperación de la fluidez vital',
      'Limpieza de miedos paralizantes',
      'Vitalidad y chispa interna',
    ],
    correspondenciasEnergeticas: [
      'Planta sagrada de calor para sacar el frío del cuerpo (malos vientos)',
      'Armonización de la dualidad frío/calor',
      'Sahumerio aromático protector',
    ],
    malesEmocionales: [
      'Miedo escénico o parálisis por terror',
      'Estancamiento vital',
      'Melancolía asociada al clima frío',
    ],
    malesFisicos: [
      'Cólicos estomacales por frío',
      'Dolor en las articulaciones (viento en los huesos)',
      'Resfriados crónicos',
      'Retención de líquidos',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Chloranthales',
      familia: 'Chloranthaceae',
      genero : 'Hedyosmum',
      especie: 'bonplandianum',
      clados : [
        'Angiospermas',
        'Magnolíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para sacar el frío del cuerpo, aliviar el reumatismo articular y calmar cólicos estomacales',
        formaDeAplicacion:
          'Para el estómago: tomar 1 taza de infusión tibia. Para reumatismo: realizar frotaciones con la tintura.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de granizo',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '300 ml',
          },
        ],
        pasos: [
          [
            1,
            'Trozar las hojas aromáticas para exponer sus aceites esenciales.',
          ],
          [
            2,
            'Colocar en un recipiente y verter el agua a punto de ebullición.',
          ],
          [
            3,
            'Tapar herméticamente de inmediato para que los aromas no se evaporen.',
          ],
          [
            4,
            'Infundir durante 10 minutos.'
          ],
          [
            5,
            'Colar y beber lentamente después de las comidas.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Myrica pubescens',
    imageUrl        : 'https://www.google.com/search?q=Myrica+pubescens&tbm=isch',
    nombresComunes  : [
      'Laurel de Cera',
      'Laurel andino'
    ],
    propiedadesMedicinales: [
      'Astringente',
      'Cicatrizante (cera)',
      'Emoliente cutáneo',
      'Anticatarral (vahos)',
    ],
    partesUtiles: [
      'Hojas',
      'Cera de los frutos'
    ],
    esenciasFlorales: [
      'Iluminación del camino vital',
      'Constancia y dedicación',
      'Suaviza la dureza de corazón',
    ],
    correspondenciasEnergeticas: [
      'Luz y clarividencia (elaboración histórica de cirios)',
      'Protección del hogar',
      'Símbolo de paz y prosperidad',
    ],
    malesEmocionales: [
      'Pérdida de esperanza (oscuridad interior)',
      'Inflexibilidad',
      'Rigidez moral',
    ],
    malesFisicos: [
      'Resequedad severa en la piel',
      'Congestión nasal',
      'Diarrea moderada',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fagales',
      familia: 'Myricaceae',
      genero : 'Myrica',
      especie: 'pubescens',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Fábidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para descongestionar vías respiratorias mediante la inhalación de sus aceites esenciales',
        formaDeAplicacion:
          'Realizar inhalaciones de vapor (vahos) durante 10 minutos, 1 vez al día antes de dormir.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de laurel de cera',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '1 litro',
          },
        ],
        pasos: [
          [
            1,
            'Poner a hervir el litro de agua en una olla amplia.'
          ],
          [
            2,
            'Añadir las hojas y dejar hervir por 3 minutos.'
          ],
          [
            3,
            'Retirar del fuego y colocar sobre una mesa segura.'
          ],
          [
            4,
            'Cubrir la cabeza con una toalla formando una carpa sobre la olla.',
          ],
          [
            5,
            'Inhalar el vapor profundamente por la nariz, con cuidado de no acercarse demasiado al agua hirviendo.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Inga edulis',
    imageUrl        : 'https://www.google.com/search?q=Inga+edulis&tbm=isch',
    nombresComunes  : [
      'Guamo',
      'Guaba',
      'Guamo machete'
    ],
    propiedadesMedicinales: [
      'Astringente (corteza)',
      'Antiinflamatorio',
      'Cicatrizante',
      'Digestivo (arilo del fruto)',
    ],
    partesUtiles: [
      'Corteza',
      'Hojas',
      'Arilo blanco (comestible)'
    ],
    esenciasFlorales: [
      'Nutrición del alma',
      'Generosidad y altruismo',
      'Protección de los más vulnerables (árbol de sombra)',
    ],
    correspondenciasEnergeticas: [
      'Símbolo de paternidad protectora',
      'Acogida y refugio',
      'Madre de los ecosistemas (fija nitrógeno)',
    ],
    malesEmocionales: [
      'Egoísmo',
      'Sensación de desamparo',
      'Falta de dulzura en la vida',
    ],
    malesFisicos: [
      'Llagas bucales (corteza)',
      'Diarrea (corteza)',
      'Inflamación intestinal leve',
      'Heridas menores',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Inga',
      especie: 'edulis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para desinflamar encías, curar aftas bucales y actuar como astringente en llagas',
        formaDeAplicacion:
          'Realizar gargarismos o enjuagues con la decocción fría de la corteza, 3 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Corteza triturada de guamo',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar la corteza y trozarla en pedazos pequeños.'
          ],
          [
            2,
            'Hervir en el agua durante 15 a 20 minutos para extraer correctamente los taninos.',
          ],
          [
            3,
            'Retirar del fuego y dejar enfriar por completo.'
          ],
          [
            4,
            'Colar para asegurar que no queden astillas o residuos.'
          ],
          [
            5,
            'Usar el líquido como enjuague bucal sin tragarlo.'
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Erythrina poeppigiana',
    imageUrl        : 'https://www.google.com/search?q=Erythrina+poeppigiana&tbm=isch',
    nombresComunes  : [
      'Bucare',
      'Cámbulo',
      'Pízamo'
    ],
    propiedadesMedicinales: [
      'Sedante nervioso (requiere precaución por alcaloides)',
      'Antiespasmódico',
      'Sudorífico (diaforético)',
    ],
    partesUtiles: [
      'Flores',
      'Corteza (uso muy restringido)'
    ],
    esenciasFlorales: [
      'Paz profunda',
      'Aceptación del ciclo de descanso',
      'Liberación de la culpa por no ser productivo',
    ],
    correspondenciasEnergeticas: [
      'Renacimiento (florece cuando pierde sus hojas)',
      'Asociación al elemento Fuego (flores rojas/naranjas)',
      'Atracción de abundancia (néctar)',
    ],
    malesEmocionales: [
      'Hiperactividad',
      'Culpa por descansar',
      'Insomnio por sobrecarga de pensamientos',
    ],
    malesFisicos: [
      'Nerviosismo agudo',
      'Insomnio',
      'Espasmos musculares'
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Erythrina',
      especie: 'poeppigiana',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para relajar el sistema nervioso central e inducir el sueño en cuadros de insomnio ocasional',
        formaDeAplicacion:
          'Beber media taza de infusión de flores estrictamente antes de acostarse.',
        ingredientes: [
          {
            ingrediente: 'Flores frescas o secas de bucare',
            cantidad   : '1 o 2 flores (no exceder)',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '150 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar los pétalos de las flores rojas/anaranjadas.'
          ],
          [
            2,
            'Colocarlos en una taza y verter el agua caliente.'
          ],
          [
            3,
            'Infundir durante no más de 5 a 7 minutos.'
          ],
          [
            4,
            'Colar y endulzar ligeramente si se desea.'
          ],
          [
            5,
            'Beber en la noche. No administrar a niños, mujeres embarazadas o personas medicadas con sedantes, dado el contenido de alcaloides.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Dalea coerulea',
    imageUrl        : 'https://www.google.com/search?q=Dalea+coerulea&tbm=isch',
    nombresComunes  : [
      'Dalea',
      'Falso añil'
    ],
    propiedadesMedicinales: [
      'Vulnerario (cura heridas)',
      'Antiséptico cutáneo',
      'Antiinflamatorio externo',
    ],
    partesUtiles: [
      'Hojas',
      'Flores azules/violáceas'
    ],
    esenciasFlorales: [
      'Confianza en el propio valor',
      'Tranquilidad ante la adversidad',
      'Suaviza la dureza en la comunicación',
    ],
    correspondenciasEnergeticas: [
      'Expresión auténtica (color azul, chakra garganta)',
      'Restauración y abono energético (fija nitrógeno)',
      'Limpieza de palabras dañinas',
    ],
    malesEmocionales: [
      'Dificultad para comunicarse',
      'Baja autoestima',
      'Miedo a decir la verdad',
    ],
    malesFisicos: [
      'Raspones y cortes menores',
      'Inflamaciones locales en la piel',
      'Infecciones superficiales',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Dalea',
      especie: 'coerulea',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para lavar y desinfectar cortes, raspones y promover una sana cicatrización',
        formaDeAplicacion:
          'Lavar la herida 2 veces al día con la decocción fría.',
        ingredientes: [
          {
            ingrediente: 'Hojas y sumidades floridas de dalea',
            cantidad   : '15 gramos',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Recolectar las ramas tiernas con flores de la planta.'
          ],
          [
            2,
            'Hervir el agua y añadir el material vegetal triturado.'
          ],
          [
            3,
            'Mantener en ebullición suave por 10 minutos.'
          ],
          [
            4,
            'Retirar, tapar y dejar enfriar por completo.'
          ],
          [
            5,
            'Filtrar a través de una tela limpia y aplicar el líquido a modo de lavado sobre la piel afectada.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Erythroxylum novogranatense',
    imageUrl:
      'https://www.google.com/search?q=Erythroxylum+novogranatense&tbm=isch',
    nombresComunes: [
      'Coca colombiana',
      'Pajarito',
      'Ayo',
      'Hayó'
    ],
    propiedadesMedicinales: [
      'Estimulante del sistema nervioso central',
      'Anestésico local',
      'Supresor del apetito',
      'Estimulante respiratorio (mal de altura)',
    ],
    partesUtiles: [
      'Hojas'
    ],
    esenciasFlorales: [
      'Asimilación de la palabra y el pensamiento',
      'Fomenta la escucha activa y la comunidad',
      'Enfoque y resistencia mental',
    ],
    correspondenciasEnergeticas: [
      'Planta sagrada de pensamiento y palabra (Mambe)',
      'Conexión con la Madre Tierra',
      'Intercambio energético equilibrado',
    ],
    malesEmocionales: [
      'Apatía extrema',
      'Dificultad para comunicarse genuinamente',
      'Desconexión comunitaria o aislamiento',
    ],
    malesFisicos: [
      'Soroche (mal de altura)',
      'Fatiga física extrema',
      'Dolores de muelas o encías',
      'Hambre y desnutrición (como supresor/coadyuvante)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Erythroxylaceae',
      genero : 'Erythroxylum',
      especie: 'novogranatense',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Fábidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar el mal de altura, combatir la fatiga y actuar como anestésico leve en la boca',
        formaDeAplicacion:
          'Masticar lentamente o tomar como infusión (mate de coca) 1 o 2 veces al día.',
        ingredientes: [
          {
            ingrediente: 'Hojas enteras tostadas de coca colombiana',
            cantidad   : '10 gramos',
          },
          {
            ingrediente:
              'Polvo de cal alcalina o ceniza de yarumo (para el mambeo)',
            cantidad: '1 pizca',
          },
        ],
        pasos: [
          [
            1,
            'Para infusión: colocar 3 a 5 hojas en una taza y verter agua hirviendo, dejar reposar 5 minutos.',
          ],
          [
            2,
            'Para uso tradicional (mambeo o boleo): Limpiar las hojas tostadas.',
          ],
          [
            3,
            'Introducir un puñado de hojas en el carrillo (interior de la mejilla) sin tragarlas.',
          ],
          [
            4,
            'Humedecer con la saliva hasta formar un bolo (acuyico).'
          ],
          [
            5,
            'Agregar la pizca de cal/ceniza para activar la extracción alcaloide y mantener el bolo en la boca liberando su jugo.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Myroxylon balsamum',
    imageUrl        : 'https://www.google.com/search?q=Myroxylon+balsamum&tbm=isch',
    nombresComunes  : [
      'Bálsamo de Tolú',
      'Tolu'
    ],
    propiedadesMedicinales: [
      'Expectorante profundo',
      'Antiséptico pulmonar y de vías urinarias',
      'Cicatrizante',
    ],
    partesUtiles: [
      'Resina oleosa (bálsamo)',
      'Corteza'
    ],
    esenciasFlorales: [
      'Bálsamo para el dolor emocional',
      'Suaviza el temperamento irritable',
      'Consuelo en etapas de transición difíciles',
    ],
    correspondenciasEnergeticas: [
      'Sellado áurico (magia de resinas)',
      'Atrae la dulzura a la vida',
      'Elevación vibracional a través del aroma',
    ],
    malesEmocionales: [
      'Corazón endurecido por el dolor',
      'Incapacidad para recibir afecto',
      'Tristeza enquistada',
    ],
    malesFisicos: [
      'Bronquitis aguda y crónica',
      'Tos productiva resistente',
      'Heridas infectadas',
      'Cistitis',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Fabales',
      familia: 'Fabaceae',
      genero : 'Myroxylon',
      especie: 'balsamum',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Fábidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para expulsar flemas endurecidas, calmar la tos y desinfectar las vías respiratorias',
        formaDeAplicacion:
          'Tomar en forma de jarabe o inhalar los vapores de la resina fundida en agua.',
        ingredientes: [
          {
            ingrediente: 'Resina de Bálsamo de Tolú pura',
            cantidad   : '10 gramos',
          },
          {
            ingrediente: 'Agua hirviendo',
            cantidad   : '1 litro (para vahos)',
          },
        ],
        pasos: [
          [
            1,
            'Para inhalaciones: Hervir el litro de agua.'
          ],
          [
            2,
            'Retirar del fuego y disolver la resina en el agua caliente.'
          ],
          [
            3,
            'Cubrir la cabeza con una toalla e inhalar profundamente los vapores aromáticos por 15 minutos.',
          ],
          [
            4,
            'Para uso oral: Mezclar 1 gramo de resina con una cucharada de miel pura de abejas.',
          ],
          [
            5,
            'Tomar la mezcla lentamente permitiendo que recubra la garganta, máximo 2 veces al día.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Cinchona pitayensis',
    imageUrl        : 'https://www.google.com/search?q=Cinchona+pitayensis&tbm=isch',
    nombresComunes  : [
      'Quina andina',
      'Quina del Cauca',
      'Cascarilla'
    ],
    propiedadesMedicinales: [
      'Antipalúdico (cura la malaria por su contenido de quinina)',
      'Antipirético potente (baja la fiebre)',
      'Analgésico',
      'Tónico amargo digestivo',
    ],
    partesUtiles: [
      'Corteza'
    ],
    esenciasFlorales: [
      'Restauración del orden mental ante el caos',
      'Ayuda a asimilar lecciones kármicas repetitivas',
      'Vitalidad ante el decaimiento absoluto',
    ],
    correspondenciasEnergeticas: [
      'Limpieza de parásitos astrales',
      'Árbol de la salvación (históricamente salvó millones de vidas)',
      'Elemento Fuego (quema la enfermedad)',
    ],
    malesEmocionales: [
      'Pensamientos circulares y obsesivos (como fiebre mental)',
      'Agotamiento psíquico por ataque energético',
      'Miedos cíclicos o terrores nocturnos',
    ],
    malesFisicos: [
      'Malaria (paludismo)',
      'Fiebres altas recurrentes',
      'Calambres musculares nocturnos',
      'Debilidad extrema',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Gentianales',
      familia: 'Rubiaceae',
      genero : 'Cinchona',
      especie: 'pitayensis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para reducir fiebres persistentes, combatir debilidad profunda y como tónico amargo',
        formaDeAplicacion:
          'Beber media taza de la decocción fría antes de las comidas.',
        ingredientes: [
          {
            ingrediente: 'Corteza seca y triturada de Quina',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '500 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar la corteza y molerla hasta obtener un polvo grueso.'
          ],
          [
            2,
            'Colocar en el agua fría y llevar a fuego.'
          ],
          [
            3,
            'Hervir lentamente por 20 minutos para extraer los alcaloides amargos.',
          ],
          [
            4,
            'Retirar, dejar reposar hasta que se enfríe y colar cuidadosamente.',
          ],
          [
            5,
            'Tomar en pequeñas dosis (es extremadamente amarga). No consumir en embarazo ni en dosis altas prolongadas.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Piper bogotense',
    imageUrl        : 'https://www.google.com/search?q=Piper+bogotense&tbm=isch',
    nombresComunes  : [
      'Cordoncillo',
      'Matico andino'
    ],
    propiedadesMedicinales: [
      'Hemostático muy potente (detiene el sangrado al instante)',
      'Vulnerario (cierra heridas)',
      'Analgésico local',
      'Astringente',
    ],
    partesUtiles: [
      'Hojas frescas',
      'Sumidades florales (espigas)'
    ],
    esenciasFlorales: [
      'Cierre de ciclos abiertos',
      'Cicatrización del aura',
      'Detiene la pérdida de energía en relaciones desgastantes',
    ],
    correspondenciasEnergeticas: [
      'Sello espiritual',
      'Elemento Tierra',
      'Magia de protección y sellado de portales',
    ],
    malesEmocionales: [
      'Duelo no resuelto (herida sangrante del alma)',
      'Incapacidad para poner fin a una situación abusiva',
      'Dispersión vital',
    ],
    malesFisicos: [
      'Hemorragias externas e internas leves',
      'Úlceras sangrantes crónicas',
      'Extracciones dentales (para detener sangrado)',
      'Afecciones digestivas',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Piperales',
      familia: 'Piperaceae',
      genero : 'Piper',
      especie: 'bogotense',
      clados : [
        'Angiospermas',
        'Magnolíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para detener hemorragias inmediatas en cortes profundos y ayudar a cerrar la herida',
        formaDeAplicacion:
          'Aplicar un emplasto directo de las hojas trituradas sobre la herida sangrante.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de cordoncillo',
            cantidad   : '10 hojas',
          },
        ],
        pasos: [
          [
            1,
            'Lavar rápidamente las hojas frescas bajo el agua.'
          ],
          [
            2,
            'Triturarlas entre las manos limpias o en un mortero hasta extraer un jugo verdoso oscuro.',
          ],
          [
            3,
            'Colocar la masa vegetal directamente sobre el corte o herida que está sangrando.',
          ],
          [
            4,
            'Presionar firmemente con una gasa o venda.'
          ],
          [
            5,
            'Dejar actuar hasta que el sangrado se detenga por completo. El matico actuará como un tapón biológico.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Brugmansia sanguinea',
    imageUrl        : 'https://www.google.com/search?q=Brugmansia+sanguinea&tbm=isch',
    nombresComunes  : [
      'Cacao sabanero',
      'Borrachera roja',
      'Floripondio rojo'
    ],
    propiedadesMedicinales: [
      'Analgésico articular extremo (Tópico)',
      'Antiespasmódico (Tópico)',
      'Tóxico delirante (altísimo riesgo si se ingiere, contiene escopolamina y atropina)',
    ],
    partesUtiles: [
      'Hojas frescas',
      'Flores (solo uso externo/ritual)'
    ],
    esenciasFlorales: [
      'Despertar espiritual',
      'Confrontación profunda con la propia sombra',
      'Transformación del terror',
    ],
    correspondenciasEnergeticas: [
      'Planta maestra de poder chamánico',
      'Viaje al inframundo',
      'Supresión del ego y contacto con los espíritus tutelares',
    ],
    malesEmocionales: [
      'Traumas enterrados en el inconsciente profundo',
      'Rigidez mental extrema que requiere un quiebre',
      'Desconexión total con lo místico',
    ],
    malesFisicos: [
      'Reumatismo deformante agudo (dolor insoportable)',
      'Contracturas musculares severas',
      'Intoxicación severa/delirio (si se consume por vía oral accidentalmente)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Solanales',
      familia: 'Solanaceae',
      genero : 'Brugmansia',
      especie: 'sanguinea',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para aliviar dolores articulares o reumáticos extremos adormeciendo la zona (ESTRICTAMENTE USO EXTERNO)',
        formaDeAplicacion:
          'Colocar el emplasto caliente sobre la articulación, vendar y retirar al día siguiente. NO INGERIR. LAVAR MANOS.',
        ingredientes: [
          {
            ingrediente: 'Hojas frescas de cacao sabanero',
            cantidad   : '2 hojas grandes',
          },
          {
            ingrediente: 'Aceite mineral o de almendras',
            cantidad   : 'Unas gotas',
          },
        ],
        pasos: [
          [
            1,
            'Lavar las hojas y secarlas cuidadosamente.'
          ],
          [
            2,
            'Untar la superficie de la hoja con un poco de aceite.'
          ],
          [
            3,
            'Pasar la hoja rápidamente por el fuego de la estufa para ablandarla y liberar sus alcaloides, sin dejar que se queme.',
          ],
          [
            4,
            'Aplicar la hoja caliente directamente sobre la rodilla, codo o zona con reumatismo severo.',
          ],
          [
            5,
            'Fijar con una venda. Lavarse las manos exhaustivamente con agua y jabón inmediatamente después de manipular la planta.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Borojoa patinoi',
    imageUrl        : 'https://www.google.com/search?q=Borojoa+patinoi&tbm=isch',
    nombresComunes  : [
      'Borojó',
      'Fruta de la energía'
    ],
    propiedadesMedicinales: [
      'Vitamínico y remineralizante de alto impacto',
      'Estimulante y energizante celular',
      'Hipotensor (regula presión arterial)',
      'Equilibrador del azúcar en sangre',
    ],
    partesUtiles: [
      'Fruto maduro'
    ],
    esenciasFlorales: [
      'Recarga de la batería vital',
      'Pasión y fuerza física',
      'Conexión con la fuerza primordial de la selva',
    ],
    correspondenciasEnergeticas: [
      'Fuerza de la tierra negra y húmeda del Chocó',
      'Nutrición del chakra raíz',
      'Fertilidad y vitalidad sexual',
    ],
    malesEmocionales: [
      'Apatía sexual o vital',
      'Agotamiento por exceso de trabajo (burnout)',
      'Falta de fuerza de voluntad física',
    ],
    malesFisicos: [
      'Fatiga crónica y anemia',
      'Desnutrición',
      'Hipertensión leve',
      'Falta de energía generalizada',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Gentianales',
      familia: 'Rubiaceae',
      genero : 'Borojoa',
      especie: 'patinoi',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Lamíidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para combatir la fatiga extrema, aportar nutrientes esenciales y aumentar la vitalidad física',
        formaDeAplicacion:
          'Consumir en forma de jugo espeso o batido 1 vez al día, preferiblemente en la mañana.',
        ingredientes: [
          {
            ingrediente: 'Pulpa madura de borojó',
            cantidad   : '100 gramos',
          },
          {
            ingrediente: 'Agua o leche (animal o vegetal)',
            cantidad   : '250 ml',
          },
          {
            ingrediente: 'Miel o panela',
            cantidad   : 'Al gusto',
          },
        ],
        pasos: [
          [
            1,
            'Abrir el fruto maduro (que debe estar muy suave, de color pardo) y extraer la pulpa con una cuchara.',
          ],
          [
            2,
            'Colocar la pulpa en la licuadora junto con el agua o la leche.'
          ],
          [
            3,
            'Añadir la miel o panela.'
          ],
          [
            4,
            'Licuar a velocidad media hasta obtener un batido denso y espumoso.',
          ],
          [
            5,
            'Pasar por un colador grueso para retirar las semillas y consumir de inmediato para aprovechar sus vitaminas hidrosolubles.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Bocconia frutescens',
    imageUrl        : 'https://www.google.com/search?q=Bocconia+frutescens&tbm=isch',
    nombresComunes  : [
      'Trompeto',
      'Siete camisas',
      'Celidonia andina'
    ],
    propiedadesMedicinales: [
      'Queratolítico (destruye verrugas y callos)',
      'Cicatrizante externo',
      'Antiséptico potente',
      'Antimicrobiano tópico',
    ],
    partesUtiles: [
      'Látex anaranjado/amarillo',
      'Hojas'
    ],
    esenciasFlorales: [
      'Desprendimiento de viejas estructuras',
      'Renovación de la perspectiva',
      'Liberación de creencias limitantes incrustadas',
    ],
    correspondenciasEnergeticas: [
      'Fuego corrosivo que purifica',
      'Magia de destierro de entidades menores',
      'Transmutación (color alquímico de su savia)',
    ],
    malesEmocionales: [
      'Ideas fijas y prejuicios (callosidades mentales)',
      'Resistencia extrema a cambiar de opinión',
      'Aferramiento a relaciones dolorosas',
    ],
    malesFisicos: [
      'Verrugas persistentes (papilomas)',
      'Callosidades dolorosas',
      'Úlceras cutáneas',
      'Infecciones en la piel',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Ranunculales',
      familia: 'Papaveraceae',
      genero : 'Bocconia',
      especie: 'frutescens',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para erradicar verrugas y ablandar callosidades endurecidas (SOLO USO EXTERNO)',
        formaDeAplicacion:
          'Aplicar el látex directamente sobre la verruga 1 vez al día hasta que se seque y caiga.',
        ingredientes: [
          {
            ingrediente: 'Látex fresco anaranjado del trompeto',
            cantidad   : '1 o 2 gotas',
          },
        ],
        pasos: [
          [
            1,
            'Quebrar una rama tierna, pedúnculo foliar o hacer una incisión en la corteza de la planta.',
          ],
          [
            2,
            'Recolectar las gotas de látex espeso y anaranjado que emergen casi de inmediato.',
          ],
          [
            3,
            'Proteger la piel sana alrededor de la verruga o callo con un poco de vaselina.',
          ],
          [
            4,
            'Aplicar la gota de látex exclusivamente sobre el tejido anormal a tratar.',
          ],
          [
            5,
            'Dejar secar; el área se teñirá de un color oscuro. Repetir diariamente sin intentar arrancar la verruga a la fuerza.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Valeriana clematitis',
    imageUrl        : 'https://www.google.com/search?q=Valeriana+clematitis&tbm=isch',
    nombresComunes  : [
      'Valeriana de páramo',
      'Valeriana andina'
    ],
    propiedadesMedicinales: [
      'Sedante poderoso del sistema nervioso',
      'Inductor del sueño',
      'Antiespasmódico gastrointestinal (de origen nervioso)',
    ],
    partesUtiles: [
      'Raíces y rizomas (característico olor penetrante)'
    ],
    esenciasFlorales: [
      'Paz en la tormenta',
      'Desconexión del ruido mental',
      'Entrega confiada al descanso y a la noche',
    ],
    correspondenciasEnergeticas: [
      'Anclaje a la profundidad de la tierra',
      'Magia de los sueños premonitorios',
      'Sostén telúrico en momentos de pánico',
    ],
    malesEmocionales: [
      'Ansiedad paralizante',
      'Ataques de pánico incontrolables',
      'Nerviosismo crónico',
      'Insomnio severo por hiperactividad mental',
    ],
    malesFisicos: [
      'Dificultad aguda para conciliar el sueño',
      'Taquicardia nerviosa',
      'Dolor de estómago por nervios',
      'Tics nerviosos',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Dipsacales',
      familia: 'Caprifoliaceae',
      genero : 'Valeriana',
      especie: 'clematitis',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Astéridas',
        'Campanúlidas'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para combatir el insomnio crónico, relajar ataques de ansiedad y espasmos nerviosos',
        formaDeAplicacion:
          'Tomar 1 taza de decocción corta de la raíz, 1 hora antes de dormir.',
        ingredientes: [
          {
            ingrediente: 'Raíz limpia y triturada de valeriana andina',
            cantidad   : '5 gramos',
          },
          {
            ingrediente: 'Agua',
            cantidad   : '250 ml',
          },
        ],
        pasos: [
          [
            1,
            'Lavar muy bien las raíces para retirar toda la tierra.'
          ],
          [
            2,
            'Triturarlas ligeramente (liberarán un fuerte olor característico, similar a tierra húmeda o calcetín sucio).',
          ],
          [
            3,
            'Colocar en el agua y llevar al fuego.'
          ],
          [
            4,
            'Apenas rompa a hervir, apagar inmediatamente (no hervir en exceso para no degradar los valepotriatos).',
          ],
          [
            5,
            'Tapar, dejar reposar 10 minutos, colar y beber. (No mezclar con alcohol ni medicación psiquiátrica sedante).',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Caryodendron orinocense',
    imageUrl:
      'https://www.google.com/search?q=Caryodendron+orinocense&tbm=isch',
    nombresComunes: [
      'Cacay',
      'Inchi',
      'Nuez de Barinas'
    ],
    propiedadesMedicinales: [
      'Regenerador celular cutáneo avanzado',
      'Antioxidante tópico',
      'Cicatrizante',
      'Nutracéutico (almendra)',
    ],
    partesUtiles: [
      'Aceite extraído de la nuez/semilla',
      'Almendras'
    ],
    esenciasFlorales: [
      'Rejuvenecimiento espiritual',
      'Recuperación de la autoestima',
      'Borrado de cicatrices del alma',
    ],
    correspondenciasEnergeticas: [
      'Elixir de la eterna juventud orinoquense',
      'Brillo áurico y expansión',
      'Restaura la capa protectora del cuerpo sutil',
    ],
    malesEmocionales: [
      'Baja autoimagen',
      'Sensación de deterioro vital o envejecimiento interno',
      'Falta de resplandor personal',
    ],
    malesFisicos: [
      'Quemaduras y cicatrices queloides',
      'Envejecimiento prematuro de la piel (arrugas)',
      'Afecciones inflamatorias cutáneas',
      'Falta de elasticidad celular',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Euphorbiaceae',
      genero : 'Caryodendron',
      especie: 'orinocense',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para regenerar la piel en caso de cicatrices profundas, quemaduras o como tratamiento antiedad natural',
        formaDeAplicacion:
          'Aplicar de 3 a 5 gotas del aceite puro prensado en frío sobre la piel limpia, en la noche.',
        ingredientes: [
          {
            ingrediente:
              'Nueces peladas de cacay (para extracción) o Aceite puro de cacay comercial',
            cantidad: '5 gotas diarias',
          },
        ],
        pasos: [
          [
            1,
            'Adquirir aceite de cacay 100% puro prensado en frío (extraerlo artesanalmente requiere maquinaria de prensado oleaginoso).',
          ],
          [
            2,
            'Lavar y secar muy bien el rostro o la zona de la piel afectada con la cicatriz.',
          ],
          [
            3,
            'Colocar de 3 a 5 gotas de aceite de cacay en la palma de la mano.',
          ],
          [
            4,
            'Calentar ligeramente el aceite frotando las yemas de los dedos.',
          ],
          [
            5,
            'Masajear suavemente sobre la piel con movimientos circulares ascendentes hasta su total absorción. Dejar actuar toda la noche.',
          ],
        ],
      },
    ],
  },
  {
    nombreCientifico: 'Banisteriopsis caapi',
    imageUrl        : 'https://www.google.com/search?q=Banisteriopsis+caapi&tbm=isch',
    nombresComunes  : [
      'Yagé',
      'Ayahuasca',
      'Bejuco del alma'
    ],
    propiedadesMedicinales: [
      'Antidepresivo potente (inhibidor de la MAO natural)',
      'Purgante físico y espiritual (emético/catártico)',
      'Desparasitante profundo',
      'Enteógeno (induce estados alterados de conciencia)',
    ],
    partesUtiles: [
      'Corteza del bejuco maduro'
    ],
    esenciasFlorales: [
      'Visión profunda de la verdad cósmica',
      'Limpieza absoluta del inconsciente',
      'Aceptación de la vida, la muerte y el propósito espiritual',
    ],
    correspondenciasEnergeticas: [
      'Planta Maestra por excelencia del chamanismo colombiano',
      'Conexión con los espíritus tutelares y el origen del universo',
      'Portal entre dimensiones',
    ],
    malesEmocionales: [
      'Traumas psicológicos severos incrustados',
      'Adicciones (uso terapéutico asistido)',
      'Depresión clínica profunda resistente a tratamientos',
      'Ceguera espiritual y desconexión existencial',
    ],
    malesFisicos: [
      'Parasitismo severo',
      'Intoxicación sistémica (limpieza hepática/gastrointestinal extrema)',
      'Desequilibrios neuroquímicos (requiere contexto ritual/médico)',
    ],
    taxon: {
      dominio: 'Eukaryota',
      reino  : 'Plantae',
      filo   : 'Tracheophyta',
      clase  : 'Magnoliopsida',
      orden  : 'Malpighiales',
      familia: 'Malpighiaceae',
      genero : 'Banisteriopsis',
      especie: 'caapi',
      clados : [
        'Angiospermas',
        'Eudicotiledóneas',
        'Rósidas',
        'Eurosidas I'
      ],
    },
    preparaciones: [
      {
        usoTerapeutico:
          'Para purgas físicas y espirituales profundas (ADVERTENCIA: USO EXCLUSIVAMENTE RITUAL Y BAJO GUÍA CHAMÁNICA O PSIQUIÁTRICA EXPERTA)',
        formaDeAplicacion:
          'Beber una pequeña copa (toma) durante una ceremonia nocturna guiada. JAMÁS AUTORECETARSE.',
        ingredientes: [
          {
            ingrediente: 'Trozos macerados de bejuco de Yagé',
            cantidad   : '1 kilo (para varias dosis grupales)',
          },
          {
            ingrediente:
              'Hojas de Chacruna (Psychotria viridis) o Chagropanga (Diplopterys cabrerana)',
            cantidad: 'Proporción variable según el médico tradicional',
          },
          {
            ingrediente: 'Agua purificada',
            cantidad   : 'Varios litros',
          },
        ],
        pasos: [
          [
            1,
            'El sabedor (Taita o Chamán) machaca el bejuco con mazos de madera rezando la medicina.',
          ],
          [
            2,
            'Se coloca el bejuco y las hojas de la planta acompañante (para el DMT) en grandes ollas con agua.',
          ],
          [
            3,
            'Se somete a un proceso de cocción a fuego de leña que puede durar desde 12 hasta 24 horas continuas.',
          ],
          [
            4,
            'Se reduce y filtra constantemente hasta obtener una decocción densa, oscura y muy amarga.',
          ],
          [
            5,
            'La bebida resultante solo se administra en un entorno ceremonial, con dieta estricta previa (sin sal, azúcar, alcohol ni carnes rojas), debido a sus profundos efectos purgativos y psicoactivos.',
          ],
        ],
      },
    ],
  },
];
