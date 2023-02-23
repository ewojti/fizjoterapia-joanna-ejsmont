import React from "react";
import "./AboutMe.scss";
import images from '../../constants/images'

const AboutMe = () => {
  return (
    <div id='omnie' className="app__aboutme section__padding">
      <div className="app__aboutme-img">
        <img src={images.aboutme} alt="" />
      </div>
      <div className="app__aboutme-description">
        <div className="app__aboutme-description-text">
          <h2 className="app__heading-h2">Kim jestem?</h2>
          <p className="p__lato">
            Proin sagittis sapien quam, nec laoreet justo varius at. Donec sed
            dui arcu. Vivamus commodo cursus risus. Suspendisse nec dictum
            dolor, vel venenatis odio.
            <br />
            <br />
            Proin malesuada tincidunt lacinia. Morbi id dui velit. Ut id turpis
            eu leo efficitur rhoncus eu a odio. Phasellus scelerisque a erat in
            vehicula. Praesent convallis porta nisl, ac fringilla velit posuere
            a.
            <br />
            <br />
            Donec a nunc idarcu porttitor varius et a lacus. Nulla quis
            porttitor nisl. Nunc ut eros finibus, vehicula ex ac, ultricies
            nunc. Sed ornare sit amet mi ut sagittis. Nullam quis laoreet dui.
            Fusce lobortis interdum eleifend.Phasellus scelerisque a erat in
            vehicula. Praesent convallis porta nisl, ac fringilla velit posuere
            a.
          </p>
        </div>
        <div className="app__aboutme-description-btn">
          <button className="custom__button">Rozwiń</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
