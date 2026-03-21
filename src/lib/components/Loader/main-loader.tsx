import styles from '#@/lib/styles/layout.module.css';
import modalStyles from '#@/lib/styles/modal.module.css';

export const TableLoader = () => {
  return (
    <td>
      <div className={styles.loader}></div>;
    </td>
  );
};

export const Loader = () => {
  return <div className={styles.loader}></div>;
};

export const ModalLoader = () => {
  return (
    <div className={modalStyles.open}>
      <div className={styles.loader}></div>
    </div>
  );
};
