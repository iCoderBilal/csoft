import React from 'react'
import gsap from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { useEffect } from 'react'

const ScrollTriggerProxy = () => {
   const {scroll} = useLocomotiveScroll();
//    first let get locomotive instance
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    
    if(scroll){
        const element = scroll?.el; // locomotive Element, in our case, its app (main)
        scroll.on('scroll', ScrollTrigger.update);  // on scroll of locomotive , update scrolltrigger
       
    
    }
    
  
    return () => {
      second
    }
  }, [third])
  
  


 
  return null
}

export default ScrollTriggerProxy