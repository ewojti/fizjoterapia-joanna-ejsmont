import React from 'react';
import './Footer.scss';
import images from "../../constants/images";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="app__footer section__padding">
      <div>
        <div className="app__footer-logo">
          <img src={images.logo_footer} alt="navbar logo fizjoterapia" />
        </div>
        <div className="app__react-icons">
          <FaFacebookSquare />
        </div>
        <div className='policy__link'>
        Icons made by
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer