import { ModalLoader } from '#@/lib/components/Loader/main-loader';
import { Modal } from '#@/lib/components/Modal';
import { ReactNode, Suspense } from 'react';

export default async function Layout( {
  params,
  children,
}: {
  params  : Promise<{ nombreCientifico: string }>;
  children: ReactNode;
} ) {
  return (
    <Modal>
      <Suspense fallback={<ModalLoader />}>{children}</Suspense>
    </Modal>
  );
}
