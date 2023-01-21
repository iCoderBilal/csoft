import React, { useEffect, useRef } from "react";
import './homepage.css'
import Header from '../../components/Header/Header'
import heroAnimation from'./assets/hero-animation.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';


const Homepage = () => {
  console.log(heroAnimation)

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
    <div  id='homepage' style={{overflow:'hidden'}}>

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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
       >
      <SwiperSlide><h1>We <span className='focus-spell'>Focuses</span> On Making</h1>
          <p>web apps with a wide range of highlights that enable our customers to boost their exceptional business confidence and advantage over their opposition.</p></SwiperSlide>
      <SwiperSlide><h1>We <span className='focus-spell'>Focuses</span> On Making</h1>
          <p>web apps with a wide range of highlights that enable our customers to boost their exceptional business confidence and advantage over their opposition.</p></SwiperSlide>
      <SwiperSlide><h1>We <span className='focus-spell'>Focuses</span> On Making</h1>
          <p>web apps with a wide range of highlights that enable our customers to boost their exceptional business confidence and advantage over their opposition.</p></SwiperSlide>
      ...
      </Swiper>
          <button className='hero-button'>Explore More</button>
        </div>
        <div className='hero-animation'>
          <img src={heroAnimation} alt="" />
        {/* <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src={heroAnimation}
          ref={videoEl}
        /> */}
        
        </div>

      </div>

      </section>

      {/* -----Hero Section ends----- */}

      <section id='our-planning'>
        <div className="container">
          <div className="planning-heading">
            <h2><span className='our-spell'>Our</span><br /><span className='planning-spell'>Planning</span></h2>
            </div>
          <div className="our-planning-data">

          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage