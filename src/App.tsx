//Se importan las librerias necesarias
import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner";

/* Se agrega la vista del componente a una constante y le agrega el loadeble, 
para que cuando no cargue el componente muestre un spinner. */
const viewHome = Loadable({
	loader: () => import( "./views/focusable-input"),
	loading: Spinner
});

const view404 = Loadable({
	loader: () => import( "./views/Page404"),
	loading: Spinner
});

/* Funcion la cual se encargara de direccionar las rutas de los componentes que se mostraran */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/focusable-input"
          name="Test1"
          component={viewHome}
        />
        <Route path="*" name="Test1" component={view404} />
      </Switch>
    </BrowserRouter>
  );
}
//Se exporta el componente 
export default App;
