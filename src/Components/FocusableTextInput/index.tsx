//Se importan las librerias necesarias
import React, { FunctionComponent, useState, useRef } from "react";
//se importan los estilos
import "./style.css";
//Se importan los componentes necesarios
import TextInput from "../../Components/TextInput";


function FocusableTextInput() {
  const [focused, setFocused] = React.useState(false);
  const refTextInput = useRef();
    return (
      <form>
        <TextInput />
        <h1>{focused}</h1>
      </form>
    );
}

//Se exporta el componente
export default FocusableTextInput;
