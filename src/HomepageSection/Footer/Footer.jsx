import React from 'react'
import './footer.css'
import csoftLogo from './assets/csoft-logo-white.svg';
import instagram from './assets/instagram.png';
import facebook from './assets/facebook.png';
import youtube from './assets/youtube.png';
import linkedin from './assets/linkedin.png';
import pinterest from './assets/pinterest.png';

const Footer = () => {
  return (
    <>
    <footer id="footer" data-scroll-section>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-side footer-side-1">
                    <img src={csoftLogo} alt="logo of CSOFT" className='csoft-logo' />
                    <p>Get great business solution with CSOFT Systems with our unique hosting plans and support for growing your business.</p>
                    <div className="footer-sociallinks">
                    <div className='sociallink'><img src={instagram} alt="Icon of Instagram" /></div>
                    <div className='sociallink'><img src={facebook} alt="Icon of facebook" /></div>
                    <div className='sociallink'><img src={youtube} alt="Icon of youtube" /></div>
                    <div className='sociallink'><img src={linkedin} alt="Icon of linkedin" /></div>
                    <div className='sociallink'><img src={pinterest} alt="Icon of pinterest" /></div>
                    </div>
                </div>

                <div className="footer-side footer-side-2">
                    <div className="connect-with-us">
                        <h3>Connect with us</h3>
                        <div className="connect-with-us-content">
                            <p>info@csoftsystems.com</p>
                            <p className='telephone'>+92 314 5000083</p>
                        </div>
                    </div>
                </div>

                <div className="footer-side footer-side-3">
                    <div className="newsletter">
                        <h3>Join our newsletter</h3>
                        <input type="email" placeholder='Email' name='Email' />
                        <button>Subscribe</button>
                    </div>

                </div>

                <div className="footer-side footer-side-4">
                 <div className="location">
                    <h3>Our Office</h3>
                    <p>CSOFT Systems<br/> P-165 B, First & Second Floor, Millat Chowk, Faisalabad, Punjab, Pakistan - 38000</p>
                 </div>
                </div>
            </div>

            <div className="footer-rights">
                <p>Copyright ©2020 CSOFT. All Rights Reserved</p>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer