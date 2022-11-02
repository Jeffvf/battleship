import Ship from "./ship";

class Square{
  constructor(){
    this.isHit = false;
    this.ship = null;
  }
  hit(){
    this.isHit = true;
  }
  addShip(){
    this.ship = new Ship(1);
  }
  get hasBeenHit(){
    return this.isHit;
  }
  get hasShip(){
    return (!this.ship == null);
  }
}

export default Square