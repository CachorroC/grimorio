'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SpecimenEditSelection from '#@/lib/components/specimenEditSelection';
import MasonryHolder from './MasonryHolder';
import { useEspecimen } from '../context/EspecimenContext';
import { InputSearchBar } from '#@/lib/components/InputSearchBar';
import { Loader } from '#@/lib/components/Loader/loader';

// 1. Create an inner component that uses the hook and context
function HierbasContent() {
  const {
    state, dispatch
  } = useEspecimen();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get(
    'search'
  );

  // 2. Dispatch the search query to the context whenever it changes in the URL
  useEffect(
    () => {
      if ( searchQuery ) {
        dispatch(
          {
            type   : 'SET_SEARCH',
            payload: searchQuery
          }
        );
      } else {
      // Clear search if the URL param is removed
        dispatch(
          {
            type   : 'SET_SEARCH',
            payload: ''
          }
        );
      }
    }, [
      searchQuery,
      dispatch
    ]
  );

  return (
    <><InputSearchBar />
      <MasonryHolder>

        { [
          ...state.filteredData
        ].sort(
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
                <SpecimenEditSelection plantData={ especimen } key={ especimen.nombreCientifico }/>
              );
            }
          )
        }
      </MasonryHolder>
    </>
  );
}

// 3. Wrap it in Suspense in the main Page export
export default function Page() {
  return (
    <Suspense fallback={<div>Cargando plantas...<Loader/></div>}>
      <HierbasContent />
    </Suspense>
  );
}