import React from "react";
import "./Header.scss";
import images from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-text">
        <h1 className="app__heading-h1">Donec tempus eu felis in rhoncus</h1>
        <h3 className="app__heading-h3">Cras placerat ligula</h3>
        <p className="p__inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, ex at rutrum scelerisque, odio tellus sollicitudin nisi,
          sed luctus turpis erat eu lectus. Donec tempus eu felis in rhoncus.
          Proin tristique accumsan ligula et vulputate.
        </p>
        <button className="custom__button">Umów wizytę</button>
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
