//Se importan las librerias necesarias
import React, { FunctionComponent, useState } from "react";
import "./style.css";

function TextInput() {
  return (
    <input className="inputFocusable" type="text" placeholder="..." />
  );
}

//Se exporta el componente
export default TextInput;
