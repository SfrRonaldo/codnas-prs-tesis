import React, { Fragment } from "react";
const ItemTutorial4 = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">
              Resultados de la búsqueda y estimación de diversidad
              conformacional de la cadena de proteína repetida
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              Una vez presionado el botón
              <i>
                <b> Buscar</b>
              </i>
              , se le redireccionará al usuario a una página que detalla los
              datos recopilados de lá búsqueda en la base de datos CoDNaS-PRs de
              la información de diversidad conformacional de la cadena de
              proteína repetida insertada.
            </h5>
            <br />
            <h2 className="cards__item__subtitle">
              Sección 1: Información General
            </h2>
            <br />
            <h5 className="cards__item__text" style={{ fontWeight: "lighter" }}>
              La información general sobre la proteína repetida se presenta en
              la parte superior de la página.
            </h5>
            <ul
              className="cards__item__text"
              style={{ fontWeight: "lighter", margin: "2vh" }}
            >
              <li>
                <b>Nombre de la proteína repetida: </b>Nombre representativo de
                la proteína extraída de RCSB PDB.
              </li>
              <li>
                <b>Título: </b>Título que representa a la proteína
              </li>
              <li>
                <b>Organismo: </b> Organismo a la que pertenece la proteína
                repetida.
              </li>
              <li>
                <b>Longitud de secuencia: </b> Cantidad de aminoácidos de la
                proteína repetida.
              </li>
              <li>
                <b>Clasificación: </b>Tipo de proteína clasificado por RCSB PDB.
              </li>
            </ul>
          </div>
          <img
            alt=""
            src="/images/img-tutorial-4.png"
            style={{ width: "100%" }}
          />
        </div>
      </li>
    </Fragment>
  );
};

export default ItemTutorial4;
