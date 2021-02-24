import React, { Fragment } from "react";
const ItemTutorial3 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">
              Estimar la diversidad conformacional de la proteína repetida
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              Para estimar la diversidad conformacional de alguna proteína
              repetida existe en la página principal la opción
              <i>
                <b> Estimar</b>
              </i>
              , la cual permite estimar la diversidad conformacional de la
              proteína repetida que se requiera y obtener los resultados
              correspondientes (información general, información estructural y
              conformaciones). Para esto, los usuarios pueden estimar ingresando
              la cadena de proteína repetida y la región de repetición, la cual
              tiene un límite inferior y un límite superior. Asimismo, en caso
              el usuario no recuerde la cadena de proteína repetida, la presente
              herramienta le otorgará un autocompletado. Además, la opción
              <i>
                <b> Estimar </b>
              </i>
              estará habilitado siempre y cuando se haya ingresado la cadena de
              proteína repetida y la región de repetición, sino estará
              deshabilitado. Con lo mencionado previamente, facilitará al
              usuario estimar la diversidad conformacional de la proteína
              repetida que quisiera evaluar.
            </h5>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-3.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial3;
