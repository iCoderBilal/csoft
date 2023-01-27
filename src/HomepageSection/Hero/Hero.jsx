import React, { useState, useEffect, useRef } from "react";
import './hero.css'
import Header from '../../components/Header/Header'
import heroAnimation from'./assets/hero-animation.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import videoBg from './assets/hero-vidBg.mp4';


const Hero = () => {
  SwiperCore.use([Autoplay])
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
    <div  id='homepage' style={{overflow:'hidden'}} data-scroll-section>

   <video id="background-video" playsInline
          loop
          muted
          autoPlay
          useRef={videoEl}
          >
<source src={videoBg} type="video/mp4"/>
</video>

      <section id='hero-section'>
      <div className='hero-nav'>
        <Header/>
      </div>
      <div className='hero-main'>

        <div className='hero-heading-slide'>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={1300}
        autoplay = {{ 
          delay: 4000,
          disableOnInteraction: false
        }}
  
       >
      <SwiperSlide><h1>We <span className='focus-spell'>Focuses</span> On Making web apps with a wide range</h1>
          <p> of highlights that enable our customers to boost their exceptional business confidence and advantage over their opposition.</p></SwiperSlide>
      <SwiperSlide><h1>For our incredibly <span className='focus-spell'>flexible and robust</span> mobile apps</h1>
          <p>we are concerned for giving our customers infinite potential outcomes at the best prices that have never been experienced before</p></SwiperSlide>
      <SwiperSlide><h1><span className='focus-spell'>CSOFT</span>  is the main spot where you can find updated answers</h1>
          <p> under one roof for all issues related to technology and networking. We promise that our customers will be fully satisfied with our business arrangement</p></SwiperSlide>
      ...
      </Swiper>
      <div className="hero-btn">
          <button className='hero-button'>Our Services</button>
          <button className='hero-button'>About Us</button>

          </div>

        </div>

      </div>

      </section>

      {/* -----Hero Section ends----- */}
    
    
    </div>
  )
}

export default Hero