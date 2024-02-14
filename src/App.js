import "./App.css";
import Routes from "./Routes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Colors!</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
