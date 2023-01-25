// import React, { useEffect, useRef } from "react";
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import "./planning.css";
// import Bgvid from './assest/planning-vid.mp4'

// const PlanningScroll = () => {
//     const alignCenter = { display: 'flex', }
//     // const planheight = document.getElementById('our-planning');
//     let getHeight = window.innerHeight;
//     console.log(getHeight)



//   const videoEl = useRef(null);

//   const attemptPlay = () => {
//     videoEl &&
//       videoEl.current &&
//       videoEl.current.play().catch(error => {
//         console.error("Error attempting to play", error);
//       });
//   };

//   useEffect(() => {
//     attemptPlay();
//   }, []);
  

//   return (
//     <div>
 
//        <section className="our-planning" id="our-planning">
//     <Parallax pages={2} style={{background: 'black'}}>

     


//       <ParallaxLayer sticky={{ start: 0, end: 2 }}>
//         <div className='heading-card' >
//           <p>I'm a sticky layer</p>
//           <video
//           playsInline
//           loop
//           muted
//           autoPlay
//           alt="All the devices"
//           src={Bgvid}
//           ref={videoEl}
//         />
//         </div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={0.1} speed={0.5}>
//         <div className='card parallax purple'>
//           <p>I'm not</p>
//         </div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={0.5} speed={0.5}>
//         <div className='card parallax blue'>
//           <p>Neither am I</p>
//         </div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={0.9} speed={0.5} >
//         <div className='card parallax blue'>
//           <p>Neither am I</p>
//         </div>
//       </ParallaxLayer>


//        <ParallaxLayer offset={1.1} speed={0.5}>
//         <div className='card parallax purple'>
//           <p>I'm not</p>
//         </div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={1.5} speed={0.5}>
//         <div className='card parallax blue'>
//           <p>Neither am I</p>
//         </div>
//       </ParallaxLayer>

//       <ParallaxLayer offset={1.9} speed={0.5}>
//         <div className='card parallax blue'>
//           <p>Neither am I</p>
//         </div>
//       </ParallaxLayer>
//     </Parallax>
//     </section>
//   </div>
//   )
// }

// export default PlanningScroll





// import React from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import './planning.css'

// class PlanningScroll extends React.Component {
//   componentDidMount() {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("#scroll"),
//       smooth: true,
//     });
//     scroll.on("scroll", (e) => {
//       const left = document.querySelector("#left");
//       const right = document.querySelector("#right");
//       left.style.transform = `translateY(${e.scroll.y}px)`;
//       right.style.transform = `translateY(-${e.scroll.y}px)`;
//     });
//   }

//   render() {
//     return (
//       <div id="scroll">
//         <div id="left" style={{ position: "sticky", top: 0 }}>
//           Left side content
//         </div>
//         <div id="right">
//           <div className="card">Hello</div>
//              <div className="card">Hello</div>
//              <div className="card">Hello</div>
//              <div className="card">Hello</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default PlanningScroll;


import React, { useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./planning.css";

function PlanningScroll() {
  const [isFullWidthHeight, setIsFullWidthHeight] = useState(false);
  const [isOtherSectionVisible, setIsOtherSectionVisible] = useState(false);
  let scroll;
  console.log(window.scrollY)

  useEffect(() => {
    const section = document.querySelector("#scroll");
    const checkWidthHeight = () => {
      if (section.offsetWidth === window.innerWidth && section.offsetHeight === window.innerHeight) {
        setIsFullWidthHeight(true);
      } else {
        setIsFullWidthHeight(false);
      }
    };
    window.addEventListener("resize", checkWidthHeight);
    checkWidthHeight();
    return () => {
      window.removeEventListener("resize", checkWidthHeight);
    };
  }, []);

  useEffect(() => {
    if (!isFullWidthHeight || isOtherSectionVisible) {
        return;
    }
    scroll = new LocomotiveScroll({
      el: document.querySelector("#right"),
      smooth: true,
    });
    scroll.on("scroll", (e) => {
      const right = document.querySelector("#right");
      right.style.transform = `translateY(-${e.scroll.y}px)`;
    });
    return () => {
        scroll.destroy();
    }
  }, [isFullWidthHeight,isOtherSectionVisible]);

  return (
    <>
      <div id="scroll" style={{width: '100vw', height: '100vh'}}>
        <div id="left" className="left-sticky">
          Left side content
        </div>
        <div id="right" className="right-scroll">
          <div className="card-container">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="card" key={i}>
                Card {i}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PlanningScroll;


