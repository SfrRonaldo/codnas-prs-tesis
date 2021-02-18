import React, { Fragment } from "react";
import ItemDetail1 from "../item-detail-1";
import ItemDetail2 from "../item-detail-2";

const CardsDetail = ({ infoGeneral }) => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container__tutorial">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <ItemDetail1 infoGeneral={infoGeneral} />
            </ul>
            <ul className="cards__items">
              <ItemDetail2 infoEstructural={infoGeneral} />
            </ul>
            <ul className="cards__items">
              <ItemDetail1 infoGeneral={infoGeneral} />
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardsDetail;
