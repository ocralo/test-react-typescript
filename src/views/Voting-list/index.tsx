//Se importan las librerias necesarias
import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import * as faker from "faker";
//se importan los componentes
import CardCandidate from "../../Components/CardCandidate";
import "./style.css";

/* funcion que se encargara de generar el total de candidatos que se coloque en el query */
function generateCandidate(i: number) {
  let arrayCandidates: Array<ICandidates> = [];

  for (let index = 0; index < i; index++) {
    let aux: ICandidates = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: Math.random() * (80 - 18) + 18,
      slogan: faker.company.catchPhraseDescriptor(),
      votes: Math.random() * (80 - 1) + 1
    };
      
    arrayCandidates.push(aux);
  }
  return arrayCandidates;
}

function VotingList(props: ComponentProps) {
  
  console.log(faker.random.number());
  return <div>{<CardCandidate />}</div>;
}

interface ICandidates {
  firstname: string;
  lastname: string;
  age: number;
  slogan: string;
  votes: number;
}

interface RouteInfo {
  candidates: string;
}

interface ComponentProps extends RouteComponentProps<RouteInfo> {}

//Se exporta el componente
export default VotingList;
