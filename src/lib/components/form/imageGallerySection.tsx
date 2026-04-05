/* eslint-disable no-unused-vars */
import styles from '#@/lib/styles/form.module.css';
import ToggleButton from './toggleButton';
import { PlantDictionary } from '#@/lib/types/especimenTypes';

interface ImageGallerySectionProps {
  includeImagenes: boolean;
  onToggleInclude: ( enabled: boolean ) => void;
  imagenes       : PlantDictionary | undefined;
  onChange       : ( newImagenes: PlantDictionary ) => void;
}

export default function ImageGallerySection(
  {
    includeImagenes, onToggleInclude, imagenes, onChange 
  }: ImageGallerySectionProps 
) {
  const currentImagenes = imagenes || {
    flor: {
      src: '',
      alt: '' 
    },
    hojas: {
      src: '',
      alt: '' 
    },
  };

  const handleImagenChange = (
    plantKey: keyof PlantDictionary, field: 'src' | 'alt', value: string 
  ) => {
    onChange(
      {
        ...currentImagenes,
        [ plantKey ]: {
          ...( currentImagenes[ plantKey ] || {
            src: '',
            alt: '' 
          } ),
          [ field ]: value,
        },
      } 
    );
  };

  return (
    <div className={styles.section}>
      <div style={{
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'space-between',
        marginBottom  : '1rem' 
      }}
      >
        <h3 className={styles.sectionSubTitle} style={{
          margin: 0 
        }}
        >
          Imágenes Detalladas de la planta
        </h3>
        <ToggleButton
          checked={includeImagenes}
          onChange={(
            e 
          ) => {
            return onToggleInclude(
              e.target.checked 
            );
          }}
          style={{
            fontWeight: 'bold' 
          }}
        >
          Habilitar Galería de Imágenes
        </ToggleButton>
      </div>

      {includeImagenes && (
        <>
          <div className={styles.subSection} style={{
            marginBottom: '1rem' 
          }}
          >
            <h4>Flor (Requerida)</h4>
            <div className={styles.row}>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>URL (src)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.flor?.src || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'flor', 'src', e.target.value 
                    );
                  }}
                  placeholder="Ej. https://.../flor.jpg"
                  required={includeImagenes}
                />
              </div>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>Descripción (alt)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.flor?.alt || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'flor', 'alt', e.target.value 
                    );
                  }}
                  placeholder="Ej. Fotografía detallada de la flor..."
                  required={includeImagenes}
                />
              </div>
            </div>
          </div>

          <div className={styles.subSection} style={{
            marginBottom: '1rem' 
          }}
          >
            <h4>Hojas (Requerida)</h4>
            <div className={styles.row}>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>URL (src)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.hojas?.src || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'hojas', 'src', e.target.value 
                    );
                  }}
                  placeholder="Ej. https://.../hojas.jpg"
                  required={includeImagenes}
                />
              </div>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>Descripción (alt)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.hojas?.alt || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'hojas', 'alt', e.target.value 
                    );
                  }}
                  placeholder="Ej. Detalle de las hojas..."
                  required={includeImagenes}
                />
              </div>
            </div>
          </div>

          <div className={styles.subSection} style={{
            marginBottom: '1rem' 
          }}
          >
            <h4>Semillas (Opcional)</h4>
            <div className={styles.row}>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>URL (src)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.semillas?.src || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'semillas', 'src', e.target.value 
                    );
                  }}
                  placeholder="Ej. https://.../semillas.jpg"
                />
              </div>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>Descripción (alt)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.semillas?.alt || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'semillas', 'alt', e.target.value 
                    );
                  }}
                  placeholder="Ej. Detalle de las semillas..."
                />
              </div>
            </div>
          </div>

          <div className={styles.subSection} style={{
            marginBottom: '1rem' 
          }}
          >
            <h4>Tallo (Opcional)</h4>
            <div className={styles.row}>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>URL (src)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.tallo?.src || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'tallo', 'src', e.target.value 
                    );
                  }}
                  placeholder="Opcional"
                />
              </div>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>Descripción (alt)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.tallo?.alt || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'tallo', 'alt', e.target.value 
                    );
                  }}
                  placeholder="Opcional"
                />
              </div>
            </div>
          </div>

          <div className={styles.subSection}>
            <h4>Preparación (Opcional)</h4>
            <div className={styles.row}>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>URL (src)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.preparacion?.src || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'preparacion', 'src', e.target.value 
                    );
                  }}
                  placeholder="Opcional"
                />
              </div>
              <div className={styles.inputGroup} style={{
                flex: 1 
              }}
              >
                <label className={styles.label}>Descripción (alt)</label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={currentImagenes.preparacion?.alt || ''}
                  onChange={(
                    e 
                  ) => {
                    return handleImagenChange(
                      'preparacion', 'alt', e.target.value 
                    );
                  }}
                  placeholder="Opcional"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
