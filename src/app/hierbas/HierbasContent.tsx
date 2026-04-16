'use client';
import { useEffect, useState, useCallback, ChangeEvent } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { TextField, Box } from '@mui/material';
import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import MasonryHolder from './MasonryHolder';
import { useEspecimen } from '../context/EspecimenContext';
import { Route } from 'next';

export function HierbasContent() {
  const {
    state, dispatch
  } = useEspecimen();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // URL parameters act as the single source of truth for the type of query
  const nameQuery = searchParams.get(
    'name'
  ) || '';
  const dolorQuery = searchParams.get(
    'dolor'
  ) || '';
  const emocionalQuery = searchParams.get(
    'emocional'
  ) || '';

  // Local state for the inputs
  const [
    localName,
    setLocalName
  ] = useState(
    nameQuery
  );
  const [
    localDolor,
    setLocalDolor
  ] = useState(
    dolorQuery
  );
  const [
    localEmocional,
    setLocalEmocional
  ] = useState(
    emocionalQuery
  );

  // Sync Context with URL params
  useEffect(
    () => {
      dispatch(
        {
          type   : 'SET_SEARCH_NAME',
          payload: nameQuery,
        }
      );
      dispatch(
        {
          type   : 'SET_SEARCH_DOLOR',
          payload: dolorQuery,
        }
      );
      dispatch(
        {
          type   : 'SET_SEARCH_EMOCIONAL',
          payload: emocionalQuery,
        }
      );
    }, [
      nameQuery,
      dolorQuery,
      emocionalQuery,
      dispatch
    ]
  );

  // Update URL params when local inputs change
  const createQueryString = useCallback(
    (
      name: string, value: string
    ) => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if ( value ) {
        params.set(
          name, value
        );
      } else {
        params.delete(
          name
        );
      }

      return params.toString();
    },
    [
      searchParams
    ],
  );

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    setLocalName(
      val
    );
    router.replace(
      `${ pathname }?${ createQueryString(
        'name', val
      ) }` as Route
    );
  };

  const handleDolorChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    setLocalDolor(
      val
    );
    router.replace(
      `${ pathname }?${ createQueryString(
        'dolor', val
      ) }` as Route
    );
  };

  const handleEmocionalChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    setLocalEmocional(
      val
    );
    router.replace(
      `${ pathname }?${ createQueryString(
        'emocional', val
      ) }` as Route
    );
  };

  return (
    <>
      {/* Two explicit search bars */}
      <Box
        sx={{
          display : 'flex',
          gap     : 2,
          mb      : 4,
          width   : '100%',
          height  : 'auto',
          flex    : '0',
          maxWidth: '800px',
        }}
      >
        <TextField
          label="Buscar por Nombre (Ej. Manzanilla)"
          variant="outlined"
          fullWidth
          value={localName}
          onChange={handleNameChange}
        />
        <TextField
          label="Buscar por Dolencia Física"
          variant="outlined"
          fullWidth
          value={localDolor}
          onChange={handleDolorChange}
        />
        <TextField
          label="Bienestar Emocional"
          variant="outlined"
          fullWidth
          value={localEmocional}
          onChange={handleEmocionalChange}
        />
      </Box>

      <MasonryHolder>
        {[
          ...state.filteredData
        ]
          .sort(
            (
              a, b
            ) => {
              return a.nombreCientifico.localeCompare(
                b.nombreCientifico
              );
            }
          )
          .map(
            (
              especimen
            ) => {
              return (
                <SpecimenEditSelection
                  plantData={especimen}
                  key={especimen.nombreCientifico}
                />
              );
            }
          )}
      </MasonryHolder>
    </>
  );
}
