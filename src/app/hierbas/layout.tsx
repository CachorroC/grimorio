import { MainLoader } from '#@/lib/components/Loader/main-loader';
import styles from '#@/lib/styles/layout.module.css';
import { ReactNode, Suspense } from 'react';
import { AccordionScrollProvider } from '../context/AcordionScrollContext';
import { EspecimenProvider } from '../context/EspecimenContext';
import EspecimenModel from '#@/lib/models/especimenModel';
import { connection } from 'next/server';
import { Loader } from '#@/lib/components/Loader/loader';

async function ServerRequestHerbsContext({
  children,
}: {
  children: ReactNode;
}) {
  await connection();
  const plants = await EspecimenModel.getPlantasMedicinales();

  return (
    <EspecimenProvider initialEspecimens={plants}>{children}</EspecimenProvider>
  );
}

export default function MainLayout({
  children,
  right,
  modal,
}: {
  children: ReactNode;
  right: ReactNode;
  modal: ReactNode;
}) {
  return (
    <Suspense fallback={<MainLoader />}>
      <AccordionScrollProvider>
        <ServerRequestHerbsContext>
          <div className={styles.main}>
            <Suspense fallback={<Loader />}>
              {/* <LayoutAsyncProcess> */}
              <Suspense fallback={<Loader />}>{modal}</Suspense>
              <Suspense fallback={<Loader />}>
                <div className={styles.mainContent}>{children}</div>
              </Suspense>
              <Suspense fallback={<Loader />}>
                <div className={styles.complementaryContent}>{right}</div>
              </Suspense>
            </Suspense>
          </div>
        </ServerRequestHerbsContext>
      </AccordionScrollProvider>
    </Suspense>
  );
}
