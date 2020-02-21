//Se importan las librerias necesarias
import React from "react";
import {Link} from "react-router-dom"
import "./style.css";

function Page404() {
  return (
    <div className="container">
      <div className="banner">
        <p className="text-404">Error 404</p>
      </div>
      <div>
        <Link to="/focusable-input" className="button">
          Regresar
        </Link>
      </div>
    </div>
  );
}

//Se exporta el componente
export default Page404;
