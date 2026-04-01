// components/ui/ToggleButton.tsx
'use client';

import { ChangeEventHandler, ReactNode } from 'react';
import styles from '#@/lib/styles/toggle.module.css';

interface ToggleButtonProps {
  checked   : boolean;
  onChange  : ChangeEventHandler<HTMLInputElement>;
  label    ?: ReactNode;
  name     ?: string;
  disabled? : boolean;
}

export default function ToggleButton(
  {
    checked,
    onChange,
    label,
    name,
    disabled = false,
  }: ToggleButtonProps
) {
  return (
    <label className={styles.toggleWrapper} style={{
      opacity: disabled
        ? 0.6
        : 1
    }}
    >
      <div className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
          disabled={disabled}
        />
        <span className={styles.slider}></span>
      </div>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
}