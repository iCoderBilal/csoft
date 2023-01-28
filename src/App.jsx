import React, {useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import ReactDOM from "react-dom";
import Hero from './HomepageSection/Hero/Hero'
import './App.css'
import PlanningScroll from './HomepageSection/PlanningScroll/PlanningScroll';
import Service from './HomepageSection/Services/Service';

const App = () => {
  const containerRef = useRef(null)

  useEffect(() => {
          
    new LocomotiveScroll({
       smooth: true,
       lerp: .06,
       multiplier: .5
    });

 }, []);
  
  return (

    <LocomotiveScrollProvider
  // options={
  //   {
  //     smooth: true,
  //     // ... all available Locomotive Scroll instance options 
  //   }
  // }
  // watch={
  //   [
  //   ]
  // }
  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
    <Hero/>
     <PlanningScroll/>
     <Service/>
  </main>
</LocomotiveScrollProvider>

  )
}

export default App