import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Coke from "./Coke";
import Cheetos from "./Cheetos";
import Snickers from "./Snickers";
import VendingMachine from "./VendingMachine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/coke">
          <Coke />
        </Route>
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/snickers">
          <Snickers />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
