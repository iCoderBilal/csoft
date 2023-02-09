import React from 'react'
import './projects.css'
import darco from './assets/darco.png'
import lylpur from './assets/lyllpur.png'
import cisco from './assets/cisco.png'
import raraGloves from './assets/raraGloves.png';

const Projects = () => {
  return (
    <>
    <section id="projects-section" data-scroll-section>
     <div className="projects-container" id='projects-container'>
        <div className="projects-heading" id='projects-heading'>
            <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-25" data-scroll-target="#projects-heading" className='recent-spell'>RECENT</h2>
            <h2 className='projects-spell' data-scroll data-scroll-direction="horizontal" data-scroll-speed="25" data-scroll-target="#projects-heading">PROJECTS</h2>
        </div>


                        <div className="box-container">
                <div className="box">
                <img src={lylpur}/>
                <div className='box-info-name'>
                  <h4>Lyallpur Galleria</h4>
                  </div>
                  <div className="box-info-button">
                  <button>View</button>
                </div>
                    
                </div>
                <div className="box">
                    <img src={cisco}/>
                </div>
                <div className="box">
                    <img src={raraGloves}/>
                </div>
                <div className="box">
                <img src={darco}/>
                </div>
                </div>
     </div>
    </section>
    </>
  )
}

export default Projects