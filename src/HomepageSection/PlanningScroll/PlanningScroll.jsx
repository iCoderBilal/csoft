import React, { useEffect, useRef } from "react";
import "./planning.css";
import Bgvid from './asset/planning-vid.mp4'

const PlanningScroll = () => {

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
  
    <section id="about-section" className="py-80" data-scroll-section>
    <div className="container px-5 mx-auto">
      <div className="lg:grid grid-cols-2 gap-4 items-start"  id="about">
        <div className="about-section-heading m-0 p-0" data-scroll data-scroll-sticky data-scroll-target="#about">
       
          <h2 className="text-5xl font-extrabold"><span className="our-spell">Our</span><br></br> Planning</h2>
{/*      
          <video
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src={Bgvid}
          ref={videoEl}
        /> */}
   
        </div>
        <div className="text-xl pt-4 lg:pt-0 about-section-cards" data-scroll>

          <div className="about-card pt-5">
            <h3><span>1</span> Understanding your Business needs</h3>
          <p className="mb-8">
          Our professional team members understand your business plan by under considering your background and directions
          </p>
          </div>
          <div className="about-card">
            <h3><span>2</span> Developing an IT Strategy </h3>
          <p className="mb-8">
          We construct perfect IT strategies to align your IT project according to your business priorities
          </p>
          </div>
          <div className="about-card">
            <h3><span>3</span> Discussing Possible Solutions</h3>
          <p className="mb-8">
          By analyzing your needs, we will provide you the best solution among all the possible solutions
          </p>
          </div>
          <div className="about-card">
            <h3><span>4</span> Arriving at the Best Plan</h3>
          <p className="mb-8">
          After the evaluation of our mutual understanding and discussions, we will achieve the best plan
          </p>
          </div>
          <div className="about-card mb-0">
            <h3><span>5</span> Implementation of the Solution</h3>
          <p className="mb-8">
          The last step, we will execute our best plan and ensure that your business idea will remain clear in your IT project
          </p>
          </div>
       
        
       
        </div>
      </div>
    </div>
  </section>
 

  )
}

export default PlanningScroll





