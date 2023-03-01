import React, { useState } from "react";
import "./PriceList.scss";
import priceData from "../../constants/priceData";

const PriceList = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        className="custom__button"
        onClick={toggleModal}
      >
        Sprawdź cennik
      </button>
      {modal ? (
        <div className="app__modal">
          <div onClick={toggleModal} className="modal-overlay"></div>
          <div className="app__modal-content">
            <h1 className="app__heading-h1">Cennik:</h1>
            <ul className="app__pricelist-items p__cormorant">
              {priceData.map((price) => (
                <li key={price.id.toString()}>
                  <p>
                    {price.name}
                    <span>{price.cost}</span>
                  </p>
                </li>
              ))}
            </ul>
            <button
              className="modal-close custom__button"
              onClick={toggleModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PriceList;
