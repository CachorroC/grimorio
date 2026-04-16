import { MainLoader } from '#@/lib/components/Loader/main-loader';
import styles from '#@/lib/styles/layout.module.css';
import { ReactNode, Suspense } from 'react';
import { EspecimenProvider } from '../context/EspecimenContext';
import { Loader } from '#@/lib/components/Loader/loader';
import { getHierbas } from '#@/lib/data/hierbas';

async function ServerRequestHerbsContext(
  {
    children,
  }: {
    children: ReactNode;
  }
) {
  const plants = await getHierbas();

  return (
    <EspecimenProvider initialEspecimens={plants}>{children}</EspecimenProvider>
  );
}

export default function MainLayout(
  {
    children,
    modal,
  }: {
    children: ReactNode;
    modal   : ReactNode;
  }
) {
  return (
    <Suspense fallback={<MainLoader />}>
      <ServerRequestHerbsContext>
        <div className={styles.main}>
          <Suspense fallback={<Loader />}>
            <Suspense fallback={<Loader />}>{modal}</Suspense>
            <Suspense fallback={<Loader />}>
              <div className={styles.mainContent}>{children}</div>
            </Suspense>
          </Suspense>
        </div>
      </ServerRequestHerbsContext>
    </Suspense>
  );
}
