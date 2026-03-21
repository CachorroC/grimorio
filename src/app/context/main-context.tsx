'use client';
import { Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState, } from 'react';

const SnackbarContext = createContext<{
  isSnackbarOpen   : boolean;
  setIsSnackbarOpen: Dispatch<SetStateAction<boolean>>;
} | null>(
  null
);

export function MainProvider(
  {
    children
  }: { children: ReactNode }
) {

  const [
    isSnackbarOpen,
    setIsSnackbarOpen
  ] = useState(
    false
  );

  return (
    <SnackbarContext.Provider
      value={{
        isSnackbarOpen,
        setIsSnackbarOpen,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbarContext() {
  const context = useContext(
    SnackbarContext
  );

  if ( context === null ) {
    throw new Error(
      'el snackbar context debe ser utilizado dentro de un snackbar context provider ',
    );
  }

  return context;
}
