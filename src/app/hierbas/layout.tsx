import { Loader } from '#@/lib/components/Loader/main-loader';
import styles from '#@/lib/styles/layout.module.css';
import { ReactNode, Suspense } from 'react';
import { AccordionScrollProvider } from '../context/AcordionScrollContext';

export default function MainLayout(
  {
    children,
    right,
    modal,
  }: {
    children: ReactNode;
    right   : ReactNode;
    modal   : ReactNode;
  }
) {
  return (
    <AccordionScrollProvider>
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
    </AccordionScrollProvider>
  );
}
