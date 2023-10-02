import { getAllSquares, getCoords } from "./Board";

const getMoves = (square) => {
  const [x, y] = [
    parseInt(square.getAttribute("x")),
    parseInt(square.getAttribute("y")),
  ];
  const validMoves = getValidMoves(x, y);
  const moves = [];

  getAllSquares().forEach((square) => {
    const coords = getCoords(square);
    if (JSON.stringify(validMoves).includes(coords)) {
      moves.push(square);
    }
  });
  return moves;
};

const getValidMoves = (x, y) => {
  const moves = [
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
  ];
  return moves.filter((move) => isValid(move));
};

const isValid = (move) => {
  return move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7;
};

export { getMoves, getValidMoves, isValid };
