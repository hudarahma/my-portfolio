import React, { useContext, useEffect } from 'react'
import styles from '../styles/Home.module.css';
import About from './About';
import MyWorks from './MyWorks';
import WhatIDo from './WhatIDo';
import { MyContext } from '../Context';

function Home() {

  const { projects, showProjects } = useContext(MyContext);

  useEffect(()=>{
    showProjects();
  },[]);
  
  return (
    <div className={styles.home__container}>
      <About />
      { projects && projects.map((project)=>(

        <MyWorks project={project} key={project.id}/>

      ))}
      <WhatIDo />
    </div>
  )
}

export default Home
