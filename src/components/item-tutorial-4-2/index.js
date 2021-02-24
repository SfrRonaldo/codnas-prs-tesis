import React, { Fragment } from "react";
const ItemTutorial42 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">Sección 3: Conformaciones</h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              La presente sección muestra las diversas conformaciones que la
              proteína repetida tiene. Asimismo, se presenta para cada
              conformación la región repetida a través del límite inferior y
              límite superior, la secuencia de similitud expresado en un valor
              numérico y la diferencia estructural entre la proteína repetida y
              la conformación expresada por la medida estadística RMSD.
            </h5>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-6.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial42;
