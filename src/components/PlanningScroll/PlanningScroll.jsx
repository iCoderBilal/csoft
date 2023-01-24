import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "./planning.css";
import Bgvid from './assest/planning-vid.mp4'

const PlanningScroll = () => {
    const alignCenter = { display: 'flex', }
    // const planheight = document.getElementById('our-planning');
    let getHeight = window.innerHeight;
    console.log(getHeight)



  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  

  return (
    <div>
 
       <section className="our-planning" id="our-planning">
    <Parallax pages={2} style={{background: 'black'}}>

     


      <ParallaxLayer sticky={{ start: 0, end: 2 }}>
        <div className='heading-card' >
          <p>I'm a sticky layer</p>
          <video
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src={Bgvid}
          ref={videoEl}
        />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.1} speed={0.5}>
        <div className='card parallax purple'>
          <p>I'm not</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.5} speed={0.5}>
        <div className='card parallax blue'>
          <p>Neither am I</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={0.5} >
        <div className='card parallax blue'>
          <p>Neither am I</p>
        </div>
      </ParallaxLayer>


       <ParallaxLayer offset={1.1} speed={0.5}>
        <div className='card parallax purple'>
          <p>I'm not</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={0.5}>
        <div className='card parallax blue'>
          <p>Neither am I</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0.5}>
        <div className='card parallax blue'>
          <p>Neither am I</p>
        </div>
      </ParallaxLayer>
    </Parallax>
    </section>
  </div>
  )
}

export default PlanningScroll