//Se importan las librerias necesarias
import React from "react";

import "./style.css";

function CardCandidate(props: IProps) {
  return (
    <div className="card-candidate">
      <div className="col-card-left">
        <h2>Candidato:</h2>
        <p>{`${props.candidate.firstname} ${props.candidate.lastname}`}</p>
        <p>{props.candidate.age}</p>
        <p>{props.candidate.slogan}</p>
      </div>
      <div className="col-card-right">
        <h2>Votos: {props.candidate.votes}</h2>
        <div>
          <button className="unit button" onClick={e=>{props.functionAddVote(props.idCard)}}>+</button>
          <button className="unit button">-</button>
        </div>
      </div>
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

interface IProps{
    candidate: ICandidates,
    functionAddVote: Function,
    idCard:number
}

//Se exporta el componente
export default CardCandidate;
