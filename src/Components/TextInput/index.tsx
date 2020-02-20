//Se importan las librerias necesarias
import React, { FunctionComponent, useState, useRef } from "react";
import "./style.css";

function TextInput(props: IProps) {
  return (
    <input
      className="inputFocusable"
      type="text"
      placeholder="..."
      onFocus={e=>{props.propSetFocused(true)}}
      onBlur={e=>{props.propSetFocused(false)}}
    />
  );
}

interface IProps{
  focused?: boolean;
  propSetFocused: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  /* propSetFocused: (value: boolean | ((prevVar: boolean) => boolean)) => void; */
}
//Se exporta el componente
export default TextInput;
