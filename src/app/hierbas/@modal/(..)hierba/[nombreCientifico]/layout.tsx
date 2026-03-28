import { ModalLoader } from '#@/lib/components/Loader/modal-loader';
import { Modal } from '#@/lib/components/Modal';
import { ReactNode, Suspense } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Modal>
      <Suspense fallback={<ModalLoader />}>{children}</Suspense>
    </Modal>
  );
}
