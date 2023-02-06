import React from 'react'
import './circle.css'
import ourServicesImg from './assets/our-services-img.svg'

const Circle = () => {
  return (
    <>
    <section id="circle-section" data-scroll-section>
      <div className="circle-container">
        <div className="circle-heading" id='circle-heading'>
            <h2><span className='what-we-spell'>What We Do</span> <br/><span className='h-blue'>Full</span> Range of <span className='h-blue'>Services</span> Your Company Desires</h2>
        </div>
        <div className="circle-main-content">
            <div className="left" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-1" data-scroll-target="#circle-heading">
              <div className="left-card">
                
                  <h3>
                  WE TAKE CARE OF ALL THE TECHNOLOGY
                  </h3>
                  <p>
                  We ensure, with the help of best and modern technology, the product that is conveyed to the client is immaculate in all terms and is aggressive enough in the market.
                  </p>
            
              </div>
            </div>
            <div className="center">
                <img src={ourServicesImg} alt="" />
            </div>
            <div className="right">

            <div className="right-card" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1" data-scroll-target="#circle-heading">
                
                <h3>
                WE SUPPORT OUR CLIENTS
                </h3>
                <p>
                CSOFT provides the 24/7 support all year round and allows you to receive assistance regarding any technical issues or questions you have.
                </p>
          
            </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Circle