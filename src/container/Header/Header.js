import React from "react";
import "./Header.scss";
import images from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-text">
        <h1 className="app__heading-h1">
          Twój gabinet fizjoterapii w <span>Sokółce</span>
        </h1>
        <h3 className="app__heading-h3">
          Tu pozbędziesz się bólu i odzyskasz sprawność
        </h3>
        <div className="app__header-btn">
          <button className="custom__button" >Umów wizytę</button>
          <button className="custom__button">Sprawdź ofertę</button>
        </div>
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
