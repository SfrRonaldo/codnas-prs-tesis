import React from "react";
import ItemTutorial1 from "../item-tutorial-1";
import ItemTutorial2 from "../item-tutorial-2/index";
import ItemTutorial3 from "../item-tutorial-3";
import ItemTutorial4 from "../item-tutorial-4";
import ItemTutorial41 from "../item-tutorial-4-1";
import ItemTutorial42 from "../item-tutorial-4-2";

function CardsTutorial() {
  return (
    <div className="cards">
      <div className="cards__container__tutorial">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ItemTutorial1 />
          </ul>
          <ul className="cards__items">
            <ItemTutorial2 />
          </ul>
          <ul className="cards__items">
            <ItemTutorial3 />
          </ul>
          <ul className="cards__items">
            <ItemTutorial4 />
          </ul>
          <ul className="cards__items">
            <ItemTutorial41 />
          </ul>
          <ul className="cards__items">
            <ItemTutorial42 />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsTutorial;
