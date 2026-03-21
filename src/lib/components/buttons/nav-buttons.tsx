'use client';

import { useRouter } from 'next/navigation';
import styles from 'styles/layout.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { buttonDrawerMenuClosed,
  buttonDrawerMenuOpen, } from 'styles/navbar.module.css';

// TODO: arreglar lo de la navegacion

export const DrawerMenuButton = () => {
  const {
    isNavOpen, setIsNavOpen
  } = useNavigationContext();

  return (
    <button
      type="button"
      className={isNavOpen
        ? buttonDrawerMenuOpen
        : buttonDrawerMenuClosed}
      onClick={ () => {

        setIsNavOpen(
          (
            n
          ) => {
            return !n;
          }
        );
      }}
    >
      <span className={`material-symbols-outlined ${ styles.icon }`}>
        {isNavOpen
          ? 'close'
          : 'menu'}
      </span>
    </button>
  );
};


export function ForwardBackwardNavButtons() {
  const router = useRouter();

  return (
    <section className={styles.segmentRow}>
      <button
        type="button"
        className={styles.buttonBackwards}
        onClick={() => {
          router.back();
        }}
      >
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          chevron_left
        </span>
        <p className={styles.text}>atras</p>
      </button>
      <button
        type="button"
        className={styles.buttonForward}
        onClick={() => {
          router.forward();
        }}
      >
        <span className={`material-symbols-outlined ${ styles.icon }`}>
          chevron_right
        </span>
        <p className={styles.text}>entrar</p>
      </button>
    </section>
  );
}
