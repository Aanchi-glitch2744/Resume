import React from 'react';
import styles from './Create.module.css';
import CreateEdit from '../components/CreateEdit/CreateEdit';
import Resume from '../components/Resume/Resume';

export default function History() {
  
  // const resumeRef = useRef();

    return (
      <div className={styles.main}>
        {/* <CreateEdit sections={sections} information={resumeInformation} setInformation={setResumeInformation} /> */}
        {/* <Resume ref={resumeRef} sections={sections} information={resumeInformation}/>  */}
        <h1>History</h1>
      </div>
    )
  }