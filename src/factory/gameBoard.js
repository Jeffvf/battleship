import Ship from "./ship";

class GameBoard{
  constructor(x=10, y=10){
    const board = [];
    for(let i = 0; i < x; i++){
      const arr = [];
      for(let j = 0; j < y; j++){
        arr.push(0);
      }
      board.push(arr);
    }

    this.xSquares = x;
    this.ySquares = y;
    this.board = board;
    this.ships = [];
    this.shipCoordinates = [];
  }
  placeShip(coordinates){
    let contains = false;
    if(this.shipCoordinates.length > 0){
      for(let i = 0; i < coordinates.length; i++){
        let coord = coordinates[i];
        contains = this.shipCoordinates.filter(shipCoord => {
          return shipCoord.filter(ship => {
              return (coord[0] === ship[0]) && (coord[1] === ship[1])
            }
          ).length != 0;
        }).length !== 0;
        if(contains == true) break;
      }
    }

    if(!contains){
      const ship = new Ship(coordinates.length);
      this.ships.push(ship);
      this.shipCoordinates.push(coordinates);
    }
  }
  receiveAttack(x, y){
    this.board[x][y] = 1;
    for(let i = 0; i < this.shipCoordinates.length; i++){
      let coordinates = this.shipCoordinates[i];
      for(let j = 0; j < coordinates.length; j++){
        if(x == coordinates[j][0] && y == coordinates[j][1]){
          this.ships[i].hit();
          return true;
        }
      }
    }
    return false;
  }
  get numberOfShips(){
    const count = this.ships.filter(ship => !ship.isSunk());
    return count.length;
  }
  get dimensions(){
    return [this.xSquares, this.ySquares];
  }
  get values(){
    return this.board;
  }
}

export default GameBoard;