import React from "react";
import services from '../../constants/data'
import './Services.scss'

const Services = () => {
  return (
    <div className="app__services section__padding">
      <h1 className="app__heading-h1">W czym mogę Ci pomóc?</h1>
      <div className="app__services-list">
      {services.map((service) => (
        <div className="app__services-list-item" key={service.id}>
          <h2 className="app__heading-h2">{service.title}</h2>
          <div className="app__service-type">
            <img
              className="app__service-icon"
              src={service.icon}
              alt="fizjoterapia rehabilitacja"
              />
            <ul>
              {service.types.map((type) => (
                <li>{type}</li>
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