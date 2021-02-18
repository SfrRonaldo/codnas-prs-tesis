import React from "react";
import { Parallax } from "react-parallax";
import Search from "../../components/search";
import "./index.css";

const Home = () => {
  return (
    <Parallax
      bgImage="/images/img-home.png"
      bgImageAlt="prs"
      bgImageStyle={{ height: "100%" }}
    >
      <Search
        title="Herramienta para el análisis de diversidad conformacional en estructuras de proteínas repetidas"
        text="Ingresar una cadena de proteína repetida para buscar su información de diversidad conformacional en la base de datos o estimar su diversidad conformacional agregando la región de repetición de la misma"
        color="primary"
      />
    </Parallax>
  );
};

export default Home;
