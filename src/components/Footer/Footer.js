import React from "react";
import "./Footer.scss";
import images from "../../constants/images";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-copyright">
        <div className="app__footer-copyright-text">
          Copyright © 2023 <br />
          Fizjoterapia Joanna Ejsmont
        </div>
        <div className="policy__link">
          Icons made by
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
      <div className="app__react-icons">
        <FaFacebookSquare />
        <a href="/blog" className="app__link">
          BLOG
        </a>
      </div>
    </div>
  );
};

export default Footer;
