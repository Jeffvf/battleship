import game from './game';

const UI = (() => {
  let player1 ,player2;
  let countShips = 0;
  let currentShip = null;
  const header = document.getElementsByTagName('header')[0];
  const main = document.getElementsByTagName('main')[0];
  const footer = document.getElementsByTagName('footer')[0];

  const createDiv = (id = null, divClass = null) => {
    const div = document.createElement('div');
    if(id != null) div.id = id;
    if(divClass != null) {
      div.classList.add(divClass);
    }

    return div;
  }
  const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/plain");
    ev.target.setAttribute("data", data);
    if(addShip()){
      currentShip.parentNode.removeChild(currentShip);
    }
  }
  const fillSquares = (i, j, data, board) => {
    for(let k = 0; k < data; k++){
      const nextSquare = board.children[i * 10 + j + k]
      nextSquare.setAttribute('data', data);
      nextSquare.classList.add('taken');
    }
  }
  const isValidSquare = (i, j, board, data) => {
    for(let k = 0; k < data; k++){
      const square = board.children[i * 10 + j + k];
      const squareClasses = [...square.classList];
      if(square.hasAttribute('data') && squareClasses.includes('taken')){
        return false;
      }
    }
    return true;
  }
  const addShip = () => {
    const board = document.getElementsByClassName('grid')[0];

    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        const square = board.children[i * 10 + j];
        let data = parseInt(square.getAttribute('data'));
        if(isValidSquare(i, j, board, data)){
          if(j + data - 1 < 10){
            fillSquares(i, j, data, board);
            countShips++;
            if(countShips == 5){
              player1.placeShip();
              game.start(player1, player2, load);
            }
            return true;
          }
        }
      }
    }
  }
  const allowDrop = (ev) => {
    ev.preventDefault();
  }
  const createGrid = (playerBoard, isEnemy=false) => {
    const boardDimensions = playerBoard.dimensions;
    const x = boardDimensions[0];
    const y = boardDimensions[1];

    const grid = createDiv(null, 'grid');
    for(let i = 0; i < x; i++){
      let row = playerBoard.values[i];
      for(let j = 0; j < y; j++){
        const square = createDiv(null, 'grid-square');
        if(row[j] == 1) square.style.backgroundColor = 'green';
        if(isEnemy) square.classList.add('enemy-board');
        else{
          square.ondragover = allowDrop;
          square.ondrop = drop;
        }
        grid.appendChild(square);
      }
    }

    return grid;
  }
  const makePlayersGrid = (p1, p2) => {
    const p1Grid = createGrid(p1.board);
    const p2Grid = createGrid(p2.board, true);

    main.appendChild(p1Grid);
    main.appendChild(p2Grid);
  }
  const showScore = (shipCount, name) => {
    const scoreboard = createDiv(null, 'score');

    const ships = document.createElement('h1');
    ships.textContent = name;

    const score = document.createElement('h2');
    score.textContent = `Ships: ${shipCount}`;

    scoreboard.appendChild(ships);
    scoreboard.appendChild(score);

    return scoreboard;
  }
  const makeScoreboard = (p1, p2) => {
    const p1Score = showScore(p1.board.numberOfShips, 'Player 1');
    const p2Score = showScore(p2.board.numberOfShips, 'Computer');

    header.appendChild(p1Score);
    header.appendChild(p2Score);
  }
  const drag = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.toElement.childNodes.length);
    currentShip = ev.path[1];
  }
  
  const createShip = (type, size, color) => {
    const shipBox = createDiv(null, 'ship-box');

    const shipName = document.createElement('span');
    shipName.textContent = type;

    const shipShape = createDiv('ship-structure', type.toLowerCase());
    shipShape.draggable = true;
    shipShape.ondragstart = drag;
    shipShape.style.color = color;
    for(let i = 0; i < size; i++){
      const shipSquare = createDiv(null, 'ship');
      shipSquare.style.backgroundColor = color;
      shipShape.appendChild(shipSquare);
    }
    shipBox.appendChild(shipName);
    shipBox.appendChild(shipShape);

    return shipBox;
  }
  const createShipsToDrag = () => {
    const ships = createDiv('ship-group');
    const carrier = createShip('Carrier', 5, 'Red');
    const battleship = createShip('Battleship', 4, 'Blue');
    const destroyer = createShip('Destroyer', 3, 'Yellow');
    const submarine = createShip('Submarine', 3, 'Darkblue');
    const patrolBoat = createShip('Patrol-Boat', 2, 'Purple');

    ships.appendChild(carrier);
    ships.appendChild(battleship);
    ships.appendChild(destroyer);
    ships.appendChild(submarine);
    ships.appendChild(patrolBoat);

    return ships
  }
  const showShipsToDrag = () => {
    const msg = document.createElement('span');
    msg.textContent = 'Drag your ships to the desired position';

    const ships = createShipsToDrag();
    
    footer.appendChild(msg);
    footer.appendChild(ships);
  }
  const resetUI = () => {
    header.innerHTML = '';
    main.innerHTML = '';
    footer.innerHTML = '';
  }
  const load = (p1, p2) => {
    resetUI();
    player1 = p1;
    player2 = p2;
    if(!p1.board.numberOfShips){
      showShipsToDrag();
    }
    makePlayersGrid(p1, p2);
    makeScoreboard(player1, player2);
  }

  return {load};
})();

export default UI;
