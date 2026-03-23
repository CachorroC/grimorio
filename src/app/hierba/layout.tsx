import { Loader } from '#@/lib/components/Loader/main-loader';
import styles from '#@/lib/styles/layout.module.css';
import { ReactNode, Suspense } from 'react';

/* async function LayoutAsyncProcess(
  {
    children
  }: { children: ReactNode }
) {
  const carpetas = await EspecimenModel.getPlantasMedicinales();

  return (
    <CarpetasSortProvider initialCarpetas={carpetas}>
      {children}
    </CarpetasSortProvider>
  );
} */

export default function LayoutProcesosMain(
  {
    children,
    right,
  }: {
    children: ReactNode;
    right   : ReactNode;
  }
) {
  return (
    <div className={styles.main}>
      <Suspense fallback={<Loader />}>

        <Suspense fallback={<Loader />}>
          <div className={styles.mainContent}>{children}</div>
        </Suspense>
        <Suspense fallback={<Loader />}>
          <div className={styles.complementaryContent}>{right}</div>
        </Suspense>
        {/* </LayoutAsyncProcess> */}
      </Suspense>
    </div>
  );
}
