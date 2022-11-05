const UI = (() => {
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
  const createGrid = (playerBoard) => {
    const boardDimensions = playerBoard.dimensions;
    const x = boardDimensions[0];
    const y = boardDimensions[1];

    const grid = createDiv(null, 'grid');
    for(let i = 0; i < x; i++){
      let row = playerBoard.values[i];
      for(let j = 0; j < y; j++){
        const square = createDiv(null, 'grid-square');
        if(row[j] == 1) square.style.backgroundColor = 'green';
        grid.appendChild(square);
      }
    }

    return grid;
  }
  const makePlayersGrid = (p1, p2) => {
    const p1Grid = createGrid(p1.board);
    const p2Grid = createGrid(p2.board);

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
  const load = (p1, p2) => {
    makeScoreboard(p1, p2);
    makePlayersGrid(p1, p2)
  }

  return {load};
})();

export default UI;