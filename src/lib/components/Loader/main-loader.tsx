import styles from '#@/lib/styles/layout.module.css';
import modalStyles from '#@/lib/styles/modal.module.css';

export const MainLoader = () => {
  return (
    <div className={styles.main}>
      <div className={ styles.mainContent }>
        <Loader />
      </div>
      <div className={ styles.complementaryContent }>
        <Loader />
      </div>
    </div>
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
