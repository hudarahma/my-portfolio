import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import styles from '../styles/About.module.css';

function About() {

  useEffect(()=>{
    Aos.init({ duration: 2000 });
  },[]);

  return (
    <div className={styles.container}>
      <div data-aos="fade-right" className={styles.intro}>
        <p>
          I'm Huda Soleimani, <br />Web Developer, Web Designer, UI/UX Design<br />Borned and living in United Arab Emirates
        </p>
      </div>
      <div  data-aos="fade-right"  data-aos-delay="1000" className={styles.info}>
        I started programming at age 14, and i'm still passion about it.<br /> Holding Bachouler's degree in Computer Software at 2010. <br /> Joined Full Stack Mastery Bootcamp, LA, 2020
       <br /> Being a FSM student, having a great experience in web development <br />
        Learning problem solving, HTML, CSS, JS, React.js, Firebase and Firestore.
      </div>
    </div>
  )
}

export default About;