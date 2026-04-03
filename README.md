# 🌿 Grimorio: Un Herbario Digital de Plantas Ancestrales Colombianas - Fitoterapia y Medicina Ancestral Colombiana

## Visión del Proyecto

**Grimorio** es una aplicación web diseñada como una compilación completa e interactiva de plantas medicinales nativas de Colombia. El objetivo principal del proyecto es preservar y difundir el conocimiento sobre la fitoterapia ancestral, centrándose en las propiedades energéticas de las plantas, sus usos medicinales tradicionales y su aplicación en el tratamiento de diversos tipos de dolor.

Esta aplicación funciona como un grimorio digital, proporcionando información detallada que une la sabiduría tradicional con la accesibilidad moderna.

## Contexto Académico

Este proyecto fue desarrollado como trabajo de grado para el **Diplomado de Fitoterapia y Medicinal Ancestral** de la **Universidad del Rosario**. Representa la culminación de un estudio profundo sobre los aspectos botánicos, medicinales y espirituales de la flora colombiana.

## Características Principales

- **Base de Datos de Plantas:** Un catálogo rico y consultable de plantas medicinales colombianas.
- **Vista Detallada del Espécimen:** Cada planta tiene una página detallada que incluye sus nombres científicos y comunes, imágenes en alta resolución y clasificación taxonómica.
- **Perfiles Energéticos y Medicinales:** Información detallada sobre:
  - Propiedades medicinales y dolencias físicas que tratan.
  - Correspondencias energéticas (elementos asociados, chakras y polaridad energética).
  - Usos para la sanación emocional y espiritual.
- **Guías de Preparación:** Instrucciones paso a paso para preparar remedios (infusiones, bálsamos, etc.), incluyendo ingredientes y casos de uso.
- **Habilitada como PWA:** La aplicación es una Aplicación Web Progresiva (PWA), lo que permite instalarla en dispositivos móviles para acceso sin conexión y una experiencia similar a la de una aplicación nativa.

## 📖 Sobre el Proyecto

**Grimorio** es un compendio digital especializado en la flora medicinal nativa de Colombia. Este proyecto ha sido desarrollado como trabajo final para el **Diplomado de Fitoterapia y Medicina Ancestral de la Universidad del Rosario**.

El objetivo principal de este repositorio es documentar, estructurar y preservar el conocimiento ancestral sobre nuestras plantas medicinales, enfocándose en su doble naturaleza:

1. **Propiedades Energéticas:** El uso tradicional de las plantas para la limpieza, protección, armonización y equilibrio del ser.
2. **Tratamientos Medicinales (Enfoque Analgésico):** La aplicación botánica orientada específicamente a mitigar, tratar y aliviar múltiples y diferentes tipos de dolores (físicos, emocionales, agudos, crónicos, musculares, articulares, etc.).

## 🧬 Estructura de Datos y Tipado (TypeScript)

El núcleo lógico del proyecto radica en cómo se gestiona la información botánica. Para garantizar la precisión y el respeto por el conocimiento tradicional, los datos están estructurados utilizando interfaces de TypeScript que modelan la complejidad de cada planta y sus aplicaciones.

### Tipos e Interfaces Principales

```typescript
// Representación principal de la entidad botánica y ancestral
export interface PlantaMedicinal {
  id: string;
  nombreComun: string;
  nombreCientifico: string;
  regionOrigen: RegionColombia[];
  descripcionAncestral: string;
  propiedadesEnergeticas: PropiedadEnergetica[];
  tratamientosDolor: TratamientoDolor[];
  metodosPreparacion: Preparacion[];
  precauciones: string[];
}

// Categorización del tipo de dolor que la planta ayuda a mitigar
export interface TratamientoDolor {
  categoriaDolor: 'Físico' | 'Emocional' | 'Espiritual';
  tipoEspecifico:
    | 'Muscular'
    | 'Articular'
    | 'Cefalea'
    | 'Menstrual'
    | 'Neuropático'
    | 'Gastrointestinal'
    | 'Duelo';
  nivelEfectividad: 'Alta' | 'Media' | 'Auxiliar';
  descripcionMecanismo: string;
}

// Aspecto espiritual y vibracional de la planta
export interface PropiedadEnergetica {
  proposito:
    | 'Limpieza'
    | 'Protección'
    | 'Atracción'
    | 'Equilibrio'
    | 'Relajación';
  elementoAfin: 'Agua' | 'Fuego' | 'Tierra' | 'Aire';
  usoRitual: string;
}

// Métodos de extracción y aplicación
export interface Preparacion {
  tipo:
    | 'Infusión'
    | 'Decocción'
    | 'Cataplasma'
    | 'Tintura'
    | 'Sahumerio'
    | 'Baño'
    | 'Aceite Esencial';
  instrucciones: string;
  dosisRecomendada: string;
}

export type RegionColombia =
  | 'Amazonía'
  | 'Andina'
  | 'Caribe'
  | 'Orinoquía'
  | 'Pacífica';
```

