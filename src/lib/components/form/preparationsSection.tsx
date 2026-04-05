import styles from '#@/lib/styles/form.module.css';
import { PreparacionType, IngredientesType } from '#@/lib/types/especimenTypes';

interface PreparationsSectionProps {
  preparaciones: PreparacionType[];
  onChange: (newPreps: PreparacionType[]) => void;
}

export default function PreparationsSection({ preparaciones, onChange }: PreparationsSectionProps) {
  const safePreps = preparaciones || [];

  const addPreparacion = () => {
    const newPrep: PreparacionType = {
      usoTerapeutico: '',
      formaDeAplicacion: '',
      ingredientes: [],
      pasos: [],
    };
    onChange([...safePreps, newPrep]);
  };

  const removePreparacion = (indexToRemove: number) => {
    onChange(safePreps.filter((_, index) => index !== indexToRemove));
  };

  const updatePreparacionField = (prepIndex: number, field: keyof Pick<PreparacionType, 'usoTerapeutico' | 'formaDeAplicacion'>, value: string) => {
    const newPreps = [...safePreps];
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      [field]: value,
    };
    onChange(newPreps);
  };

  const addIngrediente = (prepIndex: number) => {
    const newPreps = [...safePreps];
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      ingredientes: [
        ...(newPreps[prepIndex].ingredientes || []),
        { ingrediente: '', cantidad: '' },
      ],
    };
    onChange(newPreps);
  };

  const updateIngrediente = (prepIndex: number, ingIndex: number, field: keyof IngredientesType, value: string) => {
    const newPreps = [...safePreps];
    const newIngs = [...(newPreps[prepIndex].ingredientes || [])];
    newIngs[ingIndex] = {
      ...newIngs[ingIndex],
      [field]: value,
    };
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      ingredientes: newIngs,
    };
    onChange(newPreps);
  };

  const removeIngrediente = (prepIndex: number, ingIndexToRemove: number) => {
    const newPreps = [...safePreps];
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      ingredientes: (newPreps[prepIndex].ingredientes || []).filter((_, i) => i !== ingIndexToRemove),
    };
    onChange(newPreps);
  };

  const addPaso = (prepIndex: number) => {
    const newPreps = [...safePreps];
    const pasos = newPreps[prepIndex].pasos || [];
    const nextStepNum = pasos.length > 0 ? Math.max(...pasos.map((p) => p[0])) + 1 : 1;

    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      pasos: [...pasos, [nextStepNum, '']],
    };
    onChange(newPreps);
  };

  const updatePaso = (prepIndex: number, pasoIndex: number, value: string) => {
    const newPreps = [...safePreps];
    const newPasos = [...(newPreps[prepIndex].pasos || [])];
    newPasos[pasoIndex] = [newPasos[pasoIndex][0], value];
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      pasos: newPasos,
    };
    onChange(newPreps);
  };

  const removePaso = (prepIndex: number, pasoIndexToRemove: number) => {
    const newPreps = [...safePreps];
    newPreps[prepIndex] = {
      ...newPreps[prepIndex],
      pasos: (newPreps[prepIndex].pasos || []).filter((_, i) => i !== pasoIndexToRemove),
    };
    onChange(newPreps);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionSubTitle}>Preparaciones</h3>
      {safePreps.map((prep, prepIndex) => (
        <div key={`prep-${prepIndex}`} className={styles.subSection}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Uso Terapéutico</label>
            <input
              type="text"
              className={styles.inputFilled}
              value={prep.usoTerapeutico}
              onChange={(e) => updatePreparacionField(prepIndex, 'usoTerapeutico', e.target.value)}
              placeholder="Ej. Para el dolor de estómago"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Forma de Aplicación</label>
            <input
              type="text"
              className={styles.inputFilled}
              value={prep.formaDeAplicacion || ''}
              onChange={(e) => updatePreparacionField(prepIndex, 'formaDeAplicacion', e.target.value)}
              placeholder="Ej. Cataplasma, Infusión, Tintura..."
            />
          </div>

          <div className={styles.subSection} style={{ backgroundColor: 'var(--surface-container-high)' }}>
            <label className={styles.label}>Ingredientes</label>
            {(prep.ingredientes || []).map((ing, ingIndex) => (
              <div key={`ing-${prepIndex}-${ingIndex}`} className={styles.row} style={{ marginBottom: '0.5rem' }}>
                <input
                  type="text"
                  className={styles.inputOutlined}
                  placeholder="Ingrediente (Ej. Romero en polvo)"
                  value={ing.ingrediente}
                  onChange={(e) => updateIngrediente(prepIndex, ingIndex, 'ingrediente', e.target.value)}
                />
                <input
                  type="text"
                  className={styles.inputOutlined}
                  placeholder="Cantidad (Ej. 5 gramos)"
                  value={ing.cantidad}
                  onChange={(e) => updateIngrediente(prepIndex, ingIndex, 'cantidad', e.target.value)}
                />
                <button
                  type="button"
                  className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => removeIngrediente(prepIndex, ingIndex)}
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              className={`${styles.button} ${styles.addBtn}`}
              onClick={() => addIngrediente(prepIndex)}
            >
              + Añadir Ingrediente
            </button>
          </div>

          <div className={styles.subSection} style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--on-surface)' }}>
            <label className={styles.label}>Pasos a seguir</label>
            {(prep.pasos || []).map((pasoTuple, pasoIndex) => {
              const [pasoNum, instruction] = pasoTuple;
              return (
                <div key={`paso-${prepIndex}-${pasoNum}`} className={styles.arrayItem}>
                  <div className={styles.stepNumber}>{pasoNum}</div>
                  <input
                    type="text"
                    className={styles.inputOutlined}
                    placeholder="Instrucción del paso"
                    value={instruction}
                    onChange={(e) => updatePaso(prepIndex, pasoIndex, e.target.value)}
                  />
                  <button
                    type="button"
                    className={`${styles.button} ${styles.deleteBtn}`}
                    onClick={() => removePaso(prepIndex, pasoIndex)}
                  >
                    X
                  </button>
                </div>
              );
            })}
            <button
              type="button"
              className={`${styles.button} ${styles.addBtn}`}
              onClick={() => addPaso(prepIndex)}
            >
              + Añadir Paso
            </button>
          </div>

          <button
            type="button"
            className={`${styles.button} ${styles.deleteBtn}`}
            style={{ marginTop: '1rem' }}
            onClick={() => removePreparacion(prepIndex)}
          >
            Eliminar Preparación Completa
          </button>
        </div>
      ))}
      <button
        type="button"
        className={`${styles.button} ${styles.addBtn}`}
        onClick={addPreparacion}
      >
        + Añadir Nueva Preparación
      </button>
    </div>
  );
}
