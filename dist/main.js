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

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar UI = function () {\n  var player1, player2;\n  var countShips = 0;\n  var currentShip = null;\n  var header = document.getElementsByTagName('header')[0];\n  var main = document.getElementsByTagName('main')[0];\n  var footer = document.getElementsByTagName('footer')[0];\n  var createDiv = function createDiv() {\n    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var divClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var div = document.createElement('div');\n    if (id != null) div.id = id;\n    if (divClass != null) {\n      div.classList.add(divClass);\n    }\n    return div;\n  };\n  var drop = function drop(ev) {\n    ev.preventDefault();\n    var data = ev.dataTransfer.getData(\"text/plain\");\n    ev.target.setAttribute(\"data\", data);\n    if (addShip()) {\n      currentShip.parentNode.removeChild(currentShip);\n    }\n  };\n  var fillSquares = function fillSquares(i, j, data, board) {\n    for (var k = 0; k < data; k++) {\n      var nextSquare = board.children[i * 10 + j + k];\n      nextSquare.setAttribute('data', data);\n      nextSquare.classList.add('taken');\n    }\n  };\n  var isValidSquare = function isValidSquare(i, j, board, data) {\n    for (var k = 0; k < data; k++) {\n      var square = board.children[i * 10 + j + k];\n      var squareClasses = _toConsumableArray(square.classList);\n      if (square.hasAttribute('data') && squareClasses.includes('taken')) {\n        return false;\n      }\n    }\n    return true;\n  };\n  var addShip = function addShip() {\n    var board = document.getElementsByClassName('grid')[0];\n    for (var i = 0; i < 10; i++) {\n      for (var j = 0; j < 10; j++) {\n        var square = board.children[i * 10 + j];\n        var data = parseInt(square.getAttribute('data'));\n        if (isValidSquare(i, j, board, data)) {\n          if (j + data - 1 < 10) {\n            fillSquares(i, j, data, board);\n            countShips++;\n            if (countShips == 5) {\n              player1.placeShip();\n              _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start(player1, player2, load);\n            }\n            return true;\n          }\n        }\n      }\n    }\n  };\n  var allowDrop = function allowDrop(ev) {\n    ev.preventDefault();\n  };\n  var createGrid = function createGrid(playerBoard) {\n    var isEnemy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var boardDimensions = playerBoard.dimensions;\n    var x = boardDimensions[0];\n    var y = boardDimensions[1];\n    var grid = createDiv(null, 'grid');\n    for (var i = 0; i < x; i++) {\n      var row = playerBoard.values[i];\n      for (var j = 0; j < y; j++) {\n        var square = createDiv(null, 'grid-square');\n        if (row[j] == 1) square.style.backgroundColor = 'blue';else if (row[j] == 2) square.style.backgroundColor = 'red';\n        if (isEnemy) square.classList.add('enemy-board');else {\n          square.ondragover = allowDrop;\n          square.ondrop = drop;\n        }\n        grid.appendChild(square);\n      }\n    }\n    return grid;\n  };\n  var makePlayersGrid = function makePlayersGrid(p1, p2) {\n    var p1Grid = createGrid(p1.board);\n    var p2Grid = createGrid(p2.board, true);\n    main.appendChild(p1Grid);\n    main.appendChild(p2Grid);\n  };\n  var showScore = function showScore(shipCount, name) {\n    var scoreboard = createDiv(null, 'score');\n    var ships = document.createElement('h1');\n    ships.textContent = name;\n    var score = document.createElement('h2');\n    score.textContent = \"Ships: \".concat(shipCount);\n    scoreboard.appendChild(ships);\n    scoreboard.appendChild(score);\n    return scoreboard;\n  };\n  var makeScoreboard = function makeScoreboard(p1, p2) {\n    var p1Score = showScore(p1.board.numberOfShips, 'Player 1');\n    var p2Score = showScore(p2.board.numberOfShips, 'Computer');\n    header.appendChild(p1Score);\n    header.appendChild(p2Score);\n  };\n  var drag = function drag(ev) {\n    ev.dataTransfer.setData(\"text/plain\", ev.toElement.childNodes.length);\n    currentShip = ev.path[1];\n  };\n  var createShip = function createShip(type, size, color) {\n    var shipBox = createDiv(null, 'ship-box');\n    var shipName = document.createElement('span');\n    shipName.textContent = type;\n    var shipShape = createDiv('ship-structure', type.toLowerCase());\n    shipShape.draggable = true;\n    shipShape.ondragstart = drag;\n    shipShape.style.color = color;\n    for (var i = 0; i < size; i++) {\n      var shipSquare = createDiv(null, 'ship');\n      shipSquare.style.backgroundColor = color;\n      shipShape.appendChild(shipSquare);\n    }\n    shipBox.appendChild(shipName);\n    shipBox.appendChild(shipShape);\n    return shipBox;\n  };\n  var createShipsToDrag = function createShipsToDrag() {\n    var ships = createDiv('ship-group');\n    var carrier = createShip('Carrier', 5, 'Red');\n    var battleship = createShip('Battleship', 4, 'Blue');\n    var destroyer = createShip('Destroyer', 3, 'Yellow');\n    var submarine = createShip('Submarine', 3, 'Darkblue');\n    var patrolBoat = createShip('Patrol-Boat', 2, 'Purple');\n    ships.appendChild(carrier);\n    ships.appendChild(battleship);\n    ships.appendChild(destroyer);\n    ships.appendChild(submarine);\n    ships.appendChild(patrolBoat);\n    return ships;\n  };\n  var showShipsToDrag = function showShipsToDrag() {\n    var msg = document.createElement('span');\n    msg.textContent = 'Drag your ships to the desired position';\n    var ships = createShipsToDrag();\n    footer.appendChild(msg);\n    footer.appendChild(ships);\n  };\n  var resetUI = function resetUI() {\n    header.innerHTML = '';\n    main.innerHTML = '';\n    footer.innerHTML = '';\n  };\n  var load = function load(p1, p2) {\n    resetUI();\n    player1 = p1;\n    player2 = p2;\n    if (!p1.board.numberOfShips) {\n      showShipsToDrag();\n    }\n    makePlayersGrid(p1, p2);\n    makeScoreboard(player1, player2);\n  };\n  return {\n    load: load\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/factory/gameBoard.js":
/*!**********************************!*\
  !*** ./src/factory/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/factory/ship.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar GameBoard = /*#__PURE__*/function () {\n  function GameBoard() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n    _classCallCheck(this, GameBoard);\n    var board = [];\n    for (var i = 0; i < x; i++) {\n      var arr = [];\n      for (var j = 0; j < y; j++) {\n        arr.push(0);\n      }\n      board.push(arr);\n    }\n    this.xSquares = x;\n    this.ySquares = y;\n    this.board = board;\n    this.ships = [];\n    this.shipCoordinates = [];\n  }\n  _createClass(GameBoard, [{\n    key: \"placeShip\",\n    value: function placeShip(coordinates) {\n      var _this = this;\n      var contains = false;\n      if (this.shipCoordinates.length > 0) {\n        var _loop = function _loop(i) {\n          var coord = coordinates[i];\n          contains = _this.shipCoordinates.filter(function (shipCoord) {\n            return shipCoord.filter(function (ship) {\n              return coord[0] === ship[0] && coord[1] === ship[1];\n            }).length != 0;\n          }).length !== 0;\n          if (contains == true) return \"break\";\n        };\n        for (var i = 0; i < coordinates.length; i++) {\n          var _ret = _loop(i);\n          if (_ret === \"break\") break;\n        }\n      }\n      if (!contains) {\n        var ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](coordinates.length);\n        this.ships.push(ship);\n        this.shipCoordinates.push(coordinates);\n      }\n    }\n  }, {\n    key: \"receiveAttack\",\n    value: function receiveAttack(x, y) {\n      this.board[x][y] = 1;\n      for (var i = 0; i < this.shipCoordinates.length; i++) {\n        var coordinates = this.shipCoordinates[i];\n        for (var j = 0; j < coordinates.length; j++) {\n          if (x == coordinates[j][0] && y == coordinates[j][1]) {\n            this.ships[i].hit();\n            this.board[x][y] = 2;\n            return true;\n          }\n        }\n      }\n      return false;\n    }\n  }, {\n    key: \"numberOfShips\",\n    get: function get() {\n      var count = this.ships.filter(function (ship) {\n        return !ship.isSunk();\n      });\n      return count.length;\n    }\n  }, {\n    key: \"dimensions\",\n    get: function get() {\n      return [this.xSquares, this.ySquares];\n    }\n  }, {\n    key: \"values\",\n    get: function get() {\n      return this.board;\n    }\n  }]);\n  return GameBoard;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n//# sourceURL=webpack://battleship/./src/factory/gameBoard.js?");

/***/ }),

/***/ "./src/factory/player.js":
/*!*******************************!*\
  !*** ./src/factory/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/factory/gameBoard.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    var isAI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    _classCallCheck(this, Player);\n    this.AI = isAI;\n    this.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.attackedPositions = [];\n  }\n  _createClass(Player, [{\n    key: \"attack\",\n    value: function attack(x, y, enemyBoard) {\n      enemyBoard.receiveAttack(x, y);\n      this.attackedPositions.push([x, y]);\n      return enemyBoard;\n    }\n  }, {\n    key: \"autoAttack\",\n    value: function autoAttack(enemyBoard) {\n      var x = Math.floor(Math.random() * 10);\n      var y = Math.floor(Math.random() * 10);\n      if (this.attackedPositions.length) {\n        for (var i = 0; i < this.attackedPositions.length; i++) {\n          var pos = this.attackedPositions[i];\n          if (x == pos[0] && y == pos[1]) {\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n            i = 0;\n          }\n        }\n      }\n      var board = this.attack(x, y, enemyBoard);\n      return board;\n    }\n  }, {\n    key: \"placeShip\",\n    value: function placeShip() {\n      var board = document.getElementsByClassName('grid')[0];\n      for (var i = 0; i < 10; i++) {\n        for (var j = 0; j < 10; j++) {\n          var square = board.children[i * 10 + j];\n          if (square.hasAttribute('data')) {\n            var data = square.getAttribute('data');\n            var shipCoords = [];\n            for (var k = 0; k < data; k++) {\n              var shipSquare = board.children[i * 10 + j + k];\n              if (!shipSquare.hasAttribute('data')) break;\n              shipCoords.push([i, j + k]);\n            }\n            this.board.placeShip(shipCoords);\n            j += data;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"board\",\n    get: function get() {\n      return this.gameBoard;\n    }\n  }, {\n    key: \"atkPositions\",\n    get: function get() {\n      return this.attackedPositions;\n    }\n  }, {\n    key: \"refreshBoard\",\n    set: function set(board) {\n      this.gameBoard = board;\n    }\n  }, {\n    key: \"isAI\",\n    get: function get() {\n      return this.AI;\n    }\n  }]);\n  return Player;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/factory/player.js?");

/***/ }),

/***/ "./src/factory/ship.js":
/*!*****************************!*\
  !*** ./src/factory/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(length) {\n    _classCallCheck(this, Ship);\n    this.length = length;\n    this.hitsTaken = 0;\n    this.sunk = false;\n  }\n  _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hitsTaken++;\n      this.isSunk();\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      if (this.hitsTaken == this.length || this.sunk) {\n        this.sunk = true;\n        return true;\n      }\n    }\n  }, {\n    key: \"hits\",\n    get: function get() {\n      return this.hitsTaken;\n    }\n  }]);\n  return Ship;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/factory/ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _factory_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/player */ \"./src/factory/player.js\");\n\nvar game = function () {\n  var loadUI;\n  var initPlayer = function initPlayer() {\n    var isAI = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var player = new _factory_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](isAI);\n    player.board.placeShip([[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]);\n    player.board.placeShip([[3, 5], [3, 6], [3, 7], [3, 8]]);\n    player.board.placeShip([[6, 3], [6, 4], [6, 5]]);\n    player.board.placeShip([[8, 8], [8, 9]]);\n    player.board.placeShip([[9, 5], [9, 6]]);\n    return player;\n  };\n  var activateBoard = function activateBoard(player, opponent) {\n    var board = document.getElementsByClassName('grid')[1];\n    var _loop = function _loop(i) {\n      var _loop2 = function _loop2(j) {\n        var square = board.children[i * 10 + j];\n        square.addEventListener('click', function () {\n          var opponentBoard = opponent.board.values;\n          if (opponentBoard[i][j] == 0) {\n            var newBoard = player.attack(i, j, opponent.board);\n            opponent.setBoard = newBoard;\n            playerTurn(opponent, player);\n          }\n        });\n      };\n      for (var j = 0; j < 10; j++) {\n        _loop2(j);\n      }\n    };\n    for (var i = 0; i < 10; i++) {\n      _loop(i);\n    }\n  };\n  var checkVictoryCondition = function checkVictoryCondition(player) {\n    var modal = document.getElementById('myModal');\n    var msg = document.getElementById('result-message');\n    if (player.board.numberOfShips === 0) {\n      if (player.isAI) msg.textContent = 'You win!';else msg.textContent = 'You lose!';\n    }\n    modal.style.display = 'block';\n  };\n  var playerTurn = function playerTurn(currentPlayer, nextPlayer) {\n    if (currentPlayer.isAI) {\n      loadUI(nextPlayer, currentPlayer);\n      checkVictoryCondition(currentPlayer);\n      var newBoard = currentPlayer.autoAttack(nextPlayer.board);\n      nextPlayer.setBoard = newBoard;\n      playerTurn(nextPlayer, currentPlayer);\n    } else {\n      loadUI(currentPlayer, nextPlayer);\n      checkVictoryCondition(currentPlayer);\n      activateBoard(currentPlayer, nextPlayer);\n    }\n  };\n  var start = function start(p1, p2, load) {\n    loadUI = load;\n    playerTurn(p1, p2);\n  };\n  return {\n    start: start,\n    initPlayer: initPlayer\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _factory_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factory/player */ \"./src/factory/player.js\");\n\n\n\n\nvar p1 = new _factory_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nvar p2 = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initPlayer(true);\n_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].load(p1, p2);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n  box-sizing: border-box;\\n}\\n\\nbody{\\n  margin: 0px;\\n  padding: 0px;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\nheader{\\n  height: 20%;\\n}\\n\\nmain{\\n  height: 60%;\\n}\\n\\nheader, main{\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\nfooter{\\n  display: grid;\\n  height: 20%;\\n}\\n\\n.grid{\\n  display: grid;\\n  grid-template-columns: repeat(10, 1fr);\\n  grid-template-rows: repeat(10, 1fr);\\n  height: 90%;\\n  width: 60%;\\n  justify-self: center;\\n}\\n\\n.grid-square{\\n  border-style: solid;\\n  border-color: rgb(63, 63, 63);\\n}\\n\\n.enemy-board:hover{\\n  background-color: blue;\\n}\\n\\n.score{\\n  display:grid;\\n  justify-self: center;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\nh1{\\n  font-size: 40px;\\n}\\n\\nh2{\\n  font-size: 30px;\\n}\\n\\nfooter{\\n  display: grid;\\n  grid-template-rows: 1fr 3fr;\\n  justify-items: center;\\n}\\n\\n#ship-group{\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n  gap: 30px;\\n  width: 100vw;\\n  justify-items: center;\\n  align-items: center;\\n}\\n\\n.ship-box{\\n  display: grid;\\n  grid-template-rows: repeat(2, 1fr);\\n  height: 100%;\\n  width: 80%;\\n  align-items: center;\\n  justify-items: center;\\n}\\n\\n#ship-structure{\\n  height: 70%;\\n}\\n\\n.carrier{\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: repeat(5, 1fr);\\n}\\n\\n.battleship{\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  width: 80%;\\n}\\n\\n.destroyer, .submarine{\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  width: 60%\\n}\\n\\n.patrol-boat{\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  width: 40%;\\n}\\n.ship{\\n  border-style: solid;\\n  border-color: black;\\n}\\n\\nspan{\\n  font-size: 25px;\\n  font-weight: bold;\\n}\\n\\n.taken{\\n  background-color: blueviolet;\\n}\\n\\n.modal {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgb(0,0,0); /* Fallback color */\\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\\n}\\n\\n/* Modal Content/Box */\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: 15% auto; /* 15% from the top and centered */\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%; /* Could be more or less, depending on screen size */\\n}\\n\\n/* The Close Button */\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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