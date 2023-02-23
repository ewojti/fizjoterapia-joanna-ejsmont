import React from "react";
import "./Header.scss";
import images from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-text">
        <h1 className="app__heading-h1">Dzień dobry!</h1>
        <p className="p__lato">
          "Miło mi powitać Państwa na stronie internetowej poświęconej
          mojej praktyce fizjoterapii.<br /> 
          Znajdziecie tu Państwo informacje na temat leczonych schorzeń oraz świadczonych usług.<br />
        </p>
        <ul className="p__cormorant">
          <li>
            <span>793-183-080</span>
          </li>
          <li>
            <span>Osiedle Centrum 21, 16-100 Sokółka</span>
          </li>
        </ul>
      </div>
      <div className="app__header-img">
        <img
          className="app__header-img-desktop"
          src={images.header}
          alt="header fizjo"
        />
        <img
          className="app__header-img-mobile"
          src={images.headerBalanc}
          alt="header fizjo"
        />
      </div>
    </div>
  );
};

export default Header;
