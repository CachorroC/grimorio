# Grimorio: Un Herbario Digital de Plantas Ancestrales Colombianas

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
