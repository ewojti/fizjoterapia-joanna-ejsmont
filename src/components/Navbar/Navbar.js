import React from 'react'
import './Navbar.scss'
import { Link } from "react-router-dom";
import images from '../../constants/images'

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo_header} alt="navbar logo fizjoterapia" />
      </div>
      <div className="app__navbar-links p__inter">
        <span>
          <Link to="">O mnie</Link>
        </span>
        <span>
          <Link to="">Usługi</Link>
        </span>
        <span>
          <Link to="">Blog</Link>
        </span>
        <span>
          <Link to="">Kontakt</Link>
        </span>
        <span>
          <Link to="">Cennik</Link>
        </span>
      </div>
    </div>
  );
}

export default Navbar