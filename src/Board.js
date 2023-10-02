import { gameStart } from "./UI";

const makeBoard = () => {
  const body = document.querySelector("body");
  const container = buildElement("div", { id: "container" });
  const board = buildElement("div", { id: "gameboard" });
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = buildElement("div", {
        className: "square",
        id: `${i},${j}`,
      });
      square.setAttribute("coords", `${i},${j}`);
      square.setAttribute("x", i);
      square.setAttribute("y", j);
      if ((i + j) % 2 === 0) {
        square.style.backgroundColor = "white";
      } else {
        square.style.backgroundColor = "black";
      }
      board.append(square);
    }
  }
  board.addEventListener("click", gameStart);
  container.append(board);
  body.append(container);
};

const getSquare = (coords) => {
  console.log("getSquare coords:", coords);
  console.log("getSquare typeof:", typeof coords);
  return document.querySelector(`[coords="${coords}"]`);
};

const getAllSquares = () => {
  return Array.from(document.querySelectorAll(".square"));
};

const getCoords = (square) => {
  return square.getAttribute("coords");
};

const buildElement = (type, args) => {
  const element = document.createElement(type);
  for (const key in args) {
    element[key] = args[key];
  }
  return element;
};

export { makeBoard, getSquare, getAllSquares, getCoords, buildElement };
