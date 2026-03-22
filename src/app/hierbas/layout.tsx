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
    top,
    right,
    modal,
  }: {
    children: ReactNode;
    top     : ReactNode;
    right   : ReactNode;
    modal   : ReactNode;
  }
) {
  return (
    <Suspense fallback={<Loader />}>
      {/* <LayoutAsyncProcess> */}
      <Suspense fallback={<Loader />}>{modal}</Suspense>
      <Suspense fallback={<Loader />}>
        <div className={styles.top}>{top}</div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <div className={styles.left}>{children}</div>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <div className={styles.right}>{right}</div>
      </Suspense>
      {/* </LayoutAsyncProcess> */}
    </Suspense>
  );
}
