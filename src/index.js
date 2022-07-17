import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, tripplePi } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}</li>
    <li>{tripplePi()}</li>
  </ul>,
  document.getElementById("root")
);
