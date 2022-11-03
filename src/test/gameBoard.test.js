import gameBoard from "../gameBoard";

describe('Game board functions', () => {
  let board;
  beforeAll(() => {
    board = new gameBoard();
  })
  test('Number of ships placed', () => {
    board.placeShip([[0,1], [0,2]]);
    expect(board.numberOfShips).toBe(1);
  });
  test('Insert ship on already occupied coordinates', () => {
    board.placeShip([[0,1], [0,2], [0,3]])
    expect(board.numberOfShips).toBe(1);
  });
  test('Attack misses', () => {
    expect(board.receiveAttack(0, 3)).toStrictEqual(false);
  });
  test('Attack hits ship', () => {
    expect(board.receiveAttack(0, 1)).toStrictEqual(true);
  });
})