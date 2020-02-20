//Se importan las librerias necesarias
import React, { useRef, useEffect, useState } from "react";
import "./style.css";

//funcion para la vista del formulario de registro
function RegisterForm() {
  const [userRegister, setUserRegister] = useState<IUser>({
    userName: "",
    email: "",
    phoneNumber: 0
  });
  const [phoneInit, setPhoneInit] = useState<number>(300);

  const InputUserRef = useRef<HTMLInputElement>(null);
  const InputUserPhone = useRef<HTMLInputElement>(null);
  const InputUserPhoneInit = useRef<HTMLInputElement>(null);

  /* Funcion para cambiar los datos del usuario cada vez que hay un cambio en el input
     las variables de entrada es in HTMLInputElement
  */
  function changeDataUser(inputForm: HTMLInputElement) {
    if (inputForm.name === "userName") {
      setUserRegister({
        ...userRegister,
        userName: inputForm.value
      });
    } else if (inputForm.name === "email") {
      setUserRegister({
        ...userRegister,
        email: inputForm.value
      });
    } else {
      setUserRegister({
        ...userRegister,
        phoneNumber: Number(inputForm.value)
      });
    }
  }

  /* Funcion, para detectar los errores en la inserción de datos en el formulario */
  function checkInput() {
    //deteccion de error en el input de Username
    if (InputUserRef.current?.validity.patternMismatch) {
      InputUserRef.current.setCustomValidity(
        "El nombre de usuario debe tener al menos 4 caracteres y maximo 20 caracteres, sin espacios. "
      );
    } else {
      InputUserRef.current?.setCustomValidity("");
    }
    //deteccion de error en el input de phone
    if (InputUserPhone.current?.validity.patternMismatch) {
      InputUserPhone.current.setCustomValidity(
        "El telefono del usuario debe tener al menos un numero entre 300 y 320 "
      );
    } else {
      InputUserPhone.current?.setCustomValidity("");
    }
  }

  useEffect(() => {
    checkInput();
  }, [userRegister]);
  return (
    <div className="container-form">
      <h1 className="form-title">Formulario de Registro</h1>
      <form className="form-register">
        <label className="label-group" htmlFor="completeName">
          <span>Nombre de usuario</span>
          <input
            className="input-form"
            type="text"
            name="userName"
            id="completeUserName"
            placeholder="Andres Escobar Perez"
            ref={InputUserRef}
            pattern="[^\s]{4,20}"
            required
            onChange={e => {
              changeDataUser(e.target);
            }}
          />
        </label>
        <label className="label-group" htmlFor="phone">
          <span>Telefono celular</span>
          <div>
            <input
              className="input-form"
              type="number"
              name="phoneNumber"
              id="phone"
              placeholder="300"
              value={phoneInit}
              min="300"
              max="320"
              ref={InputUserPhoneInit}
              required
              onChange={e => {
                setPhoneInit(Number(e.target.value))
              }}
            />
            <input
              className="input-form"
              type="number"
              name="phoneNumber2"
              id="phone2"
              placeholder="3434 3434"
              value={userRegister.phoneNumber}
              ref={InputUserPhone}
              required
              onChange={e => {
                changeDataUser(e.target);
              }}
            />
          </div>
        </label>
        <label className="label-group" htmlFor="mail">
          <span>Correo electronico</span>
          <input
            className="input-form"
            type="email"
            name="email"
            id="email"
            placeholder="correo@mail.com"
            required
            onChange={e => {
              changeDataUser(e.target);
            }}
          />
        </label>
        <button className="button-submit" type="submit">
          ENVIAR DATOS
        </button>
      </form>
    </div>
  );
}

interface IUser {
  userName: string;
  email: string;
  phoneNumber: number;
}

//Se exporta el componente
export default RegisterForm;
