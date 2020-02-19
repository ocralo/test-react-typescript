//Se importan las librerias necesarias
import React, { FunctionComponent, useState } from "react";

//funcion para crear un spinner en las pantallas de carga
function Spinner() {
  return (
    <div className="loader">
      <div className="inner one"></div>
      <div className="inner two"></div>
      <div className="inner three"></div>
    </div>
  );
}

//Se exporta el componente
export default Spinner;
