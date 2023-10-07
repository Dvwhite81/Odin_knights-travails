/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Board.js":
/*!**********************!*\
  !*** ./src/Board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildElement: () => (/* binding */ buildElement),\n/* harmony export */   getAllSquares: () => (/* binding */ getAllSquares),\n/* harmony export */   getCoords: () => (/* binding */ getCoords),\n/* harmony export */   getSquare: () => (/* binding */ getSquare),\n/* harmony export */   makeBoard: () => (/* binding */ makeBoard)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\nconst makeBoard = () => {\n  const body = document.querySelector(\"body\");\n  const container = buildElement(\"div\", { id: \"container\" });\n  const board = buildElement(\"div\", { id: \"gameboard\" });\n  for (let i = 0; i < 8; i++) {\n    for (let j = 0; j < 8; j++) {\n      const square = buildElement(\"div\", {\n        className: \"square\",\n        id: `${i},${j}`,\n      });\n      square.setAttribute(\"coords\", `${i},${j}`);\n      square.setAttribute(\"x\", i);\n      square.setAttribute(\"y\", j);\n      if ((i + j) % 2 === 0) {\n        square.style.backgroundColor = \"white\";\n      } else {\n        square.style.backgroundColor = \"black\";\n      }\n      board.append(square);\n    }\n  }\n  board.addEventListener(\"click\", _UI__WEBPACK_IMPORTED_MODULE_0__.gameStart);\n  container.append(board);\n  body.append(container);\n};\n\nconst getSquare = (coords) => {\n  console.log(\"getSquare coords:\", coords);\n  console.log(\"getSquare typeof:\", typeof coords);\n  return document.querySelector(`[coords=\"${coords}\"]`);\n};\n\nconst getAllSquares = () => {\n  return Array.from(document.querySelectorAll(\".square\"));\n};\n\nconst getCoords = (square) => {\n  return square.getAttribute(\"coords\");\n};\n\nconst buildElement = (type, args) => {\n  const element = document.createElement(type);\n  for (const key in args) {\n    element[key] = args[key];\n  }\n  return element;\n};\n\n\n\n\n//# sourceURL=webpack://odin_knights-travails/./src/Board.js?");

/***/ }),

/***/ "./src/Knight.js":
/*!***********************!*\
  !*** ./src/Knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeKnight: () => (/* binding */ makeKnight),\n/* harmony export */   makeMove: () => (/* binding */ makeMove),\n/* harmony export */   makeTarget: () => (/* binding */ makeTarget),\n/* harmony export */   placeKnight: () => (/* binding */ placeKnight),\n/* harmony export */   placeMove: () => (/* binding */ placeMove),\n/* harmony export */   placeTarget: () => (/* binding */ placeTarget)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n\n\nconst makeKnight = () => {\n  const knightEl = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"img\", {\n    id: \"knight\",\n    src: \"src/images/knight.png\",\n  });\n  return knightEl;\n};\n\nconst placeKnight = (square) => {\n  console.log(\"placeKnight\");\n  const knight = makeKnight();\n  square.append(knight);\n  square.classList.add(\"current-knight\");\n};\n\n/*\nNot really part of 'Knight', but\nbut don't want to confuse it with\ntarget square, and another file is silly\n*/\nconst makeTarget = () => {\n  const target = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"img\", {\n    className: \"target\",\n    src: \"src/images/target.png\",\n  });\n  return target;\n};\n\nconst placeTarget = (square) => {\n  console.log(\"placeTarget\");\n  const target = makeTarget();\n  square.append(target);\n  square.classList.add(\"current-target\");\n};\n\nconst makeMove = () => {\n    const target = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"img\", {\n        className: \"move\",\n        src: \"src/images/move.png\",\n      });\n      return target;\n}\n\nconst placeMove = (square) => {\n    const move = makeMove();\n  square.append(move);\n  square.classList.add(\"move\");\n}\n\n\n\n\n//# sourceURL=webpack://odin_knights-travails/./src/Knight.js?");

/***/ }),

