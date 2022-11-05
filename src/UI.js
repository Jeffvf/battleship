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

  const createGrid = (boardDimensions = [10, 10]) => {
    const x = boardDimensions[0];
    const y = boardDimensions[1];

    const grid = createDiv(null, 'grid');
    for(let i = 0; i < x * y; i++){
      const square = createDiv(null, 'grid-square');
      grid.appendChild(square);
    }

    return grid;
  }

  const makePlayersGrid = () => {
    const p1 = createGrid();
    const p2 = createGrid();

    main.appendChild(p1);
    main.appendChild(p2);
  }

  return {makePlayersGrid};
})();

export default UI;