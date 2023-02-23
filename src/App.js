import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Index from "./pages";
import Home from './pages/Home';
function App() {
  return (

    <BrowserRouter>
      <Switch>


        <Route path='/home' >
          <Home />
        </Route>
        <Route path='/page' >
         <Index/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
