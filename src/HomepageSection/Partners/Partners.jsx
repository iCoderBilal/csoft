import React from 'react'
import './partners.css'
import atc from './assets/atc.svg'
import dell from './assets/dell.svg'
import hikvision from './assets/hikvision.svg'
import molex from './assets/molex.svg'
import Ruckus from './assets/Ruckus.svg'
import unv from './assets/unv.svg'
import atcBlack from './assets/atc-black.svg'
import dellBlack from './assets/dell-black.svg'
import hikvisionBlack from './assets/hikvision-black.svg'
import molexBlack from './assets/molex-black.svg'
import RuckusBlack from './assets/Ruckus-black.svg'
import unvBlack from './assets/unv-black.svg'


const Partners = () => {
  return (
    <>
    <div id="partners-section" data-scroll-section>
        <div className="partners-container">
            <div className="partners-heading">
                <h2>Our <br/><span className='partners-spell'>Partners</span></h2>
            </div>
           <div className="partners-logo-cards">

            <div className="partners-logo">
                <img src={dell} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                    <img src={dellBlack} alt="logo of Dell in black" />
                </div>
                
                
            </div>

            <div className="partners-logo">
                <img src={atc} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                <img src={atcBlack} alt="logo of ATC in black" />
                </div>
                
                
            </div>

            <div className="partners-logo">
                <img src={hikvision} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                <img src={hikvisionBlack} alt="logo of hikvision in black" />
                </div>
                
                
            </div>


            <div className="partners-logo">
                <img src={molex} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                <img src={molexBlack} alt="logo of molex in black" />
                </div>
                
                
            </div>

            <div className="partners-logo">
                <img src={Ruckus} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                <img src={RuckusBlack} alt="logo of Ruckus in black" />
                </div>
                
                
            </div>

            <div className="partners-logo">
                <img src={unv} alt="Logo of Dell company" className='logo-img' />

                <div className="logo-name">
                <img src={unvBlack} alt="logo of unv in black" />
                </div>
                
                
            </div>

           </div>
        </div>
    </div>
    
    </>
  )
}

export default Partners