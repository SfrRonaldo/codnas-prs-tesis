import React, { Fragment } from "react";
const ItemTutorial2 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">
              Buscar información de diversidad conformacional de la proteína
              repetida
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              Para acceder u obtener información de la diversidad conformacional
              de alguna proteína repetida, existe en la página principal la
              opción{" "}
              <i>
                <b>Buscar</b>
              </i>
              , la cual permite extraer de la base de datos CoDNaS-PRs la
              información de diversidad conformacional (información general,
              información estructural y conformaciones) de la proteína repetida
              que se requiera. Para esto, los usuarios pueden buscar únicamente
              por cadena de proteína repetida. Asimismo, en caso el usuario no
              recuerde la cadena de proteína repetida, la presente herramienta
              le otorgará un autocompletado. Además, la opción{" "}
              <i>
                <b> Buscar </b>
              </i>
              estará habilitado siempre y cuando se haya ingresado la cadena de
              proteína repetida, sino estará deshabilitado. Con lo mencionado
              previamente, facilitará al usuario la búsqueda de información de
              diversidad conformacional de la proteína repetida que quisiera
              conocer.
            </h5>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-2.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial2;
