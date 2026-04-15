import styles from '#@/lib/styles/creditos.module.css';


const Credits = () => {
  return (
    <section className={styles.creditsContainer} aria-labelledby="credits-title">
      <div className={styles.contentWrapper}>

        <header className={styles.header}>
          <h1 id="credits-title" className={styles.title}>Créditos</h1>
          <p className={styles.subtitle}>Detrás de Grimorio</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.creditBlock}>
            <span className={styles.role}>Desarrollo y Compilación Web</span>
            <h2 className={styles.name}>Juan Camilo Suárez Ramirez</h2>
          </div>

          <div className={styles.creditBlock}>
            <span className={styles.role}>Asesoría Académica</span>
            <h2 className={styles.name}>Equipo Docente Universitario</h2>
            {/* Puedes reemplazar esto con el nombre de tu director(a) de grado */}
          </div>

          <div className={styles.creditBlock}>
            <span className={styles.role}>Investigación Botánica</span>
            <h2 className={styles.name}>Luis Enrique Rodriguez</h2>
            <h2 className={styles.name}>Marlon Rangel</h2>
          </div>

          <div className={styles.creditBlock}>
            <span className={styles.role}>Diseño UI/UX</span>
            <h2 className={styles.name}>Juan Camilo Suárez Ramirez</h2>
          </div>

          <div className={styles.creditBlock}>
            <span className={styles.role}>Fotografía y Archivo</span>
            <h2 className={styles.name}>Registros de Campo</h2>
            <h2 className={styles.name}>Búsquedas web en repositorios públicos</h2>

          </div>

          <div className={styles.creditBlock}>
            <span className={styles.role}>Agradecimiento Especial</span>
            <h2 className={styles.name}>A las plantas maestras</h2>
            <h2 className={styles.name}>y los ciclos del agua</h2>
          </div>
        </div>

        <div className={styles.institutionBlock}>
          <h3 className={styles.institutionName}>Universidad del Rosario</h3>
          <p className={styles.diplomaName}>Diplomado de Fitoterapia y Medicina Ancestral</p>
        </div>

        <footer className={styles.footer}>
          <p>{'"Que este conocimiento vuelva a la tierra como semilla, y florezca en sanación para quienes lo buscan."'}</p>
          <div className={styles.leafIcon}>✧</div>
        </footer>

      </div>
    </section>
  );
};

export default Credits;