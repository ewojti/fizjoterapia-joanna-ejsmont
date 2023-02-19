import React from "react";
import "./Contact.scss";
import { GrPhone, GrLocation } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {

  return (
    <div className="app__contact section__padding">
      <div className="app__contact-info">
        <h1 className="app__heading-h1">Kontakt</h1>
        <p className="p__inter">
          <GrLocation />
          Osiedle Centrum 21, Sokółka 16-100
        </p>
        <p className="p__inter">
          <GrPhone />
          793 183 080
        </p>
        <p className="p__inter">
          <GrPhone />
          pon - pt: 8.00-18.00 sob: 8:00-14:00
        </p>
        <p className="p__inter">
          <GrPhone />
          fizjoterapia.ejsmont@gmail.com
        </p>
        <p><BsFacebook /></p>
      </div>
      <div className="app__contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.3693592042137!2d23.494600415721152!3d53.40822017777609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e00972473a4799%3A0x4ae84646eb038c99!2sFizjoterapia%20Joanna%20Ejsmont!5e0!3m2!1spl!2spl!4v1676797360693!5m2!1spl!2spl"
          width="500"
          height="500"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
