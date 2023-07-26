import React, { useContext, useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Home.module.css';
import About from './About';
import MyWorks from './MyWorks';
import WhatIDo from './WhatIDo';
import Aos from 'aos';
import "aos/dist/aos.css"
import { MyContext } from '../Context';


function Home() {

  const { showProjects } = useContext(MyContext);
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    {
      url: "https://repository-images.githubusercontent.com/31444190/6e23b480-2659-11ea-930d-968c70602dcc"
    },
    { 
      url: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
    },
    {
      url: "https://repository-images.githubusercontent.com/31444190/6e23b480-2659-11ea-930d-968c70602dcc"
    },
  ]

  useEffect(()=>{
    showProjects();
  },[]);
  
  return (
    <div className={styles.home__container}>
      <div className={styles.overlay} data-aos="zoom-in" >
        <span className={styles.span}>Welcome to My Portfolio</span>
        <SimpleImageSlider 
          style={{ opacity: 0.2 }}
          width={700}
          height={550}
          images={sliderImages}
          autoPlay={true}
          onStartSlide = {(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay = {2}
        />
      </div>
      <About />
      <MyWorks />
      <WhatIDo />
    </div>
  )
}

export default Home
