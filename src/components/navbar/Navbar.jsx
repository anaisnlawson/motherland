import { Link, useResolvedPath } from "react-router-dom"

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/wakanda_lounge_image.png'
import './navbar.css';

const Menu = () => (
  <>
  <p><CustomLink to="/foodmenu">Menu</CustomLink></p> 
  <p><CustomLink to="/events">Events & Services</CustomLink></p>
  <p><CustomLink to="/pickup">Online Pickup</CustomLink></p>
  <p><CustomLink to="/delivery">Delivery</CustomLink></p>
  <p><CustomLink to="/contact">Contact Us</CustomLink></p>
  
  {/* <p><a href='/home'>Home</a></p>
  <p><a href='/foodmenu'>Menu</a></p>
  <p><a href='/events'>Events & Services</a></p>
  <p><a href='/pickup'>Online Pickup</a></p>
  <p><a href='/delivery'>Delivery</a></p>
  <p><a href='/contact'>Contact Us</a></p> */}
 
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // toggle menu initially set to false
  return (
    <nav>
      <div className='motherland__navbar'>
        <div className='motherland__navbar-links_logo'>
            <Link to="/" className="Home"><img src={logo} alt="logo"/></Link> 
        </div> 
        <br></br>
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
      </nav>
  )
}

function CustomLink({to, children, ... props}) {
  const resolvedPath = useResolvedPath(to)
  return (
    <li>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default Navbar