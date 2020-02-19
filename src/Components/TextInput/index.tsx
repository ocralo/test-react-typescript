//Se importan las librerias necesarias
import React, { FunctionComponent, useState } from "react";
import "./style.css";

function TextInput(props: IProps) {
  return <input className="inputFocusable" type="text" placeholder="..." />;
}

interface IProps {
  focused?: boolean;
}
//Se exporta el componente
export default TextInput;
