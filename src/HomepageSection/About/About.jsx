import React from 'react'
import { useEffect } from 'react';
import './about.css';


const About = () => {

    
  return (
    <>
    <section id="about-section" className="text-center" data-scroll-section>
      <div className="about-section-container">
        <div className="about-section-heading" id='section-heading'>
        
          <h2>WHO WE ARE</h2>
      
        </div>
  

            <div className="about-main-content" data-scroll data-scroll-direction="vertical" data-scroll-speed="1" data-scroll-target="#about-section">
              <h3>Striking & Expedient Solutions</h3>

              <p className='about-description' id='about-description'>CSOFT IT solutions deals with ultimate business and IT Solutions, we provide the best experience to our clients, it does not matter whether you are going to start a new concept or are already working on a developed concept. We have solutions for every one with best quality</p>
            </div>


            <div className="about-section-cards" data-scroll data-scroll-direction="vertical" data-scroll-speed="1" data-scroll-target="#about-section">
                <div className="about-card">
                    <h4>100+</h4>
                    <p>Team Members</p>
                    </div>
                    <div className="about-card">
                    <h4>500+</h4>
                    <p>Satisfied Clients</p>
                    </div>
                    <div className="about-card">
                    <h4>10+</h4>
                    <p>Successful Years</p>
                    </div>
                    <div className="about-card">
                    <h4>1500+</h4>
                    <p>Successful Projects</p>
                    </div>
              </div>

              </div>
      </section>
    </>
  )
}

export default About