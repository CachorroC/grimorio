/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '#@/lib/styles/form.module.css';
import ToggleButton from './toggleButton';
import {
  PolaridadEnergeticaType,
  listaChakras,
  ChakraType,
  listaDoshas,
  TridoshasType,
} from '#@/lib/types/especimenTypes';

interface EnergeticsSectionProps {
  elementosAsociados: string;
  polaridadEnergetica: PolaridadEnergeticaType;
  chakrasAsociados: ChakraType[];
  doshas: TridoshasType[];
  onChange: (
    field:
      | 'elementosAsociados'
      | 'polaridadEnergetica'
      | 'chakrasAsociados'
      | 'doshas',
    value: any,
  ) => void;
}

export default function EnergeticsSection({
  elementosAsociados,
  polaridadEnergetica,
  chakrasAsociados,
  doshas,
  onChange,
}: EnergeticsSectionProps) {
  const togglePolaridad = (val: 'Masculine' | 'Feminine') => {
    const current = polaridadEnergetica || [];
    let next = current.includes(val)
      ? current.filter((p) => {
          return p !== val;
        })
      : [...current, val];

    if (next.length === 0) {
      next = [val];
    }

    onChange('polaridadEnergetica', next as PolaridadEnergeticaType);
  };

  const toggleChakra = (chakraNombre: string) => {
    const current = chakrasAsociados || [];
    const exists = current.some((c) => {
      return c.nombre === chakraNombre;
    });

    if (exists) {
      onChange(
        'chakrasAsociados',
        current.filter((c) => {
          return c.nombre !== chakraNombre;
        }),
      );

      return;
    }

    const chakraToAdd = listaChakras.find((c) => {
      return c.nombre === chakraNombre;
    });

    if (chakraToAdd) {
      onChange('chakrasAsociados', [...current, chakraToAdd]);
    }
  };

  const toggleDosha = (dosha: TridoshasType) => {
    const current = doshas || [];
    const next = current.includes(dosha)
      ? current.filter((d) => {
          return d !== dosha;
        })
      : [...current, dosha];

    onChange('doshas', next);
  };

  return (
    <div className={styles.section}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>Elemento Asociado</label>
        <select
          name="elementosAsociados"
          className={styles.inputFilled}
          value={elementosAsociados}
          onChange={(e) => {
            return onChange('elementosAsociados', e.target.value);
          }}
        >
          {['Metal', 'Madera', 'Fuego', 'Tierra', 'Aire', 'Agua'].map((el) => {
            return (
              <option
                key={el}
                value={el}
              >
                {el}
              </option>
            );
          })}
        </select>
      </div>

      {/* Ayurveda Doshas */}
      <div
        className={styles.inputGroup}
        style={{
          marginTop: '1.5rem',
        }}
      >
        <label className={styles.label}>Doshas que Controla (Ayurveda)</label>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {listaDoshas.map((dosha) => {
            return (
              <ToggleButton
                key={dosha}
                checked={(doshas || []).includes(dosha)}
                onChange={() => {
                  return toggleDosha(dosha);
                }}
              >
                {dosha}
              </ToggleButton>
            );
          })}
        </div>
      </div>

      {/* Polaridad Energética */}
      <div
        className={styles.inputGroup}
        style={{
          marginTop: '1.5rem',
        }}
      >
        <label className={styles.label}>Polaridad Energética</label>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            marginTop: '0.5rem',
          }}
        >
          <ToggleButton
            checked={polaridadEnergetica.includes('Masculine')}
            onChange={() => {
              return togglePolaridad('Masculine');
            }}
          >
            Masculine
          </ToggleButton>
          <ToggleButton
            checked={polaridadEnergetica.includes('Feminine')}
            onChange={() => {
              return togglePolaridad('Feminine');
            }}
          >
            Femenina
          </ToggleButton>
        </div>
      </div>

      {/* Chakras Asociados */}
      <div
        className={styles.inputGroup}
        style={{
          marginTop: '1.5rem',
        }}
      >
        <label className={styles.label}>Chakras Asociados</label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginTop: '0.5rem',
          }}
        >
          {listaChakras.map((chakra) => {
            const isChecked = chakrasAsociados.some((c) => {
              return c.nombre === chakra.nombre;
            });

            return (
              <ToggleButton
                key={chakra.nombre}
                checked={isChecked}
                onChange={() => {
                  return toggleChakra(chakra.nombre);
                }}
              >
                <span>
                  <strong>{chakra.nombre}</strong> -{' '}
                  <em>{chakra.nombreSanscrito}</em> ({chakra.color})
                </span>
              </ToggleButton>
            );
          })}
        </div>
      </div>
    </div>
  );
}
