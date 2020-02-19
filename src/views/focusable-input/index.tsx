//Se importan las librerias necesarias
import React, { FunctionComponent, useState } from "react";
//se importan los estilos
import "./style.css";
//Se importan los componentes
import TextInput from "../../Components/TextInput";

function focusableInput() {
  return (
    <section className="viewTest1">
      <form>
        <TextInput />
      </form>
    </section>
  );
}

//Se exporta el componente
export default focusableInput;
