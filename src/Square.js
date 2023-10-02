const Square = (coords, path) => {
    if (coords[0] < 0 || coords[0] > 7 || coords[1] < 0 || coords[1] > 7) {
      return null;
    }
    return { coords, path };
  }

  const shortestPath = (coords, [a, b]) => {
    let queue = [Square(coords, [coords])];
    let current = queue.shift();

    while (current.coords[0] !== a || current.coords[1] !== b) {
      let moves = [
        [current.coords[0] + 2, current.coords[1] - 1],
        [current.coords[0] + 2, current.coords[1] + 1],
        [current.coords[0] - 2, current.coords[1] - 1],
        [current.coords[0] - 2, current.coords[1] + 1],
        [current.coords[0] + 1, current.coords[1] - 2],
        [current.coords[0] + 1, current.coords[1] + 2],
        [current.coords[0] - 1, current.coords[1] - 2],
        [current.coords[0] - 1, current.coords[1] + 2],
      ];
      moves.forEach((move) => {
        let node = Square(move, current.path.concat([move]));
        if (node) {
         queue.push(node);
        }
      });
      current = queue.shift();
    }

    current.path.shift();

    return current.path;
  }

  export {
    shortestPath
  }
