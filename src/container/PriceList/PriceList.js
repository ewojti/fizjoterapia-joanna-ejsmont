import React from "react";
import "./PriceList.scss";
import priceData from "../../constants/priceData";

const PriceList = () => {
  return (
    <div className="app__pricelist">
      <div className="app__pricelist-list">
        <h1 className="app__heading-h1">Cennik:</h1>
        <ul className="app__pricelist-list-items p__cormorant">
          {priceData.map((price) => (
            <li key={price.id.toString()}>
              <p>
                {price.name}
                <span>-{price.cost}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceList;
