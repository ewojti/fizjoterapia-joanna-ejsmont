import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";
import images from '../../constants/images'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo_header} alt="navbar logo fizjoterapia" />
      </div>
      <div className='app__navbar-links'>
        <Link to="">O mnie</Link>
        <Link to="">Cennik</Link>
        <Link to="">Usługi</Link>
        <Link to="">Blog</Link>
        <Link to="">Kontakt</Link>
      </div>
    </div>
  );
}

export default Navbar