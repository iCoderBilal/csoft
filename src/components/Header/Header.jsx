import React from 'react'
import './header.css'
import headerLogo from './assests/csoft-logo-white.svg'

const Header = () => {
 
  return (
    <div id='header'>
        <nav className='header-data'>
            <div className='header-logo'>
                <img src={headerLogo} alt="csoft logo" />
               
            </div>
        	<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	            <label for="menu-icon"></label>
            <div class="nav">
                <ul class="pt-5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Faq</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div> 		
                                
      </nav>
    </div>
  )
}

export default Header