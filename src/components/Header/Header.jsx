import React from 'react'
import './Header.css'
import LOGO from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
        
        {/* importing LOGO */}
        <img src={LOGO} alt="LOGO" className='Logo'/>

        {/* creating header menu */}
        <ul className='header-menu'>
            <li>Home</li>
            <li>programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>




    </div>

  )
}

export default Header