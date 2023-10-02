import { buildElement, getAllSquares, getSquare } from "./Board";
import { placeKnight, placeTarget, placeMove } from "./Knight";
import { shortestPath } from "./Square";

const createMessage = () => {
  const body = document.querySelector("body");
  const messageDiv = buildElement("div", { id: "message-div" });
  const h1 = buildElement("h1", {
    id: "message-h1",
    textContent: "Click a starting square",
  });
  const h4 = buildElement("h4", {
    id: "message-h4",
    textContent: ''
  });

  messageDiv.append(h1, h4);
  body.append(messageDiv);
};

const gameStart = async (e) => {
  let startSet = false;
  let startingSquare;
  let targetSquare;

  const messageH1 = document.getElementById("message-h1");
  const gameboard = document.getElementById("gameboard");

  while (!startSet) {
    startingSquare = e.target;
    gameboard.removeEventListener("click", gameStart);
    startSet = !startSet;
  }

  placeKnight(startingSquare);
  messageH1.textContent = "Click a target square";
  gameboard.addEventListener("click", (e) => {
    targetSquare = e.target;
    reset();
    placeTarget(targetSquare);
    console.log("test");
    const path = getShortestPath(startingSquare, targetSquare);
    console.log("PATH:", path);
    messageH1.textContent = `${path.length} moves!`;
    pathAnimation(path, targetSquare);
  });
};

const getShortestPath = (startingSquare, targetSquare) => {
  const sCoords = startingSquare.getAttribute('coords');
  const sX = Number(sCoords[0])
  const sY = Number(sCoords[2])
  const tCoords = targetSquare.getAttribute('coords');
  const tX = Number(tCoords[0])
  const tY = Number(tCoords[2])
  return shortestPath([sX, sY], [tX, tY]);
};

const pathAnimation = (path, targetSquare) => {
  path.pop();
  const messageH4 = document.getElementById("message-h4");
  path.forEach(move => {
    console.log('path move:', move)
    placeMove(getSquare(move));
    messageH4.textContent += `[${move}], `;
  });

  const targetCoords = targetSquare.getAttribute('coords');
  messageH4.textContent += `[${targetCoords}]`;
}

const reset = () => {
  getAllSquares().forEach(square => {
    if (!square.classList.contains('current-knight')) {
      square.innerHTML = '';
    }
  });
}

export { createMessage, gameStart, getShortestPath };
