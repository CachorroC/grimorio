/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChangeEvent,
  Dispatch,
  SetStateAction,
  SubmitEventHandler,
  useState,
  ReactNode,
  CSSProperties } from 'react';
import styles from '#@/lib/styles/form.module.css';
import { EspecimenType,
  IngredientesType,
  PreparacionType,
  Taxon,
  PolaridadEnergeticaType,
  listaChakras,
  PlantDictionary, } from '#@/lib/types/especimenTypes';
import { displayLarge } from '#@/lib/styles/fonts/typography.module.css';
import { upsertSpecimen, deleteSpecimen } from '#@/app/actions/specimen';
import { icon } from '#@/lib/styles/buttons.module.css';
import ConfirmModal from '../confirmModal';
import toggleStyles from '#@/lib/styles/toggle.module.css';
import ToggleButton from './toggleButton';

// Helper component for the Custom Toggle Switch
const ToggleSwitch = (
  {
    checked,
    onChange,
    children,
    style
  }: {
    checked : boolean;
    onChange: ( e: ChangeEvent<HTMLInputElement> ) => void;
    children: ReactNode;
    style?  : CSSProperties;
  }
) => {
  return (
    <label className={toggleStyles.toggleContainer} style={style}>
      <input
        type="checkbox"
        className={toggleStyles.toggleInput}
        checked={checked}
        onChange={onChange}
      />
      <span className={toggleStyles.toggleSlider}></span>
      <span className={toggleStyles.toggleLabel}>{children}</span>
    </label>
  );
};

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
    ],
  },
  preparaciones      : [],
  elementosAsociados : 'Tierra',
  chakrasAsociados   : [],
  polaridadEnergetica: [
    'Feminine'
  ],
  // Mantenemos una estructura inicial segura en el estado para evitar errores de undefined en los inputs
  imagenes: {
    flor: {
      src: '',
      alt: ''
    },
    hojas: {
      src: '',
      alt: ''
    },
  },
};

