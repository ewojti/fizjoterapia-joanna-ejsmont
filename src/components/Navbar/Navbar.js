import React, {useState, useEffect} from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "aos/dist/aos.css";
import Aos from "aos";

const Navbar = () => {
    useEffect(() => {
      Aos.init({});
    }, []);
  const [isActive, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <div
      className="app__navbar fixed-top"
    >
      <div className="app__navbar-logo">
        <Link to="/">
          <img
            className="app__navbar-logo-desktop"
            src={images.logo_header}
            alt="navbar logo fizjoterapia"
          />
        </Link>
      </div>
      <button
        onClick={handleToggle}
        className={`hamburger ${isActive ? "hamburger--active" : ""}`}
      >
        <span className="hamburger__box">
          <span className="hamburger__inner"></span>
        </span>
      </button>
      <div
        className={`app__navbar-links ${
          isActive ? "app__navbar-links--active" : ""
        }`}
      >
        <ul className="p__cormorant" onClick={handleToggle}>
          <li>
            <a href="#uslugi">Usługi</a>
          </li>
          <li>
            <a href="#omnie">O mnie</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
        <Link
          className="app__navbar-icons"
          to="https://www.facebook.com/profile.php?id=100064665101610"
          target='_blank'
        >
          <img src={images.facebook} alt="fizjoterapia" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
