import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/wakanda_lounge_image.png'
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#foodmenu'>Menu</a></p>
  <p><a href='#events'>Events & Services</a></p>
  <p><a href='#pickup'>Online Pickup</a></p>
  <p><a href='#delivery'>Delivery</a></p>
  <p><a href='#contact'>Contact Us</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // toggle menu initially set to false
  return (
    <div className='motherland__navbar'>
      <div className='motherland__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div> 
      <div className='motherland__navbar-links'>
        <div className='motherland__navbar-links_container'>
          <Menu />
          {/* change href link */}
        </div>
        {/* mobile stuff */}
      <div className='motherland__navbar-menu'>
        {/* if menu open close it is closed */}
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='motherland__navbar-menu_container scale-up-center'>
              <div className='motherland__navbar-menu_contianer-links'>
              <Menu />
              </div>
            </div>
          )}
      </div>
      </div>  
    </div>
  )
}

export default Navbar