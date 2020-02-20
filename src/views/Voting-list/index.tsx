//Se importan las librerias necesarias
import React from "react";
import {RouteComponentProps} from "react-router-dom";

import "./style.css";

function VotingList(props: ComponentProps) {
    return <div>{props.match.params.candidates}</div>;
}

interface ICandidates{
    firstname: string,
    lastname: string,
    age: number,
    slogan: string,
    votes: number
}
interface RouteInfo {
    candidates: string;
}

interface ComponentProps extends RouteComponentProps<RouteInfo> {
}

//Se exporta el componente
export default VotingList;
