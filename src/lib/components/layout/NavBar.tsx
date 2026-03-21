'use client';
import styles from 'styles/layout.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { Drawer } from './Drawer';
import { NavLink } from './NavLink';
import { Route } from 'next';
import { Loader } from '../Loader/main-loader';
import { Suspense } from 'react';
import { DrawerMenuButton } from '../buttons/nav-buttons';

export const NavBar = () => {
  const {
    isNavOpen
  } = useNavigationContext();

  return (
    <div className={styles.header}>

      <NavLink
        key={'home'}
        iconLabel={'home'}
        textLabel={'Inicio'}
        hrefLabel={'/'}
      />
      <DrawerMenuButton />
      <Suspense fallback={<Loader />}>

        <DrawerMenuButton />
        <NavLink
          iconLabel={'cannabis'}
          textLabel={'Nueva Hierba en el Grimorio'}
          hrefLabel={'/hierba/nueva' as Route}
        />

      </Suspense>
      {isNavOpen && (
        <Suspense fallback={<Loader />}>
          <Drawer>
            <DrawerMenuButton />
            <NavLink
              iconLabel={'cannabis'}
              textLabel={'Nueva Hierba en el Grimorio'}
              hrefLabel={'/hierba/nueva' as Route}
            />
          </Drawer>
        </Suspense>
      )}
    </div>
  );
};