export default function EspecimenForm(
  {
    initialData,
    setIsEditing,
  }: {
    initialData? : EspecimenType;
    setIsEditing?: Dispatch<SetStateAction<boolean>>;
  }
) {
  const [
    isProcessing,
    setIsProcessing
  ] = useState(
    false
  );
  const [
    isDeleteModalOpen,
    setIsDeleteModalOpen
  ] = useState(
    false
  );

  // Nuevo estado para controlar la inclusión de la propiedad "imagenes"
  const [
    includeImagenes,
    setIncludeImagenes
  ] = useState<boolean>(
    () => {
      return !!initialData?.imagenes;
    }
  );

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
          clados: initialData.taxon?.clados || [],
        },
        elementosAsociados : initialData.elementosAsociados || 'Tierra',
        chakrasAsociados   : initialData.chakrasAsociados || [],
        polaridadEnergetica: initialData.polaridadEnergetica || [
          'Feminine'
        ],
        imagenes: initialData.imagenes || {
          flor: {
            src: '',
            alt: ''
          },
          hojas: {
            src: '',
            alt: ''
          },
        },
      };
    }
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          [ e.target.name ]: e.target.value,
        };
      }
    );
  };

  const handleTaxonChange = (
    field: keyof Taxon, value: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          taxon: {
            ...prev.taxon,
            [ field ]: value,
          },
        };
      }
    );
  };

  const handleStringArrayChange = (
    field: keyof EspecimenType,
    index: number,
    value: string,
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
          [ field ]: newArray,
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
        const safeArray = ( prev[ field ] as string[] ) || [];

        return {
          ...prev,
          [ field ]: [
            ...safeArray,
            ''
          ],
        };
      }
    );
  };

  const removeStringArrayItem = (
    field: keyof EspecimenType,
    indexToRemove: number,
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
          ),
        };
      }
    );
  };

  const handleImagenChange = (
    plantKey: keyof PlantDictionary,
    field: 'src' | 'alt',
    value: string,
  ) => {
    setFormData(
      (
        prev
      ) => {
        const currentImagenes = prev.imagenes || {
          flor: {
            src: '',
            alt: ''
          },
          hojas: {
            src: '',
            alt: ''
          },
        };

        return {
          ...prev,
          imagenes: {
            ...currentImagenes,
            [ plantKey ]: {
              ...( currentImagenes[ plantKey ] || {
                src: '',
                alt: ''
              } ),
              [ field ]: value,
            },
          },
        };
      }
    );
  };

  const togglePolaridad = (
    val: 'Masculine' | 'Feminine'
  ) => {
    setFormData(
      (
        prev
      ) => {
        const current = prev.polaridadEnergetica || [];
        let next = current.includes(
          val
        )
          ? current.filter(
              (
                p
              ) => {
                return p !== val;
              }
            )
          : [
              ...current,
              val
            ];

        if ( next.length === 0 ) {
          next = [
            val
          ];
        }

        return {
          ...prev,
          polaridadEnergetica: next as PolaridadEnergeticaType,
        };
      }
    );
  };

  const toggleChakra = (
    chakraNombre: string
  ) => {
    setFormData(
      (
        prev
      ) => {
        const current = prev.chakrasAsociados || [];
        const exists = current.some(
          (
            c
          ) => {
            return c.nombre === chakraNombre;
          }
        );

        if ( exists ) {
          return {
            ...prev,
            chakrasAsociados: current.filter(
              (
                c
              ) => {
                return c.nombre !== chakraNombre;
              }
            ),
          };
        }

        const chakraToAdd = listaChakras.find(
          (
            c
          ) => {
            return c.nombre === chakraNombre;
          }
        );

        if ( chakraToAdd ) {
          return {
            ...prev,
            chakrasAsociados: [
              ...current,
              chakraToAdd
            ],
          };
        }

        return prev;
      }
    );
  };

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
            clados: newClados,
          },
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
            ],
          },
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
              },
            ),
          },
        };
      }
    );
  };

  const addPreparacion = () => {
    const newPrep: PreparacionType = {
      usoTerapeutico   : '',
      formaDeAplicacion: '',
      ingredientes     : [],
      pasos            : [],
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
          ],
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
          preparaciones: ( prev.preparaciones || [] ).filter(
            (
              _, index
            ) => {
              return index !== indexToRemove;
            },
          ),
        };
      }
    );
  };

  const updatePreparacionField = (
    prepIndex: number,
    field: keyof Pick<PreparacionType, 'usoTerapeutico' | 'formaDeAplicacion'>,
    value: string,
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
          [ field ]: value,
        };

        return {
          ...prev,
          preparaciones: newPreps,
        };
      }
    );
  };

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
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          ingredientes: [
            ...( newPreps[ prepIndex ].ingredientes || [] ),
            {
              ingrediente: '',
              cantidad   : ''
            },
          ],
        };

        return {
          ...prev,
          preparaciones: newPreps,
        };
      }
    );
  };

  const updateIngrediente = (
    prepIndex: number,
    ingIndex: number,
    field: keyof IngredientesType,
    value: string,
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
          [ field ]: value,
        };
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          ingredientes: newIngs,
        };

        return {
          ...prev,
          preparaciones: newPreps,
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
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          ingredientes: ( newPreps[ prepIndex ].ingredientes || [] ).filter(
            (
              _, i
            ) => {
              return i !== ingIndexToRemove;
            },
          ),
        };

        return {
          ...prev,
          preparaciones: newPreps,
        };
      }
    );
  };

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
        const nextStepNum
          = pasos.length > 0
            ? Math.max(
              ...pasos.map(
                (
                  p
                ) => {
                  return p[ 0 ];
                }
              )
            ) + 1
            : 1;

        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          pasos: [
            ...pasos,
            [
              nextStepNum,
              ''
            ]
          ],
        };

        return {
          ...prev,
          preparaciones: newPreps,
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
          ...( prev.preparaciones || [] )
        ];
        const newPasos = [
          ...( newPreps[ prepIndex ].pasos || [] )
        ];
        newPasos[ pasoIndex ] = [
          newPasos[ pasoIndex ][ 0 ],
          value
        ];
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          pasos: newPasos,
        };

        return {
          ...prev,
          preparaciones: newPreps,
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
          ...( prev.preparaciones || [] )
        ];
        newPreps[ prepIndex ] = {
          ...newPreps[ prepIndex ],
          pasos: ( newPreps[ prepIndex ].pasos || [] ).filter(
            (
              _, i
            ) => {
              return i !== pasoIndexToRemove;
            },
          ),
        };

        return {
          ...prev,
          preparaciones: newPreps,
        };
      }
    );
  };

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setIsProcessing(
      true
    );

    const payloadToSave: EspecimenType = {
      ...formData,
      nombresComunes: ( formData.nombresComunes || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      partesUtiles: ( formData.partesUtiles || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      esenciasFlorales: ( formData.esenciasFlorales || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      propiedadesMedicinales: ( formData.propiedadesMedicinales || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      correspondenciasEnergeticas: ( formData.correspondenciasEnergeticas || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      malesEmocionales: ( formData.malesEmocionales || [] ).filter(
        (
          val
        ) => {
          return val.trim() !== '';
        }
      ),
      malesFisicos: ( formData.malesFisicos || [] ).filter(
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
    };

    // Lógica condicional para la propiedad imagenes
    if ( includeImagenes ) {
      const payloadImagenes: PlantDictionary = {
        flor: formData.imagenes?.flor || {
          src: '',
          alt: ''
        },
        hojas: formData.imagenes?.hojas || {
          src: '',
          alt: ''
        },
      };

      // ADDED: Logic to include semillas if populated
      if ( formData.imagenes?.semillas?.src || formData.imagenes?.semillas?.alt ) {
        payloadImagenes.semillas = formData.imagenes.semillas;
      }

      if ( formData.imagenes?.tallo?.src || formData.imagenes?.tallo?.alt ) {
        payloadImagenes.tallo = formData.imagenes.tallo;
      }

      if ( formData.imagenes?.preparacion?.src || formData.imagenes?.preparacion?.alt ) {
        payloadImagenes.preparacion = formData.imagenes.preparacion;
      }

      payloadToSave.imagenes = payloadImagenes;
    } else {
      // Si el toggle está apagado, nos aseguramos de que no se envíe la propiedad
      delete payloadToSave.imagenes;
    }

    try {
      const response = await upsertSpecimen(
        {
          data: payloadToSave,
        }
      );

      if ( response.success || ( response.data && response.failed === 'file' ) ) {
        const savedData = response.data as any as EspecimenType;
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
              clados: savedData.taxon?.clados || [],
            },
            elementosAsociados : savedData.elementosAsociados || 'Tierra',
            chakrasAsociados   : savedData.chakrasAsociados || [],
            polaridadEnergetica: savedData.polaridadEnergetica || [
              'Feminine'
            ],
            imagenes: savedData.imagenes || {
              flor: {
                src: '',
                alt: ''
              },
              hojas: {
                src: '',
                alt: ''
              },
            },
          }
        );

        // Sincronizar el toggle visual con la data guardada
        setIncludeImagenes(
          !!savedData.imagenes
        );

        if ( response.failed === 'file' ) {
          console.warn(
            'Note: Database updated, but JSON backup failed:',
            response.errors?.file,
          );
        }

        if ( setIsEditing ) {
          setIsEditing(
            false
          );
        }
      } else {
        console.error(
          'Failed to save. Point of failure:', response.failed
        );
      }
    } catch ( error ) {
      console.error(
        'Network or server error:', error
      );
    } finally {
      setIsProcessing(
        false
      );
    }
  };

  const executeDelete = async () => {
    if ( !initialData ) {
      return;
    }

    setIsProcessing(
      true
    );

    try {
      const response = await deleteSpecimen(
        {
          id              : ( initialData as any )._id,
          nombreCientifico: initialData.nombreCientifico,
        }
      );

      if ( response.success || response.failed === 'file' ) {
        console.log(
          'Successfully deleted specimen.'
        );
        setIsDeleteModalOpen(
          false
        );

        if ( setIsEditing ) {
          setIsEditing(
            false
          );
        }
      } else {
        console.error(
          'Failed to delete. Point of failure:',
          response.failed,
          response.errors,
        );
        alert(
          'Hubo un error al intentar eliminar el espécimen.'
        );
      }
    } catch ( error ) {
      console.error(
        'Network or server error during deletion:', error
      );
      alert(
        'Hubo un error de red al intentar eliminar.'
      );
    } finally {
      setIsProcessing(
        false
      );
    }
  };

  const renderStringArrayInput = (
    Subtitle: string,
    field: keyof EspecimenType,
  ) => {
    const arr = ( formData[ field ] as string[] ) || [];

    return (
      <div className={styles.section}>
        <h3 className={styles.sectionSubTitle}>{Subtitle}</h3>
        {arr.map(
          (
            item, index
          ) => {
            return (
              <div key={`${ field }-${ index }`} className={styles.arrayItem}>
                <input
                  type="text"
                  className={styles.inputFilled}
                  value={item}
                  onChange={(
                    e
                  ) => {
                    return handleStringArrayChange(
                      field, index, e.target.value
                    );
                  }}
                  placeholder={`Añadir ${ Subtitle.toLowerCase() }`}
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
          + Añadir {Subtitle}
        </button>
      </div>
    );
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={displayLarge}>Registrar Espécimen</h2>

        {/* Main Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionSubTitle}>Información Principal</h3>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nombre Científico</label>
            <input
              type="text"
              name="nombreCientifico"
              className={styles.inputFilled}
              value={formData.nombreCientifico}
              onChange={handleInputChange}
              required
            />
            <label className={styles.label}>URL de la imagen principal</label>
            <input
              type="text"
              name="imageUrl"
              className={styles.inputFilled}
              value={formData.imageUrl ?? ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Arrays */}
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
          'Qué males emocionales cura', 'malesEmocionales'
        )}
        {renderStringArrayInput(
          'Que males físicos cura', 'malesFisicos'
        )}
        {renderStringArrayInput(
          'Esencias Florales', 'esenciasFlorales'
        )}

        {/* IMÁGENES SECUNDARIAS CON TOGGLE */}
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
            >Imágenes Detalladas</h3>

            <ToggleSwitch
              checked={includeImagenes}
              onChange={(
                e
              ) => {
                return setIncludeImagenes(
                  e.target.checked
                );
              }}
              style={{
                fontWeight: 'bold'
              }}
            >
              Habilitar Galería de Imágenes
            </ToggleSwitch>

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
                      value={formData.imagenes?.flor?.src || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'flor', 'src', e.target.value
                        );
                      }}
                      placeholder="Ej. https://.../flor.jpg"
                      required={includeImagenes} // Solo es requerido si el toggle está activo
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
                      value={formData.imagenes?.flor?.alt || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'flor', 'alt', e.target.value
                        );
                      }}
                      placeholder="Ej. Fotografía detallada de la flor..."
                      required={includeImagenes} // Solo es requerido si el toggle está activo
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
                      value={formData.imagenes?.hojas?.src || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'hojas', 'src', e.target.value
                        );
                      }}
                      placeholder="Ej. https://.../hojas.jpg"
                      required={includeImagenes} // Solo es requerido si el toggle está activo
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
                      value={formData.imagenes?.hojas?.alt || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'hojas', 'alt', e.target.value
                        );
                      }}
                      placeholder="Ej. Detalle de las hojas..."
                      required={includeImagenes} // Solo es requerido si el toggle está activo
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
                      value={formData.imagenes?.semillas?.src || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'semillas', 'src', e.target.value
                        );
                      }}
                      placeholder="Ej. https://.../semillas.jpg"
                      // REMOVED required={includeImagenes} so it behaves as truly optional
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
                      value={formData.imagenes?.semillas?.alt || ''}
                      onChange={(
                        e
                      ) => {
                        return handleImagenChange(
                          'semillas', 'alt', e.target.value
                        );
                      }}
                      placeholder="Ej. Detalle de las semillas..."
                      // REMOVED required={includeImagenes} so it behaves as truly optional
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
                      value={formData.imagenes?.tallo?.src || ''}
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
                      value={formData.imagenes?.tallo?.alt || ''}
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
                      value={formData.imagenes?.preparacion?.src || ''}
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
                      value={formData.imagenes?.preparacion?.alt || ''}
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

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Propiedades Energéticas</h3>
          {renderStringArrayInput(
            'Correspondencias Energéticas', 'correspondenciasEnergeticas'
          )}

          <div className={styles.inputGroup}>
            <label className={styles.label}>Elemento Asociado</label>
            <select
              name="elementosAsociados"
              className={styles.inputFilled}
              value={formData.elementosAsociados}
              onChange={handleInputChange}
            >
              {[
                'Metal',
                'Madera',
                'Fuego',
                'Tierra',
                'Aire',
                'Agua'
              ].map(
                (
                  el
                ) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                }
              )}
            </select>
          </div>

          {/* Polaridad Energética */}
          <div className={styles.inputGroup} style={{
            marginTop: '1rem'
          }}
          >
            <label className={styles.label}>Polaridad Energética</label>
            <div style={{
              display  : 'flex',
              gap      : '1.5rem',
              marginTop: '0.5rem'
            }}
            >
              <ToggleSwitch
                checked={formData.polaridadEnergetica.includes(
                  'Masculine'
                )}
                onChange={() => {
                  return togglePolaridad(
                    'Masculine'
                  );
                }}
              >
                Masculina
              </ToggleSwitch>

              <ToggleButton
                checked={formData.polaridadEnergetica.includes(
                  'Masculine'
                )}
                onChange={() => {
                  return togglePolaridad(
                    'Masculine'
                  );
                }}
                label={'Masculine'}
              />

              <ToggleSwitch
                checked={formData.polaridadEnergetica.includes(
                  'Feminine'
                )}
                onChange={() => {
                  return togglePolaridad(
                    'Feminine'
                  );
                }}
              >
                Femenina
              </ToggleSwitch>
            </div>
          </div>

          {/* Chakras Asociados */}
          <div className={styles.inputGroup} style={{
            marginTop: '1.5rem'
          }}
          >
            <label className={styles.label}>Chakras Asociados</label>
            <div style={{
              display      : 'flex',
              flexDirection: 'column',
              gap          : '0.75rem', /* slightly increased gap for better spacing with toggles */
              marginTop    : '0.5rem'
            }}
            >
              {listaChakras.map(
                (
                  chakra
                ) => {
                  const isChecked = formData.chakrasAsociados.some(
                    (
                      c
                    ) => {
                      return c.nombre === chakra.nombre;
                    }
                  );

                  return (
                    <ToggleSwitch
                      key={chakra.nombre}
                      checked={isChecked}
                      onChange={() => {
                        return toggleChakra(
                          chakra.nombre
                        );
                      }}
                    >
                      <span>
                        <strong>{chakra.nombre}</strong> - <em>{chakra.nombreSanscrito}</em> ({chakra.color})
                      </span>
                    </ToggleSwitch>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* Taxonomía */}
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
                  <div key={taxRank} className={`${ styles.inputGroup } ${ styles.flex1 }`} style={{
                    minWidth: '200px'
                  }}
                  >
                    <label className={styles.label}>
                      {taxRank.charAt(
                        0
                      )
                        .toUpperCase() + taxRank.slice(
                        1
                      )}
                    </label>
                    <input
                      type="text"
                      className={styles.inputFilled}
                      value={( formData.taxon[ taxRank as keyof Taxon ] as string ) || ''}
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

        {/* Preparaciones */}
        <div className={styles.section}>
          <h3 className={styles.sectionSubTitle}>Preparaciones</h3>
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
                      className={styles.inputFilled}
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
                      className={styles.inputFilled}
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

                  <div className={styles.subSection} style={{
                    backgroundColor: 'var(--surface-container-high)'
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
                              className={styles.inputOutlined}
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
                              className={styles.inputOutlined}
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
                    <button
                      type="button"
                      className={`${ styles.button } ${ styles.addBtn }`}
                      onClick={() => {
                        return addIngrediente(
                          prepIndex
                        );
                      }}
                    >
                      + Añadir Ingrediente
                    </button>
                  </div>

                  <div
                    className={styles.subSection}
                    style={{
                      backgroundColor: 'var(--surface-container-high)',
                      color          : 'var(--on-surface)',
                    }}
                  >
                    <label className={styles.label}>Pasos a seguir</label>
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
                              className={styles.inputOutlined}
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
                    <button
                      type="button"
                      className={`${ styles.button } ${ styles.addBtn }`}
                      onClick={() => {
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
          <button
            type="button"
            className={`${ styles.button } ${ styles.addBtn }`}
            onClick={addPreparacion}
          >
            + Añadir Nueva Preparación
          </button>
        </div>

        {/* Main Action Buttons */}
        <div style={{
          display  : 'flex',
          gap      : '1rem',
          marginTop: '2rem'
        }}
        >
          {initialData && (
            <button
              type="button"
              className={`${ styles.button } ${ styles.deleteBtn }`}
              style={{
                display        : 'flex',
                alignItems     : 'center',
                gap            : '0.5rem',
                padding        : '0.75rem 1.5rem',
                backgroundColor: '#dc3545',
                color          : '#fff',
              }}
              onClick={() => {
                return setIsDeleteModalOpen(
                  true
                );
              }}
              disabled={isProcessing}
            >
              <span className={`material-symbols-outlined ${ icon }`}>
                delete_forever
              </span>
              Eliminar Espécimen
            </button>
          )}
          <button
            type="submit"
            className={`${ styles.button } ${ styles.submitBtn }`}
            style={{
              flex: 1
            }}
            disabled={isProcessing}
          >
            {isProcessing
              ? 'Procesando...'
              : 'Guardar Espécimen'}
          </button>
        </div>
      </form>

      {/* The Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          return setIsDeleteModalOpen(
            false
          );
        }}
        onConfirm={executeDelete}
        title="Confirmar Eliminación"
        message={`¿Estás seguro de que deseas eliminar permanentemente el espécimen "${ initialData?.nombreCientifico }"? Esta acción no se puede deshacer.`}
        isProcessing={isProcessing}
      />
    </>
  );
}