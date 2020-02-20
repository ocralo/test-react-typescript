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
      age: Math.floor(Math.random() * (80 - 18) + 18),
      slogan: faker.company.catchPhraseDescriptor(),
      votes: Math.floor(Math.random() * (20 - 0) + 0)
    };

    arrayCandidates.push(aux);
  }
  return arrayCandidates;
}

function VotingList(props: ComponentProps) {
  const [candidates, setCandidates] = useState<ICandidates[]>();

  /* Funcion, para añadir votos a los candidatos y que no pase de un maximo de 20 votos*/
  function addVote(i: number) {
    if (candidates) {
      let auxCandidates = [...candidates];
      if (auxCandidates[i].votes < 20) auxCandidates[i].votes++;
      setCandidates(
        auxCandidates.sort((a: ICandidates, b: ICandidates) => {
          return b.votes - a.votes;
        })
      );
    }
  }
  /* Funcion, para quitar votos a los candidatos y que no pase de un minimo de 0 votos*/
  function deleteVote(i: number) {
    if (candidates) {
      let auxCandidates = [...candidates];
      if (auxCandidates[i].votes > 0) auxCandidates[i].votes--;
      setCandidates(
        auxCandidates.sort((a: ICandidates, b: ICandidates) => {
          return b.votes - a.votes;
        })
      );
    }
  }

  //rellena los candidatos, cada vez que inicia la aplicacion o que cambie el dato props.match.params.candidates
  useEffect(() => {
    setCandidates(generateCandidate(+props.match.params.candidates));
  }, [props.match.params.candidates]);

  useEffect(() => {
    console.log("cambio");
  }, [candidates]);

  return (
    <div>
      {candidates &&
        candidates
          .sort((a: ICandidates, b: ICandidates) => {
            return b.votes - a.votes;
          })
          .map((data: ICandidates, i: number) => {
            return (
              <CardCandidate
                key={i}
                idCard={i}
                candidate={data}
                functionAddVote={addVote}
                functionDeleteVote={deleteVote}
              />
            );
          })}
    </div>
  );
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
