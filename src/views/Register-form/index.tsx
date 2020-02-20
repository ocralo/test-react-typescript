//Se importan las librerias necesarias
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

//funcion para la vista del formulario de registro
function RegisterForm() {
  const [userRegister, setUserRegister] = useState<IUser>({
    userName: "",
    email: "",
    phoneNumber: 0
  });
  const [phoneInit, setPhoneInit] = useState<number>(300);
  const [error, setError] = useState<string>('');

  const InputUserRef = useRef<HTMLInputElement>(null);
  const InputUserPhone = useRef<HTMLInputElement>(null);
  const InputUserPhone2 = useRef<HTMLInputElement>(null);

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
    if (
      InputUserPhone.current?.validity.rangeUnderflow ||
      InputUserPhone.current?.validity.rangeOverflow
    ) {
      InputUserPhone.current.setCustomValidity(
        "El telefono del usuario debe tener al menos un numero entre 300 y 320 "
      );
    } else {
      InputUserPhone.current?.setCustomValidity("");
    }
    //deteccion de error en el input de phone2
    if (
      InputUserPhone2.current?.validity.rangeUnderflow ||
      InputUserPhone2.current?.validity.rangeOverflow
    ) {
      InputUserPhone2.current.setCustomValidity(
        "El telefono del usuario debe tener debe tener 7 caracteres numericos"
      );
    } else {
      InputUserPhone2.current?.setCustomValidity("");
    }
  }

/* funcion para enviar los datos del formulario */
  function handleSubmit(form: React.FormEvent<HTMLFormElement>) {
    form.preventDefault();
    //creacion del formData que se enviara
    let bodyFormData = new FormData();
    bodyFormData.set("userName", userRegister.userName);
    bodyFormData.set("email", `${userRegister.phoneNumber}`);
    bodyFormData.set(
      "phone_number",
      `${phoneInit}${userRegister.phoneNumber}`
    );
    //envio de datos mediante axios, configurando el formData
    axios({
      method: "post",
      url: "http://sgaviria.com/api/1/front-dev/",
      data: bodyFormData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Tranqui-FrontendDeveloper": "RODRIGOESCOBARLOPEZ"
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          alert("Los datos del formulario se han enviado satisfactoriamente")
        }
      })
      .catch(function (response) {
        setError('Ha ocurrido un error al enviar los datos del formulario')
      });
  }

  useEffect(() => {
    checkInput();
  }, [userRegister, phoneInit]);
  return (
    <div className="container-form">
      <h1 className="form-title">Formulario de Registro</h1>
      <form
        className="form-register"
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <label className="label-group" htmlFor="completeName">
          <span>Nombre de usuario</span>
          <input
            className="input-form"
            type="text"
            name="userName"
            id="completeUserName"
            placeholder="ocralo"
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
              pattern="[^\s]{4,20}"
              value={phoneInit}
              min="300"
              max="320"
              ref={InputUserPhone}
              required
              onChange={e => {
                setPhoneInit(Number(e.target.value));
              }}
            />
            <input
              className="input-form"
              type="number"
              name="phoneNumber2"
              id="phone2"
              min="1000000"
              max="9999999"
              value={userRegister.phoneNumber}
              ref={InputUserPhone2}
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
      <h4 className="error">{error}</h4>
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
