import Square from "../square";

describe('Square functions', () => {
  let square;
  beforeEach(() => {
    square = new Square();
  })
  test('gets hit', () => {
    square.hit();
    expect(square.hasBeenHit).toBe(true);
  })
  test('receives ship', () => {
    square.addShip();
    expect(square.hasShip).toBeTruthy;
  })
});
