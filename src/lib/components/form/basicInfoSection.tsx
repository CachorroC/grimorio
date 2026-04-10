/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';
import styles from '#@/lib/styles/form.module.css';
import ToggleButton from './toggleButton';

interface BasicInfoSectionProps {
  nombreCientifico: string;
  imageUrl?       : string;
  nativa          : boolean;
  onChange        : ( field: 'nombreCientifico' | 'imageUrl' | 'nativa', value: any ) => void;
}

export default function BasicInfoSection(
  {
    nombreCientifico,
    imageUrl,
    nativa,
    onChange,
  }: BasicInfoSectionProps
) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.type === 'checkbox'
      ? e.target.checked
      : e.target.value;
    onChange(
      e.target.name as any, value
    );
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
        <div style={{
          marginTop: '1rem'
        }}
        >
          <ToggleButton
            name="nativa"
            checked={nativa}
            onChange={handleInputChange}
          >
            ¿Es una planta nativa?
          </ToggleButton>
        </div>
      </div>
    </div>
  );
}
