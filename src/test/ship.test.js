import Ship from '../factory/ship'

describe('Ship methods', () => {
  let ship, destroyer;
  beforeEach(() => {
    ship = new Ship(1);
    destroyer = new Ship(2);
  });
  test('Is sunk after n hits', () => {
    ship.hit();
    expect(ship.isSunk()).toBeTruthy;
  });
  test('Number of hits increases', () => {
    destroyer.hit();
    expect(destroyer.hits).toBe(1);
  });
});