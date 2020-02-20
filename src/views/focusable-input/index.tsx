//Se importan las librerias necesarias
import React from "react";
//se importan los estilos
import "./style.css";
//Se importan los componentes
import FocusableTextInput from "../../Components/FocusableTextInput";

function focusableInput() {
  return (
    <section className="viewTest1">
      <FocusableTextInput />
    </section>
  );
}

//Se exporta el componente
export default focusableInput;
