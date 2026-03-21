'use client';

import { useEffect } from 'react';
import styles from './styles.module.css';
import { useSnackbarContext } from '#@/app/context/main-context';

export function Snackbar(
  {
    text
  }: { text: string }
) {
  const {
    isSnackbarOpen, setIsSnackbarOpen
  } = useSnackbarContext();

  useEffect(
    () => {
    // Declare the timer variable outside the condition so the cleanup function can access it
      let timer: ReturnType<typeof setTimeout>;

      // Only start the timer if the snackbar is open
      if ( isSnackbarOpen ) {
        timer = setTimeout(
          () => {
            setIsSnackbarOpen(
              false
            );
          }, 1000
        );
      }

      // Unconditionally return a single cleanup function to satisfy strict linters
      return () => {
        if ( timer ) {
          clearTimeout(
            timer
          );
        }
      };
    }, [
      isSnackbarOpen,
      setIsSnackbarOpen
    ]
  );

  if ( !isSnackbarOpen ) {
    return null;
  }

  return (
    <div className={`${ styles.snackbar } ${ styles.show }`}>
      {text}
    </div>
  );
}