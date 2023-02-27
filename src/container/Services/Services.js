import React, {useEffect} from "react";
import services from '../../constants/data';
import './Services.scss';
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {
      useEffect(() => {
        Aos.init({});
      }, []);
  return (
    <div id="uslugi" className="app__services section__padding">
      <div className="app__border-section" data-aos="fade-right"></div>
      <h1 className="app__heading-h1" data-aos="fade-down">
        W czym mogę Ci pomóc?
      </h1>
      <div className="app__services-list">
        {services.map((service) => (
          <div
            className="app__services-list-item"
            key={service.id}
            id={service.id}
            data-aos="fade-up"
          >
            <img
              className="app__service-icon"
              src={service.icon}
              alt="fizjoterapia rehabilitacja"
              data-aos="fade-right"
              data-aos-delay="200"
            />
            <div
              className="app__service-list-item-description"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="app__heading-h2">{service.title}</h2>
              <ul>
                {service.types.map((type) => (
                  <li>
                    <span className="p__cormorant">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;