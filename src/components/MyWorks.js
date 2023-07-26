import React, { useEffect, useContext } from 'react';
import { MyContext } from '../Context';
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"
import styles from '../styles/MyWork.module.css';


function MyWorks() {
  const { projects } = useContext(MyContext);

  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <>
    { projects && projects.map((project)=> (
      <Link to={project.link} target='_blank' key={project.id}>

        <div data-aos="fade-left" data-aos-delay="100" className={styles.container} key={project.id}>
      
            <span className={styles.mywork__desc} >
                {project.name}<br />
                {project.description}
                <br />
                <br />
                <Link to={project.readme} target='_blank' className={styles.readme}>{project.readme}</Link>
            </span>
            <img className={styles.mywork__image} src={project.img} alt='project'/>

        </div>
      </Link>
    ))}
    </>

  )
}

export default MyWorks
