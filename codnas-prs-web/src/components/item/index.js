import React, { Fragment } from "react";

const Item = (props) => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__paper">
          <div className="cards__item__title">
            <span>{props.text}</span>
          </div>
          <div className="cards__item__body">
            <span>Hola</span>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default Item;
