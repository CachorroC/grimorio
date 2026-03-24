'use client';
import { EspecimenType } from '#@/lib/types/especimenTypes';
import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

// --- State & Action Types ---
interface EspecimenState {
  data          : EspecimenType[];          // The unmodified master list
  filteredData  : EspecimenType[];  // The list rendered by the UI
  searchTerm    : string;
  filterProperty: string;         // e.g., filtering by a specific medicinal property
  sortOrder     : 'ASC' | 'DESC' | 'NONE';
}

type Action =
  | { type: 'INIT_DATA'; payload: EspecimenType[] }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTER_PROPERTY'; payload: string }
  | { type: 'SET_SORT'; payload: 'ASC' | 'DESC' | 'NONE' }
  | { type: 'RESET_FILTERS' };



// --- Helper Function ---
// This ensures that sorting, searching, and filtering stack correctly
// without overwriting each other.
const applyCriteria = (
  state: EspecimenState
): EspecimenType[] => {
  let result = [
    ...state.data
  ];

  // 1. Apply Search (Checking both scientific and common names)
  if ( state.searchTerm ) {
    const lowerSearch = state.searchTerm.toLowerCase();
    result = result.filter(
      (
        e
      ) => {
        return e.nombreCientifico.toLowerCase()
          .includes(
            lowerSearch
          )
        || e.nombresComunes.some(
          (
            nombre
          ) => {
            return nombre.toLowerCase()
              .includes(
                lowerSearch
              );
          }
        );
      }
    );
  }

  // 2. Apply Filter (e.g., filtering by 'propiedadesMedicinales')
  if ( state.filterProperty ) {
    result = result.filter(
      (
        e
      ) => {
        return e.propiedadesMedicinales.includes(
          state.filterProperty
        );
      }
    );
  }

  // 3. Apply Sort (Alphabetically by nombreCientifico)
  if ( state.sortOrder !== 'NONE' ) {
    result.sort(
      (
        a, b
      ) => {
        const nameA = a.nombreCientifico.toLowerCase();
        const nameB = b.nombreCientifico.toLowerCase();

        if ( state.sortOrder === 'ASC' ) {
          return nameA.localeCompare(
            nameB
          );
        }

        return nameB.localeCompare(
          nameA
        );
      }
    );
  }

  return result;
};

// --- Reducer ---
const especimenReducer = (
  state: EspecimenState, action: Action
): EspecimenState => {
  const newState = {
    ...state
  };

  switch ( action.type ) {
      case 'INIT_DATA':
        newState.data = action.payload;
        newState.filteredData = action.payload;

        return newState; // Return early here so we don't apply filters to empty data

      case 'SET_SEARCH':
        newState.searchTerm = action.payload;

        break;

      case 'SET_FILTER_PROPERTY':
        newState.filterProperty = action.payload;

        break;

      case 'SET_SORT':
        newState.sortOrder = action.payload;

        break;

      case 'RESET_FILTERS':
        newState.searchTerm = '';
        newState.filterProperty = '';
        newState.sortOrder = 'NONE';

        break;
      default:
        return state;
  }

  // Recalculate the rendered array after any criteria changes
  newState.filteredData = applyCriteria(
    newState
  );

  return newState;
};

// --- Context Setup ---
interface ContextProps {
  state   : EspecimenState;
  dispatch: Dispatch<Action>;
}

const EspecimenContext = createContext<ContextProps | null>(
  null
);

export const EspecimenProvider = (
  {
    children, initialEspecimens
  }: { children: ReactNode; initialEspecimens: EspecimenType[] }
) => {
  const initialState: EspecimenState = {
    data: [
      ...initialEspecimens
    ],
    filteredData: [
      ...initialEspecimens
    ],
    searchTerm    : '',
    filterProperty: '',
    sortOrder     : 'NONE',
  };
  const [
    state,
    dispatch
  ] = useReducer(
    especimenReducer, initialState
  );

  return (
    <EspecimenContext.Provider value={{
      state,
      dispatch
    }}
    >
      {children}
    </EspecimenContext.Provider>
  );
};

// --- Custom Hook ---
export const useEspecimen = () => {
  const context = useContext(
    EspecimenContext
  );

  if ( !context ) {
    throw new Error(
      'useEspecimen must be used within an EspecimenProvider'
    );
  }

  return context;
};