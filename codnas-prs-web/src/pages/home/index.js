import React from "react";
import Search from "../../components/search";
import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <Search
        title="Herramienta para el análisis de diversidad conformacional en estructuras de proteínas repetidas"
        text="Ingresar una cadena de proteína repetida para buscar su información de diversidad conformacional en la base de datos o estimar su diversidad conformacional agregando la región de repetición de la misma"
        color="primary"
      />
    </div>
  );
};

export default Home;
