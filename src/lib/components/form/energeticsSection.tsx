import styles from '#@/lib/styles/form.module.css';
import ToggleButton from './toggleButton';
import { PolaridadEnergeticaType, listaChakras, ChakraType } from '#@/lib/types/especimenTypes';

interface EnergeticsSectionProps {
  elementosAsociados: string;
  polaridadEnergetica: PolaridadEnergeticaType;
  chakrasAsociados: ChakraType[];
  onChange: (field: 'elementosAsociados' | 'polaridadEnergetica' | 'chakrasAsociados', value: any) => void;
}

export default function EnergeticsSection({ 
  elementosAsociados, 
  polaridadEnergetica, 
  chakrasAsociados, 
  onChange 
}: EnergeticsSectionProps) {

  const togglePolaridad = (val: 'Masculine' | 'Feminine') => {
    const current = polaridadEnergetica || [];
    let next = current.includes(val)
      ? current.filter((p) => p !== val)
      : [...current, val];

    if (next.length === 0) {
      next = [val];
    }
    onChange('polaridadEnergetica', next as PolaridadEnergeticaType);
  };

  const toggleChakra = (chakraNombre: string) => {
    const current = chakrasAsociados || [];
    const exists = current.some((c) => c.nombre === chakraNombre);

    if (exists) {
        onChange('chakrasAsociados', current.filter((c) => c.nombre !== chakraNombre));
        return;
    }

    const chakraToAdd = listaChakras.find((c) => c.nombre === chakraNombre);
    if (chakraToAdd) {
      onChange('chakrasAsociados', [...current, chakraToAdd]);
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Elemento Asociado</label>
        <select
          name="elementosAsociados"
          className={styles.inputFilled}
          value={elementosAsociados}
          onChange={(e) => onChange('elementosAsociados', e.target.value)}
        >
          {['Metal', 'Madera', 'Fuego', 'Tierra', 'Aire', 'Agua'].map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      {/* Polaridad Energética */}
      <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
        <label className={styles.label}>Polaridad Energética</label>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
          <ToggleButton
            checked={polaridadEnergetica.includes('Masculine')}
            onChange={() => togglePolaridad('Masculine')}
          >
            Masculine
          </ToggleButton>
          <ToggleButton
            checked={polaridadEnergetica.includes('Feminine')}
            onChange={() => togglePolaridad('Feminine')}
          >
            Femenina
          </ToggleButton>
        </div>
      </div>

      {/* Chakras Asociados */}
      <div className={styles.inputGroup} style={{ marginTop: '1.5rem' }}>
        <label className={styles.label}>Chakras Asociados</label>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem', 
          marginTop: '0.5rem' 
        }}>
          {listaChakras.map((chakra) => {
            const isChecked = chakrasAsociados.some((c) => c.nombre === chakra.nombre);
            return (
              <ToggleButton
                key={chakra.nombre}
                checked={isChecked}
                onChange={() => toggleChakra(chakra.nombre)}
              >
                <span>
                  <strong>{chakra.nombre}</strong> - <em>{chakra.nombreSanscrito}</em> ({chakra.color})
                </span>
              </ToggleButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
