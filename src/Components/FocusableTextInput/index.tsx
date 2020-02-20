//Se importan las librerias necesarias
import React, { useState } from "react";
//se importan los estilos
import "./style.css";
//Se importan los componentes necesarios
import TextInput from "../../Components/TextInput";

function FocusableTextInput() {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <form
      className="formFocusableTextInput"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <TextInput propSetFocused={setFocused} />
      {focused !== true ? (
        <h1 className="stateInput reedText">No esta focus el input</h1>
      ) : (
        <h1 className="stateInput greenText">Esta focus el input</h1>
      )}
    </form>
  );
}

//Se exporta el componente
export default FocusableTextInput;
