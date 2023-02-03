import React, { useState, useEffect, useRef } from "react";
import './service.css';
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import domainAndHosting from './assets/domain-blue.png'
import corporateLogo from './assets/briefcase-blue.png'
import publicAddress from './assets/address-blue.png'
import play from './assets/play-blue.png';
import prediction from './assets/prediction-blue.png';
import search from './assets/seo-blue.png';
import webDev from './assets/software-blue.png';
import digMarket from './assets/promotion-blue.png';
import cCTV from './assets/padlock-blue.png';
import appDev from './assets/mobiledevelopment-blue.png'
import webPortal from './assets/web-portal-blue.png';
import iT from './assets/settings-blue.png';



const Service = () => {
    const { scroll } = useLocomotiveScroll();
  return (
    <>
        <div id="service-section" data-scroll-section data-bg-color="#000000">
            <div className="container">
                <div className="service-data">

                    <div className="section-heading" id="section-heading" data-scroll>
                        <h2 data-scroll data-scroll-repeat>Our Services</h2>
                    </div>

                     <div className='service-cards' id="service-cards">

                        <div className="card-line" data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-target="#service-section">

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={domainAndHosting} alt="Doman and hosting icon" />
                                <h4>Domain and Hosting Services</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>Our hosting bundles will make it easy for you to select your plan, it is more easy and affordable with CSOFT than ever before</p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={corporateLogo} alt="Corporate icon" />
                                <h4>Corporate Branding</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>We have burst of creative and presentable logos, prints, product labels or even online marketing materials to promote your brand</p>
                                </div>
                            </div>
                        </div>


                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={publicAddress} alt="Public Address icon" />
                                <h4>Public Address</h4>
                                </div>
                                <div className="flip-card-back">
                      
                                <p>Our Public address sound system is what that you need, our systems will be designed accordingly and will be long lasting and cost effective </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={play}alt="Video Conferencing Icon" />
                                <h4>Video Conferencing</h4>
                                </div>
                                <div className="flip-card-back">
 
                                <p>
                                    Experience one of the best conferencing services along with us, our services will make sure that your conference last longer, without any delays
                                </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={iT} alt="IT & Network Infrastructure icon" />
                                <h4>IT & Networ Infrastructure</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                    To support your operational works, you need a detailed IT
                                    infrastructure design and support
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={appDev} alt="Mobile Application Development icon" />
                                <h4>Mobile Application Development</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>Want to give your idea a strike? Don’t keep it to yourself, CSOFT will turn your ideas to reality by best Mobile App solutions
</p>
                                </div>
                            </div>
                        </div>

                        
     

                        </div>



                        
                        <div className="card-line" id="secondLine" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#service-section">

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={prediction} alt="Enterprise Resource Planning (ERP) icon" />
                                <h4>Enterprise ResourcePlanning (ERP)</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                As a company, We provide unique services to integrate or develop your ERP directly to mobile and web or at least some part of it
                            </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={search} alt="SEO icon" />
                                <h4>Search Engine Optimization (SEO)</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                We make sure you get the best ROI through our SEO campaign to turn it into a profitable venture for your business. This is what makes us the best seo company!
                            </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={webDev} alt="Website Design &amp; Development icon" />
                                <h4>Website Design & Development</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                    A unique website gives a strong definition to your business and
                                    creates a better impact over clients
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={digMarket} alt="Digital Marketing icon" />
                                <h4>Digital Marketing</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                    Stand out yourself from your competitors, choose the right digital
                                    plan for your business
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={webPortal} alt="Web Based Portals icon" />
                                <h4>Web Based Portals</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                    Web Based Portals Improve your work flow by channelizing your
                                    leads from different platforms to a common place
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                <img src={cCTV} alt="IP Surveillance Systems (CCTV) icon" />
                                <h4>IP Surveillanc Systems (CCTV)</h4>
                                </div>
                                <div className="flip-card-back">
                                <p>
                                    Get your business some extra security, by covering wide area
                                    through surveillance security
                                </p>
                                </div>
                            </div>
                        </div>
     

                        </div>



                        


                    </div>
{/* <div className="transform">
          <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="20" data-scroll-target="#service-section">
            <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Social Media — Email Marketing — Digital Advertising</span>
          </div>
        </div>
        <div className="transform mt-40">
          <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-20" data-scroll-target="#service-section">
            <span className="text-3xl sm:text-4xl md:text-6xl 2xl:text-7xl bg-green-400 p-5 whitespace-nowrap">Web Development - Motion Design - Graphic Design</span>
          </div>
        </div> */}


                </div>
            </div>
        </div>


    </>
  )
}

export default Service