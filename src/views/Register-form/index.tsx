//Se importan las librerias necesarias
import React from "react";
import "./style.css";

//funcion para la vista del formulario de registro
function RegisterForm() {
  return (
    <div className="container-form">
      <h1 className="form-title">Formulario de Registro</h1>
      <form className="form-register">
        <label className="label-group" htmlFor="completeName">
          <span>Nombre completo</span>
          <input
            className="input-form"
            type="text"
            name=""
            id="completeName"
            placeholder="Andres Escobar Perez"
          />
        </label>
        <label className="label-group" htmlFor="phone">
          <span>Telefono celular</span>
          <input
            className="input-form"
            type="tel"
            name=""
            id="phone"
            placeholder="300 3434 3434"
          />
        </label>
        <label className="label-group" htmlFor="mail">
          <span>Correo Electronico</span>
          <input
            className="input-form"
            type="email"
            name=""
            id="email"
            placeholder="correo@mail.com"
          />
        </label>
        <button className="button-submit" type="submit">
          ENVIAR DATOS
        </button>
      </form>
    </div>
  );
}

//Se exporta el componente
export default RegisterForm;
