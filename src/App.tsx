//Se importan las librerias necesarias
import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner";

/* Se agrega la vista del componente a una constante y le agrega el loadeble, 
para que cuando no cargue el componente muestre un spinner. */
const viewHome = Loadable({
	loader: () => import( "./Components/TextInput"),
	loading: Spinner
});


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
      </Switch>
    </BrowserRouter>
  );
}
//Se exporta el componente 
export default App;
