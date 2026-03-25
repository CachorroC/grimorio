/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChangeEvent, Dispatch, SetStateAction, SubmitEventHandler, useState } from 'react';
import styles from '#@/lib/styles/form.module.css';
import { EspecimenType, IngredientesType, PreparacionType, Taxon } from '#@/lib/types/especimenTypes';
import { displayLarge } from '#@/lib/styles/fonts/typography.module.css';
import { upsertSpecimen } from '#@/app/actions/specimen';

/**
 * Initial empty state matching the EspecimenType schema.
 * Provides a safe baseline to prevent undefined errors when creating a new specimen.
 */
const initialState: EspecimenType = {
  nombreCientifico: '',
  imageUrl        : '',
  partesUtiles    : [
    ''
  ],
  nombresComunes: [
    ''
  ],
  propiedadesMedicinales: [
    ''
  ],
  esenciasFlorales: [
    ''
  ],
  correspondenciasEnergeticas: [
    ''
  ],
  malesEmocionales: [
    ''
  ],
  malesFisicos: [
    ''
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
    clados : [
      ''
    ]
  },
  preparaciones: []
};

/**
 * @component EspecimenForm
 * @description A complex form component for creating or editing botanical/medicinal specimens.
 * * ### Form Flow:
 * 1. **Initialization:** The form initializes its state (`formData`) by deeply merging `initialData` (if provided)
 * with `initialState`. This ensures all arrays and nested objects exist, preventing runtime crashes.
 * 2. **Interaction:** Users interact with top-level fields, arrays, and deeply nested arrays
 * (e.g., `preparaciones[i].ingredientes`). Specialized handlers clone the necessary parts of the state
 * to maintain React's immutability rules.
 * 3. **Sanitization:** Upon submission (`handleSubmit`), the form cleans up the data by removing empty
 * strings from arrays so that blank inputs aren't saved to the database.
 * 4. **Submission:** Sends the sanitized payload to the server via `upsertSpecimen`. On success,
 * it updates the local state and optionally closes the editing view.
 *
 * @param {Object} props - The component props.
 * @param {EspecimenType} [props.initialData] - The existing specimen data to populate the form for editing.
 * @param {Dispatch<SetStateAction<boolean>>} [props.setIsEditing] - State setter to toggle the form's visibility or edit mode.
 */
