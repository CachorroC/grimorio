/* eslint-disable no-unused-vars */
import styles from '#@/lib/styles/form.module.css';
import { Taxon } from '#@/lib/types/especimenTypes';

interface TaxonomySectionProps {
  taxon   : Taxon;
  onChange: ( newTaxon: Taxon ) => void;
}

export default function TaxonomySection(
  {
    taxon, onChange
  }: TaxonomySectionProps
) {
  const handleTaxonChange = (
    field: keyof Taxon, value: string
  ) => {
    onChange(
      {
        ...taxon,
        [ field ]: value,
      }
    );
  };

  const handleCladoChange = (
    index: number, value: string
  ) => {
    const newClados = [
      ...( taxon.clados || [] )
    ];
    newClados[ index ] = value;
    onChange(
      {
        ...taxon,
        clados: newClados,
      }
    );
  };

  const addClado = () => {
    onChange(
      {
        ...taxon,
        clados: [
          ...( taxon.clados || [] ),
          ''
        ],
      }
    );
  };

  const removeClado = (
    indexToRemove: number
  ) => {
    onChange(
      {
        ...taxon,
        clados: ( taxon.clados || [] ).filter(
          (
            _, index
          ) => {
            return index !== indexToRemove;
          }
        ),
      }
    );
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionSubTitle}>Taxonomía</h3>
      <div className={styles.row}>
        {[
          'dominio',
          'reino',
          'filo',
          'clase',
          'orden',
          'familia',
          'genero',
          'especie'
        ].map(
          (
            taxRank
          ) => {
            return (
              <div
                key={taxRank}
                className={`${ styles.inputGroup } ${ styles.flex1 }`}
                style={{
                  minWidth: '200px'
                }}
              >
                <label className={styles.label}>
                  {taxRank.charAt(
                    0
                  ).toUpperCase() + taxRank.slice(
                    1
                  )}
                </label>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={( taxon[ taxRank as keyof Taxon ] as string ) || ''}
                  onChange={(
                    e
                  ) => {
                    return handleTaxonChange(
                      taxRank as keyof Taxon, e.target.value
                    );
                  }}
                />
              </div>
            );
          }
        )}
      </div>

      <div className={styles.subSection} style={{
        marginTop: '1rem'
      }}
      >
        <h4>Clados</h4>
        {( taxon.clados || [] ).map(
          (
            clado, index
          ) => {
            return (
              <div key={`clado-${ index }`} className={styles.arrayItem}>
                <input
                  type="text"
                  className={styles.inputOutlined}
                  value={clado}
                  onChange={(
                    e
                  ) => {
                    return handleCladoChange(
                      index, e.target.value
                    );
                  }}
                  placeholder="Ej. Angiospermas"
                />
                <button
                  type="button"
                  className={`${ styles.button } ${ styles.deleteBtn }`}
                  onClick={() => {
                    return removeClado(
                      index
                    );
                  }}
                >
                  X
                </button>
              </div>
            );
          }
        )}
        <button
          type="button"
          className={`${ styles.button } ${ styles.addBtn }`}
          onClick={addClado}
        >
          + Añadir Clado
        </button>
      </div>
    </div>
  );
}
