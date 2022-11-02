class Ship {
  constructor(length){
    this.length = length;
    this.hitsTaken = 0;
    this.sunk = false;
  }

  hit(){
    this.hitsTaken++;

    this.isSunk();
  }

  isSunk(){
    if(this.hitsTaken == this.length){
      this.sunk = true;
      return true;
    }
  }

  get hits(){
    return this.hitsTaken;
  }
}

export default Ship;