export default function EspecimenForm(
  {
    initialData, setIsEditing
  }: { initialData?: EspecimenType; setIsEditing?: Dispatch<SetStateAction<boolean>>}
) {

  /**
   * State initialization:
   * We use a lazy initialization function to safely merge incoming `initialData`
   * and ensure that no array fields are left as `undefined` or `null`.
   */
  const [
    formData,
    setFormData
  ] = useState<EspecimenType>(
    () => {
      if ( !initialData ) {
        return initialState;
      }

      return {
        ...initialState,
        ...initialData,
        partesUtiles               : initialData.partesUtiles || [],
        nombresComunes             : initialData.nombresComunes || [],
        propiedadesMedicinales     : initialData.propiedadesMedicinales || [],
        esenciasFlorales           : initialData.esenciasFlorales || [],
        correspondenciasEnergeticas: initialData.correspondenciasEnergeticas || [],
        malesEmocionales           : initialData.malesEmocionales || [],
        malesFisicos               : initialData.malesFisicos || [],
        preparaciones              : initialData.preparaciones || [],
        taxon                      : {
          ...initialState.taxon,
          ...( initialData.taxon || {} ),
          clados: initialData.taxon?.clados || []
        }
      };
    } 
  );

  // --- TOP LEVEL HANDLERS ---

  /**
   * Updates top-level primitive fields in the form state (e.g., `nombreCientifico`, `imageUrl`).
   * @param {ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> 
  ) => {
    setFormData(
      {
        ...formData,
        [ e.target.name ]: e.target.value
      } 
    );
  };

  /**
   * Updates fields specifically within the nested `taxon` object.
   * @param {keyof Taxon} field - The specific taxonomy rank to update (e.g., 'dominio', 'reino').
   * @param {string} value - The new value for the taxonomic rank.
   */
  const handleTaxonChange = (
    field: keyof Taxon, value: string 
  ) => {
    setFormData(
      {
        ...formData,
        taxon: {
          ...formData.taxon,
          [ field ]: value
        }
      } 
    );
  };

  // --- SIMPLE STRING ARRAY HANDLERS ---

  /**
   * Updates a specific value within a generic top-level string array.
   * @param {keyof EspecimenType} field - The key of the array in the state (e.g., 'nombresComunes').
   * @param {number} index - The index of the item being modified.
   * @param {string} value - The new string value.
   */
  const handleStringArrayChange = (
    field: keyof EspecimenType, index: number, value: string 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const safeArray = ( prev[ field ] as string[] ) || [];
        const newArray = [
          ...safeArray
        ];
        newArray[ index ] = value;

        return {
          ...prev,
          [ field ]: newArray
        };
      } 
    );
  };

  /**
   * Appends a new, empty string to a generic top-level string array.
   * @param {keyof EspecimenType} field - The key of the array to append to.
   */
  const addStringArrayItem = (
    field: keyof EspecimenType 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const safeArray = ( prev[ field ] as string[] ) || [];

        return {
          ...prev,
          [ field ]: [
            ...safeArray,
            ''
          ]
        };
      } 
    );
  };

  /**
   * Removes an item from a generic top-level string array by its index.
   * @param {keyof EspecimenType} field - The key of the array to modify.
   * @param {number} indexToRemove - The index of the item to delete.
   */
  const removeStringArrayItem = (
    field: keyof EspecimenType, indexToRemove: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const safeArray = ( prev[ field ] as string[] ) || [];

        return {
          ...prev,
          [ field ]: safeArray.filter(
            (
              _, index 
            ) => {
              return index !== indexToRemove;
            } 
          )
        };
      } 
    );
  };

  // --- TAXON CLADOS HANDLERS ---

  /**
   * Updates a specific value within the deeply nested `taxon.clados` string array.
   * @param {number} index - The index of the clade being modified.
   * @param {string} value - The new clade value.
   */
  const handleCladoChange = (
    index: number, value: string 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newClados = [
          ...( prev.taxon.clados || [] )
        ];
        newClados[ index ] = value;

        return {
          ...prev,
          taxon: {
            ...prev.taxon,
            clados: newClados
          }
        };
      } 
    );
  };

  /**
   * Appends a new, empty string to the `taxon.clados` array.
   */
  const addClado = () => {
    setFormData(
      (
        prev 
      ) => {
        return {
          ...prev,
          taxon: {
            ...prev.taxon,
            clados: [
              ...( prev.taxon.clados || [] ),
              ''
            ]
          }
        };
      } 
    );
  };

  /**
   * Removes a clade from the `taxon.clados` array by its index.
   * @param {number} indexToRemove - The index of the clade to delete.
   */
  const removeClado = (
    indexToRemove: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        return {
          ...prev,
          taxon: {
            ...prev.taxon,
            clados: ( prev.taxon.clados || [] ).filter(
              (
                _, index 
              ) => {
                return index !== indexToRemove;
              } 
            )
          }
        };
      } 
    );
  };

  // --- PREPARACIONES HANDLERS ---

  /**
   * Adds a completely new, empty preparation object to the `preparaciones` array.
   */
  const addPreparacion = () => {
    const newPrep: PreparacionType = {
      usoTerapeutico   : '',
      formaDeAplicacion: '',
      ingredientes     : [],
      pasos            : []
    };
    setFormData(
      (
        prev 
      ) => {
        return {
          ...prev,
          preparaciones: [
            ...( prev.preparaciones || [] ),
            newPrep
          ]
        };
      } 
    );
  };

  /**
   * Removes an entire preparation object from the `preparaciones` array.
   * @param {number} indexToRemove - The index of the preparation to delete.
   */
  const removePreparacion = (
    indexToRemove: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        return {
          ...prev,
          preparaciones: ( prev.preparaciones || [] ).filter(
            (
              _, index 
            ) => {
              return index !== indexToRemove;
            } 
          )
        };
      } 
    );
  };

  /**
   * Updates top-level string fields inside a specific preparation object.
   * @param {number} prepIndex - The index of the preparation being modified.
   * @param {keyof Pick<PreparacionType, 'usoTerapeutico' | 'formaDeAplicacion'>} field - The field to update.
   * @param {string} value - The new value for the field.
   */
  const updatePreparacionField = (
    prepIndex: number, field: keyof Pick<PreparacionType, 'usoTerapeutico' | 'formaDeAplicacion'>, value: string
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          [ field ]: value
        };

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  // --- INGREDIENTES HANDLERS ---

  /**
   * Adds an empty ingredient object to a specific preparation.
   * @param {number} prepIndex - The index of the preparation receiving the new ingredient.
   */
  const addIngrediente = (
    prepIndex: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ].ingredientes = [
          ...( newPreps[ prepIndex ].ingredientes || [] ),
          {
            ingrediente: '',
            cantidad   : '' 
          }
        ];

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  /**
   * Updates a specific field within a specific ingredient of a specific preparation.
   * @param {number} prepIndex - The index of the parent preparation.
   * @param {number} ingIndex - The index of the ingredient being modified.
   * @param {keyof IngredientesType} field - The field to update ('ingrediente' or 'cantidad').
   * @param {string} value - The new value.
   */
  const updateIngrediente = (
    prepIndex: number, ingIndex: number, field: keyof IngredientesType, value: string
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        const newIngs = [
          ...( newPreps[ prepIndex ].ingredientes || [] )
        ];

        newIngs[ ingIndex ] = {
          ...newIngs[ ingIndex ],
          [ field ]: value
        };
        newPreps[ prepIndex ].ingredientes = newIngs;

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  /**
   * Removes an ingredient from a specific preparation.
   * @param {number} prepIndex - The index of the parent preparation.
   * @param {number} ingIndexToRemove - The index of the ingredient to delete.
   */
  const removeIngrediente = (
    prepIndex: number, ingIndexToRemove: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ].ingredientes = ( newPreps[ prepIndex ].ingredientes || [] ).filter(
          (
            _, i 
          ) => {
            return i !== ingIndexToRemove;
          }
        );

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  // --- PASOS HANDLERS ---

  /**
   * Adds a new step (tuple of `[stepNumber, instructionString]`) to a specific preparation.
   * Automatically calculates the next logical step number to avoid key collisions.
   * @param {number} prepIndex - The index of the parent preparation.
   */
  const addPaso = (
    prepIndex: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        const pasos = newPreps[ prepIndex ].pasos || [];

        // Calculate next step number based on the highest existing number
        const nextStepNum = pasos.length > 0
          ? Math.max(
            ...pasos.map(
              p => {
                return p[ 0 ];
              } 
            ) 
          ) + 1
          : 1;

        newPreps[ prepIndex ].pasos = [
          ...pasos,
          [
            nextStepNum,
            ''
          ]
        ];

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  /**
   * Updates the instruction text of a specific step tuple within a preparation.
   * @param {number} prepIndex - The index of the parent preparation.
   * @param {number} pasoIndex - The array index of the tuple being modified.
   * @param {string} value - The new instruction text for the step.
   */
  const updatePaso = (
    prepIndex: number, pasoIndex: number, value: string 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        const newPasos = [
          ...( newPreps[ prepIndex ].pasos || [] )
        ];

        // Tuple: [stepNumber, instructionString]
        // We keep the stepNumber intact and only update the instruction string
        newPasos[ pasoIndex ] = [
          newPasos[ pasoIndex ][ 0 ],
          value
        ];
        newPreps[ prepIndex ].pasos = newPasos;

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  /**
   * Removes a step tuple from a specific preparation.
   * @param {number} prepIndex - The index of the parent preparation.
   * @param {number} pasoIndexToRemove - The array index of the tuple to delete.
   */
  const removePaso = (
    prepIndex: number, pasoIndexToRemove: number 
  ) => {
    setFormData(
      (
        prev 
      ) => {
        const newPreps = [
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ].pasos = ( newPreps[ prepIndex ].pasos || [] ).filter(
          (
            _, i 
          ) => {
            return i !== pasoIndexToRemove;
          }
        );

        return {
          ...prev,
          preparaciones: newPreps
        };
      } 
    );
  };

  // --- SUBMISSION HANDLER ---

  /**
   * Handles form submission.
   * Cleans the state by filtering out empty strings from arrays before sending it to the server.
   * Parses the response and updates the local UI state with the safely returned database object.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (
    e 
  ) => {
    e.preventDefault();

    // 1. Sanitization: Clean up the payload by removing any empty strings from string arrays
    const payloadToSave: EspecimenType = {
      ...formData,
      nombresComunes: ( formData.nombresComunes || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      partesUtiles: ( formData.partesUtiles || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      esenciasFlorales: ( formData.esenciasFlorales || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      propiedadesMedicinales: ( formData.propiedadesMedicinales || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      correspondenciasEnergeticas: ( formData.correspondenciasEnergeticas || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      malesEmocionales: ( formData.malesEmocionales || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      malesFisicos: ( formData.malesFisicos || [] ).filter(
        val => {
          return val.trim() !== '';
        } 
      ),
      taxon: {
        ...formData.taxon,
        clados: ( formData.taxon.clados || [] ).filter(
          val => {
            return val.trim() !== '';
          } 
        ),
      },
    };

    try {
      // 2. Server Request: Call the server action
      const response = await upsertSpecimen(
        {
          data: payloadToSave 
        } 
      );

      // 3. Response Handling: Treat as success if perfect success OR if DB succeeded but JSON backup failed
      if ( response.success || ( response.data && response.failed === 'file' ) ) {
        const savedData = response.data as any as EspecimenType;

        // Update local UI state directly with the sanitized, saved data
        setFormData(
          {
            ...savedData,
            nombresComunes             : savedData.nombresComunes || [],
            partesUtiles               : savedData.partesUtiles || [],
            esenciasFlorales           : savedData.esenciasFlorales || [],
            propiedadesMedicinales     : savedData.propiedadesMedicinales || [],
            correspondenciasEnergeticas: savedData.correspondenciasEnergeticas || [],
            malesEmocionales           : savedData.malesEmocionales || [],
            malesFisicos               : savedData.malesFisicos || [],
            preparaciones              : savedData.preparaciones || [],
            taxon                      : {
              ...savedData.taxon,
              clados: savedData.taxon?.clados || []
            }
          } 
        );

        console.log(
          'Successfully saved to MongoDB:', savedData 
        );

        // Soft warning if the secondary backup process failed
        if ( response.failed === 'file' ) {
          console.warn(
            'Note: Database updated, but JSON backup failed:', response.errors?.file 
          );
        }

      } else {
        console.error(
          'Failed to save. Point of failure:', response.failed 
        );
        console.error(
          'Error details:', response.errors 
        );
      }
    } catch ( error ) {
      console.error(
        'Network or server error:', error 
      );
    }

    console.log(
      'fin del submit' 
    );

    // 4. Cleanup: Close the editing view if a setter was provided
    if ( setIsEditing ) {
      console.log(
        'si hay setIsEditing' 
      );
      setIsEditing(
        false 
      );
    }
  };

  // --- RENDER HELPERS ---

  /**
   * Helper function to DRY up the JSX for rendering generic string array inputs.
   * @param {string} title - The display title for the section (e.g., 'Nombres Comunes').
   * @param {keyof EspecimenType} field - The key of the array in the form data.
   * @returns JSX.Element
   */
  const renderStringArrayInput = (
    title: string, field: keyof EspecimenType 
  ) => {
    const arr = ( formData[ field ] as string[] ) || [];

    return (
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {arr.map(
          (
            item, index 
          ) => {
            return (
              <div key={`${ field }-${ index }`} className={styles.arrayItem}>
                <input
                  type="text"
                  className={styles.input}
                  value={item}
                  onChange={(
                    e 
                  ) => {
                    return handleStringArrayChange(
                      field, index, e.target.value 
                    );
                  }}
                  placeholder={`Añadir ${ title.toLowerCase() }`}
                />
                <button
                  type="button"
                  className={`${ styles.button } ${ styles.deleteBtn }`}
                  onClick={() => {
                    return removeStringArrayItem(
                      field, index 
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
          onClick={() => {
            return addStringArrayItem(
              field 
            );
          }}
        >
          + Añadir {title}
        </button>
      </div>
    );
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={displayLarge}>Registrar Espécimen</h2>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Información Principal</h3>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Nombre Científico</label>
          <input
            type="text"
            name="nombreCientifico"
            className={styles.input}
            value={formData.nombreCientifico}
            onChange={handleInputChange}
            required
          />
          <label className={styles.label}>URL de la imagen</label>
        </div>
        <input name="imageUrl" className={styles.input} value={formData.imageUrl ?? ''} onChange={handleInputChange} />
      </div>

      {renderStringArrayInput(
        'Nombres Comunes', 'nombresComunes' 
      )}
      {renderStringArrayInput(
        'Partes Útiles', 'partesUtiles' 
      )}
      {renderStringArrayInput(
        'Propiedades Medicinales', 'propiedadesMedicinales' 
      )}
      {renderStringArrayInput(
        'Correspondencias Energéticas', 'correspondenciasEnergeticas' 
      )}
      {renderStringArrayInput(
        'Qué males emocionales cura', 'malesEmocionales' 
      )}
      {renderStringArrayInput(
        'Que males físicos cura', 'malesFisicos' 
      )}
      {renderStringArrayInput(
        'Esencias Florales', 'esenciasFlorales' 
      )}

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Taxonomía</h3>
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
                <div key={taxRank} className={`${ styles.inputGroup } ${ styles.flex1 }`} style={{
                  minWidth: '200px' 
                }}
                >
                  <label className={styles.label}>{taxRank.charAt(
                    0 
                  )
                    .toUpperCase() + taxRank.slice(
                    1 
                  )}</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={formData.taxon[ taxRank as keyof Taxon ] as string || ''}
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
          {( formData.taxon.clados || [] ).map(
            (
              clado, index 
            ) => {
              return (
                <div key={`clado-${ index }`} className={styles.arrayItem}>
                  <input
                    type="text"
                    className={styles.input}
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
          <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={addClado}>
            + Añadir Clado
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Preparaciones</h3>
        {( formData.preparaciones || [] ).map(
          (
            prep, prepIndex 
          ) => {
            return (
              <div key={`prep-${ prepIndex }`} className={styles.subSection}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Uso Terapéutico</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={prep.usoTerapeutico}
                    onChange={(
                      e 
                    ) => {
                      return updatePreparacionField(
                        prepIndex, 'usoTerapeutico', e.target.value 
                      );
                    }}
                    placeholder="Ej. Para el dolor de estómago"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Forma de Aplicación</label>
                  <input
                    type="text"
                    className={styles.input}
                    value={prep.formaDeAplicacion || ''}
                    onChange={(
                      e 
                    ) => {
                      return updatePreparacionField(
                        prepIndex, 'formaDeAplicacion', e.target.value 
                      );
                    }}
                    placeholder="Ej. Cataplasma, Infusión, Tintura..."
                  />
                </div>

                {/* Ingredientes */}
                <div className={styles.subSection} style={{
                  backgroundColor: '#fff' 
                }}
                >
                  <label className={styles.label}>Ingredientes</label>
                  {( prep.ingredientes || [] ).map(
                    (
                      ing, ingIndex 
                    ) => {
                      return (
                        <div key={`ing-${ prepIndex }-${ ingIndex }`} className={styles.row} style={{
                          marginBottom: '0.5rem' 
                        }}
                        >
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Ingrediente (Ej. Romero en polvo)"
                            value={ing.ingrediente}
                            onChange={(
                              e 
                            ) => {
                              return updateIngrediente(
                                prepIndex, ingIndex, 'ingrediente', e.target.value 
                              );
                            }}
                          />
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Cantidad (Ej. 5 gramos)"
                            value={ing.cantidad}
                            onChange={(
                              e 
                            ) => {
                              return updateIngrediente(
                                prepIndex, ingIndex, 'cantidad', e.target.value 
                              );
                            }}
                          />
                          <button
                            type="button"
                            className={`${ styles.button } ${ styles.deleteBtn }`}
                            onClick={() => {
                              return removeIngrediente(
                                prepIndex, ingIndex 
                              );
                            }}
                          >
                            X
                          </button>
                        </div>
                      );
                    } 
                  )}
                  <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={() => {
                    return addIngrediente(
                      prepIndex 
                    );
                  }}
                  >
                    + Añadir Ingrediente
                  </button>
                </div>

                {/* Pasos */}
                <div
                  className={styles.subSection}
                  style={{
                    backgroundColor: 'var(--primary-container)',
                    color          : 'var(--on-primary-container)' 
                  }}
                >
                  <label className={styles.label} style={{
                    color: 'var(--on-primary-container)' 
                  }}
                  >
                    Pasos a seguir
                  </label>
                  {( prep.pasos || [] ).map(
                    (
                      pasoTuple, pasoIndex 
                    ) => {
                      const [
                        pasoNum,
                        instruction
                      ] = pasoTuple;

                      return (
                        <div key={`paso-${ prepIndex }-${ pasoNum }`} className={styles.arrayItem}>
                          <div className={styles.stepNumber}>{pasoNum}</div>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Instrucción del paso"
                            value={instruction}
                            onChange={(
                              e 
                            ) => {
                              return updatePaso(
                                prepIndex, pasoIndex, e.target.value 
                              );
                            }}
                          />
                          <button
                            type="button"
                            className={`${ styles.button } ${ styles.deleteBtn }`}
                            onClick={() => {
                              return removePaso(
                                prepIndex, pasoIndex 
                              );
                            }}
                          >
                            X
                          </button>
                        </div>
                      );
                    } 
                  )}
                  <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={() => {
                    return addPaso(
                      prepIndex 
                    );
                  }}
                  >
                    + Añadir Paso
                  </button>
                </div>

                <button
                  type="button"
                  className={`${ styles.button } ${ styles.deleteBtn }`}
                  style={{
                    marginTop: '1rem' 
                  }}
                  onClick={() => {
                    return removePreparacion(
                      prepIndex 
                    );
                  }}
                >
                  Eliminar Preparación Completa
                </button>
              </div>
            );
          } 
        )}
        <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={addPreparacion}>
          + Añadir Nueva Preparación
        </button>
      </div>

      <button type="submit" className={`${ styles.button } ${ styles.submitBtn }`}>
        Guardar Espécimen
      </button>
    </form>
  );
}