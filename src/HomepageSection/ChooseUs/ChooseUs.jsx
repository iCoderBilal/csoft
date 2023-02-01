import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './choose.css'
import ApplicationServices from './assets/categories.png'
import Enterprises from './assets/apartments.png';
import Mobility from './assets/mobility.png'
import Quality from './assets/award.png';

const ChooseUs = () => {
  const { scroll } = useLocomotiveScroll();
  return (
    <>
    <div className="chooseUs-section" id='chooseUs' data-scroll-section>
      <div className="section-container">
        <div className="section-heading" id='about-section-heading' data-scroll>
          <h2 data-scroll data-scroll-repeat>Why<br/> <span>Choose Us</span></h2>
        </div>
        <div className="main-content">

          <div className="main-content-data">
            <div className="heading-description" id='first-data-div' data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-target="#about-section-heading">
              <h3>Application Services</h3>
              <p>from startups to enterprise solutions, the apps we produce for our clients support their clients initiatives first and foremost through open collaboration, forward thinking user expierence, engaging design, cross platform development for both web and mobile</p>

            </div>
            <div className="main-img">
              <img src={ApplicationServices} alt="Application Services Icon" />
              
              </div>
          </div>


          <div className="main-content-data">
            <div className="heading-description" id='second-data-div' data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-target="#first-data-div">
              <h3>Enterprises Solutions</h3>
              <p>from startups to enterprise solutions, the apps we produce for our clients support their clients initiatives first and foremost through open collaboration, forward thinking user expierence, engaging design, cross platform development for both web and mobile</p>

            </div>
            <div className="main-img">
              <img src={Enterprises} alt="Enterprises Solution Icon" />
              
              </div>
          </div>


          <div className="main-content-data">
            <div className="heading-description" id='third-data-div' data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-target="#second-data-div">
              <h3>Mobility Solution</h3>
              <p>from startups to enterprise solutions, the apps we produce for our clients support their clients initiatives first and foremost through open collaboration, forward thinking user expierence, engaging design, cross platform development for both web and mobile</p>

            </div>
            <div className="main-img">
              <img src={Mobility} alt="Mobilitiy Solution icon" />
              
              </div>
          </div>


          <div className="main-content-data">
            <div className="heading-description" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-target="#third-data-div">
              <h3>Quality Engineering</h3>
              <p>from startups to enterprise solutions, the apps we produce for our clients support their clients initiatives first and foremost through open collaboration, forward thinking user expierence, engaging design, cross platform development for both web and mobile</p>

            </div>
            <div className="main-img">
              <img src={Quality} alt="Quality Engineering Icon" />
              
              </div>
          </div>


        </div>
      </div>

    </div>
    </>
  )
}

export default ChooseUs