import React from "react";
import Item from "../item";
import "./index.css";

const Card = () => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Item
              text="Herramienta para el análisis de diversidad conformacional en
              estructuras de proteínas repetidas"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
