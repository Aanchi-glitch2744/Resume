import React from 'react';
import styles from './InputController.module.css';

export default function InputController({ label, ...props }) {
  return (
    <div className={styles.container}>
        {label && <label>{label}</label>}
        <input type="text" {...props} />
    </div>
  )
}
