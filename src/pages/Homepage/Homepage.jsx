import React from 'react'
import './homepage.css'
import Header from '../../components/Header/Header'
import heroAnimation from'./assets/animation-for-hero.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

const Homepage = () => {

  SwiperCore.use([Autoplay])

  return (
    <div  id='homepage'>

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
          {/* <h1>We <span className='focus-spell'>Focuses</span> On Making</h1>
          <p>web apps with a wide range of highlights that enable our customers to boost their exceptional business confidence and advantage over their opposition.</p> */}
          <button className='hero-button'>Explore More</button>
        </div>
        <div className='hero-animation'>
          <img src={heroAnimation} alt="" />
        </div>

      </div>

      </section>
    </div>
  )
}

export default Homepage