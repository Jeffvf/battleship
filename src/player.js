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
  get board(){
    return this.gameBoard;
  }
  get atkPositions(){
    return this.attackedPositions;
  }
  set refreshBoard(board){
    this.gameBoard = board;
  }
}

export default Player;