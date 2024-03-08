import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// var numbers = [1, 3, 2, 4, 7, 6, 8];

// const squares = numbers.map((x) => {return Math.pow(x, 2);});
// const cubes = numbers.map(x => Math.pow(x, 3));
// const lessFive = numbers.filter(x => x<5);
// const numbersSum = numbers.reduce((sum, x) => sum += x);

// console.log("Numbers:", numbers, "Squares:", squares, "Cubes:", cubes);
// console.log("Less than 5:", lessFive);
// console.log("Sum of numbers:", numbersSum);

root.render(
  <App/>
);