import React from "react";
import "./Contact.scss";
import { GrMail } from "react-icons/gr";
import { HiPhone } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { RiTimeFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";

const Contact = () => {
  return (
    <div id='kontakt' className="app__contact section__padding">
      <div className="app__contact-info">
        <div>
          <h1 className="app__heading-h1">Kontakt</h1>
        </div>
        <div className="app__contact-info-items">
          <ul>
            <li>
              <span className="app__react-icons">
                <ImLocation2 />
              </span>
              <p className="p__inter">
                Osiedle Centrum 21,
                <br /> 16-100 Sokółka
                <br /> *wejście od strony parku
              </p>
            </li>
            <li>
              <span className="app__react-icons">
                <HiPhone />
              </span>
              <p className="p__inter">793-183-080</p>
            </li>
            <li>
              <span className="app__react-icons">
                <RiTimeFill />
              </span>
              <p className="p__inter">
                pon - pt: 8.00-18.00 <br />
                sob: 8:00-14:00
              </p>
            </li>
            <li>
              <span className="app__react-icons">
                <GrMail />
              </span>
              <p className="p__inter">fizjoterapia.ejsmont@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.3693592042137!2d23.494600415721152!3d53.40822017777609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e00972473a4799%3A0x4ae84646eb038c99!2sFizjoterapia%20Joanna%20Ejsmont!5e0!3m2!1spl!2spl!4v1676797360693!5m2!1spl!2spl"
          loading="lazy"
          title="myFrame"
          frameBorder="0"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
