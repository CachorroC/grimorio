// components/ui/ToggleButton.tsx
'use client';

import { ChangeEventHandler, ReactNode, CSSProperties } from 'react';
import styles from '#@/lib/styles/toggle.module.css';

interface ToggleButtonProps {
  checked  : boolean;
  onChange : ChangeEventHandler<HTMLInputElement>;
  children?: ReactNode;
  name?    : string;
  disabled?: boolean;
  style?   : CSSProperties;
}

export default function ToggleButton(
  {
    checked,
    onChange,
    children,
    name,
    disabled = false,
    style,
  }: ToggleButtonProps
) {
  return (
    <label
      className={styles.toggleWrapper}
      style={{
        opacity: disabled
          ? 0.6
          : 1,
        ...style,
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
      {children && <span className={styles.labelText}>{children}</span>}
    </label>
  );
}
