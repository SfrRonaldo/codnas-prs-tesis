import React, { Fragment } from "react";
const ItemTutorial41 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">
              Sección 2: Información Estructural
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              La sección Información Estructural proporciona datos estructurales
              comparativos entre todas las conformaciones de la proteína
              repetida incluyendo la misma. Entre estos datos se tiene al número
              de conformaciones, el cual muestra la evidencia disponible sobre
              la diversidad conformacional de la proteína repetida. Además, se
              muestra el RMSD mínimo, máximo y promedio determinado por el
              software Mammoth. Estos valores proporcionan las mediciones
              centrales de la diversidad conformacional.
            </h5>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-5.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial41;
