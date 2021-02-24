import React, { Fragment } from "react";
import ItemDetail1 from "../item-detail-1";
import ItemDetail2 from "../item-detail-2";
import ItemDetail3 from "../item-detail-3";

const CardsDetail = ({ infoGeneral, infoEstructural, conformaciones }) => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container__detail">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ItemDetail1 infoGeneral={infoGeneral} />
            </ul>
            <ul className="cards__items">
              <ItemDetail2 infoEstructural={infoEstructural} />
            </ul>
            <ul className="cards__items">
              <ItemDetail3 conformaciones={conformaciones} />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardsDetail;
