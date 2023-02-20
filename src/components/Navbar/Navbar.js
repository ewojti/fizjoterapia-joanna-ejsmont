import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import images from "../../constants/images";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img className="app__navbar-logo-desktop" src={images.logo_header} alt="navbar logo fizjoterapia" />
        <img className="app__navbar-logo-mobile" src={images.logo_footer} alt="navbar logo fizjoterapia" />
      </div>
      <div className="app__navbar-links p__inter">
        <ul>
          <li>
            <Link to="">O mnie</Link>
          </li>
          <li>
            <Link to="">Usługi</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Kontakt</Link>
          </li>
          <li>
            <Link to="">Cennik</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
