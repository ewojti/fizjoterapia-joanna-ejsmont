import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  
  return (
    <div className="app__navbar fixed-top">
      <div className="app__navbar-logo">
        <Link>
          <img
            className="app__navbar-logo-desktop"
            src={images.logo_header}
            alt="navbar logo fizjoterapia"
          />
        </Link>
      </div>
      <div className="app__navbar-links">
        <ul className="p__cormorant">
          <li>
            <Link activeClass="active" to="/">
              <a href="">Usługi</a>
            </Link>
          </li>
          <li>
            <a href="#omnie">O mnie</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
          <li>
            <Link to="/cennik">Cennik</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <div className="menu__box">
          <ul className="p__cormorant">
            <li>
              <a href="#uslugi">Usługi</a>
            </li>
            <li>
              <a href="#omnie">O mnie</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
            <li>
              <Link to="/cennik">Cennik</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
