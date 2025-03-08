import React from "react";
import './App.css';
import blackSquare from "./black-square.png";

function App() {
  return (
    <div className="square-container">
      <img src={blackSquare} alt="Black Square" title='"Black Square" Kazimir Malevich' className="square" />
      <p className="title">Чёрный квадрат Малевича</p>
    </div>
  );
}

export default App;
