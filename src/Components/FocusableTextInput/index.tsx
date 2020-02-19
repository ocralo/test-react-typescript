//Se importan las librerias necesarias
import React, { FunctionComponent, useState } from "react";
//se importan los estilos
import "./style.css";
//Se importan los componentes necesarios
import TextInput from "../TextInput";



function FocusableTextInput() {
    return (
      <form>
        <TextInput />
        <h1></h1>
      </form>
    );
}

//Se exporta el componente
export default FocusableTextInput;
