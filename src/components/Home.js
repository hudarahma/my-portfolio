import React, { useContext, useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styles from '../styles/Home.module.css';
import About from './About';
import MyWorks from './MyWorks';
import WhatIDo from './WhatIDo';
import "aos/dist/aos.css"
import { MyContext } from '../Context';
import Footer from './Footer';


function Home() {

  const { showProjects } = useContext(MyContext);
  const [imageNum, setImageNum] = useState(1);

  const sliderImages = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/h-dev-portfolio.appspot.com/o/disney-login-page.jpg?alt=media&token=35ae7bb1-9607-48e5-8635-79e15a46190a"
    },
    { 
      url: "https://firebasestorage.googleapis.com/v0/b/h-dev-portfolio.appspot.com/o/green-treasure.jpg?alt=media&token=79e35bc2-6476-4c89-8012-89f4230f6b5b"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/h-dev-portfolio.appspot.com/o/social-media-dashboard.jpg?alt=media&token=cf104f47-55d7-46dc-b1a2-3231afff06e0"
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/h-dev-portfolio.appspot.com/o/tesla.jpg?alt=media&token=af2b6847-9bdb-401f-97bc-6f8b749b0090"
    },
  ]

  useEffect(()=>{
    showProjects();
  },[]);
  
  return (
    <div className={styles.home__container}>
      <div className={styles.overlay} data-aos="zoom-in" >
        <span className={styles.span} data-aos="flip-right" data-aos-delay="100">Welcome to My Portfolio</span>
        <SimpleImageSlider 
          style={{ opacity: 0.1 , objectFit:"cover", overflow:"hidden", display:"flex", alignItems:"end", justifyContent:"center"}}
          width={"100%"}
          height={"100%"}
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
      <Footer />
    </div>
  )
}

export default Home
