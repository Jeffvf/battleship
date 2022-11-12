import GameBoard from "./gameBoard";

class Player{
  constructor(isAI=false){
    this.AI = isAI;
    this.gameBoard = new GameBoard();
    this.attackedPositions = [];
  }
  attack(x, y, enemyBoard){
    enemyBoard.receiveAttack(x, y);
    this.attackedPositions.push([x,y]);

    return enemyBoard;
  }
  autoAttack(enemyBoard){
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    if(this.attackedPositions.length){
      for(let i = 0; i < this.attackedPositions.length; i++){
        let pos = this.attackedPositions[i];
        if(x == pos[0] && y == pos[1]){
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
          i = 0;
        }
      }
    }
    const board = this.attack(x, y, enemyBoard);
    return board;
  }
  placeShip(){
    const board = document.getElementsByClassName('grid')[0];
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        const square = board.children[i * 10 + j];
        if(square.hasAttribute('data')){
          const data = square.getAttribute('data');
          const shipCoords = [];
          for(let k = 0; k < data; k++){
            const shipSquare = board.children[i * 10 + j + k];
            if(!shipSquare.hasAttribute('data'))
              break;
            shipCoords.push([i, j + k]);
          }
          this.board.placeShip(shipCoords);
          j += data;
        }
      }
    }
  }
  get board(){
    return this.gameBoard;
  }
  get atkPositions(){
    return this.attackedPositions;
  }
  set refreshBoard(board){
    this.gameBoard = board;
  }
  get isAI(){
    return this.AI;
  }
}

export default Player;