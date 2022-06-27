import React, { useRef, useState } from "react";
import { ArrowDown } from 'react-feather';
import ReactToPrint from "react-to-print";
import styles from './Create.module.css';
import CreateEdit from '../components/CreateEdit/CreateEdit';
import Resume from '../components/Resume/Resume';

// import temp1 from "../assets/images/kitten-small.png";
// import temp2 from "../assets/images/download.png";

export default function Create() {

  const colors = ["#239ce2", "#48bb78", "#ee9cff", "#a0aec0", "#ed8936"];

  const temp1 = require('../assets/images/temp1.jpg');
  const temp2 = require('../assets/images/temp2.jpg');
  const temp3 = require('../assets/images/temp3.jpg');
  const temp4 = require('../assets/images/temp4.jpg');
  const temp5 = require('../assets/images/temp5.jpg');

  const templates = { temp1 , temp2 , temp3 , temp4, temp5 };
  const [selected, setSelected] = useState(templates.temp1);

  const imgs = [
    "https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg",
    "https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg",
    '../assets/images/temp1'
  ];
  const [activeImg, setActiveImg] = useState(imgs[0]);


  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience/ Internships",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    skills: "Skills",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Select a Template and Start Building</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {
            colors.map((item=>
              <span
              key={item}
              style={{ backgroundColor: item }} 
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              } $(activeImg === item ? styles.active : '')`}
              // onClick={() => setActiveColor(item) }
              onClick={() => {setActiveColor(item); setSelected(templates.temp2)} } //works
              //onClick={() => {setActiveColor(item); setActiveImg(imgs.map(item))} } 
            />
          ))}
          <p> : Select a template color to preview</p>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.tempsty}>
        <h4>Template Preview</h4>
        <img src={selected} alt='shirt' />
      </div>
      {/* <div className={styles.imgs}>
      {imgs.map((item) => (
            <span
              key={item}
              // style={{ backgroundColor: item }}
              className={`
              ${styles.imgs} ${activeImg === item ? styles.active : ""} 
                 
              `}
              // onClick={() => setActiveColor(item) }
              onClick={
                () => setActiveImg(item)
              }
            />
          ))}
          <img src={activeImg} alt='shirt' /> 

      </div>*/}
      <div className={styles.main}>
        <CreateEdit sections={sections} information={resumeInformation} setInformation={setResumeInformation} />
        <Resume ref={resumeRef} sections={sections} information={resumeInformation} activeColor={activeColor}/>
      </div>
    </div>

  )
}
