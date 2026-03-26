'use client';

import { useEffect } from 'react';
import { useEspecimen } from '#@/app/context/EspecimenContext';
import { useSearch } from '#@/app/context/search-context';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { bodyLarge } from '../styles/fonts/typography.module.css';
import { searchContainer } from '../styles/landing.module.css';
import searchbar from '../styles/searchbar.module.css';
import { Route } from 'next';

export const InputSearchBar = () => {
  const {
    setSearch
  } = useSearch();
  const {
    state, dispatch
  } = useEspecimen();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 1. Sync URL -> Context
  useEffect(
    () => {
      const urlSearch = searchParams.get(
        'search'
      ) || '';

      if ( urlSearch && urlSearch !== state.searchTerm ) {
        dispatch(
          {
            type   : 'SET_SEARCH',
            payload: urlSearch
          }
        );
        setSearch(
          urlSearch
        );
      }
    }, [
      searchParams,
      dispatch,
      setSearch,
      state.searchTerm
    ]
  );

  // 2. Sync Context -> URL (Debounced)
  useEffect(
    () => {
      const timeoutId = setTimeout(
        () => {
          const params = new URLSearchParams(
            searchParams.toString()
          );

          if ( state.searchTerm ) {
            params.set(
              'search', state.searchTerm
            );
          } else {
            params.delete(
              'search'
            );
          }

          router.replace(
            `${ pathname }?${ params.toString() }` as Route, {
              scroll: false
            }
          );
        }, 400
      );

      return () => {
        return clearTimeout(
          timeoutId
        );
      };
    }, [
      state.searchTerm,
      pathname,
      router,
      searchParams
    ]
  );

  return (
    <div className={searchContainer}>
      <datalist id="lista_hierbas">
        {state.data.map(
          (
            planta
          ) => {
            return (
              <option
                value={planta.nombreCientifico}
                key={planta.nombreCientifico}
              // onClick removed from here to ensure cross-browser compatibility
              />
            );
          }
        )}
      </datalist>
      <input
        type="text"
        list="lista_hierbas"
        name="search"
        placeholder="Buscar"
        value={state.searchTerm}
        className={`${ bodyLarge } ${ searchbar.input }`}
        onChange={(
          e
        ) => {
          const newValue = e.target.value;

          // 1. Update the contexts immediately
          dispatch(
            {
              type   : 'SET_SEARCH',
              payload: newValue
            }
          );
          setSearch(
            newValue
          );

          // 2. DATALIST FIX: Check if the typed/selected value exactly matches a plant
          const exactMatch = state.data.find(
            (
              planta
            ) => {
              return planta.nombreCientifico === newValue;
            }
          );

          // If there's an exact match, the user selected it from the datalist (or typed it perfectly)
          // We can route them to the specific page immediately
          if ( exactMatch ) {
            router.push(
              `/hierba/${ exactMatch.nombreCientifico }`
            );
          }
        }}
      />
      <select
        value={state.sortOrder}
        onChange={(
          e
        ) => {
          return dispatch(
            {
              type   : 'SET_SORT',
              payload: e.target.value as 'ASC' | 'DESC' | 'NONE'
            }
          );
        }}
      >
        <option value="NONE">Sort: None</option>
        <option value="ASC">A-Z</option>
        <option value="DESC">Z-A</option>
      </select>

      <button
        className={searchbar.icon}
        type="button"
        onClick={() => {
          setSearch(
            ''
          );
          dispatch(
            {
              type: 'RESET_FILTERS'
            }
          );
        }}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};