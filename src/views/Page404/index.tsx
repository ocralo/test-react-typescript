//Se importan las librerias necesarias
import React, { useState, useRef } from "react";
import "./style.css";

function Page404() {
  return (
    <div className="container">
      <div className="banner">
        <p className="text-404">Error 404</p>
      </div>
      <div>
        <button className="button">Regresar</button>
      </div>
    </div>
  );
}

//Se exporta el componente
export default Page404;
