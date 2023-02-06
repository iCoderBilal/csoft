import React from 'react'
import './circle.css'
import ourServicesImg from './assets/our-services-img.svg'

const Circle = () => {
  return (
    <>
    <section id="circle-section" data-scroll-section>
      <div className="circle-container">
        <div className="circle-heading">
            <h2><span className='what-we-spell'>What We Do</span> <br/><span className='h-blue'>Full</span> Range of <span className='h-blue'>Services</span> Your Company Desires</h2>
        </div>
        <div className="circle-main-content">
            <div className="left"></div>
            <div className="center">
                <img src={ourServicesImg} alt="" />
            </div>
            <div className="right"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Circle