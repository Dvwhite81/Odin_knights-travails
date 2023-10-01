const getSquare = (coords) => {
  return document.getElementById(coords);
}

const getAllSquares = () => {
  return Array.from(document.querySelectorAll('.square'));
}

const getCoords = (square) => {
  return square.id;
}

export {
  getSquare,
  getAllSquares,
  getCoords
}
