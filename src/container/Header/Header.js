import React from "react";
import "./Header.scss";
import images from "../../constants/images";

const Header = () => {
  return (
    <div className="app__header section__padding">
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
        <img src={images.header} alt='header fizjo' />
      </div>
    </div>
  );
};

export default Header;
