//Se importan las librerias necesarias
import React from "react";
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner";

/* Se agrega la vista del componente a una constante y le agrega el loadeble, 
para que cuando no cargue el componente muestre un spinner. */
const viewHome = Loadable({
  loader: () => import("./views/focusable-input"),
  loading: Spinner
});

const view404 = Loadable({
  loader: () => import("./views/Page404"),
  loading: Spinner
});

const votingList = Loadable({
  loader: () => import("./views/Voting-list"),
  loading: Spinner
});

const viewRegister = Loadable({
  loader: () => import("./views/Register-form"),
  loading: Spinner
});

/* Funcion la cual se encargara de direccionar las rutas de los componentes que se mostraran */
function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route
          exact
          path="/focusable-input"
          name="Test1"
          component={viewHome}
        />
        <Route
          path="/voting-list/:candidates(\d+)"
          name="Test2"
          component={votingList}
        />
        <Route path="/register-form" name="Test3" component={viewRegister} />
        <Route path="*" name="Error 404" component={view404} />
      </Switch>
    </HashRouter>
  );
}
//Se exporta el componente
export default App;
