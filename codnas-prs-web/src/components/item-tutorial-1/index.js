import React, { Fragment } from "react";
const ItemTutorial1 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h1 className="cards__item__title">Tutorial</h1>
            <br />
            <h2 className="cards__item__subtitle">
              Resultados de la búsqueda y estimación de diversidad
              conformacional de la cadena de proteína repetida
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              La presente herramienta permite buscar en la base de datos
              CoDNaS-PRs los resultados obtenidos empleando el método que
              analiza la diversidad conformacional de las proteínas repetidas en
              base al dominio repetitivo (regiones repetidas) y en caso no se
              encuentre en la misma, se tiene la opción de estimar la diversidad
              conformacional de la proteína repetida que se ingrese.
            </h5>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-1.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial1;
