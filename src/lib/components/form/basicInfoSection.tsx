import { ChangeEvent } from 'react';
import styles from '#@/lib/styles/form.module.css';

interface BasicInfoSectionProps {
  nombreCientifico: string;
  imageUrl?: string;
  onChange: (field: 'nombreCientifico' | 'imageUrl', value: string) => void;
}

export default function BasicInfoSection({ nombreCientifico, imageUrl, onChange }: BasicInfoSectionProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name as 'nombreCientifico' | 'imageUrl', e.target.value);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionSubTitle}>Información Principal</h3>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Nombre Científico</label>
        <input
          type="text"
          name="nombreCientifico"
          className={styles.inputFilled}
          value={nombreCientifico}
          onChange={handleInputChange}
          required
        />
        <label className={styles.label}>URL de la imagen principal</label>
        <input
          type="text"
          name="imageUrl"
          className={styles.inputFilled}
          value={imageUrl ?? ''}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
