
import { Loader } from '#@/lib/components/Loader/loader';
import { Modal } from '#@/lib/components/Modal';
import typography from 'styles/fonts/typography.module.css';
import layout from 'styles/layout.module.css';

export default function Loading() {
  return (
    <Modal>
      <h4 className={typography.titleLarge}>Cargando</h4>
      <section className={layout.sectionColumn}>
        <Loader />
        <Loader />
        <Loader />
      </section>
    </Modal>
  );
}
