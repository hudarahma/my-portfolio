import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import styles from '../styles/MyWork.module.css';

function MyWorks({ project }) {

  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  return (

    <div data-aos="fade-left" data-aos-delay="100" className={styles.container} key={project.id}>

        <span className={styles.mywork__desc} >
            {project.name}<br />
            {project.description}
            <br />
            <br />
            Readme About me
        </span>
        <img className={styles.mywork__image} src={project.img} alt='project'/>

    </div>

  )
}

export default MyWorks
