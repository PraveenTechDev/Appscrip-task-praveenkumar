import React from 'react'
import './Header.css';
import logo from "./images/Logo.png";
import logotext from "./images/Logo-text.png";
import menuIcon from "./images/Icons.png"
import Tabs from "./images/Tabs.png"

function Header() {
  return (
    <div className='header'>
    <div className='header-top'>
    <div className='header-element'> 
       <img src={logo} alt="logo" className='logo'/>
    </div>
    <div className='header-element'>
        <img src={logotext} alt='logo-text' className='logo-text'/>
    </div>
    <div className='header-element'>  
      <img src={menuIcon} alt='menuIcon' className='menuIcon'/>
    </div>
    </div>
    <div className='header-bottom'>
    <img src={Tabs} alt='tabs' className='tabs'/></div>
    </div>
  )
}

export default Header;