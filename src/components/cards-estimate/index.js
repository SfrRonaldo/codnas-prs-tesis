import React, { Fragment } from "react";
import ItemEstimate1 from "../item-estimate-1";
import ItemEstimate2 from "../item-estimate-2";
import ItemEstimate3 from "../item-estimate-3";

const CardsEstimate = ({ infoGeneral, infoEstructural, conformaciones }) => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container__detail">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ItemEstimate1 infoGeneral={infoGeneral} />
            </ul>
            <ul className="cards__items">
              <ItemEstimate2 infoEstructural={infoEstructural} />
            </ul>
            <ul className="cards__items">
              <ItemEstimate3 conformaciones={conformaciones} />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardsEstimate;
