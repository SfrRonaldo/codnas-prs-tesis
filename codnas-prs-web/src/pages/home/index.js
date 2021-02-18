import React, { Fragment } from "react";
import { Parallax } from "react-parallax";
import Cards from "../../components/cards";
import Search from "../../components/search";

const Home = () => {
  return (
    <Fragment>
      <section>
        <Parallax
          bgImage="/images/img-2.jpg"
          bgImageAlt="prs"
          bgImageStyle={{ height: "100%", width: "100%" }}
        >
          <Search
            title="Herramienta para el análisis de diversidad conformacional en estructuras de proteínas repetidas"
            text="Ingresar una cadena de proteína repetida para buscar su información de diversidad conformacional en la base de datos o estimar su diversidad conformacional agregando la región de repetición de la misma"
            color="primary"
          />
        </Parallax>
      </section>
      <section>
        <Cards />
      </section>
    </Fragment>
  );
};

export default Home;