/***/ "./src/Square.js":
/*!***********************!*\
  !*** ./src/Square.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shortestPath: () => (/* binding */ shortestPath)\n/* harmony export */ });\nconst Square = (coords, path) => {\n    if (coords[0] < 0 || coords[0] > 7 || coords[1] < 0 || coords[1] > 7) {\n      return null;\n    }\n    return { coords, path };\n  }\n\n  const shortestPath = (coords, [a, b]) => {\n    let queue = [Square(coords, [coords])];\n    let current = queue.shift();\n\n    while (current.coords[0] !== a || current.coords[1] !== b) {\n      let moves = [\n        [current.coords[0] + 2, current.coords[1] - 1],\n        [current.coords[0] + 2, current.coords[1] + 1],\n        [current.coords[0] - 2, current.coords[1] - 1],\n        [current.coords[0] - 2, current.coords[1] + 1],\n        [current.coords[0] + 1, current.coords[1] - 2],\n        [current.coords[0] + 1, current.coords[1] + 2],\n        [current.coords[0] - 1, current.coords[1] - 2],\n        [current.coords[0] - 1, current.coords[1] + 2],\n      ];\n      moves.forEach((move) => {\n        let node = Square(move, current.path.concat([move]));\n        if (node) {\n         queue.push(node);\n        }\n      });\n      current = queue.shift();\n    }\n\n    current.path.shift();\n\n    return current.path;\n  }\n\n  \n\n\n//# sourceURL=webpack://odin_knights-travails/./src/Square.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMessage: () => (/* binding */ createMessage),\n/* harmony export */   gameStart: () => (/* binding */ gameStart),\n/* harmony export */   getShortestPath: () => (/* binding */ getShortestPath)\n/* harmony export */ });\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n/* harmony import */ var _Knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Knight */ \"./src/Knight.js\");\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ \"./src/Square.js\");\n\n\n\n\nconst createMessage = () => {\n  const body = document.querySelector(\"body\");\n  const messageDiv = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", { id: \"message-div\" });\n  const h1 = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"h1\", {\n    id: \"message-h1\",\n    textContent: \"Click a starting square\",\n  });\n  const h4 = (0,_Board__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"h4\", {\n    id: \"message-h4\",\n    textContent: ''\n  });\n\n  messageDiv.append(h1, h4);\n  body.append(messageDiv);\n};\n\nconst gameStart = async (e) => {\n  let startSet = false;\n  let startingSquare;\n  let targetSquare;\n\n  const messageH1 = document.getElementById(\"message-h1\");\n  const gameboard = document.getElementById(\"gameboard\");\n\n  while (!startSet) {\n    startingSquare = e.target;\n    gameboard.removeEventListener(\"click\", gameStart);\n    startSet = !startSet;\n  }\n\n  (0,_Knight__WEBPACK_IMPORTED_MODULE_1__.placeKnight)(startingSquare);\n  messageH1.textContent = \"Click a target square\";\n  gameboard.addEventListener(\"click\", (e) => {\n    targetSquare = e.target;\n    reset();\n    (0,_Knight__WEBPACK_IMPORTED_MODULE_1__.placeTarget)(targetSquare);\n    console.log(\"test\");\n    const path = getShortestPath(startingSquare, targetSquare);\n    console.log(\"PATH:\", path);\n    messageH1.textContent = `${path.length} moves!`;\n    pathAnimation(path, targetSquare);\n  });\n};\n\nconst getShortestPath = (startingSquare, targetSquare) => {\n  const sCoords = startingSquare.getAttribute('coords');\n  const sX = Number(sCoords[0])\n  const sY = Number(sCoords[2])\n  const tCoords = targetSquare.getAttribute('coords');\n  const tX = Number(tCoords[0])\n  const tY = Number(tCoords[2])\n  return (0,_Square__WEBPACK_IMPORTED_MODULE_2__.shortestPath)([sX, sY], [tX, tY]);\n};\n\nconst pathAnimation = (path, targetSquare) => {\n  path.pop();\n  const messageH4 = document.getElementById(\"message-h4\");\n  path.forEach(move => {\n    console.log('path move:', move)\n    ;(0,_Knight__WEBPACK_IMPORTED_MODULE_1__.placeMove)((0,_Board__WEBPACK_IMPORTED_MODULE_0__.getSquare)(move));\n    messageH4.textContent += `[${move}], `;\n  });\n\n  const targetCoords = targetSquare.getAttribute('coords');\n  messageH4.textContent += `[${targetCoords}]`;\n}\n\nconst reset = () => {\n  ;(0,_Board__WEBPACK_IMPORTED_MODULE_0__.getAllSquares)().forEach(square => {\n    if (!square.classList.contains('current-knight')) {\n      square.innerHTML = '';\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://odin_knights-travails/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ \"./src/Board.js\");\n\n\n\n(0,_UI__WEBPACK_IMPORTED_MODULE_0__.createMessage)();\n(0,_Board__WEBPACK_IMPORTED_MODULE_1__.makeBoard)();\n\n\n//# sourceURL=webpack://odin_knights-travails/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;