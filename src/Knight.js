import { buildElement } from "./Board";

const makeKnight = () => {
  const knightEl = buildElement("img", {
    id: "knight",
    src: "/src/images/knight.png",
  });
  return knightEl;
};

const placeKnight = (square) => {
  console.log("placeKnight");
  const knight = makeKnight();
  square.append(knight);
  square.classList.add("current-knight");
};

/*
Not really part of 'Knight', but
but don't want to confuse it with
target square, and another file is silly
*/
const makeTarget = () => {
  const target = buildElement("img", {
    className: "target",
    src: "/src/images/target.png",
  });
  return target;
};

const placeTarget = (square) => {
  console.log("placeTarget");
  const target = makeTarget();
  square.append(target);
  square.classList.add("current-target");
};

const makeMove = () => {
    const target = buildElement("img", {
        className: "move",
        src: "/src/images/move.png",
      });
      return target;
}

const placeMove = (square) => {
    const move = makeMove();
  square.append(move);
  square.classList.add("move");
}

export { makeKnight, placeKnight, makeTarget, placeTarget, makeMove, placeMove };
