import React, {useEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import ReactDOM from "react-dom";
import Hero from './HomepageSection/Hero/Hero'
import './App.css'
import PlanningScroll from './HomepageSection/PlanningScroll/PlanningScroll';
import Service from './HomepageSection/Services/Service';
import About from './HomepageSection/About/About';
import ChooseUs from './HomepageSection/ChooseUs/ChooseUs';
import ContactUs from './HomepageSection/ContactUs/ContactUs';
import LatestBlogs from './HomepageSection/LatestBlogs/LatestBlogs';
import Circle from './HomepageSection/Circle/Circle';
import Partners from './HomepageSection/Partners/Partners';
import Projects from './HomepageSection/Projects/Projects';
import Footer from './HomepageSection/Footer/Footer';



const App = () => {
  const containerRef = useRef(null)

  useEffect(() => {
          
    new LocomotiveScroll({
       smooth: true,
       lerp: .06,
       multiplier: .5,
    });
  
      
  

 }, []);
  
  return (
    <>

    <LocomotiveScrollProvider

  containerRef={containerRef}
>
  <main data-scroll-container ref={containerRef}>
    <Hero/>
    <Footer/>
     <PlanningScroll/>
     <Service/>
     <Projects/>
     <ChooseUs/>
     <About/>
     <ContactUs/>
     <Circle/>
     <Partners/>
     <LatestBlogs/>
     
     
  </main>
</LocomotiveScrollProvider>

</>

  )
}

export default App