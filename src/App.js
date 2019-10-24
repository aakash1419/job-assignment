import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pricing from './pricing';
import { NavBar } from './components/navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Pricing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
