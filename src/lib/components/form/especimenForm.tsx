/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {  ChangeEvent, Dispatch, SetStateAction, SubmitEventHandler, useState } from 'react';
import styles from '#@/lib/styles/form.module.css';
import { EspecimenType, IngredientesType, PreparacionType, Taxon } from '#@/lib/types/especimenTypes';
import { displayLarge,  } from '#@/lib/styles/fonts/typography.module.css';
import { upsertSpecimen } from '#@/app/actions/specimen';
// Initial empty state matching the schema
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

export default function EspecimenForm(
  {
    initialData, setIsEditing
  }: { initialData?: EspecimenType;  setIsEditing?: Dispatch<SetStateAction<boolean>>}
) {
  const [
    formData,
    setFormData
  ] = useState<EspecimenType>(
    initialData
      ? initialData
      : initialState
  );

  // --- TOP LEVEL HANDLERS ---
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
  const handleStringArrayChange = (
    field: keyof EspecimenType, index: number, value: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newArray = [
          ...( prev[ field ] as string[] )
        ];
        newArray[ index ] = value;

        return {
          ...prev,
          [ field ]: newArray
        };
      }
    );
  };

  const addStringArrayItem = (
    field: keyof EspecimenType
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          [ field ]: [
            ...( prev[ field ] as string[] ),
            ''
          ]
        };
      }
    );
  };

  const removeStringArrayItem = (
    field: keyof EspecimenType, indexToRemove: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          [ field ]: ( prev[ field ] as string[] ).filter(
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

  // Taxon Clados (nested string array)
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
  const addPreparacion = () => {
    const newPrep: PreparacionType = {
      usoTerapeutico: '',
      ingredientes  : [],
      pasos         : []
    };
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          preparaciones: [
            ...prev.preparaciones,
            newPrep
          ]
        };
      }
    );
  };

  const removePreparacion = (
    indexToRemove: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          preparaciones: prev.preparaciones.filter(
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

  const updatePreparacionField = (
    prepIndex: number, value: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          usoTerapeutico: value
        };

        return {
          ...prev,
          preparaciones: newPreps
        };
      }
    );
  };

  // Ingredientes
  const addIngrediente = (
    prepIndex: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        newPreps[ prepIndex ].ingredientes = [
          ...newPreps[ prepIndex ].ingredientes,
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

  const updateIngrediente = (
    prepIndex: number, ingIndex: number, field: keyof IngredientesType, value: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        const newIngs = [
          ...newPreps[ prepIndex ].ingredientes
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

  const removeIngrediente = (
    prepIndex: number, ingIndexToRemove: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        newPreps[ prepIndex ].ingredientes = newPreps[ prepIndex ].ingredientes.filter(
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

  // Pasos (Tuples)
  const addPaso = (
    prepIndex: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        const {
          pasos
        } = newPreps[ prepIndex ];
        // Calculate next step number based on highest existing number to avoid key collisions
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

  const updatePaso = (
    prepIndex: number, pasoIndex: number, value: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        const newPasos = [
          ...newPreps[ prepIndex ].pasos
        ];
        // Tuple: [stepNumber, instructionString]
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

  const removePaso = (
    prepIndex: number, pasoIndexToRemove: number
  ) => {
    setFormData(
      (
        prev
      ) => {
        const newPreps = [
          ...prev.preparaciones
        ];
        newPreps[ prepIndex ].pasos = newPreps[ prepIndex ].pasos.filter(
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

  // --- SUBMIT ---
  // --- SUBMIT ---
  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();

    // Clean up the payload: remove any empty strings from the string arrays
    const payloadToSave: EspecimenType = {
      ...formData,
      nombresComunes: formData.nombresComunes.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      partesUtiles: formData.partesUtiles.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      propiedadesMedicinales: formData.propiedadesMedicinales.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      correspondenciasEnergeticas: formData.correspondenciasEnergeticas.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      malesEmocionales: formData.malesEmocionales.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      malesFisicos: formData.malesFisicos.filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      taxon: {
        ...formData.taxon,
        clados: ( formData.taxon.clados || [] ).filter(
          (
            val
          ) => {
            return val.trim() !== '';
          }
        ),
      },
      // preparaciones are deeply nested, but empty strings there are less likely
      // to break the DB schema unless you want strict validation here too.
    };

    try {
      // Assuming upsertSpecimen is your API fetch wrapper targeting EspecimentModel.upsertPlantaMedicinal
      const response = await upsertSpecimen(
        {
          data: payloadToSave
        }
      );

      // Treat as success if it's a perfect success OR if DB succeeded but JSON failed
      if ( response.success || ( response.data && response.failed === 'file' ) ) {
        const savedData = response.data as any as EspecimenType;

        // Update local UI state directly with the saved data
        // (No need to map back to {id, value} if the component uses raw string arrays)
        setFormData(
          {
            ...savedData,
            // Ensure arrays are initialized even if DB returns null/undefined
            nombresComunes             : savedData.nombresComunes || [],
            partesUtiles               : savedData.partesUtiles || [],
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

        // Log a soft warning if the file backup failed, but still proceed
        if ( response.failed === 'file' ) {
          console.warn(
            'Note: Database updated, but JSON backup failed:', response.errors?.file
          );
        }

      } else {
        // Total failure or Database failure
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

    if ( setIsEditing ) {
      setIsEditing(
        false
      );
    }
  };

  // --- HELPER RENDERER FOR SIMPLE STRING ARRAYS ---
  const renderStringArrayInput = (
    title: string, field: keyof EspecimenType
  ) => {
    const arr = formData[ field ] as string[];

    return (
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        {arr?.map(
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
                <button type="button" className={`${ styles.button } ${ styles.deleteBtn }`} onClick={() => {
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
        <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={() => {
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
            onChange={ handleInputChange}


            required
          />
          <label className={styles.label}>URL de la imagen</label>
        </div>
        <input name="imageUrl" className={styles.input} value={formData.imageUrl ?? ''} onChange={handleInputChange} />

      </div>
      {
        renderStringArrayInput(
          'Partes utiles',
          'partesUtiles'
        )
      }
      { renderStringArrayInput(
        'Nombres Comunes',
        'nombresComunes'
      )}
      {renderStringArrayInput(
        'Propiedades Medicinales',
        'propiedadesMedicinales'
      )}
      {/* Note: Using exact spelling from your schema: correspondenciasEnergeticas */}
      {renderStringArrayInput(
        'Correspondencias Energéticas',
        'correspondenciasEnergeticas'
      )}
      {renderStringArrayInput(
        'Males Emocionales',
        'malesEmocionales'
      )}
      {renderStringArrayInput(
        'Males Físicos',
        'malesFisicos'
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
                        taxRank as keyof Taxon,
                        e.target.value
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
          {formData.taxon.clados?.map(
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
                  <button type="button" className={ `${ styles.button } ${ styles.deleteBtn }` } onClick={
                    () => {
                      return removeClado(
                        index
                      );
                    }
                  }
                  >X</button>
                </div>
              );
            }
          )}
          <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={addClado}>+ Añadir Clado</button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Preparaciones</h3>
        {formData.preparaciones.map(
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
                        prepIndex, e.target.value
                      );
                    }}
                    placeholder="Ej. Para el dolor de estómago"
                  />
                </div>

                {/* Ingredientes */}
                <div className={styles.subSection} style={{
                  backgroundColor: '#fff'
                }}
                >
                  <label className={styles.label}>Ingredientes</label>
                  {prep.ingredientes.map(
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
                            onChange={
                              (
                                e
                              ) => {
                                return updateIngrediente(
                                  prepIndex, ingIndex, 'ingrediente', e.target.value
                                );
                              }
                            }
                          />
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Cantidad (Ej. 5 gramos)"
                            value={ing.cantidad}
                            onChange={
                              (
                                e
                              ) => {
                                return updateIngrediente(
                                  prepIndex, ingIndex, 'cantidad', e.target.value
                                );
                              }
                            }
                          />
                          <button type="button" className={`${ styles.button } ${ styles.deleteBtn }`} onClick={() => {
                            return removeIngrediente(
                              prepIndex, ingIndex
                            );
                          }}
                          >X</button>
                        </div>
                      );
                    }
                  )}
                  <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={() => {
                    return addIngrediente(
                      prepIndex
                    );
                  }}
                  >+ Añadir Ingrediente</button>
                </div>

                {/* Pasos (Tuple Handling) */}
                <div className={styles.subSection} style={{
                  backgroundColor: 'var(--primary)'
                }}
                >
                  <label className={styles.label}>Pasos a seguir</label>
                  {prep.pasos.map(
                    (
                      pasoTuple, pasoIndex
                    ) => {
                      const [
                        pasoNum,
                        instruction
                      ] = pasoTuple;

                      return (
                        <div key={`paso-${ prepIndex }-${ pasoNum }`} className={styles.arrayItem}>
                          {/* Tuple index 0 used for visual step number and React Key */}
                          <div className={ styles.stepNumber }>
                            { pasoNum }
                          </div>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="Instrucción del paso"
                            value={instruction}
                            onChange={
                              (
                                e
                              ) => {
                                return updatePaso(
                                  prepIndex, pasoIndex, e.target.value
                                );
                              }
                            }
                          />
                          <button type="button" className={`${ styles.button } ${ styles.deleteBtn }`} onClick={() => {
                            return removePaso(
                              prepIndex, pasoIndex
                            );
                          }}
                          >X</button>
                        </div>
                      );
                    }
                  )}
                  <button type="button" className={`${ styles.button } ${ styles.addBtn }`} onClick={() => {
                    return addPaso(
                      prepIndex
                    );
                  }}
                  >+ Añadir Paso</button>
                </div>

                <button type="button" className={`${ styles.button } ${ styles.deleteBtn }`} style={{
                  marginTop: '1rem'
                }} onClick={() => {
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