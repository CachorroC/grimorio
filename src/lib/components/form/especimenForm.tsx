/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Dispatch, SetStateAction, SubmitEventHandler, useState } from 'react';
import styles from '#@/lib/styles/form.module.css';
import { EspecimenType, PlantDictionary } from '#@/lib/types/especimenTypes';
import { displayLarge } from '#@/lib/styles/fonts/typography.module.css';
import { upsertSpecimen, deleteSpecimen } from '#@/app/actions/specimen';
import { icon } from '#@/lib/styles/buttons.module.css';
import ConfirmModal from '../confirmModal';

// Imported Sections
import BasicInfoSection from './basicInfoSection';
import DynamicStringArray from './dynamicStringArray';
import ImageGallerySection from './imageGallerySection';
import EnergeticsSection from './energeticsSection';
import TaxonomySection from './taxonomySection';
import PreparationsSection from './preparationsSection';

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
  doshas  : [],
  nativa  : true,
  // Mantenemos una estructura inicial segura en el estado para evitar errores de undefined en los inputs
  imagenes: {
    flor: {
      src: '',
      alt: '',
    },
    hojas: {
      src: '',
      alt: '',
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
        partesUtiles          : initialData.partesUtiles || [],
        nombresComunes        : initialData.nombresComunes || [],
        propiedadesMedicinales: initialData.propiedadesMedicinales || [],
        esenciasFlorales      : initialData.esenciasFlorales || [],
        correspondenciasEnergeticas:
        initialData.correspondenciasEnergeticas || [],
        malesEmocionales: initialData.malesEmocionales || [],
        malesFisicos    : initialData.malesFisicos || [],
        preparaciones   : ( initialData.preparaciones || [] ).map(
          (
            p
          ) => {
            return {
              ...p,
              uso: p.uso || 'Uso Multipropósito',
            };
          }
        ),
        taxon: {
          ...initialState.taxon,
          ...( initialData.taxon || {} ),
          clados: initialData.taxon?.clados || [],
        },
        elementosAsociados : initialData.elementosAsociados || 'Tierra',
        chakrasAsociados   : initialData.chakrasAsociados || [],
        polaridadEnergetica: initialData.polaridadEnergetica || [
          'Feminine'
        ],
        doshas  : initialData.doshas || [],
        nativa  : initialData.nativa ?? false,
        imagenes: initialData.imagenes || {
          flor: {
            src: '',
            alt: '',
          },
          hojas: {
            src: '',
            alt: '',
          },
        },
      };
    }
  );

  const updateFormDataField = (
    field: keyof EspecimenType, value: any
  ) => {
    setFormData(
      (
        prev
      ) => {
        return {
          ...prev,
          [ field ]: value,
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
        },
      ),
      correspondenciasEnergeticas: (
        formData.correspondenciasEnergeticas || []
      ).filter(
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
          alt: '',
        },
        hojas: formData.imagenes?.hojas || {
          src: '',
          alt: '',
        },
      };

      if (
        formData.imagenes?.semillas?.src
        || formData.imagenes?.semillas?.alt
      ) {
        payloadImagenes.semillas = formData.imagenes.semillas;
      }

      if ( formData.imagenes?.tallo?.src || formData.imagenes?.tallo?.alt ) {
        payloadImagenes.tallo = formData.imagenes.tallo;
      }

      if (
        formData.imagenes?.preparacion?.src
        || formData.imagenes?.preparacion?.alt
      ) {
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
            nombresComunes        : savedData.nombresComunes || [],
            partesUtiles          : savedData.partesUtiles || [],
            esenciasFlorales      : savedData.esenciasFlorales || [],
            propiedadesMedicinales: savedData.propiedadesMedicinales || [],
            correspondenciasEnergeticas:
            savedData.correspondenciasEnergeticas || [],
            malesEmocionales: savedData.malesEmocionales || [],
            malesFisicos    : savedData.malesFisicos || [],
            preparaciones   : ( savedData.preparaciones || [] ).map(
              (
                p
              ) => {
                return {
                  ...p,
                  uso: p.uso || 'Uso Multipropósito',
                };
              }
            ),
            taxon: {
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
                alt: '',
              },
              hojas: {
                src: '',
                alt: '',
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

  return (
    <>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <h2 className={displayLarge}>Registrar Espécimen</h2>

        <BasicInfoSection
          nombreCientifico={formData.nombreCientifico}
          imageUrl={formData.imageUrl}
          nativa={formData.nativa}
          onChange={(
            field, value
          ) => {
            return updateFormDataField(
              field, value
            );
          }}
        />

        <DynamicStringArray
          title="Nombres Comunes"
          items={formData.nombresComunes || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'nombresComunes', newItems
            );
          }}
        />
        <DynamicStringArray
          title="Partes Útiles"
          items={formData.partesUtiles || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'partesUtiles', newItems
            );
          }}
        />
        <DynamicStringArray
          title="Propiedades Medicinales"
          items={formData.propiedadesMedicinales || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'propiedadesMedicinales', newItems
            );
          }}
        />
        <DynamicStringArray
          title="Qué males emocionales cura"
          items={formData.malesEmocionales || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'malesEmocionales', newItems
            );
          }}
        />
        <DynamicStringArray
          title="Que males físicos cura"
          items={formData.malesFisicos || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'malesFisicos', newItems
            );
          }}
        />
        <DynamicStringArray
          title="Esencias Florales"
          items={formData.esenciasFlorales || []}
          onChange={(
            newItems
          ) => {
            return updateFormDataField(
              'esenciasFlorales', newItems
            );
          }}
        />

        <ImageGallerySection
          includeImagenes={includeImagenes}
          onToggleInclude={setIncludeImagenes}
          imagenes={formData.imagenes}
          onChange={(
            newImagenes
          ) => {
            return updateFormDataField(
              'imagenes', newImagenes
            );
          }}
        />

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Propiedades Energéticas</h3>
          <DynamicStringArray
            title="Correspondencias Energéticas"
            items={formData.correspondenciasEnergeticas || []}
            onChange={(
              newItems
            ) => {
              return updateFormDataField(
                'correspondenciasEnergeticas',
                newItems,
              );
            }}
          />

          <EnergeticsSection
            elementosAsociados={formData.elementosAsociados}
            polaridadEnergetica={formData.polaridadEnergetica}
            chakrasAsociados={formData.chakrasAsociados}
            doshas={formData.doshas || []}
            onChange={(
              field, value
            ) => {
              return updateFormDataField(
                field, value
              );
            }}
          />
        </div>

        <TaxonomySection
          taxon={formData.taxon}
          onChange={(
            newTaxon
          ) => {
            return updateFormDataField(
              'taxon', newTaxon
            );
          }}
        />

        <PreparationsSection
          preparaciones={formData.preparaciones || []}
          onChange={(
            newPreps
          ) => {
            return updateFormDataField(
              'preparaciones', newPreps
            );
          }}
        />

        {/* Main Action Buttons */}
        <div
          style={{
            display  : 'flex',
            gap      : '1rem',
            marginTop: '2rem',
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
              flex: 1,
            }}
            disabled={isProcessing}
          >
            {isProcessing
              ? 'Procesando el salvado...'
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
