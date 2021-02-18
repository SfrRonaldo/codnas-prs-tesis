import React, { Fragment } from "react";
import ItemDetail1 from "../item-detail-1";
import ItemTutorial2 from "../item-tutorial-2/index";
import ItemTutorial3 from "../item-tutorial-3";
import ItemTutorial4 from "../item-tutorial-4";
import ItemTutorial41 from "../item-tutorial-4-1";
import ItemTutorial42 from "../item-tutorial-4-2";

const CardsDetail = ({ infoGeneral }) => {
  return (
    <Fragment>
      <div className="cards">
        <div className="cards__container__tutorial">
          <div className="cards__wrapper">
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
