'use client';

import { useEspecimen } from '#@/app/context/EspecimenContext';
import { useSearch } from '#@/app/context/search-context';
import { useRouter } from 'next/router';
import { bodyLarge } from '../styles/fonts/typography.module.css';
import { searchContainer } from '../styles/landing.module.css';
import searchbar from '../styles/searchbar.module.css';

export const InputSearchBar = () => {
  const {
    setSearch
  } = useSearch();
  const {
    state, dispatch
  } = useEspecimen();

  const router = useRouter();

  return (
    <div className={searchContainer}>
      <datalist id="demandados-list">
        {state.data.map(
          (
            carpeta
          ) => {
            return (
              <option
                value={carpeta.nombreCientifico}
                key={carpeta.nombreCientifico}
                onClick={() => {
                  return router.push(
                    `/hierba/${ carpeta.nombreCientifico }`
                  );
                }}
              />
            );
          }
        )}
      </datalist>
      <input
        type={'textarea'}
        list="demandados-list"
        name={'query'}
        placeholder={'Buscar'}
        value={state.searchTerm}
        className={`${ bodyLarge } ${ searchbar.input }`}
        onChange={(
          e
        ) => {
          dispatch(
            {
              type   : 'SET_SEARCH',
              payload: e.target.value
            }
          );

          return setSearch(
            e.target.value
          );
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