## El Modelo de Datos: `EspecimenType`

El corazón de la aplicación es el modelo de datos `Especimen`, que estructura la rica información de cada planta. Este modelo asegura que los datos sean consistentes, detallados y holísticos. Los campos clave incluyen:

- `nombreCientifico`: El nombre científico único (clave primaria).
- `nombresComunes`: Un arreglo de nombres locales comunes.
- `propiedadesMedicinales`: Una lista de efectos medicinales validados.
- `malesFisicos` & `malesEmocionales`: Dolencias físicas y emocionales específicas que la planta puede tratar.
- `correspondenciasEnergeticas`: Describe el perfil energético de la planta.
- `chakrasAsociados`: Vincula la planta a uno o más Chakras.
- `polaridadEnergetica`: Define su energía como 'Masculina' o 'Femenina'.
- `elementosAsociados`: Conecta la planta con los elementos tradicionales (Fuego, Agua, Tierra, etc.).
- `preparaciones`: Un arreglo detallado de objetos que describen cómo preparar y usar la planta con fines terapéuticos.
- `taxon`: Clasificación taxonómica biológica completa.

## Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos:** [MongoDB](https://www.mongodb.com/)
- **Estilos:** [SCSS Modules](https://sass-lang.com/) & CSS Modules
- **Despliegue:** Vercel (o cualquier entorno compatible con Node.js)

## Cómo Empezar

Para ejecutar el proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**

    ```bash
    git clone <repository-url>
    cd grimorio
    ```

2.  **Instala las dependencias:**
    Este proyecto usa `pnpm` como gestor de paquetes.

    ```bash
    pnpm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade tu cadena de conexión de MongoDB:

    ```
    MONGODB_URI=tu_cadena_de_conexion_de_mongodb
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 🗄️ Gestión y Lógica de Datos

La información es gestionada a través de un estado centralizado que compila el catálogo de plantas. El flujo de datos está diseñado para permitir:

- **Búsqueda y Filtrado Especializado:** Los usuarios pueden buscar remedios cruzando variables; por ejemplo, filtrar plantas que alivien el _dolor articular_ mediante _cataplasmas_, o aquellas que traten el _dolor emocional_ a través de _sahumerios_.
- **Relación Holística:** El modelo de datos vincula directamente el tratamiento físico del dolor con el espectro energético, respetando la cosmovisión ancestral donde el cuerpo físico y el espíritu son un todo interconectado.
- **Uso Seguro y Responsable:** La estructura de datos exige la inclusión de métodos de preparación exactos, dosis recomendadas y precauciones, manteniendo un registro seguro del conocimiento.

## 🚀 Instalación y Uso Local

```bash
# Clonar el repositorio
git clone [https://github.com/CachorroC/grimorio.git](https://github.com/CachorroC/grimorio.git)

# Navegar al directorio del proyecto
cd grimorio

# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## 🎓 Contexto Académico

Este desarrollo representa la culminación del aprendizaje en el **Diplomado de Fitoterapia y Medicina Ancestral** de la **Universidad del Rosario**. Busca ser un puente entre el rigor académico, el desarrollo de software y la vasta sabiduría tradicional colombiana, honrando las raíces de nuestra biodiversidad y ofreciendo una herramienta estructurada para el alivio integral del dolor.

---

_Desarrollado con respeto por la naturaleza, la tecnología y la sabiduría ancestral._
