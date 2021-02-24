import React from "react";
import Item from "../item";

function Cards() {
  return (
    <div className="cards">
      <h2 className="cards__item__subtitle" style={{ textAlign: "center" }}>
        Con la colaboración de las universidades
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Item
              src="/images/img-pucp.jpg"
              text="La Pontificia Universidad Católica del Perú es una universidad privada en Lima, Perú."
              label="Pontificia Universidad Católica del Perú"
              path="https://www.pucp.edu.pe"
              alt="PUCP"
            />
            <Item
              src="/images/img-unq.png"
              text="La Universidad Nacional de Quilmes es una universidad nacional argentina y la más importante de la ciudad de Quilmes."
              label="Universidad Nacional de Quilmes"
              path="http://www.unq.edu.ar"
              alt="UNQ"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
