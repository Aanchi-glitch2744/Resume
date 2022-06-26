import React from 'react';
import { ArrowDown } from 'react-feather';
import styles from './Create.module.css';

export default function Create() {

  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
 

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {
            colors.map((item=>
              <span
              key={item}
              style={{ backgroundColor: item }} 
              className={styles.color} />
              ))
          }
          {/* <span className={styles.color} />
          <span className={styles.color} />
          <span className={styles.color} />
          <span className={styles.color} />
           */}
        </div>
        <button>Download <ArrowDown/> </button>
      </div>
    </div>

  )
}
