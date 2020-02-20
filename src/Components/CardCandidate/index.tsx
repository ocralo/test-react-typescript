//Se importan las librerias necesarias
import React from "react";

import "./style.css";

function CardCandidate() {
  return (
    <div className="card-candidate">
      <div className="col-card-left">
        <h2>Candidato:</h2>
        <p>nombre apellido1 apellido2</p>
        <p>edad</p>
        <p>slogan</p>
      </div>
      <div className="col-card-right">
        <h2>Votos numero</h2>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

//Se exporta el componente
export default CardCandidate;
